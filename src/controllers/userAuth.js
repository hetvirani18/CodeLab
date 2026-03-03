const User = require('../models/user');
const validate = require('../utils/validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis');

const register = async (req, res) => {
    try{
        //validate the data
        validate(req.body);
        
        const {password, emailId} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        req.body.role = "user";   //no one can become admin in this path
        const user = await User.create(req.body);

        const token = jwt.sign({_id: user._id, emailId: emailId, role: 'user'}, process.env.JWT_KEY, {expiresIn: '1h'});
        res.cookie ('token', token, {maxAge: 3600*1000});
        res.status(201).send('User Registor Succesfully');
    }
    catch(err){
        res.status(400).send("Error: "+ err.message);
    }
}

const login = async (req, res) => {
    try{
        const {emailId, password} = req.body;

        if(!emailId || !password) throw new Error("Invalid Credentials");

        const user = await User.findOne({emailId});
        //if user with email dont exists
        if (!user)  throw new Error("Invalid Credentials");

        
        const match = await bcrypt.compare(password, user.password);

        if(!match) throw new Error("Invalid Credentials");

        const token = jwt.sign({_id: user._id, emailId: emailId, role: user.role}, process.env.JWT_KEY, {expiresIn: '1h'});
        res.cookie ('token', token, {maxAge: 3600*1000});

        res.status(200).send("Login Successful");
        
    }
    catch(err){
        res.status(401).send("Error: "+ err.message);
    }
}
 
const logout = async (req, res) => {
    try{
        //add token to redis blocklist with expiredate
        const {token} = req.cookies;
        const payload = jwt.decode(token);

        await redisClient.set(`token:${token}`, "blocked");
        await redisClient.expireAt(`token:${token}`, payload.exp);
        
        //clear cookie
        res.cookie('token', null, {expires: new Date(0)});

        res.send("Logged Out Successfully");
    }
    catch(err){
        res.status(503).send("Error: "+ err.message);
    }
}

const adminRegistor = async (req, res) => {
    try{
        //validate the data
        validate(req.body);
        
        const {password, emailId} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        req.body.role = "admin";
        const user = await User.create(req.body);

        res.status(201).send('User Registor Succesfully');
    }
    catch(err){
        res.status(400).send("Error: "+ err.message);
    }
}

const getProfile = async (req, res) => {
    res.status(200).send(req.result);
}


module.exports = {register, login, logout, getProfile, adminRegistor};

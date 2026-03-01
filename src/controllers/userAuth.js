const User = require('../models/user');
const validate = require('../utils/validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try{
        //validate the data
        validate(req.body);
        
        const {password, emailId} = req.body;
        req.body.password = await bcrypt.hash(password, 10);

        const user = await User.create(req.body);

        const token = jwt.sign({_id: user._id, emailId:emailId}, process.env.JWT_KEY, {expiresIn: '1h'});
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

        const token = jwt.sign({_id: user._id, emailId:emailId}, process.env.JWT_KEY, {expiresIn: '1h'});
        res.cookie ('token', token, {maxAge: 3600*1000});

        res.status(200).send("Login Successful");
        
    }
    catch(err){
        res.status(401).send("Error: "+ err.message);
    }
}
 
const logout = async (req, body) => {
    try{

    }
    catch(err){
        res.status(401).send("Error: "+ err.message);
    }
}

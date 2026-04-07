const jwt = require('jsonwebtoken');
const User = require('../models/user');
const redisClient = require('../config/redis');

const userAuthMiddleware = async (req, res, next) => {
    try{
        const {token} = req.cookies;
        if(!token) throw new Error("Token is not valid");

        const payload = jwt.verify(token, process.env.JWT_KEY);

        const {_id} = payload;

        if(!_id) throw new Error("Token is not valid");

        //check if present in redis blocklist
        const isBlocked = await redisClient.exists(`token:${token}`); //check if token is in blocked list
        if(isBlocked) throw new Error("Token is not valid");

        const result = await User.findById(_id);
        if(!result) throw new Error("user doesn't exists");


        req.result = result;
        next();
    }
    catch(err){
        res.status(401).send("Error: "+err.message);
    }
}

module.exports = userAuthMiddleware;
const redisClient = require('../config/redis');
const crypto = require('crypto');

const windowSize = process.env.WINDOW_SIZE || 60*60; //default 1 hour in seconds
const maxRequests = process.env.MAX_REQUESTS || 100; //default 100 requests per hour
const maxRunRequests = process.env.MAX_RUN_REQUESTS || 50; //default 50 run requests per hour
const delayRunTime = process.env.DELAY_RUN_TIME || 10; //default 10 seconds
const delaySubmitTime = process.env.SUBMIT_RUN_TIME || 10; //default 10 seconds
const maxSubmitRequests = process.env.MAX_SUBMIT_REQUESTS || 50; //default 50 submit requests per hour

const rateLimiter = async (req, res, next) => {
    try{
        const key = `IP:${req.ip}`;
        // redisClient.del(ip); //for testing
        
        const currentTime = Date.now()/1000;
        const windowTime = currentTime-windowSize; //before this time othe values are expired
        

        //here z means orderd set
        await redisClient.zRemRangeByScore(key, 0, windowTime); // this remove all the scores from 0 to windowTime

        const numberOfRequest = await redisClient.zCard(key); //total number of requests if key is not exists then it will return 0
        console.log(numberOfRequest);

        if(numberOfRequest>=maxRequests) return res.status(429).send("Too many requests. Try again in an hour.");

        // Use crypto for a guaranteed unique member value
        const uniqueValue = `${currentTime}:${crypto.randomUUID()}`;

        await redisClient.zAdd(key, [{score: currentTime, value: uniqueValue }]); //use crpyto library insted of math.random()
        
        //key TTL increase
        await redisClient.expire(key, windowSize);

        next();

    }
    catch(err){
        res.status(500).send("Error: "+err);
    }
}

const runRateLimiter = async (req, res, next) => {
    try{
        const key = `RUN:${req.ip}`;
        
        const data = await redisClient.get(key);
        if(!data){
            await redisClient.set(key, `1:${Date.now()/1000}`, { EX: windowSize });
        }
        else{
            const [count, lastTime] = data.split(":").map(Number);
            console.log(count);

            if(Date.now()/1000 - lastTime <delayRunTime) return res.status(429).send("Wait a little bit before making another request.");
            if(count>=maxRunRequests)  return res.status(429).send("Too many requests. Try again in an hour.");

            await redisClient.set(key, `${count+1}:${Date.now()/1000}`, { EX: windowSize });
        }
        next();
    }
    catch(err){
        res.status(500).send("Error: "+err);
    }
}

const submitRateLimiter = async (req, res, next) => {
    try{
        const key = `SUBMIT:${req.ip}`;
        
        const data = await redisClient.get(key);
        if(!data){
            await redisClient.set(key, `1:${Date.now()/1000}`, { EX: windowSize });
        }
        else{
            const [count, lastTime] = data.split(":").map(Number);
            console.log(count);

            if(Date.now()/1000 - lastTime <delaySubmitTime)  return res.status(429).send("Wait a little bit before making another request.");
            if(count>=maxSubmitRequests)  return res.status(429).send("Too many requests. Try again in an hour.");

            await redisClient.set(key, `${count+1}:${Date.now()/1000}`, { EX: windowSize });
        }
        next();
    }
    catch(err){
        res.status(500).send("Error: "+err);
    }
}


module.exports = { rateLimiter, runRateLimiter, submitRateLimiter };
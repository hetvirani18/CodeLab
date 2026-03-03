const express = require('express');
require('dotenv/config')
const app = express();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/userAuth');
const redisClient = require('./config/redis');

app.use(express.json());
app.use(cookieParser());

app.use('/user', authRouter);


const initializeConnection = async () => {
    try{
        await Promise.all([main(), redisClient.connect()]);
        console.log("Database connected");
        app.listen(process.env.PORT, ()=>{
            console.log("listening at port: " +process.env.PORT);
        })
    }
    catch(err){
        console.log("Error Occured: "+err)
    }
}

initializeConnection();
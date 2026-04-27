const express = require('express');
require('dotenv/config')
const app = express();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const redisClient = require('./config/redis');
const problemRouter = require('./routes/problemRouter');
const submitRouter = require('./routes/submitRouter');
const aiRouter = require('./routes/aiRouter');
const videoRouter = require('./routes/videoRouter');
const {rateLimiter} = require('./middleware/rateLimiter');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}))

app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter); // Apply the rate limiter middleware globally

app.use('/user', authRouter);
app.use('/problem', problemRouter);
app.use('/submission', submitRouter);
app.use('/ai', aiRouter);
app.use('/video', videoRouter);

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
const express = require('express');
require('dotenv/config')
const app = express();
const main = require('./config/db');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

main()
.then(async ()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("listening at port: " +process.env.PORT);
    })
})
.catch(err => console.log("Error Occured: "+err));

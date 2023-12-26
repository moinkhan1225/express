let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

const path = __dirname + '/views/index.html';
const absolutePath = __dirname + "/public";

//const messageStyle = process.env.MESSAGE_STYLE;


app.get('/',(req,res)=>{
res.sendFile(path);
})

app.use('/public',express.static(absolutePath));

app.use(function(req,res,next){
const log = `${req.method}${req.path} - ${req.ip}`
console.log(log);
next();
})
app.get('/json',(req,res)=>{
    const jsonMsg ={
        message:"Hello json"
    }

    process.env.MESSAGE_STYLE === 'uppercase'?jsonMsg.message=jsonMsg.message.toUpperCase():""
        res.json(jsonMsg)
    
})




























 module.exports = app;

let express = require('express');
let app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

console.log("Hello World");

const path = __dirname + '/views/index.html';
const absolutePath = __dirname + "/public";

//const messageStyle = process.env.MESSAGE_STYLE;


app.get('/',(req,res)=>{
res.sendFile(path);
})

app.use('/public',express.static(absolutePath));

app.use(function(req,res,next){
const log = `${req.method} ${req.path} - ${req.ip}`;
console.log(log);
next();
})

//Fetching Current Time
function getCurrTime(){
    let currentTime=new Date().toString();
    return currentTime;
}
app.get('/now',((req,res,next)=>{
    req.time = getCurrTime();
    next();
}), ((req,res)=>{
res.send({
    time:req.time
})
}));

app.get('/:word/echo',((req,res)=>{
    let {word} = req.params;
    res.json({
    echo:word
    })
}))

app.get('/name',((req,res)=>{
    let {first:firstName,last:lastName} = req.query;
    res.json({
        name:`${firstName} ${lastName}`
    })
}))

app.use(
    bodyParser.urlencoded({extended:false})
);

//Get Data from POST Requests
app.post('/name',((req,res)=>{
let {first:firstName,last:lastName}=req.body;
res.json({
    name:`${firstName} ${lastName}`
})
}))

app.get('/json',(req,res)=>{
    const jsonMsg ={
        message:"Hello json"
    }

    process.env.MESSAGE_STYLE === 'uppercase'?jsonMsg.message=jsonMsg.message.toUpperCase():""
        res.json(jsonMsg)
    
})




























 module.exports = app;

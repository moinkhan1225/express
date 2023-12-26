let express = require('express');
let app = express();
console.log("Hello World");

const path = __dirname + '/views/index.html';
const absolutePath = __dirname + "/public";

const messageStyle = process.env.MESSAGE_STYLE;

app.get('/',(req,res)=>{
res.sendFile(path);
})

app.use('/public',express.static(absolutePath));

app.get('/json',(req,res)=>{
    if(messageStyle === 'uppercase'){
        res.json({
            "message":"Hello json".toUpperCase();
        })
    }else{
        res.json({
            "message":"Hello json"
        })
    }
    
})


































 module.exports = app;

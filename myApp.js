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

/*app.get('/json',(req,res)=>{
    const jsonMsg ={
        message:"Hello json"
    }

    process.env.MESSAGE_STYLE === 'uppercase'?jsonMsg.message=jsonMsg.message.toUpperCase():""
        res.json(jsonMsg)
    
})*/
app.get("/json", function (req, res) {
    let data = { message: "Hello json" };
    process.env.MESSAGE_STYLE === "uppercase"
      ? (data.message = data.message.toUpperCase())
      : "";
    res.json(data);
  });



























 module.exports = app;

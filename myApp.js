let express = require('express');
let app = express();
console.log("Hello World");

const path = __dirname + '/views/index.html';
const absolutePath = __dirname + "/public";

app.get('/',(req,res)=>{
res.sendFile(path);
})

app.use(absolutePath,express.static(absolutePath))


































 module.exports = app;

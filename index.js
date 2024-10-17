//console.log("It's Work in nodemon...");

const express = require('express');
const { mwfn1 } = require('./middleWareFun/myMiddlewarefun1.js');
const appObj = express();


require('dotenv').config()
console.log(process.env.PORT) // remove this after you've confirmed it is working


appObj.get('/', function (req, res) {
  res.send('Hello World');
})

// let mwfn1 = (req, res, next)=>{
//     next();
// };

appObj.get('/empDetailt', mwfn1, (req, res)=> {
      
    //const fullDatafromMiddlefn = req.query.fullData; // Extract fullData from query params
    console.log(req.query);

    res.json({
        "message": `Hello Friends... I'm ${req.query.fullData}`
    });
  })

let PORT = process.env.PORT;

appObj.listen(PORT, ()=>{
    console.log(`The server is running on the port ${PORT}`);
});
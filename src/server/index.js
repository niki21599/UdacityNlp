var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static('dist'))

var aylien = require('aylien_textapi');
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });


console.log(__dirname)

let url = ""

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile("dist/index.html")
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/text", (req, res) =>{
  
  url = req.body.text
  console.log(url);
  
  

})


app.get("/analyseText", (req, res) =>{
  textapi.sentiment({
    url: url
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send(response)
    }else{
      console.log("error");
      
    }
  });
  
})


// let x =  textapi.classify({
//   text: text
// }, function(error, response) {
//   if (error === null) {
//     response['categories'].forEach(function(c) {
      
//       res.status(200).send(c);
      
//     });
//   }else{
//       console.log(error);
//       res.send({
//           label: "Invalid Input"
//       });
//   }
// });
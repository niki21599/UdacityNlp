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



let text = ""

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
   
   text = req.body.text
   console.log(text);
})

app.get("/analyseText", (req, res)=> {
     
    let x = textapi.classify({
        text: text
      }, function(error, response) {
        if (error === null) {
          response['categories'].forEach(function(c) {
            
            res.send(c)
            
          });
        }
      });
      
      
      
      
})

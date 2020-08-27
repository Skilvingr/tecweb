const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const saver = require("./create/saver.js");
const fs = require("fs");

//enables to use BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//parsing the information that comes from the web browser
app.use(express.json());

//startic web server
app.use(express.static(path.join(__dirname, "./")));

//folders
app.use("/create", express.static(__dirname + "/create"));
app.use("/stories", express.static(__dirname + "/stories"));
app.use("/img", express.static(__dirname + "/img"));

//every time the user visits any URL address then the file index.html will desplay to the web browser
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.post("*", function(req,res){
    console.log(req.body); 
    
    saver.gianni(req.body, "prova");
   

    res.send('<p>some html</p>');
    //res.send("porcamadonna");
    res.status(200).end();
    //return res.end();
});

app.listen(8000, () => {
  console.log("Listening at localhost:8000");
});

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const saver = require("./create/saver.js");
const multer = require("multer");
var fs = require('fs'); 
const { response, text } = require("express");


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


//multer path
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

//multer
var upload = multer({storage : storage});

app.get("/create",function(req,res){
 // const id = req.query.id;
  //response.sendFile(path.join(__dirname), "ciao.txt");
 //console.log("Ciao"+id);
});

app.post("/create/story", function(req,res){
    console.log(req.body);

    fs.mkdir("json/"+req.body.title+"/", (err) => {
      if (err) {
          throw err;
      }
      console.log("Directory is created.");
  });

    saver.write(req.body);


    res.send('<p>Caricata</p>');
    //res.send("porcamadonna");
    res.status(200).end();
});

//image

app.post(
  "/create",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
   console.log("pippo");
   console.log(req.file.filename);
    res.status(200).end();
  });

app.listen(8000, () => {
  console.log("Listening at localhost:8000");
});

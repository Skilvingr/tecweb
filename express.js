var http = require('http');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const saver = require("./create/saver.js");
const multer = require("multer");
var fs = require('fs');
const { response, text } = require("express");
const {exec, execSync} = require ("child_process");
var cors = require('cors');

const options = {};


app.use(cors());

//abilita l'uso di BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//parsing the information that comes from the web browser
app.use(express.json());



//folders
app.use("/create", express.static(__dirname + "/create"));
app.use("/stories", express.static(__dirname + "/stories"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/create/passport", express.static(__dirname + "/create/passport"));
app.use("/accessability", express.static(__dirname + "/accessability"));
app.use("/create/customCss", express.static(__dirname + "/create/customCss"));

//startic web server
app.use(express.static(path.join(__dirname, "/")));


//recupera la storia nella cartella json
app.get("/getStory", (req, res) => {
  var story = "json/" + req.query.story + "/";
  var data = story + req.query.level + ".json";

  res.header("Content-Type","application/json");

  res.sendFile(path.join(__dirname, data));
});
//recupera la storia nelal cartella json e la rende giocabile
app.get("/playableStory", (req, res) => {
  var story = "json/" + req.query.story + "/";
  var data = story + req.query.level + ".json";
  //esegue tre comandi uno rimuome la storia se precedentemente creata il secondo la crea e il terzo copia
  //la storia da json in completeJson
 // execSync(("rm -rf webapp/completeJson/" + req.query.story));
  execSync(("mkdir -p webapp/completeJson/" + req.query.story));
  execSync(("cp webapp/" + data + " " + "webapp/completeJson/" + req.query.story + "/" + req.query.story + "-" + req.query.level + ".json" ));


  res.header("Content-Type","application/json");

});

//rimuove la storia giocabile sul player
app.get("/removeStory", (req, res) => {

  execSync(("rm webapp/completeJson/" + req.query.story +"/" + req.query.level + ".json"));
  res.header("Content-Type","application/json");

});
//recupera le storie giocabili restituendo l'exec del comando ls
app.get("/getStoriesComplete", (req,res)=>{
  exec("ls webapp/completeJson/", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});

//recupera le storie create nella cartella json restituendo l'exec del comando ls
app.get("/getStories", (req, res) => {
  exec("ls webapp/json/", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});
//Recupera i livelli delle storie nelle cartell json o completeJson
app.get("/getAvailableLevels", (req, res) => {

  var toExec = "";

  if(req.query.dir == "json")
  toExec = "ls webapp/json/" + req.query.story
  else
  toExec = "ls webapp/completeJson/" + req.query.story

  exec(toExec, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});

//Esegue il comando passato attraverso l'url
app.get("/getOut", (req, res) => {
  exec(req.query.com , (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});

//recupera il Css corrispondente
app.get("/getCss", (req, res) => {
  exec(req.query.com , (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});
//recupera le storie accessibili e le restituisce
app.get("/getStoriesForAccessabilityToRemove", (req, res) => {
  exec("ls webapp/accessability/eyes/", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    res.send(stdout);
  });
});
//rimuove la storia accessibile corrispondente
app.get("/removeStoryForAccessability", (req, res) => {

  execSync(("rm webapp/accessability/eyes/" + req.query.story + ""));
  res.header("Content-Type","application/json");
});


//multer path
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'webapp/imgCreate')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

//setta il percorso per multer che permette l'uplaod delle foto
var upload = multer({storage : storage});

//Carica sul server la storia corrispondente
app.post("/create/story", function(req,res){
  //execSync(("rm -rf webapp/json/" + req.body.storyInfo.title+" 2&>/dev/null"));
  execSync(("mkdir -p webapp/json/" + req.body.storyInfo.title));
  //esegue la write nel saver per memorizzare il json con le informazioni
  //della storia
  var returned = saver.write(req.body);

  if(returned === "saved")
  res.send('Caricata');
  else
  res.send(returned);
});

//Carica l'immagine nel path corrispondente
app.post(
  "/create",
  upload.single("file"),
  (req, res) => {
    console.log(req.file.filename);
    res.status(200).end();
  });
  //Carica il css corrispondente
  app.post("/create/uploadCss", function(req,res){

    var returned = saver.writeCss(req.body);

    if(returned === "saved")
    res.send('Caricata');
    else
    res.send(returned);
  });
  //carica la storia accessibile
  app.post("/create/accessabilityStory", function(req,res){

    var returned = saver.writeAccessability(req.body);

    if(returned === "saved")
    res.send('Caricata');
    else
    res.send(returned);
  });

  var httpServer = http.createServer(app);
  httpServer.listen(8000, () => console.log("Running…"));

  /*  PASSPORT SETUP si era creato un sistema di logIn e signUp per gli utenti tuttavia è
  stato disabilitato per mancanza di alcune features. La struttura, tuttavia, di signUp e logIn rimane 
  comunque funzionante se la si vuole testare*/
/*
  //Usata per criptare le password
  let crypto = require('crypto');

  const User = require('./create/passport/findUser.js');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    console.log("user id:"+user);
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //strategy passport
  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log("username è:"+username);
      var user=User.findUser(username);

      if(user==null){
        return done(null,false);
      }else
      console.log("trovato: "+user);
      var saltUser=User.findSalt(user);
      console.log("salt = "+saltUser);
      var pass = User.hash(password,saltUser);
      var controlPass=User.findPassword(user,pass);
      if(controlPass==true){
        return done(null,user);
      }else
      return done(null,false);
    }
  ));

  /LogIn
  app.post('/login',
  passport.authenticate('local', { failureRedirect: 'http://site192020.tw.cs.unibo.it:8000/' }),
  function(req, res) {

    res.redirect('http://site192020.tw.cs.unibo.it:8000/create');
  });
*/
/* Handle Registration POST */
/*
  app.post('/signup', function(req,res) {
    console.log(req.body.password);
    console.log(req.body.email);
    var rounds = 12;
    var salt = crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds);
    var hashPass = User.hash(req.body.password,salt);
    var control=User.controlUser(req.body.email);
    if(control==true){

      User.registerUser(req.body.email,hashPass,salt);
      res.send("Creato");
      res.status(200).end();
    }else
    res.send("Esistente");

  });
*/
  /*mostra la finestra di login*/
/*
  app.get("/loginWindow", (req, res) => {
    var window = "create/passport/loginWindow.html";

    res.redirect("create/passport/");
  });
*/
  /* END PASSPORT */

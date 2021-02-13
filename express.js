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

/*  PASSPORT SETUP  */


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
	/*function (err, user) {
	    if (err) { return done(err); }
	    if (!user) { return done(null, false); }
	    if (!user.verifyPassword(password)) { return done(null, false); }
	    return done(null, user);
	    });*/
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


app.use(cors());

//enables to use BodyParser
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
//app.use("/home", express.static(__dirname));
app.use(express.static(path.join(__dirname, "/")));

//LogIn
app.post('/login',
	 passport.authenticate('local', { failureRedirect: 'http://site192020.tw.cs.unibo.it/' }),
	 function(req, res) {
	     // res.sendFile(path.join(__dirname, "/create"));
	     res.redirect('http://site192020.tw.cs.unibo.it/create');
	 });

/* Handle Registration POST */
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

/*
app.post("create/passport/addUser", function(req,res){
    execSync(("rm webapp/create/passport/credentials.json"));

	var returned = saver.addUser(req.body);

    if(returned === "saved")
	res.send('Caricata');
    else
	res.send(returned);
});
*/


app.get("/olimpiadi", (request, response) => {
    response.sendFile(path.join(__dirname, "paginaVuota1.html"));
});
app.get("/TheScientist", (request, response) => {
    response.sendFile(path.join(__dirname, "paginaVuota2.html"));
});
app.get("/EscapeRoom", (request, response) => {
    response.sendFile(path.join(__dirname, "paginaVuota3.html"));
});

//every time the user visits any URL address then the file index.html will desplay to the web browser
app.get("/getStory", (req, res) => {
    var story = "json/" + req.query.story + "/";
    var data = story + req.query.level + ".json";

    res.header("Content-Type","application/json");

    res.sendFile(path.join(__dirname, data));
});

app.get("/playableStory", (req, res) => {
    var story = "json/" + req.query.story + "/";
    var data = story + req.query.level + ".json";

    execSync(("rm -rf webapp/completeJson/" + req.query.story));
    execSync(("mkdir webapp/completeJson/" + req.query.story));
    execSync(("cp webapp/" + data + " " + "webapp/completeJson/" + req.query.story + "/" + req.query.story + "-" + req.query.level + ".json" ));

    //saver.playable(req.query.story,req.query.level);
    res.header("Content-Type","application/json");

    //res.sendFile(path.join(__dirname, data));
});

app.get("/removeStory", (req, res) => {

    execSync(("rm webapp/completeJson/" + req.query.story +"/" + req.query.level + ".json"));


    //saver.playable(req.query.story,req.query.level);
    res.header("Content-Type","application/json");

    //res.sendFile(path.join(__dirname, data));
});

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

//getCss

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

/*mostra la finestra di login*/

app.get("/loginWindow", (req, res) => {
    var window = "create/passport/loginWindow.html";

    res.redirect("create/passport/");
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

//multer
var upload = multer({storage : storage});

app.post("/create/story", function(req,res){
    execSync(("rm -rf webapp/json/" + req.body.storyInfo.title+" 2&>/dev/null"));
    execSync(("mkdir webapp/json/" + req.body.storyInfo.title));

	var returned = saver.write(req.body);

    if(returned === "saved")
	res.send('Caricata');
    else
	res.send(returned);
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

    app.post("/create/uploadCss", function(req,res){
        //execSync(("mkdir webapp/create/customCss/createdCss" + req.body.storyInfo.title));

    	var returned = saver.writeCss(req.body);

        if(returned === "saved")
    	res.send('Caricata');
        else
    	res.send(returned);
    });



/* app.listen(8000, () => {
console.log("running...");
}); */

var httpServer = http.createServer(app);
httpServer.listen(8000, () => console.log("Running…"));

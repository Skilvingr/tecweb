const { json } = require("express");
const fs = require("fs");
let crypto = require('crypto');
const {exec, execSync} = require ("child_process");

function findUser(username){
    console.log("user is : "+username);
    let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
    let data = JSON.parse(rawdata);
    console.log(data);
    
    for(var x in data){
	console.log("x is: "+x);
	 if(x == username){
	     console.log("find");
	     return username;
	 }
     }
    return null;
}

function hash(password,salt){
    let hash = crypto.createHmac('sha512', salt);
    let value = hash.digest('hex');
	return value;
    
}

function registerUser(username,password,salt){
    let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
    let data = JSON.parse(rawdata);
    data[username]={};
    data[username].password=password;
    data[username].salt=salt;
    execSync(("rm webapp/create/passport/credentials.json"));
        var dataObj = JSON.stringify(data,null,2);
    fs.writeFile(("./webapp/create/passport/credentials.json"),dataObj,function(err){
	if(err){
	    console.log(err);
	    return(err);
	}else{
	    console.log("new User Added");
	    return "saved";
	}
	
    });

    console.log(data);
    
}

function controlUser(email){
    let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
    let data = JSON.parse(rawdata);

    for(var x in data){
	if(x==email)
	    return false;
    }
    return true;
 
}

function findPassword(username,pass){
    
    let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
    let data = JSON.parse(rawdata);
    
    for(var x in data){
	
	 if(x == username){
	     console.log("find");
	     console.log("pass "+pass);
	     if(data[x].password==pass){
		 console.log("password trovata");
		 return true;
	     }
	 }
     }
    return null;
}

function findSalt(username){
    
    let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
    let data = JSON.parse(rawdata);
    
    for(var x in data){
	console.log("x in salt = "+x);
	
	if(x==username){
	    console.log("data= "+data[x]);
	    console.log("salt in data= "+data[x].salt);
	    return data[x].salt;
	}
    }
    return null;
    
}

module.exports={findUser,hash,registerUser,controlUser,findPassword,findSalt};

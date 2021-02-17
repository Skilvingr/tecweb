const { json } = require("express");
const fs = require("fs");
let crypto = require('crypto');
const {exec, execSync} = require ("child_process");
//Trova l'user nelle credenziali di accesso
function findUser(username){
  let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
  let data = JSON.parse(rawdata);

  for(var x in data){

    if(x == username){
      console.log("find");
      return username;
    }
  }
  return null;
}
//esegue l'hash della password
function hash(password,salt){
  let hash = crypto.createHmac('sha512', salt);
  let value = hash.digest('hex');
  return value;

}
//salva l'utente nel file json usato per le credenziali di accesso
function registerUser(username,password,salt){
  let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
  let data = JSON.parse(rawdata);
  //salva la password nel oggetto
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

}
//Controlla se l'utente è presente
function controlUser(email){
  let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
  let data = JSON.parse(rawdata);

  for(var x in data){
    if(x==email)
    return false;
  }
  return true;

}
//trovato l'usurname controlla la password
function findPassword(username,pass){

  let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
  let data = JSON.parse(rawdata);

  for(var x in data){

    if(x == username){
      if(data[x].password==pass){
        console.log("password trovata");
        return true;
      }
    }
  }
  return null;
}

//recupera il salt per la password
function findSalt(username){

  let rawdata = fs.readFileSync('./webapp/create/passport/credentials.json');
  let data = JSON.parse(rawdata);

  for(var x in data){
    console.log("x in salt = "+x);

    if(x==username){
      console.log("data= "+data[x]);

      return data[x].salt;
    }
  }
  return null;

}

module.exports={findUser,hash,registerUser,controlUser,findPassword,findSalt};

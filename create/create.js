function logz() {
  console.log("creazione in corso");
}

function start() {
    document.getElementById("start").innerHTML = "";
    document.getElementById("title").innerHTML = "";
    createPage(0);
}

function createPage(page) {
    pushTextInput();
}

function pushTextInput() {
    var textContainer = document.getElementById("textContainer");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    
    var button = document.createElement("button");
    button.textContent = "Salva";
    button.setAttribute("onClick", "save()");
    
    textContainer.appendChild(input);
    textContainer.appendChild(button);
}

function save() {
    'use strict';

    const fs = require('fs');

    let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
 
    let data = JSON.stringify(student);
    fs.writeFileSync("prova.json", data);
}




function agePicker() { //da variare
  var sel = document.getElementById("eta");
  var strUser = sel.options[sel.selectedIndex].value;
  console.log(strUser);
  $("#nazi").removeClass("hidden");
  $("#leonardo").removeClass("hidden");
  $("#mummia").removeClass("hidden");
  $("#etaContainer").removeClass("hidden").addClass("hidden");
    
  if (strUser === "1") {
      eta = 1;
      console.log("hai scelto la difficoltà facile");
    } else if (strUser === "2") {
        eta = 2;
        console.log("hai scelto la difficoltà media");
    } else if (strUser === "3") {
        eta = 3;
        console.log("hai scelto la difficoltà difficile");
    }
}

function play(name){
    $("#game").removeClass("hidden");
    $("#chooseGame").removeClass("hidden").addClass("hidden");
    $("#nazi").removeClass("hidden").addClass("hidden");
    $("#leonardo").removeClass("hidden").addClass("hidden");
    $("#mummia").removeClass("hidden").addClass("hidden");
    
    fetchData(name, 0);
}

function fetchData(name, page) {
    if (eta === 1) {
        fetch("json/" + name + "/easy.json")
        .then(function(response) {
            //get JSON data from the response
            console.log("dati letti");
            return response.json();
            
            //In the second then function we get the actual JSON data as a parameter.
        })
        //This is where we create the code which will append the data to our page.
        .then(function (data) {
            //pulisco i div per fare spazio alle nuove info
            document.getElementById("myData").innerHTML = "";
            document.getElementById("picture").innerHTML = "";
            document.getElementById("pulsante").innerHTML = "";
            document.getElementById("indizi").innerHTML = "";
            document.getElementById("oggetti").innerHTML = "";
            //popolo i div con le nuove info
            
            pushData(data, page)
            //pushPicutres(data, page);
            pushButtons(data, page);
            //pushHint(data, page);
            //pushStuff(data, page);
        })
        .catch(function (err) {
            console.log(err);
        });
    } else if (eta === 2) {
        fetch("json/${name}/medium.json")
    } else if (eta === 3) {
        fetch("json/${name}/hard.json")
    }
}

function pushData(data, page) {
  var mainContainer = document.getElementById("myData"); //preleva il container
  
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[page].testo;
  
  console.log(istruzioni);
  console.log("----");
}

function pushPicutres(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function pushButtons(data, page) {
  var pulsContainer = document.getElementById("pulsante");

  var urlvalue = null;
  var stripped = null;
  var puls = null;
  
  for(var buttons = 0; buttons < data[page].buttons.length; buttons++) {
          urlvalue = JSON.stringify(data[page].buttons[buttons].fun);
          stripped = urlvalue.replace(/["]+/g, "");
          puls = document.createElement("button");
          puls.setAttribute("onclick", stripped);
          pulsContainer.appendChild(puls);
          puls.innerHTML = data[page].buttons[buttons].text;

      }

  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);
}

function pushHint(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina1.indizi.indizio1 +
      " <br> " +
      data[i].pagina1.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function pushStuff(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

////////////////////////////// ALTRE FUNZIONI GLOBALI////////////////////////////

function hid() {
  $("#hidButton").removeClass("hidden").addClass("hidden");
  console.log("scompare");
}
function show() {
  $("#hidButton").removeClass("hidden");
  console.log("riappare");
}

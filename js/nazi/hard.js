//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function nazilog() {
  console.log("gioco nazi");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataNaziPage2() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina2 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage2(data);
      appendPictureNaziPage2(data);
      appendPulsanteNaziPage2(data);
      appendIndizioNaziPage2(data);
      appendOggettiNaziPage2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina2.pulsanteFunc4);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina2.pulsanteName2;
    puls3.innerHTML = data[i].pagina2.pulsanteName3;
    puls4.innerHTML = data[i].pagina2.pulsanteName4;
  }

  // console.log(puls);
  //console.log(urlvalue);
  //console.log(stripped);
  // console.log(pulsContainer);
}

function appendIndizioNaziPage2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina2.indizi.indizio1 +
      " <br> " +
      data[i].pagina2.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaSottoLettoDiff() {
  alert(
    "trovi una chiave e un foglio di carta con un numero '88', puoi andare avanti"
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca sotto il letto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina2.pulsanteName;
    }
  }
}

function cercaArmadio() {
  alert("non trovi nulla");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataNaziPage3() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage3(data);
      appendPictureNaziPage3(data);
      appendPulsanteNaziPage3(data);
      appendIndizioNaziPage3(data);
      appendOggettiNaziPage3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina3.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina3.pulsanteName2;
    puls3.innerHTML = data[i].pagina3.pulsanteName3;
  }
}

function appendIndizioNaziPage3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina3.indizi.indizio1 +
      " <br> " +
      data[i].pagina3.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un modal con dei tasti
function lockerRoom() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti lockerRoom");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseArmadietto(data);
      openDialog();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialog() {
    $("#dialog").dialog();
  }

  function chooseArmadietto(data) {
    var pulsContainer = document.getElementById("dialog");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina3.pulsanteFunc4);
      var urlvalue5 = JSON.stringify(data[i].pagina3.pulsanteFunc5);
      var urlvalue6 = JSON.stringify(data[i].pagina3.pulsanteFunc6);

      var stripped = urlvalue.replace(/['"]+/g, "");
      var stripped5 = urlvalue5.replace(/['"]+/g, "");
      var stripped6 = urlvalue6.replace(/['"]+/g, "");

      var puls = document.createElement("button");
      var puls5 = document.createElement("button");
      var puls6 = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls5.setAttribute("onclick", stripped5);
      puls6.setAttribute("onclick", stripped6);
      dialog.setAttribute("title", "SCEGLI UN ARMADIETTO");
      // puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);
      pulsContainer.appendChild(puls5);
      pulsContainer.appendChild(puls6);

      puls.innerHTML = data[i].pagina3.pulsanteName4;
      puls5.innerHTML = data[i].pagina3.pulsanteName5;
      puls6.innerHTML = data[i].pagina3.pulsanteName6;
    }
  }
}

function ottantotto() {
  alert(
    "Hai aperto l'armadietto. Hai trovato un foglietto di carta con scritto: '2 Agosto 1934 - 30 Aprile 1945' e accanto un ciondolo con un numero 5"
  );
  $("#dialog").dialog("close");
  lockerRoomOK();
  document.getElementById("dialog").innerHTML = "";
}

function lockerRoomOK() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Locker Room  OK");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina3.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina2.pulsanteName;
    }
  }
}

function armadiettoNO() {
  alert("La chiave non entra nella serratura");
}

//////////////////////PAGE4///////////////////////////////////
function fetchDataNaziPage4() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 4 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage4(data);
      appendPictureNaziPage4(data);
      appendPulsanteNaziPage4(data);
      appendIndizioNaziPage4(data);
      appendOggettiNaziPage4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage4(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina4.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina2.pulsanteName2;
    puls.innerHTML = data[i].pagina2.pulsanteName;
  }
}

function appendIndizioNaziPage4(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina4.indizi.indizio1 +
      " <br> " +
      data[i].pagina4.indizi.indizio2 +
      " <br> " +
      data[i].pagina4.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE5///////////////////////////////////
function fetchDataNaziPage5() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 5 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage5(data);
      appendPictureNaziPage5(data);
      appendPulsanteNaziPage5(data);
      appendIndizioNaziPage5(data);
      appendOggettiNaziPage5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina5.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina5.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina5.pulsanteName2;
    puls.innerHTML = data[i].pagina5.pulsanteName;
  }
}

function appendIndizioNaziPage5(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina5.indizi.indizio1 +
      " <br> " +
      data[i].pagina5.indizi.indizio2 +
      " <br> " +
      data[i].pagina5.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE6///////////////////////////////////
function fetchDataNaziPage6() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 6 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage6(data);
      appendPictureNaziPage6(data);
      appendPulsanteNaziPage6(data);
      appendIndizioNaziPage6(data);
      appendOggettiNaziPage6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage6(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage6(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina6.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina6.pulsanteFunc4);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina6.pulsanteName2;
    puls3.innerHTML = data[i].pagina6.pulsanteName3;
    puls4.innerHTML = data[i].pagina6.pulsanteName4;
  }
}

function appendIndizioNaziPage6(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6.indizi.indizio1 +
      " <br> " +
      data[i].pagina6.indizi.indizio2 +
      " <br> " +
      data[i].pagina6.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage6(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaCassettoOrafo() {
  alert(
    "Hai trovato i proggetti del ciondolo fatti dall'orafo. Nei disegni del ciondolo è raffigurato il numero 4 e accanto viene indicato l'indirizzo di colui che ha chiesto del ciondolo. Rovistando meglio nel cassetto trovi una lampadina. "
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca nel cassetto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina6.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina6.pulsanteName;
    }
  }
}

function cercaTavolo() {
  alert("non trovi nulla");
}

//////////////////////PAGE7///////////////////////////////////
function fetchDataNaziPage7() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 7 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage7(data);
      appendPictureNaziPage7(data);
      appendPulsanteNaziPage7(data);
      appendIndizioNaziPage7(data);
      appendOggettiNaziPage7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage7(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage7(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
    puls.innerHTML = data[i].pagina7.pulsanteName;
  }
}

function appendIndizioNaziPage7(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7.indizi.indizio1 +
      " <br> " +
      data[i].pagina7.indizi.indizio2 +
      " <br> " +
      data[i].pagina7.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage7(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE8///////////////////////////////////
function fetchDataNaziPage8() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 8 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage8(data);
      appendPictureNaziPage8(data);
      appendPulsanteNaziPage8(data);
      appendIndizioNaziPage8(data);
      appendOggettiNaziPage8(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage8(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage8(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina8.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina8.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage8(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina8.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina8.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina8.pulsanteFunc4);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
    puls3.innerHTML = data[i].pagina8.pulsanteName3;
    puls4.innerHTML = data[i].pagina8.pulsanteName4;
  }
}

function appendIndizioNaziPage8(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina8.indizi.indizio1 +
      " <br> " +
      data[i].pagina8.indizi.indizio2 +
      " <br> " +
      data[i].pagina8.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage8(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina8.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina8.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaScrivania() {
  alert(
    "C'è una foto rovinata che ritrae dei bambini. Girandola si intravedono delle scritte non decifrabili. Poco più nascosto, scorci un diario, e sfogliandolo riesci a leggere il nome del suo proprietario. Ti trovi in un vecchio orfanotrofio."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca nel cassetto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina8.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina8.pulsanteName;
    }
  }
}

//////////////////////PAGE9///////////////////////////////////
function fetchDataNaziPage9() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 9 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage9(data);
      appendPictureNaziPage9(data);
      appendPulsanteNaziPage9(data);
      appendIndizioNaziPage9(data);
      appendOggettiNaziPage9(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage9(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage9(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina9.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina9.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage9(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina9.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
    puls.innerHTML = data[i].pagina9.pulsanteName;
  }
}

function appendIndizioNaziPage9(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina9.indizi.indizio1 +
      " <br> " +
      data[i].pagina9.indizi.indizio2 +
      " <br> " +
      data[i].pagina9.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage9(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina9.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina9.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE10///////////////////////////////////
function fetchDataNaziPage10() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 10 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage10(data);
      appendPictureNaziPage10(data);
      appendPulsanteNaziPage10(data);
      appendIndizioNaziPage10(data);
      appendOggettiNaziPage10(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function cassaforteOK() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti cassaforte  OK");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina10.pulsanteName;
    }
  }
}

function clear() {
  codiceCassaforte = "";
}

var codiceCassaforte = "";
var codiceCassaforteOK = "1945";

function saveNumberDif() {
  //var sel = document.getElementById("cassaUno");
  //var strUser = sel.options[sel.selectedIndex].value;
  //console.log(strUser);
  console.log("ho cliccato il tasto 1");

  aggiungiLabel();
}

function saveNumberDif2() {
  console.log("ho cliccato il tasto 2");

  aggiungiLabel2();
}

function saveNumberDif3() {
  console.log("ho cliccato il tasto 3");

  aggiungiLabel3();
}

function saveNumberDif4() {
  console.log("ho cliccato il tasto 4");

  aggiungiLabel4();
}

function saveNumberDif5() {
  console.log("ho cliccato il tasto 5");

  aggiungiLabel5();
}

function saveNumberDif6() {
  console.log("ho cliccato il tasto 6");

  aggiungiLabel6();
}

function saveNumberDif7() {
  console.log("ho cliccato il tasto 7");

  aggiungiLabel7();
}

function saveNumberDif8() {
  console.log("ho cliccato il tasto 8");

  aggiungiLabel8();
}

function saveNumberDif9() {
  console.log("ho cliccato il tasto 9");

  aggiungiLabel9();
}

function saveNumberDif0() {
  console.log("ho cliccato il tasto 0");

  aggiungiLabel0();
}

function aggiungiLabel() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName = JSON.stringify(data[i].pagina10.textValue);

      var strippedText = textName.replace(/['"]+/g, "");

      var pulsText = document.createElement("p");

      pulsText.setAttribute("id", strippedText);
      pulsText.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText);
      pulsText.innerHTML = data[i].pagina10.textName;
    }
  }

  if (codiceCassaforte.length < 4) {
    var uno = "1";
    var res = codiceCassaforte.concat(uno);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel2() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 2");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte2(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName2 = JSON.stringify(data[i].pagina10.textValue2);

      var strippedText2 = textName2.replace(/['"]+/g, "");

      var pulsText2 = document.createElement("p");

      pulsText2.setAttribute("id", strippedText2);
      pulsText2.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText2);
      pulsText2.innerHTML = data[i].pagina10.textName2;
    }
  }

  if (codiceCassaforte.length < 4) {
    var due = "2";
    var res = codiceCassaforte.concat(due);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel3() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 3");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte3(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte3(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName3 = JSON.stringify(data[i].pagina10.textValue3);

      var strippedText3 = textName3.replace(/['"]+/g, "");

      var pulsText3 = document.createElement("p");

      pulsText3.setAttribute("id", strippedText3);
      pulsText3.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText3);
      pulsText3.innerHTML = data[i].pagina10.textName3;
    }
  }
  var tre = "3";
  var res = codiceCassaforte.concat(tre);
  codiceCassaforte = res;
  console.log(codiceCassaforte);

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel4() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 4");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte4(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte4(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName4 = JSON.stringify(data[i].pagina10.textValue4);

      var strippedText4 = textName4.replace(/['"]+/g, "");

      var pulsText4 = document.createElement("p");

      pulsText4.setAttribute("id", strippedText4);
      pulsText4.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText4);
      pulsText4.innerHTML = data[i].pagina10.textName4;
    }
  }

  if (codiceCassaforte.length < 4) {
    var quattro = "4";
    var res = codiceCassaforte.concat(quattro);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel5() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 5");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte5(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte5(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName5 = JSON.stringify(data[i].pagina10.textValue5);

      var strippedText5 = textName5.replace(/['"]+/g, "");

      var pulsText5 = document.createElement("p");

      pulsText5.setAttribute("id", strippedText5);
      pulsText5.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText5);
      pulsText5.innerHTML = data[i].pagina10.textName5;
    }
  }

  if (codiceCassaforte.length < 4) {
    var cinque = "5";
    var res = codiceCassaforte.concat(cinque);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel6() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 6");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte6(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte6(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName6 = JSON.stringify(data[i].pagina10.textValue6);

      var strippedText6 = textName6.replace(/['"]+/g, "");

      var pulsText6 = document.createElement("p");

      pulsText6.setAttribute("id", strippedText6);
      pulsText6.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText6);
      pulsText6.innerHTML = data[i].pagina10.textName6;
    }
  }

  if (codiceCassaforte.length < 4) {
    var sei = "6";
    var res = codiceCassaforte.concat(sei);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel7() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 7");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte7(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte7(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName7 = JSON.stringify(data[i].pagina10.textValue7);

      var strippedText7 = textName7.replace(/['"]+/g, "");

      var pulsText7 = document.createElement("p");

      pulsText7.setAttribute("id", strippedText7);
      pulsText7.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText7);
      pulsText7.innerHTML = data[i].pagina10.textName7;
    }
  }

  if (codiceCassaforte.length < 4) {
    var sette = "7";
    var res = codiceCassaforte.concat(sette);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel8() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 8");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte8(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte8(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName8 = JSON.stringify(data[i].pagina10.textValue8);

      var strippedText8 = textName8.replace(/['"]+/g, "");

      var pulsText8 = document.createElement("p");

      pulsText8.setAttribute("id", strippedText8);
      pulsText8.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText8);
      pulsText8.innerHTML = data[i].pagina10.textName8;
    }
  }

  if (codiceCassaforte.length < 4) {
    var otto = "8";
    var res = codiceCassaforte.concat(otto);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel9() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 9");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte9(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte9(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName9 = JSON.stringify(data[i].pagina10.textValue9);

      var strippedText9 = textName9.replace(/['"]+/g, "");

      var pulsText9 = document.createElement("p");

      pulsText9.setAttribute("id", strippedText9);
      pulsText9.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText9);
      pulsText9.innerHTML = data[i].pagina10.textName9;
    }
  }

  if (codiceCassaforte.length < 4) {
    var nove = "9";
    var res = codiceCassaforte.concat(nove);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function aggiungiLabel0() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabel 0");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoCassaforte0(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoCassaforte0(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var textName0 = JSON.stringify(data[i].pagina10.textValue0);

      var strippedText0 = textName0.replace(/['"]+/g, "");

      var pulsText0 = document.createElement("p");

      pulsText0.setAttribute("id", strippedText0);
      pulsText0.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText0);
      pulsText0.innerHTML = data[i].pagina10.textName0;
    }
  }

  if (codiceCassaforte.length < 4) {
    var zero = "0";
    var res = codiceCassaforte.concat(zero);
    codiceCassaforte = res;
    console.log(codiceCassaforte);
  }

  if (codiceCassaforte === codiceCassaforteOK) {
    apriCassaforteQuadro();
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  } else if (
    codiceCassaforte.length === 4 &&
    codiceCassaforte != codiceCassaforteOK
  ) {
    alert("codice errato");
    clear();
    document.getElementById("dialogCassa").innerHTML = "";
    $("#dialogCassa").dialog("close");
  }
}

function apriCassaforteModal() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti apriCassaforteModal");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseNumber(data);
      openDialog();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialog() {
    $("#dialogCassa").dialog();
  }

  function chooseNumber(data) {
    var pulsContainer = document.getElementById("dialogCassa");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc4);
      var urlvalue5 = JSON.stringify(data[i].pagina10.pulsanteFunc5);
      var urlvalue6 = JSON.stringify(data[i].pagina10.pulsanteFunc6);
      var urlvalue7 = JSON.stringify(data[i].pagina10.pulsanteFunc7);
      var urlvalue8 = JSON.stringify(data[i].pagina10.pulsanteFunc8);
      var urlvalue9 = JSON.stringify(data[i].pagina10.pulsanteFunc9);
      var urlvalue10 = JSON.stringify(data[i].pagina10.pulsanteFunc10);
      var urlvalue11 = JSON.stringify(data[i].pagina10.pulsanteFunc11);
      var urlvalue12 = JSON.stringify(data[i].pagina10.pulsanteFunc12);
      var urlvalue13 = JSON.stringify(data[i].pagina10.pulsanteFunc13);

      // var textName = JSON.stringify(data[i].pagina10.textValue);

      var stripped = urlvalue.replace(/['"]+/g, "");
      var stripped5 = urlvalue5.replace(/['"]+/g, "");
      var stripped6 = urlvalue6.replace(/['"]+/g, "");
      var stripped7 = urlvalue7.replace(/['"]+/g, "");
      var stripped8 = urlvalue8.replace(/['"]+/g, "");
      var stripped9 = urlvalue9.replace(/['"]+/g, "");
      var stripped10 = urlvalue10.replace(/['"]+/g, "");
      var stripped11 = urlvalue11.replace(/['"]+/g, "");
      var stripped12 = urlvalue12.replace(/['"]+/g, "");
      var stripped13 = urlvalue13.replace(/['"]+/g, "");
      // var strippedText = textName.replace(/['"]+/g, "");

      var puls = document.createElement("button");
      var puls5 = document.createElement("button");
      var puls6 = document.createElement("button");
      var puls7 = document.createElement("button");
      var puls8 = document.createElement("button");
      var puls9 = document.createElement("button");
      var puls10 = document.createElement("button");
      var puls11 = document.createElement("button");
      var puls12 = document.createElement("button");
      var puls13 = document.createElement("button");
      // var pulsText = document.createElement("p");

      // pulsText.setAttribute("id", strippedText);
      // pulsText.setAttribute("style", "background-color:red; color: white;");
      puls.setAttribute("onclick", stripped);
      puls5.setAttribute("onclick", stripped5);
      puls6.setAttribute("onclick", stripped6);
      puls7.setAttribute("onclick", stripped7);
      puls8.setAttribute("onclick", stripped8);
      puls9.setAttribute("onclick", stripped9);
      puls10.setAttribute("onclick", stripped10);
      puls11.setAttribute("onclick", stripped11);
      puls12.setAttribute("onclick", stripped12);
      puls13.setAttribute("onclick", stripped13);
      // puls.setAttribute("value", "1");
      //puls.setAttribute("id", "cassaUno");
      //puls5.setAttribute("onclick", stripped5);
      dialogCassa.setAttribute("title", "INSERISCI CODICE CASSAFORTE");
      // puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);
      pulsContainer.appendChild(puls5);
      pulsContainer.appendChild(puls6);
      pulsContainer.appendChild(puls7);
      pulsContainer.appendChild(puls8);
      pulsContainer.appendChild(puls9);
      pulsContainer.appendChild(puls10);
      pulsContainer.appendChild(puls11);
      pulsContainer.appendChild(puls12);
      pulsContainer.appendChild(puls13);
      // pulsContainer.appendChild(pulsText);

      puls.innerHTML = data[i].pagina10.pulsanteName4;
      puls5.innerHTML = data[i].pagina10.pulsanteName5;
      puls6.innerHTML = data[i].pagina10.pulsanteName6;
      puls7.innerHTML = data[i].pagina10.pulsanteName7;
      puls8.innerHTML = data[i].pagina10.pulsanteName8;
      puls9.innerHTML = data[i].pagina10.pulsanteName9;
      puls10.innerHTML = data[i].pagina10.pulsanteName10;
      puls11.innerHTML = data[i].pagina10.pulsanteName11;
      puls12.innerHTML = data[i].pagina10.pulsanteName12;
      puls13.innerHTML = data[i].pagina10.pulsanteName13;
      //pulsText.innerHTML = data[i].pagina10.textName;
    }
  }
}

function appendDataNaziPage10(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage10(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina10.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina10.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage10(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina10.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina10.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
    puls3.innerHTML = data[i].pagina10.pulsanteName3;
  }
}

function appendIndizioNaziPage10(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina10.indizi.indizio1 +
      " <br> " +
      data[i].pagina10.indizi.indizio2 +
      " <br> " +
      data[i].pagina10.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage10(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina10.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina10.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function apriCassaforteQuadro() {
  console.log("funzione apriCassaforteQuadro");
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la moto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina10.pulsanteName;
    }
  }
}

//////////////////////PAGE11///////////////////////////////////
function fetchDataNaziPage11() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 11 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage11(data);
      appendPictureNaziPage11(data);
      appendPulsanteNaziPage11(data);
      appendIndizioNaziPage11(data);
      appendOggettiNaziPage11(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage11(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage11(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina11.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1000");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina11.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage11(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina11.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina11.pulsanteFunc3);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
    puls3.innerHTML = data[i].pagina11.pulsanteName3;
  }
}

function appendIndizioNaziPage11(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina11.indizi.indizio1 +
      " <br> " +
      data[i].pagina11.indizi.indizio2 +
      " <br> " +
      data[i].pagina11.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage11(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina11.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina11.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function leggiLibro() {
  alert(
    "Leggendo il libro scopri che il diario appartiene al direttore dell'orfanotrofio. Pochi istanti dopo la losca figura di prima si presenta davnti a te intimando di essere il proprietario di quel diario. Dopo averci parlato ti fa dono di un terzo ciondolo con il numero '9' e ti spiega che in quell'orfanotrofio i bambini venivano educati per divetare spie neonaziste."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca nel cassetto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina11.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina11.pulsanteName;
    }
  }
}

//////////////////////PAGE12///////////////////////////////////
function fetchDataNaziPage12() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 12 difficile");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage12(data);
      appendPictureNaziPage12(data);
      appendPulsanteNaziPage12(data);
      appendIndizioNaziPage12(data);
      appendOggettiNaziPage12(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage12(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage12(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina12.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1000");
    img_url.setAttribute("height", "500");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina12.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage12(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina12.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina12.pulsanteFunc3);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    puls3.innerHTML = data[i].pagina12.pulsanteName3;
  }
}

function appendIndizioNaziPage12(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina12.indizi.indizio1 +
      " <br> " +
      data[i].pagina12.indizi.indizio2 +
      " <br> " +
      data[i].pagina12.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage12(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina12.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina12.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function scappa() {
  alert(
    "Il vecchio direttore deve aver chiamato la polizia per farmi arrestare, forse è in combutta con il ragazzo tatuato, o forse gli sto intralciando i piani, ma quali piani? Bisogna uscire dalla porta sul retro."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca nel cassetto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina12.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina12.pulsanteName;
    }
  }
}

//////////////////////PAGE13///////////////////////////////////
function fetchDataNaziPage13() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage13(data);
      appendPictureNaziPage13(data);
      appendPulsanteNaziPage13(data);
      appendIndizioNaziPage13(data);
      appendOggettiNaziPage13(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage13(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage13(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina13.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage13(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina13.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina13.pulsanteName2;
    puls3.innerHTML = data[i].pagina13.pulsanteName3;
  }
}

function appendIndizioNaziPage13(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13.indizi.indizio1 +
      " <br> " +
      data[i].pagina13.indizi.indizio2 +
      " <br> " +
      data[i].pagina13.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage13(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina13.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function lampadinaAccesa() {
  alert("Sei riuscito ad avvitare la lampadina. Ora puoi accendere la luce");

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la luce");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina13.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina13.pulsanteName;
    }
  }
}

//////////////////////PAGE14///////////////////////////////////
function fetchDataNaziPage14() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 14");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage14(data);
      appendPictureNaziPage14(data);
      appendPulsanteNaziPage14(data);
      appendIndizioNaziPage14(data);
      appendOggettiNaziPage14(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage14(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage14(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina14.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina14.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage14(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina14.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina14.pulsanteFunc4);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);
    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);
    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
    puls3.innerHTML = data[i].pagina14.pulsanteName3;
    puls4.innerHTML = data[i].pagina14.pulsanteName4;
  }
}

function appendIndizioNaziPage14(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina14.indizi.indizio1 +
      " <br> " +
      data[i].pagina14.indizi.indizio2 +
      " <br> " +
      data[i].pagina14.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage14(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina14.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina14.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaTorcia() {
  alert(
    "Questa data potrebbe essere l'ultimo numero che stai cercando per aprire la cassaforte. Dentro al cassetto hai trovato una torcia, segnati l'indizio e scappa con la torcia nel bosco prima che la polizia ti arresti"
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la luce");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina14.pulsanteName;
    }
  }
}

function apriAnta() {
  alert("non trovi nulla");
}

//////////////////////PAGE15///////////////////////////////////
function fetchDataNaziPage15() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 15");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage15(data);
      appendPictureNaziPage15(data);
      appendPulsanteNaziPage15(data);
      appendIndizioNaziPage15(data);
      appendOggettiNaziPage15(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage15(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage15(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina15.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina15.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage15(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina15.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina15.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina15.pulsanteName2;
    puls3.innerHTML = data[i].pagina15.pulsanteName3;
  }
}

function appendIndizioNaziPage15(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina15.indizi.indizio1 +
      " <br> " +
      data[i].pagina15.indizi.indizio2 +
      " <br> " +
      data[i].pagina15.indizi.indizio3 +
      " <br> " +
      data[i].pagina15.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage15(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina15.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina15.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function usaTorcia() {
  alert(
    "Con questo buio non si vede niente. Devi recarti all'orfanotrofio il prima possibile e aprire la cassaforte"
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la torcia");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina15.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina15.pulsanteName;
    }
  }
}

//////////////////////PAGE16///////////////////////////////////
function fetchDataNaziPage16() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 16");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage16(data);
      appendPictureNaziPage16(data);
      appendPulsanteNaziPage16(data);
      appendIndizioNaziPage16(data);
      appendOggettiNaziPage16(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage16(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage16(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina16.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina16.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage16(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina16.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina16.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina16.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
    puls3.innerHTML = data[i].pagina16.pulsanteName3;
    puls4.innerHTML = data[i].pagina16.pulsanteName4;
  }
}

function appendIndizioNaziPage16(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina16.indizi.indizio1 +
      " <br> " +
      data[i].pagina16.indizi.indizio2 +
      " <br> " +
      data[i].pagina16.indizi.indizio3 +
      " <br> " +
      data[i].pagina16.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage16(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina16.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina16.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function avantiSinistra() {
  alert("Forse questo è il sentiero giusto. Devi sbrigarti");

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - procedi nel sentiero");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina16.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina16.pulsanteName;
    }
  }
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function avantiDestra() {
  alert("Forse questo è il sentiero giusto. Devi sbrigarti");

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - procedi nel sentiero");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue5 = JSON.stringify(data[i].pagina16.pulsanteFunc5);

      var stripped5 = urlvalue5.replace(/['"]+/g, "");

      var puls5 = document.createElement("button");

      puls5.setAttribute("onclick", stripped5);
      puls5.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls5);

      puls5.innerHTML = data[i].pagina16.pulsanteName5;
    }
  }
}

//////////////////////PAGE17a1///////////////////////////////////
function fetchDataNaziPage17a1() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 17a1");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage17a1(data);
      appendPictureNaziPage17a1(data);
      appendPulsanteNaziPage17a1(data);
      appendIndizioNaziPage17a1(data);
      appendOggettiNaziPage17a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina17a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage17a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17a1.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina17a1.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina17a1.pulsanteName2;
    puls.innerHTML = data[i].pagina17a1.pulsanteName;
  }
}

function appendIndizioNaziPage17a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina17a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina17a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina17a1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage17a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE17a2///////////////////////////////////
function fetchDataNaziPage17a2() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 17a2");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage17a2(data);
      appendPictureNaziPage17a2(data);
      appendPulsanteNaziPage17a2(data);
      appendIndizioNaziPage17a2(data);
      appendOggettiNaziPage17a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina17a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage17a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina17a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina17a2.pulsanteFunc4);
    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");
    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");
    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);
    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);
    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina17a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina17a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina17a2.pulsanteName4;
  }
}

function appendIndizioNaziPage17a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina17a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina17a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina17a2.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage17a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaMenosla() {
  alert("Hai trovato le chiavi della motocicletta in garage");

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la luce");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina17a2.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina17a2.pulsanteName;
    }
  }
}

function cercaDivano() {
  alert("non trovi nulla");
}

//////////////////////PAGE17a3///////////////////////////////////
function fetchDataNaziPage17a3() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 17a3");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage17a3(data);
      appendPictureNaziPage17a3(data);
      appendPulsanteNaziPage17a3(data);
      appendIndizioNaziPage17a3(data);
      appendOggettiNaziPage17a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17a3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina17a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage17a3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina17a3.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina17a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina17a3.pulsanteName3;
  }
}

function appendIndizioNaziPage17a3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina17a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina17a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina17a3.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage17a3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function prendiMoto() {
  alert("Usa le chiavi per accendere la moto e recati all'orfanotrofio");

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la moto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina17a3.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina17a3.pulsanteName;
    }
  }
}

//////////////////////PAGE17b1///////////////////////////////////
function fetchDataNaziPage17b1() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 17a1");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage17b1(data);
      appendPictureNaziPage17b1(data);
      appendPulsanteNaziPage17b1(data);
      appendIndizioNaziPage17b1(data);
      appendOggettiNaziPage17b1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17b1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17b1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17b1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina17b1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage17b1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17b1.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina17b1.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina17b1.pulsanteName2;
    puls.innerHTML = data[i].pagina17b1.pulsanteName;
  }
}

function appendIndizioNaziPage17b1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17b1.indizi.indizio1 +
      " <br> " +
      data[i].pagina17b1.indizi.indizio2 +
      " <br> " +
      data[i].pagina17b1.indizi.indizio3 +
      " <br> " +
      data[i].pagina17b1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage17b1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17b1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17b1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE18///////////////////////////////////
function fetchDataNaziPage18() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 18");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage18(data);
      appendPictureNaziPage18(data);
      appendPulsanteNaziPage18(data);
      appendIndizioNaziPage18(data);
      appendOggettiNaziPage18(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina18.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage18(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
    puls.innerHTML = data[i].pagina18.pulsanteName;
  }
}

function appendIndizioNaziPage18(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18.indizi.indizio1 +
      " <br> " +
      data[i].pagina18.indizi.indizio2 +
      " <br> " +
      data[i].pagina18.indizi.indizio3 +
      " <br> " +
      data[i].pagina18.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage18(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina18.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE19///////////////////////////////////
function fetchDataNaziPage19() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage19(data);
      appendPictureNaziPage19(data);
      appendPulsanteNaziPage19(data);
      appendIndizioNaziPage19(data);
      appendOggettiNaziPage19(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage19(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage19(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage19(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
    puls3.innerHTML = data[i].pagina19.pulsanteName3;
  }
}

function appendIndizioNaziPage19(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19.indizi.indizio1 +
      " <br> " +
      data[i].pagina19.indizi.indizio2 +
      " <br> " +
      data[i].pagina19.indizi.indizio3 +
      " <br> " +
      data[i].pagina19.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage19(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function apriCassaforte() {
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la moto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina19.pulsanteName;
    }
  }
}

//////////////////////PAGE20///////////////////////////////////
function fetchDataNaziPage20() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 20");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage20(data);
      appendPictureNaziPage20(data);
      appendPulsanteNaziPage20(data);
      appendIndizioNaziPage20(data);
      appendOggettiNaziPage20(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage20(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage20(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina20.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina20.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage20(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina20.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
    puls.innerHTML = data[i].pagina20.pulsanteName;
  }
}

function appendIndizioNaziPage20(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina20.indizi.indizio1 +
      " <br> " +
      data[i].pagina20.indizi.indizio2 +
      " <br> " +
      data[i].pagina20.indizi.indizio3 +
      " <br> " +
      data[i].pagina20.indizi.indizio4 +
      " <br> " +
      data[i].pagina20.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage20(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina20.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina20.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE21///////////////////////////////////
function fetchDataNaziPage21() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage21(data);
      appendPictureNaziPage21(data);
      appendPulsanteNaziPage21(data);
      appendIndizioNaziPage21(data);
      appendOggettiNaziPage21(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    puls.innerHTML = data[i].pagina21.pulsanteName;
  }
}

function appendIndizioNaziPage21(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21.indizi.indizio1 +
      " <br> " +
      data[i].pagina21.indizi.indizio2 +
      " <br> " +
      data[i].pagina21.indizi.indizio3 +
      " <br> " +
      data[i].pagina21.indizi.indizio4 +
      " <br> " +
      data[i].pagina21.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE22///////////////////////////////////
function fetchDataNaziPage22() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage22(data);
      appendPictureNaziPage22(data);
      appendPulsanteNaziPage22(data);
      appendIndizioNaziPage22(data);
      appendOggettiNaziPage22(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage22(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage22(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage22(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina22.pulsanteName2;
    puls3.innerHTML = data[i].pagina22.pulsanteName3;
  }
}

function appendIndizioNaziPage22(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22.indizi.indizio1 +
      " <br> " +
      data[i].pagina22.indizi.indizio2 +
      " <br> " +
      data[i].pagina22.indizi.indizio3 +
      " <br> " +
      data[i].pagina22.indizi.indizio4 +
      " <br> " +
      data[i].pagina22.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage22(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function spiegaFatti() {
  alert(
    "Lanci per terra i fascicoli. Sono foto vecchie ma è indubbio che l'uomo che hai operato facesse parte dell'orfanotrofio. La polizia arresta entrambi Dopo qualche settimana in cella vieni scagionato. I detective erano sulle tracce dei bambini cresciuti in quell'orfanotrofio perché cresciuti come spie per riportare in vita il nazismo. Eri stato sospettato di complicità ma ora non più."
  );

  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la moto");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      newNaziButton2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina22.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina22.pulsanteName;
    }
  }
}

//////////////////////PAGE23///////////////////////////////////
function fetchDataNaziPage23() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 23");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage23(data);
      appendPictureNaziPage23(data);
      appendPulsanteNaziPage23(data);
      appendIndizioNaziPage23(data);
      appendOggettiNaziPage23(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage23(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage23(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina23.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1000");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina23.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage23(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina23.pulsanteFunc2);
    var urlvalue = JSON.stringify(data[i].pagina23.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina23.pulsanteName2;
    puls.innerHTML = data[i].pagina23.pulsanteName;
  }
}

function appendIndizioNaziPage23(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina23.indizi.indizio1 +
      " <br> " +
      data[i].pagina23.indizi.indizio2 +
      " <br> " +
      data[i].pagina23.indizi.indizio3 +
      " <br> " +
      data[i].pagina23.indizi.indizio4 +
      " <br> " +
      data[i].pagina23.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage23(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina23.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina23.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE24///////////////////////////////////
function fetchDataNaziPage24() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24");
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
      document.getElementById("dialog").innerHTML = "";
      document.getElementById("dialogCassa").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24(data);
      appendPictureNaziPage24(data);
      appendPulsanteNaziPage24(data);
      appendIndizioNaziPage24(data);
      appendOggettiNaziPage24(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24.pulsanteName;
  }
}

function appendIndizioNaziPage24(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24.indizi.indizio1 +
      " <br> " +
      data[i].pagina24.indizi.indizio2 +
      " <br> " +
      data[i].pagina24.indizi.indizio3 +
      " <br> " +
      data[i].pagina24.indizi.indizio4 +
      " <br> " +
      data[i].pagina24.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE24a1///////////////////////////////////
function fetchDataNaziPage24a1() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a1");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a1(data);
      appendPictureNaziPage24a1(data);
      appendPulsanteNaziPage24a1(data);
      appendIndizioNaziPage24a1(data);
      appendOggettiNaziPage24a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a1.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a1.pulsanteName;
    puls2.innerHTML = data[i].pagina24a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a1.pulsanteName4;
  }
}

function appendIndizioNaziPage24a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a2///////////////////////////////////
function fetchDataNaziPage24a2() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a2");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a2(data);
      appendPictureNaziPage24a2(data);
      appendPulsanteNaziPage24a2(data);
      appendIndizioNaziPage24a2(data);
      appendOggettiNaziPage24a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a2.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a2.pulsanteName;
    puls2.innerHTML = data[i].pagina24a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a2.pulsanteName4;
  }
}

function appendIndizioNaziPage24a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a3///////////////////////////////////
function fetchDataNaziPage24a3() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a3");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a3(data);
      appendPictureNaziPage24a3(data);
      appendPulsanteNaziPage24a3(data);
      appendIndizioNaziPage24a3(data);
      appendOggettiNaziPage24a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a3.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a3.pulsanteName;
    puls2.innerHTML = data[i].pagina24a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a3.pulsanteName4;
  }
}

function appendIndizioNaziPage24a3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a4///////////////////////////////////
function fetchDataNaziPage24a4() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a4");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a4(data);
      appendPictureNaziPage24a4(data);
      appendPulsanteNaziPage24a4(data);
      appendIndizioNaziPage24a4(data);
      appendOggettiNaziPage24a4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a4(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a4.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a4.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a4.pulsanteName;
    puls2.innerHTML = data[i].pagina24a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a4.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a4.pulsanteName4;
  }
}

function appendIndizioNaziPage24a4(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a4.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a4.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a4.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a5///////////////////////////////////
function fetchDataNaziPage24a5() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a5");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a5(data);
      appendPictureNaziPage24a5(data);
      appendPulsanteNaziPage24a5(data);
      appendIndizioNaziPage24a5(data);
      appendOggettiNaziPage24a5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a5.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a5.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a5.pulsanteName;
    puls2.innerHTML = data[i].pagina24a5.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a5.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a5.pulsanteName4;
  }
}

function appendIndizioNaziPage24a5(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a5.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a5.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a5.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a6///////////////////////////////////
function fetchDataNaziPage24a6() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a6");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a6(data);
      appendPictureNaziPage24a6(data);
      appendPulsanteNaziPage24a6(data);
      appendIndizioNaziPage24a6(data);
      appendOggettiNaziPage24a6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a6(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a6.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a6(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a6.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a6.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a6.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a6.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a6.pulsanteName;
    puls2.innerHTML = data[i].pagina24a6.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a6.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a6.pulsanteName4;
  }
}

function appendIndizioNaziPage24a6(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a6.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a6.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a6.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a6.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a6.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a6(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a6.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a6.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE24a7///////////////////////////////////
function fetchDataNaziPage24a7() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 24a7");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage24a7(data);
      appendPictureNaziPage24a7(data);
      appendPulsanteNaziPage24a7(data);
      appendIndizioNaziPage24a7(data);
      appendOggettiNaziPage24a7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24a7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24a7(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24a7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina24a7.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage24a7(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina24a7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a7.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a7.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a7.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina24a7.pulsanteName;
    puls2.innerHTML = data[i].pagina24a7.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a7.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a7.pulsanteName4;
  }
}

function appendIndizioNaziPage24a7(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a7.indizi.indizio1 +
      " <br> " +
      data[i].pagina24a7.indizi.indizio2 +
      " <br> " +
      data[i].pagina24a7.indizi.indizio3 +
      " <br> " +
      data[i].pagina24a7.indizi.indizio4 +
      " <br> " +
      data[i].pagina24a7.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24a7(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a7.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a7.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE25///////////////////////////////////
function fetchDataNaziPage25() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 25");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage25(data);
      appendPictureNaziPage25(data);
      appendPulsanteNaziPage25(data);
      appendIndizioNaziPage25(data);
      appendOggettiNaziPage25(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage25(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage25(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage25(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina25.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina25.pulsanteName;
  }
}

//////////////////////PAGE26///////////////////////////////////
function fetchDataNaziPage26() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 26");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage26(data);
      appendPictureNaziPage26(data);
      appendPulsanteNaziPage26(data);
      appendIndizioNaziPage26(data);
      appendOggettiNaziPage26(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage26(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage26(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina26.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina26.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage26(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina26.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina26.pulsanteName;
  }
}

//////////////////////PAGE27///////////////////////////////////
function fetchDataNaziPage27() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 27");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage27(data);
      appendPictureNaziPage27(data);
      appendPulsanteNaziPage27(data);
      appendIndizioNaziPage27(data);
      appendOggettiNaziPage27(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage27(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage27(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina27.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina27.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage27(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina27.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina27.pulsanteName;
  }
}

//////////////////////PAGE28///////////////////////////////////
function fetchDataNaziPage28() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 28");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage28(data);
      appendPictureNaziPage28(data);
      appendPulsanteNaziPage28(data);
      appendIndizioNaziPage28(data);
      appendOggettiNaziPage28(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage28(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage28(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina28.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina28.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage28(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina28.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina28.pulsanteName;
  }
}

//////////////////////PAGE29///////////////////////////////////
function fetchDataNaziPage29() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 29");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage29(data);
      appendPictureNaziPage29(data);
      appendPulsanteNaziPage29(data);
      appendIndizioNaziPage29(data);
      appendOggettiNaziPage29(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage29(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage29(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina29.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina29.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage29(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina29.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina29.pulsanteName;
  }
}

//////////////////////PAGE30///////////////////////////////////
function fetchDataNaziPage30() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 30");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage30(data);
      appendPictureNaziPage30(data);
      appendPulsanteNaziPage30(data);
      appendIndizioNaziPage30(data);
      appendOggettiNaziPage30(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage30(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina30.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage30(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina30.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina30.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage30(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina30.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina30.pulsanteName;
  }
}

//////////////////////PAGE31///////////////////////////////////
function fetchDataNaziPage31() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 31");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage31(data);
      appendPictureNaziPage31(data);
      appendPulsanteNaziPage31(data);
      appendIndizioNaziPage31(data);
      appendOggettiNaziPage31(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage31(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina31.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage31(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina31.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina31.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage31(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina31.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina31.pulsanteName;
  }
}

//////////////////////PAGE32///////////////////////////////////
function fetchDataNaziPage32() {
  fetch("json/nazi/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 32");
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
      document.getElementById("dialog").innerHTML = "";
      //popolo i div con le nuove info
      appendDataNaziPage32(data);
      appendPictureNaziPage32(data);
      appendPulsanteNaziPage32(data);
      appendIndizioNaziPage32(data);
      appendOggettiNaziPage32(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage32(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina32.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage32(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina32.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina32.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage32(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina32.pulsanteFunc);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped = urlvalue.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls = document.createElement("button");

    // puls.setAttribute("onclick", stripped);
    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    // puls.innerHTML = data[i].pagina2.pulsanteName;
    puls.innerHTML = data[i].pagina32.pulsanteName;
  }
}

/////////////////SCHERMATA INIZIALE/////////////
function backHomeDif() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

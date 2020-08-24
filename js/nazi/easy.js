//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function nazilog() {
  console.log("gioco nazi facile");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataNaziPage2Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina2 Facile");
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
      appendDataNaziPage2Facile(data);
      appendPictureNaziPage2Facile(data);
      appendPulsanteNaziPage2Facile(data);
      appendIndizioNaziPage2Facile(data);
      appendOggettiNaziPage2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage2Facile(data) {
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

function appendPulsanteNaziPage2Facile(data) {
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

function appendIndizioNaziPage2Facile(data) {
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

function appendOggettiNaziPage2Facile(data) {
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
function cercaSottoLetto() {
  alert(
    "trovi una chiave e un foglio di carta con un numero '88', puoi andare avanti"
  );

  fetch("json/nazi/giocoFac.json")
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

function cercaArmadioFac() {
  alert("non trovi nulla");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataNaziPage3Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 facile");
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
      appendDataNaziPage3Facile(data);
      appendPictureNaziPage3Facile(data);
      appendPulsanteNaziPage3Facile(data);
      appendIndizioNaziPage3Facile(data);
      appendOggettiNaziPage3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage3Facile(data) {
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

function appendPulsanteNaziPage3Facile(data) {
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

function appendIndizioNaziPage3Facile(data) {
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

function appendOggettiNaziPage3Facile(data) {
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
function lockerRoomFac() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti lockerRoom");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseArmadiettoFac(data);
      openDialogFac();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialogFac() {
    $("#dialog").dialog();
  }

  function chooseArmadiettoFac(data) {
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

function ottantottoFac() {
  alert(
    "Hai aperto l'armadietto. Hai trovato un foglietto di carta con scritto: '2 Agosto 1934 - 30 Aprile 1945' e accanto un ciondolo con un numero 5"
  );
  $("#dialog").dialog("close");
  lockerRoomOKFac();
  document.getElementById("dialog").innerHTML = "";
}

function lockerRoomOKFac() {
  fetch("json/nazi/giocoFac.json")
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

      puls.innerHTML = data[i].pagina3.pulsanteName;
    }
  }
}

function armadiettoNOFac() {
  alert("La chiave non entra nella serratura");
}

//////////////////////PAGE4///////////////////////////////////
function fetchDataNaziPage4Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 4 facile");
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
      appendDataNaziPage4Facile(data);
      appendPictureNaziPage4Facile(data);
      appendPulsanteNaziPage4Facile(data);
      appendIndizioNaziPage4Facile(data);
      appendOggettiNaziPage4Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage4Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage4Facile(data) {
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

function appendPulsanteNaziPage4Facile(data) {
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
    puls2.innerHTML = data[i].pagina4.pulsanteName2;
    puls.innerHTML = data[i].pagina4.pulsanteName;
  }
}

function appendIndizioNaziPage4Facile(data) {
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

function appendOggettiNaziPage4Facile(data) {
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
function fetchDataNaziPage5Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 5 facile");
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
      appendDataNaziPage5Facile(data);
      appendPictureNaziPage5Facile(data);
      appendPulsanteNaziPage5Facile(data);
      appendIndizioNaziPage5Facile(data);
      appendOggettiNaziPage5Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage5Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage5Facile(data) {
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

function appendPulsanteNaziPage5Facile(data) {
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

function appendIndizioNaziPage5Facile(data) {
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

function appendOggettiNaziPage5Facile(data) {
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
function fetchDataNaziPage6Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 6 facile");
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
      appendDataNaziPage6Facile(data);
      appendPictureNaziPage6Facile(data);
      appendPulsanteNaziPage6Facile(data);
      appendIndizioNaziPage6Facile(data);
      appendOggettiNaziPage6Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage6Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage6Facile(data) {
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

function appendPulsanteNaziPage6Facile(data) {
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

function appendIndizioNaziPage6Facile(data) {
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

function appendOggettiNaziPage6Facile(data) {
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
function cercaCassettoOrafoFac() {
  alert(
    "Hai trovato i proggetti del ciondolo fatti dall'orafo. Nei disegni del ciondolo è raffigurato il numero 4 e accanto viene indicato l'indirizzo di colui che ha chiesto del ciondolo. Rovistando meglio nel cassetto trovi una lampadina. "
  );

  fetch("json/nazi/giocoFac.json")
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

function cercaTavoloFac() {
  alert("non trovi nulla");
}

//////////////////////PAGE7///////////////////////////////////
function fetchDataNaziPage7Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 7 facile");
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
      appendDataNaziPage7Facile(data);
      appendPictureNaziPage7Facile(data);
      appendPulsanteNaziPage7Facile(data);
      appendIndizioNaziPage7Facile(data);
      appendOggettiNaziPage7Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage7Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage7Facile(data) {
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

function appendPulsanteNaziPage7Facile(data) {
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

function appendIndizioNaziPage7Facile(data) {
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

function appendOggettiNaziPage7Facile(data) {
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
function fetchDataNaziPage8Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 8 facile");
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
      appendDataNaziPage8Facile(data);
      appendPictureNaziPage8Facile(data);
      appendPulsanteNaziPage8Facile(data);
      appendIndizioNaziPage8Facile(data);
      appendOggettiNaziPage8Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage8Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage8Facile(data) {
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

function appendPulsanteNaziPage8Facile(data) {
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

function appendIndizioNaziPage8Facile(data) {
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

function appendOggettiNaziPage8Facile(data) {
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
function cercaScrivaniaFac() {
  alert(
    "C'è una foto rovinata che ritrae dei bambini. Girandola si intravedono delle scritte. Sembrerebbe essere un indirizzo. Poco più nascosto, scorci un diario, e sfogliandolo riesci a leggere il nome del suo proprietario. Ti trovi in un vecchio orfanotrofio."
  );

  fetch("json/nazi/giocoFac.json")
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
function fetchDataNaziPage9Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 9 facile");
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
      appendDataNaziPage9Facile(data);
      appendPictureNaziPage9Facile(data);
      appendPulsanteNaziPage9Facile(data);
      appendIndizioNaziPage9Facile(data);
      appendOggettiNaziPage9Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage9Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage9Facile(data) {
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

function appendPulsanteNaziPage9Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina9.pulsanteFunc3);

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
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
    puls3.innerHTML = data[i].pagina9.pulsanteName3;
  }
}

function appendIndizioNaziPage9Facile(data) {
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

function appendOggettiNaziPage9Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function lampadinaAccesaFac() {
  alert("Sei riuscito ad avvitare la lampadina. Ora puoi accendere la luce");

  fetch("json/nazi/giocoFac.json")
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
      var urlvalue = JSON.stringify(data[i].pagina9.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina9.pulsanteName;
    }
  }
}

//////////////////////PAGE10///////////////////////////////////
function fetchDataNaziPage10Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 10 facile");
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
      appendDataNaziPage10Facile(data);
      appendPictureNaziPage10Facile(data);
      appendPulsanteNaziPage10Facile(data);
      appendIndizioNaziPage10Facile(data);
      appendOggettiNaziPage10Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function cassaforteOK() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti cassaforte  OK facile");
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

function saveNumberFac() {
  //var sel = document.getElementById("cassaUno");
  //var strUser = sel.options[sel.selectedIndex].value;
  //console.log(strUser);
  console.log("ho cliccato il tasto 1");

  aggiungiLabelFac();
}

function saveNumberFac2() {
  console.log("ho cliccato il tasto 2");

  aggiungiLabelFac2();
}

function saveNumberFac3() {
  console.log("ho cliccato il tasto 3");

  aggiungiLabelFac3();
}

function saveNumberFac4() {
  console.log("ho cliccato il tasto 4");

  aggiungiLabelFac4();
}

function saveNumberFac5() {
  console.log("ho cliccato il tasto 5");

  aggiungiLabelFac5();
}

function saveNumberFac6() {
  console.log("ho cliccato il tasto 6");

  aggiungiLabelFac6();
}

function saveNumberFac7() {
  console.log("ho cliccato il tasto 7");

  aggiungiLabelFac7();
}

function saveNumberFac8() {
  console.log("ho cliccato il tasto 8");

  aggiungiLabelFac8();
}

function saveNumberFac9() {
  console.log("ho cliccato il tasto 9");

  aggiungiLabelFac9();
}

function saveNumberFac0() {
  console.log("ho cliccato il tasto 0");

  aggiungiLabelFac0();
}

function aggiungiLabelFac() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac2() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 2");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac3() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 3");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac4() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 4");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac5() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 5");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac6() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 6");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac7() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 7");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac8() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 8");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac9() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 9");
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
    apriCassaforteQuadroFac();
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

function aggiungiLabelFac0() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelFac 0");
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
    apriCassaforteQuadroFac();
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

function apriCassaforteModalFac() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti apriCassaforteModalFac");
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

function appendDataNaziPage10Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage10Facile(data) {
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

function appendPulsanteNaziPage10Facile(data) {
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

function appendIndizioNaziPage10Facile(data) {
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

function appendOggettiNaziPage10Facile(data) {
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

function apriCassaforteQuadroFac() {
  console.log("funzione apriCassaforteQuadroFac facile");
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - pistola e fascicoli");
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
function fetchDataNaziPage11Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 11 facile");
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
      appendDataNaziPage11Facile(data);
      appendPictureNaziPage11Facile(data);
      appendPulsanteNaziPage11Facile(data);
      appendIndizioNaziPage11Facile(data);
      appendOggettiNaziPage11Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage11Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage11Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina11.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage11Facile(data) {
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

function appendIndizioNaziPage11Facile(data) {
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

function appendOggettiNaziPage11Facile(data) {
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
function dataMuroFac() {
  alert(
    "Aspetta un momento, i numeri dei ciondoli, e quella data sul muro. Forse abbiamo una possibile combinazione per la cassaforte. Corri all'orfanotrofio"
  );

  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - data muro facile");
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
function fetchDataNaziPage12Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 12 facile");
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
      appendDataNaziPage12Facile(data);
      appendPictureNaziPage12Facile(data);
      appendPulsanteNaziPage12Facile(data);
      appendIndizioNaziPage12Facile(data);
      appendOggettiNaziPage12Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage12Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage12Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina12.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1210");
    img_url.setAttribute("height", "400");
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

function appendPulsanteNaziPage12Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina12.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina12.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina12.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
  }
}

function appendIndizioNaziPage12Facile(data) {
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
      data[i].pagina12.indizi.indizio3 +
      " <br> " +
      data[i].pagina12.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage12Facile(data) {
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

//////////////////////PAGE13///////////////////////////////////
function fetchDataNaziPage13Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13 facile");
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
      appendDataNaziPage13Facile(data);
      appendPictureNaziPage13Facile(data);
      appendPulsanteNaziPage13Facile(data);
      appendIndizioNaziPage13Facile(data);
      appendOggettiNaziPage13Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage13Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage13Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1310");
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

function appendPulsanteNaziPage13Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina13.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina13.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina13.pulsanteName2;
    puls3.innerHTML = data[i].pagina13.pulsanteName3;
  }
}

function appendIndizioNaziPage13Facile(data) {
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
      data[i].pagina13.indizi.indizio3 +
      " <br> " +
      data[i].pagina13.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage13Facile(data) {
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
function apriCassaforteFac() {
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - pistola e fascicoli");
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
function fetchDataNaziPage14Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 14 facile");
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
      appendDataNaziPage14Facile(data);
      appendPictureNaziPage14Facile(data);
      appendPulsanteNaziPage14Facile(data);
      appendIndizioNaziPage14Facile(data);
      appendOggettiNaziPage14Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage14Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage14Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina14.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1410");
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

function appendPulsanteNaziPage14Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina14.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
  }
}

function appendIndizioNaziPage14Facile(data) {
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
      data[i].pagina14.indizi.indizio3 +
      " <br> " +
      data[i].pagina14.indizi.indizio4 +
      " <br> " +
      data[i].pagina14.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage14Facile(data) {
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

//////////////////////PAGE15///////////////////////////////////
function fetchDataNaziPage15Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 15 facile");
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
      appendDataNaziPage15Facile(data);
      appendPictureNaziPage15Facile(data);
      appendPulsanteNaziPage15Facile(data);
      appendIndizioNaziPage15Facile(data);
      appendOggettiNaziPage15Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage15Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage15Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina15.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1510");
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

function appendPulsanteNaziPage15Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina15.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina15.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina15.pulsanteName;
    puls2.innerHTML = data[i].pagina15.pulsanteName2;
  }
}

function appendIndizioNaziPage15Facile(data) {
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
      data[i].pagina15.indizi.indizio4 +
      " <br> " +
      data[i].pagina15.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage15Facile(data) {
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

//////////////////////PAGE16///////////////////////////////////
function fetchDataNaziPage16Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 16 facile");
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
      appendDataNaziPage16Facile(data);
      appendPictureNaziPage16Facile(data);
      appendPulsanteNaziPage16Facile(data);
      appendIndizioNaziPage16Facile(data);
      appendOggettiNaziPage16Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage16Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage16Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina16.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1610");
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

function appendPulsanteNaziPage16Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina16.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina16.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina16.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
    puls3.innerHTML = data[i].pagina16.pulsanteName3;
  }
}

function appendIndizioNaziPage16Facile(data) {
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
      data[i].pagina16.indizi.indizio4 +
      " <br> " +
      data[i].pagina16.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage16Facile(data) {
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
function spiegaFattiFac() {
  alert(
    "Lanci per terra i fascicoli. Sono foto vecchie ma è indubbio che l'uomo che hai operato facesse parte dell'orfanotrofio. La polizia arresta entrambi Dopo qualche settimana in cella vieni scagionato. I detective erano sulle tracce dei bambini cresciuti in quell'orfanotrofio perché cresciuti come spie per riportare in vita il nazismo. Eri stato sospettato di complicità ma ora non più."
  );

  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - pistola e fascicoli");
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

//////////////////////PAGE17///////////////////////////////////
function fetchDataNaziPage17Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 17 facile");
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
      appendDataNaziPage17Facile(data);
      appendPictureNaziPage17Facile(data);
      appendPulsanteNaziPage17Facile(data);
      appendIndizioNaziPage17Facile(data);
      appendOggettiNaziPage17Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina17.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage17Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina17.pulsanteName;
  }
}

function appendIndizioNaziPage17Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17.indizi.indizio1 +
      " <br> " +
      data[i].pagina17.indizi.indizio2 +
      " <br> " +
      data[i].pagina17.indizi.indizio3 +
      " <br> " +
      data[i].pagina17.indizi.indizio4 +
      " <br> " +
      data[i].pagina17.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage17Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE18///////////////////////////////////
function fetchDataNaziPage18Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18 facile");
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
      appendDataNaziPage18Facile(data);
      appendPictureNaziPage18Facile(data);
      appendPulsanteNaziPage18Facile(data);
      appendIndizioNaziPage18Facile(data);
      appendOggettiNaziPage18Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage18Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina18.pulsanteName;
  }
}

function appendIndizioNaziPage18Facile(data) {
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
      data[i].pagina18.indizi.indizio4 +
      " <br> " +
      data[i].pagina18.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage18Facile(data) {
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

//////////////////////PAGE18a1///////////////////////////////////
function fetchDataNaziPage18a1Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18a1 facile");
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
      appendDataNaziPage18a1Facile(data);
      appendPictureNaziPage18a1Facile(data);
      appendPulsanteNaziPage18a1Facile(data);
      appendIndizioNaziPage18a1Facile(data);
      appendOggettiNaziPage18a1Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18a1Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18a1Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina18a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage18a1Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina18a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina18a1.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina18a1.pulsanteName;
    puls2.innerHTML = data[i].pagina18a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina18a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina18a1.pulsanteName4;
  }
}

function appendIndizioNaziPage18a1Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina18a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina18a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina18a1.indizi.indizio4 +
      " <br> " +
      data[i].pagina18a1.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage18a1Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina18a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE18a2///////////////////////////////////
function fetchDataNaziPage18a2Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18a2 facile");
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
      appendDataNaziPage18a2Facile(data);
      appendPictureNaziPage18a2Facile(data);
      appendPulsanteNaziPage18a2Facile(data);
      appendIndizioNaziPage18a2Facile(data);
      appendOggettiNaziPage18a2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18a2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18a2Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina18a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage18a2Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina18a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina18a2.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina18a2.pulsanteName;
    puls2.innerHTML = data[i].pagina18a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina18a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina18a2.pulsanteName4;
  }
}

function appendIndizioNaziPage18a2Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina18a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina18a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina18a2.indizi.indizio4 +
      " <br> " +
      data[i].pagina18a2.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage18a2Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina18a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE18a3///////////////////////////////////
function fetchDataNaziPage18a3Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18a3 facile");
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
      appendDataNaziPage18a3Facile(data);
      appendPictureNaziPage18a3Facile(data);
      appendPulsanteNaziPage18a3Facile(data);
      appendIndizioNaziPage18a3Facile(data);
      appendOggettiNaziPage18a3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18a3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18a3Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina18a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage18a3Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina18a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina18a3.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina18a3.pulsanteName;
    puls2.innerHTML = data[i].pagina18a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina18a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina18a3.pulsanteName4;
  }
}

function appendIndizioNaziPage18a3Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina18a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina18a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina18a3.indizi.indizio4 +
      " <br> " +
      data[i].pagina18a3.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage18a3Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina18a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE19///////////////////////////////////
function fetchDataNaziPage19Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19 facile");
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
      appendDataNaziPage19Facile(data);
      appendPictureNaziPage19Facile(data);
      appendPulsanteNaziPage19Facile(data);
      appendIndizioNaziPage19Facile(data);
      appendOggettiNaziPage19Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage19Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage19Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage19Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina19.pulsanteName;
  }
}

function appendIndizioNaziPage19Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19.indizi.indizio1 +
      " <br> " +
      data[i].pagina19.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage19Facile(data) {
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

//////////////////////PAGE20///////////////////////////////////
function fetchDataNaziPage20Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 20 facile");
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
      appendDataNaziPage20Facile(data);
      appendPictureNaziPage20Facile(data);
      appendPulsanteNaziPage20Facile(data);
      appendIndizioNaziPage20Facile(data);
      appendOggettiNaziPage20Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage20Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage20Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina20.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage20Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina20.pulsanteName;
  }
}

function appendIndizioNaziPage20Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina20.indizi.indizio1 +
      " <br> " +
      data[i].pagina20.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage20Facile(data) {
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
function fetchDataNaziPage21Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 21 facile");
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
      appendDataNaziPage21Facile(data);
      appendPictureNaziPage21Facile(data);
      appendPulsanteNaziPage21Facile(data);
      appendIndizioNaziPage21Facile(data);
      appendOggettiNaziPage21Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage21Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina21.pulsanteName;
  }
}

function appendIndizioNaziPage21Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21.indizi.indizio1 +
      " <br> " +
      data[i].pagina21.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21Facile(data) {
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
function fetchDataNaziPage22Facile() {
  fetch("json/nazi/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22 facile");
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
      appendDataNaziPage22Facile(data);
      appendPictureNaziPage22Facile(data);
      appendPulsanteNaziPage22Facile(data);
      appendIndizioNaziPage22Facile(data);
      appendOggettiNaziPage22Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage22Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage22Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1110");
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

function appendPulsanteNaziPage22Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina22.pulsanteName;
  }
}

function appendIndizioNaziPage22Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22.indizi.indizio1 +
      " <br> " +
      data[i].pagina22.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage22Facile(data) {
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

/////////////////SCHERMATA INIZIALE/////////////
function backHomeFac() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

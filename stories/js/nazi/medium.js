//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function nazilog() {
  console.log("gioco nazi medio");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataNaziPage2Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina2 media");
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
      appendDataNaziPage2Media(data);
      appendPictureNaziPage2Media(data);
      appendPulsanteNaziPage2Media(data);
      appendIndizioNaziPage2Media(data);
      appendOggettiNaziPage2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage2Media(data) {
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

function appendPulsanteNaziPage2Media(data) {
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

function appendIndizioNaziPage2Media(data) {
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

function appendOggettiNaziPage2Media(data) {
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
function cercaSottoLettoMed() {
  alert(
    "trovi una chiave e un foglio di carta con un numero '88', puoi andare avanti"
  );

  fetch("json/nazi/giocoMed.json")
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

  //Medcio apparire tasto avanti
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

function cercaArmadioMed() {
  alert("non trovi nulla");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataNaziPage3Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 medio");
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
      appendDataNaziPage3Media(data);
      appendPictureNaziPage3Media(data);
      appendPulsanteNaziPage3Media(data);
      appendIndizioNaziPage3Media(data);
      appendOggettiNaziPage3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage3Media(data) {
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

function appendPulsanteNaziPage3Media(data) {
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

function appendIndizioNaziPage3Media(data) {
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

function appendOggettiNaziPage3Media(data) {
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
function lockerRoomMed() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti lockerRoom media");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseArmadiettoMed(data);
      openDialogMed();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialogMed() {
    $("#dialog").dialog();
  }

  function chooseArmadiettoMed(data) {
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

function ottantottoMed() {
  alert(
    "Hai aperto l'armadietto. Hai trovato un foglietto di carta con scritto: '2 Agosto 1934 - 30 Aprile 1945' e accanto un ciondolo con un numero 5"
  );
  $("#dialog").dialog("close");
  lockerRoomOKMed();
  document.getElementById("dialog").innerHTML = "";
}

function lockerRoomOKMed() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Locker Room  OK media");
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

  //Medcio apparire tasto avanti
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

function armadiettoNOMed() {
  alert("La chiave non entra nella serratura");
}

//////////////////////PAGE4///////////////////////////////////

function fetchDataNaziPage4Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina4 media");
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
      appendDataNaziPage4Media(data);
      appendPictureNaziPage4Media(data);
      appendPulsanteNaziPage4Media(data);
      appendIndizioNaziPage4Media(data);
      appendOggettiNaziPage4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage4Media(data) {
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

function appendPulsanteNaziPage4Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina4.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina4.pulsanteName;
    puls2.innerHTML = data[i].pagina4.pulsanteName2;
  }

  // console.log(puls);
  //console.log(urlvalue);
  //console.log(stripped);
  // console.log(pulsContainer);
}

function appendIndizioNaziPage4Media(data) {
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

function appendOggettiNaziPage4Media(data) {
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

function fetchDataNaziPage5Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina5 media");
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
      appendDataNaziPage5Media(data);
      appendPictureNaziPage5Media(data);
      appendPulsanteNaziPage5Media(data);
      appendIndizioNaziPage5Media(data);
      appendOggettiNaziPage5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage5Media(data) {
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

function appendPulsanteNaziPage5Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina5.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina5.pulsanteName;
    puls2.innerHTML = data[i].pagina5.pulsanteName2;
  }

  // console.log(puls);
  //console.log(urlvalue);
  //console.log(stripped);
  // console.log(pulsContainer);
}

function appendIndizioNaziPage5Media(data) {
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

function appendOggettiNaziPage5Media(data) {
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

function fetchDataNaziPage6Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina6 media");
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
      appendDataNaziPage6Media(data);
      appendPictureNaziPage6Media(data);
      appendPulsanteNaziPage6Media(data);
      appendIndizioNaziPage6Media(data);
      appendOggettiNaziPage6Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage6Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage6Media(data) {
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
    img_url.innerHTML = data[j].pagina6.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage6Media(data) {
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

function appendIndizioNaziPage6Media(data) {
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

function appendOggettiNaziPage6Media(data) {
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
function cercaCassettoOrafoMed() {
  alert(
    "Hai trovato i proggetti del ciondolo fatti dall'orafo. Nei disegni del ciondolo è raffigurato il numero 4 e accanto viene indicato l'indirizzo di colui che ha chiesto del ciondolo. Rovistando meglio nel cassetto trovi una lampadina. "
  );

  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - cerca nel cassetto medio");
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

  //Medcio apparire tasto avanti
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

function cercaTavoloMed() {
  alert("non trovi nulla");
}

//////////////////////PAGE7///////////////////////////////////

function fetchDataNaziPage7Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina7 media");
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
      appendDataNaziPage7Media(data);
      appendPictureNaziPage7Media(data);
      appendPulsanteNaziPage7Media(data);
      appendIndizioNaziPage7Media(data);
      appendOggettiNaziPage7Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage7Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage7Media(data) {
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

function appendPulsanteNaziPage7Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina7.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
  }
}

function appendIndizioNaziPage7Media(data) {
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

function appendOggettiNaziPage7Media(data) {
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

function fetchDataNaziPage8Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina8 media");
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
      appendDataNaziPage8Media(data);
      appendPictureNaziPage8Media(data);
      appendPulsanteNaziPage8Media(data);
      appendIndizioNaziPage8Media(data);
      appendOggettiNaziPage8Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage8Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage8Media(data) {
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

function appendPulsanteNaziPage8Media(data) {
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

function appendIndizioNaziPage8Media(data) {
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

function appendOggettiNaziPage8Media(data) {
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
function cercaScrivaniaMed() {
  alert(
    "C'è una foto rovinata che ritrae dei bambini. Girandola si intravedono delle scritte non decifrabili. Poco più nascosto, scorci un diario, e sfogliandolo riesci a leggere il nome del suo proprietario. Ti trovi in un vecchio orfanotrofio."
  );

  fetch("json/nazi/giocoMed.json")
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage9Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina9 media");
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
      appendDataNaziPage9Media(data);
      appendPictureNaziPage9Media(data);
      appendPulsanteNaziPage9Media(data);
      appendIndizioNaziPage9Media(data);
      appendOggettiNaziPage9Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage9Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage9Media(data) {
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

function appendPulsanteNaziPage9Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina9.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina9.pulsanteName;
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
  }
}

function appendIndizioNaziPage9Media(data) {
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

function appendOggettiNaziPage9Media(data) {
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
function fetchDataNaziPage10Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 10 Media");
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
      appendDataNaziPage10Media(data);
      appendPictureNaziPage10Media(data);
      appendPulsanteNaziPage10Media(data);
      appendIndizioNaziPage10Media(data);
      appendOggettiNaziPage10Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function cassaforteOK() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti cassaforte  OK Media");
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

  //Medcio apparire tasto avanti
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

function saveNumberMed() {
  //var sel = document.getElementById("cassaUno");
  //var strUser = sel.options[sel.selectedIndex].value;
  //console.log(strUser);
  console.log("ho cliccato il tasto 1");

  aggiungiLabelMed();
}

function saveNumberMed2() {
  console.log("ho cliccato il tasto 2");

  aggiungiLabelMed2();
}

function saveNumberMed3() {
  console.log("ho cliccato il tasto 3");

  aggiungiLabelMed3();
}

function saveNumberMed4() {
  console.log("ho cliccato il tasto 4");

  aggiungiLabelMed4();
}

function saveNumberMed5() {
  console.log("ho cliccato il tasto 5");

  aggiungiLabelMed5();
}

function saveNumberMed6() {
  console.log("ho cliccato il tasto 6");

  aggiungiLabelMed6();
}

function saveNumberMed7() {
  console.log("ho cliccato il tasto 7");

  aggiungiLabelMed7();
}

function saveNumberMed8() {
  console.log("ho cliccato il tasto 8");

  aggiungiLabelMed8();
}

function saveNumberMed9() {
  console.log("ho cliccato il tasto 9");

  aggiungiLabelMed9();
}

function saveNumberMed0() {
  console.log("ho cliccato il tasto 0");

  aggiungiLabelMed0();
}

function aggiungiLabelMed() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed2() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 2");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed3() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 3");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed4() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 4");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed5() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 5");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed6() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 6");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed7() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 7");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed8() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 8");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed9() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 9");
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
    apriCassaforteQuadroMed();
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

function aggiungiLabelMed0() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiLabelMed 0");
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
    apriCassaforteQuadroMed();
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

function apriCassaforteModalMed() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti apriCassaforteModalMed");
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

function appendDataNaziPage10Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage10Media(data) {
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

function appendPulsanteNaziPage10Media(data) {
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

function appendIndizioNaziPage10Media(data) {
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

function appendOggettiNaziPage10Media(data) {
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

function apriCassaforteQuadroMed() {
  console.log("funzione apriCassaforteQuadroMed Media");
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoMed.json")
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage11Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina11 media");
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
      appendDataNaziPage11Media(data);
      appendPictureNaziPage11Media(data);
      appendPulsanteNaziPage11Media(data);
      appendIndizioNaziPage11Media(data);
      appendOggettiNaziPage11Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage11Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage11Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina11.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
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

function appendPulsanteNaziPage11Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina11.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina11.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina11.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina11.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
    puls3.innerHTML = data[i].pagina11.pulsanteName3;
  }
}

function appendIndizioNaziPage11Media(data) {
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

function appendOggettiNaziPage11Media(data) {
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
function leggiLibroMed() {
  alert(
    "Leggendo il libro scopri che il diario appartiene al direttore dell'orfanotrofio. Pochi istanti dopo la losca figura di prima si presenta davnti a te intimando di essere il proprietario di quel diario. Dopo averci parlato ti fa dono di un terzo ciondolo con il numero '9' e ti spiega che in quell'orfanotrofio i bambini venivano educati per divetare spie neonaziste."
  );

  fetch("json/nazi/giocoMed.json")
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage12Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina12 media");
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
      appendDataNaziPage12Media(data);
      appendPictureNaziPage12Media(data);
      appendPulsanteNaziPage12Media(data);
      appendIndizioNaziPage12Media(data);
      appendOggettiNaziPage12Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage12Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage12Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina12.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
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

function appendPulsanteNaziPage12Media(data) {
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

function appendIndizioNaziPage12Media(data) {
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

function appendOggettiNaziPage12Media(data) {
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

function fetchDataNaziPage13Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina13 media");
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
      appendDataNaziPage13Media(data);
      appendPictureNaziPage13Media(data);
      appendPulsanteNaziPage13Media(data);
      appendIndizioNaziPage13Media(data);
      appendOggettiNaziPage13Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage13Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage13Media(data) {
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

function appendPulsanteNaziPage13Media(data) {
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

    //puls.innerHTML = data[i].pagina13.pulsanteName;
    puls2.innerHTML = data[i].pagina13.pulsanteName2;
    puls3.innerHTML = data[i].pagina13.pulsanteName3;
  }
}

function appendIndizioNaziPage13Media(data) {
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

function appendOggettiNaziPage13Media(data) {
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
function lampadinaAccesaMed() {
  alert("Sei riuscito ad avvitare la lampadina. Ora puoi accendere la luce");

  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - accendi la luce media");
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage14Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina14 media");
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
      appendDataNaziPage14Media(data);
      appendPictureNaziPage14Media(data);
      appendPulsanteNaziPage14Media(data);
      appendIndizioNaziPage14Media(data);
      appendOggettiNaziPage14Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage14Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage14Media(data) {
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

function appendPulsanteNaziPage14Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina14.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina14.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
    puls3.innerHTML = data[i].pagina14.pulsanteName3;
  }
}

function appendIndizioNaziPage14Media(data) {
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

function appendOggettiNaziPage14Media(data) {
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
function dataMuroMed() {
  alert(
    "Aspetta un momento, i numeri dei ciondoli, e quella data sul muro. Forse abbiamo una possibile combinazione per la cassaforte. Corri all'orfanotrofio"
  );

  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - data muro media");
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

  //Medcio apparire tasto avanti
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

//////////////////////PAGE15///////////////////////////////////

function fetchDataNaziPage15Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina15 media");
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
      appendDataNaziPage15Media(data);
      appendPictureNaziPage15Media(data);
      appendPulsanteNaziPage15Media(data);
      appendIndizioNaziPage15Media(data);
      appendOggettiNaziPage15Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage15Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage15Media(data) {
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

function appendPulsanteNaziPage15Media(data) {
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

function appendIndizioNaziPage15Media(data) {
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

function appendOggettiNaziPage15Media(data) {
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

function fetchDataNaziPage16Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina16 media");
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
      appendDataNaziPage16Media(data);
      appendPictureNaziPage16Media(data);
      appendPulsanteNaziPage16Media(data);
      appendIndizioNaziPage16Media(data);
      appendOggettiNaziPage16Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage16Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage16Media(data) {
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

function appendPulsanteNaziPage16Media(data) {
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

    //puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
    puls3.innerHTML = data[i].pagina16.pulsanteName3;
  }
}

function appendIndizioNaziPage16Media(data) {
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

function appendOggettiNaziPage16Media(data) {
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
function apriCassaforteMed() {
  alert(
    "Hai trovato una pistola e un fascicolo con il nome dei vari bambini cresciuti nella villa. Come li raccogli senti dei passi provenire da dietro di te."
  );

  fetch("json/nazi/giocoMed.json")
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage17Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina17 media");
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
      appendDataNaziPage17Media(data);
      appendPictureNaziPage17Media(data);
      appendPulsanteNaziPage17Media(data);
      appendIndizioNaziPage17Media(data);
      appendOggettiNaziPage17Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage17Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage17Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
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

function appendPulsanteNaziPage17Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina17.pulsanteName;
    puls2.innerHTML = data[i].pagina17.pulsanteName2;
  }
}

function appendIndizioNaziPage17Media(data) {
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

function appendOggettiNaziPage17Media(data) {
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

function fetchDataNaziPage18Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina18 media");
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
      appendDataNaziPage18Media(data);
      appendPictureNaziPage18Media(data);
      appendPulsanteNaziPage18Media(data);
      appendIndizioNaziPage18Media(data);
      appendOggettiNaziPage18Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage18Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage18Media(data) {
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

function appendPulsanteNaziPage18Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina18.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
  }
}

function appendIndizioNaziPage18Media(data) {
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

function appendOggettiNaziPage18Media(data) {
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

function fetchDataNaziPage19Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina19 media");
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
      appendDataNaziPage19Media(data);
      appendPictureNaziPage19Media(data);
      appendPulsanteNaziPage19Media(data);
      appendIndizioNaziPage19Media(data);
      appendOggettiNaziPage19Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage19Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage19Media(data) {
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

function appendPulsanteNaziPage19Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina19.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
    puls3.innerHTML = data[i].pagina19.pulsanteName3;
  }
}

function appendIndizioNaziPage19Media(data) {
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
      data[i].pagina19.indizi.indizio4 +
      " <br> " +
      data[i].pagina19.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage19Media(data) {
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
function spiegaFattiMed() {
  alert(
    "Lanci per terra i fascicoli. Sono foto vecchie ma è indubbio che l'uomo che hai operato Medesse parte dell'orfanotrofio. La polizia arresta entrambi Dopo qualche settimana in cella vieni scagionato. I detective erano sulle tracce dei bambini cresciuti in quell'orfanotrofio perché cresciuti come spie per riportare in vita il nazismo. Eri stato sospettato di complicità ma ora non più."
  );

  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - luci rosse medio");
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

  //Medcio apparire tasto avanti
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

function fetchDataNaziPage20Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina20 media");
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
      appendDataNaziPage20Media(data);
      appendPictureNaziPage20Media(data);
      appendPulsanteNaziPage20Media(data);
      appendIndizioNaziPage20Media(data);
      appendOggettiNaziPage20Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage20Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage20Media(data) {
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

function appendPulsanteNaziPage20Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina20.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
  }
}

function appendIndizioNaziPage20Media(data) {
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

function appendOggettiNaziPage20Media(data) {
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

function fetchDataNaziPage21Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina21 media");
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
      appendDataNaziPage21Media(data);
      appendPictureNaziPage21Media(data);
      appendPulsanteNaziPage21Media(data);
      appendIndizioNaziPage21Media(data);
      appendOggettiNaziPage21Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21Media(data) {
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

function appendPulsanteNaziPage21Media(data) {
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

function appendIndizioNaziPage21Media(data) {
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

function appendOggettiNaziPage21Media(data) {
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

//////////////////////PAGE21a1///////////////////////////////////
function fetchDataNaziPage21a1Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21a1");
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
      appendDataNaziPage21a1Media(data);
      appendPictureNaziPage21a1Media(data);
      appendPulsanteNaziPage21a1Media(data);
      appendIndizioNaziPage21a1Media(data);
      appendOggettiNaziPage21a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21a1Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21a1Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina21a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21a1.pulsanteFunc4);

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
    puls.innerHTML = data[i].pagina21a1.pulsanteName;
    puls2.innerHTML = data[i].pagina21a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina21a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina21a1.pulsanteName4;
  }
}

function appendIndizioNaziPage21a1Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina21a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina21a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina21a1.indizi.indizio4 +
      " <br> " +
      data[i].pagina21a1.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21a1Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE21a2///////////////////////////////////
function fetchDataNaziPage21a2Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21a2");
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
      appendDataNaziPage21a2Media(data);
      appendPictureNaziPage21a2Media(data);
      appendPulsanteNaziPage21a2Media(data);
      appendIndizioNaziPage21a2Media(data);
      appendOggettiNaziPage21a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21a2Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21a2Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina21a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21a2.pulsanteFunc4);

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
    puls.innerHTML = data[i].pagina21a2.pulsanteName;
    puls2.innerHTML = data[i].pagina21a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina21a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina21a2.pulsanteName4;
  }
}

function appendIndizioNaziPage21a2Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina21a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina21a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina21a2.indizi.indizio4 +
      " <br> " +
      data[i].pagina21a2.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21a2Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE21a3///////////////////////////////////
function fetchDataNaziPage21a3Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21a3");
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
      appendDataNaziPage21a3Media(data);
      appendPictureNaziPage21a3Media(data);
      appendPulsanteNaziPage21a3Media(data);
      appendIndizioNaziPage21a3Media(data);
      appendOggettiNaziPage21a3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21a3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21a3Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21a3Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina21a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21a3.pulsanteFunc4);

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
    puls.innerHTML = data[i].pagina21a3.pulsanteName;
    puls2.innerHTML = data[i].pagina21a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina21a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina21a3.pulsanteName4;
  }
}

function appendIndizioNaziPage21a3Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina21a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina21a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina21a3.indizi.indizio4 +
      " <br> " +
      data[i].pagina21a3.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21a3Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE21a4///////////////////////////////////
function fetchDataNaziPage21a4Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21a4");
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
      appendDataNaziPage21a4Media(data);
      appendPictureNaziPage21a4Media(data);
      appendPulsanteNaziPage21a4Media(data);
      appendIndizioNaziPage21a4Media(data);
      appendOggettiNaziPage21a4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21a4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21a4Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21a4Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina21a4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21a4.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21a4.pulsanteFunc4);

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
    puls.innerHTML = data[i].pagina21a4.pulsanteName;
    puls2.innerHTML = data[i].pagina21a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina21a4.pulsanteName3;
    puls4.innerHTML = data[i].pagina21a4.pulsanteName4;
  }
}

function appendIndizioNaziPage21a4Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina21a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina21a4.indizi.indizio3 +
      " <br> " +
      data[i].pagina21a4.indizi.indizio4 +
      " <br> " +
      data[i].pagina21a4.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21a4Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21a4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE21a5///////////////////////////////////
function fetchDataNaziPage21a5Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pag 21a5");
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
      appendDataNaziPage21a5Media(data);
      appendPictureNaziPage21a5Media(data);
      appendPulsanteNaziPage21a5Media(data);
      appendIndizioNaziPage21a5Media(data);
      appendOggettiNaziPage21a5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage21a5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage21a5Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina21a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteNaziPage21a5Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue = JSON.stringify(data[i].pagina21a5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21a5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21a5.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21a5.pulsanteFunc4);

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
    puls.innerHTML = data[i].pagina21a5.pulsanteName;
    puls2.innerHTML = data[i].pagina21a5.pulsanteName2;
    puls3.innerHTML = data[i].pagina21a5.pulsanteName3;
    puls4.innerHTML = data[i].pagina21a5.pulsanteName4;
  }
}

function appendIndizioNaziPage21a5Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina21a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina21a5.indizi.indizio3 +
      " <br> " +
      data[i].pagina21a5.indizi.indizio4 +
      " <br> " +
      data[i].pagina21a5.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage21a5Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21a5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("La risposta non è esatta");
}

//////////////////////PAGE22///////////////////////////////////

function fetchDataNaziPage22Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina22 media");
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
      appendDataNaziPage22Media(data);
      appendPictureNaziPage22Media(data);
      appendPulsanteNaziPage22Media(data);
      appendIndizioNaziPage22Media(data);
      appendOggettiNaziPage22Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage22Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage22Media(data) {
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

function appendPulsanteNaziPage22Media(data) {
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

function appendIndizioNaziPage22Media(data) {
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

function appendOggettiNaziPage22Media(data) {
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

//////////////////////PAGE23///////////////////////////////////

function fetchDataNaziPage23Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina23 media");
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
      appendDataNaziPage23Media(data);
      appendPictureNaziPage23Media(data);
      appendPulsanteNaziPage23Media(data);
      appendIndizioNaziPage23Media(data);
      appendOggettiNaziPage23Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage23Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage23Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina23.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
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

function appendPulsanteNaziPage23Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina23.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina23.pulsanteName;
  }
}

function appendIndizioNaziPage23Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina23.indizi.indizio1 +
      " <br> " +
      data[i].pagina23.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage23Media(data) {
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

function fetchDataNaziPage24Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina24 media");
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
      appendDataNaziPage24Media(data);
      appendPictureNaziPage24Media(data);
      appendPulsanteNaziPage24Media(data);
      appendIndizioNaziPage24Media(data);
      appendOggettiNaziPage24Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage24Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage24Media(data) {
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

function appendPulsanteNaziPage24Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina24.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina24.pulsanteName;
  }
}

function appendIndizioNaziPage24Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24.indizi.indizio1 +
      " <br> " +
      data[i].pagina24.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage24Media(data) {
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

//////////////////////PAGE25///////////////////////////////////

function fetchDataNaziPage25Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina25 media");
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
      appendDataNaziPage25Media(data);
      appendPictureNaziPage25Media(data);
      appendPulsanteNaziPage25Media(data);
      appendIndizioNaziPage25Media(data);
      appendOggettiNaziPage25Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage25Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage25Media(data) {
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

function appendPulsanteNaziPage25Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina25.pulsanteName;
  }
}

function appendIndizioNaziPage25Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25.indizi.indizio1 +
      " <br> " +
      data[i].pagina25.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage25Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE26///////////////////////////////////

function fetchDataNaziPage26Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina26 media");
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
      appendDataNaziPage26Media(data);
      appendPictureNaziPage26Media(data);
      appendPulsanteNaziPage26Media(data);
      appendIndizioNaziPage26Media(data);
      appendOggettiNaziPage26Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage26Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage26Media(data) {
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

function appendPulsanteNaziPage26Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina26.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina26.pulsanteName;
  }
}

function appendIndizioNaziPage26Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina26.indizi.indizio1 +
      " <br> " +
      data[i].pagina26.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage26Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina26.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina26.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE27///////////////////////////////////

function fetchDataNaziPage27Media() {
  fetch("json/nazi/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina27 media");
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
      appendDataNaziPage27Media(data);
      appendPictureNaziPage27Media(data);
      appendPulsanteNaziPage27Media(data);
      appendIndizioNaziPage27Media(data);
      appendOggettiNaziPage27Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataNaziPage27Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureNaziPage27Media(data) {
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

function appendPulsanteNaziPage27Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina27.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina27.pulsanteName;
  }
}

function appendIndizioNaziPage27Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina27.indizi.indizio1 +
      " <br> " +
      data[i].pagina27.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiNaziPage27Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina27.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina27.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

/////////////////SCHERMATA INIZIALE/////////////
function backHomeMed() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

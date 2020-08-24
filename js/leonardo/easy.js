//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function leolog() {
  console.log("gioco leo");
}

//////////////////////PAGE2///////////////////////////////////
function fetchDataLeoPage2Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 2 facile");
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
      appendDataLeoPage2Facile(data);
      appendPictureLeoPage2Facile(data);
      appendPulsanteLeoPage2Facile(data);
      appendIndizioLeoPage2Facile(data);
      appendOggettiLeoPage2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage2Facile(data) {
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

function appendPulsanteLeoPage2Facile(data) {
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
}

function appendIndizioLeoPage2Facile(data) {
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

function appendOggettiLeoPage2Facile(data) {
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
function ispezionaFac() {
  alert(
    "Il quadro non sembra essere l'originale. Qualcuno deve averlo rubato e sostituito con un falso. Per terra qualcuno ha lasciato delle fiale accanto al quadro"
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ispeziona quadro facile");
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

function leggiTarghettaFac() {
  alert(
    "'La Dama con l'ermellino è un dipinto a olio su tavola (54 ×40 cm) di Leonardo da Vinci, databile al 1488-1490. La donna ritratta va quasi sicuramente identificata con Cecilia Gallerani.'"
  );
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataLeoPage3Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage3Facile(data);
      appendPictureLeoPage3Facile(data);
      appendPulsanteLeoPage3Facile(data);
      appendIndizioLeoPage3Facile(data);
      appendOggettiLeoPage3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage3Facile(data) {
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

function appendPulsanteLeoPage3Facile(data) {
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

function appendIndizioLeoPage3Facile(data) {
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

function appendOggettiLeoPage3Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function esponiFattiQuadriFac() {
  alert(
    "La donna delle pulizie è sotto chock e ritiene che l'ermellino del quadro abbia preso vita e l'abbia aggredito per poi scappare. Tuttavia il quadro esposto non è l'originale. Una tua semplice occhiata da esperto pittore ti ha permesso di notare la falsità di quello esposto."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - esponi fatti facile");
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

//////////////////////PAGE4///////////////////////////////////
function fetchDataLeoPage4Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 4 facile");
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
      appendDataLeoPage4Facile(data);
      appendPictureLeoPage4Facile(data);
      appendPulsanteLeoPage4Facile(data);
      appendIndizioLeoPage4Facile(data);
      appendOggettiLeoPage4Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage4Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage4Facile(data) {
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

function appendPulsanteLeoPage4Facile(data) {
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
}

function appendIndizioLeoPage4Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina4.indizi.indizio1 +
      " <br> " +
      data[i].pagina4.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage4Facile(data) {
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
function fetchDataLeoPage5Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 5 facile");
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
      appendDataLeoPage5Facile(data);
      appendPictureLeoPage5Facile(data);
      appendPulsanteLeoPage5Facile(data);
      appendIndizioLeoPage5Facile(data);
      appendOggettiLeoPage5Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage5Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage5Facile(data) {
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

function appendPulsanteLeoPage5Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina5.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina5.pulsanteName;
    puls2.innerHTML = data[i].pagina5.pulsanteName2;
    puls3.innerHTML = data[i].pagina5.pulsanteName3;
  }
}

function appendIndizioLeoPage5Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina5.indizi.indizio1 +
      " <br> " +
      data[i].pagina5.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage5Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function cantaFac() {
  alert(
    "Mentre canti riesci ad attirare l'attenzione di tutti i presenti, tranne un gruppetto assorti nel loro confabulare. Riesci persino a vederli in volto"
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - canta facile");
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
      var urlvalue = JSON.stringify(data[i].pagina5.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina5.pulsanteName;
    }
  }
}

//////////////////////PAGE6///////////////////////////////////
function fetchDataLeoPage6Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6 facile");
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
      appendDataLeoPage6Facile(data);
      appendPictureLeoPage6Facile(data);
      appendPulsanteLeoPage6Facile(data);
      appendIndizioLeoPage6Facile(data);
      appendOggettiLeoPage6Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6Facile(data) {
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

function appendPulsanteLeoPage6Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6.pulsanteName;
    puls2.innerHTML = data[i].pagina6.pulsanteName2;
  }
}

function appendIndizioLeoPage6Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6.indizi.indizio1 +
      " <br> " +
      data[i].pagina6.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6Facile(data) {
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

//////////////////////PAGE7///////////////////////////////////
function fetchDataLeoPage7Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7 facile");
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
      appendDataLeoPage7Facile(data);
      appendPictureLeoPage7Facile(data);
      appendPulsanteLeoPage7Facile(data);
      appendIndizioLeoPage7Facile(data);
      appendOggettiLeoPage7Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage7Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage7Facile(data) {
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

function appendPulsanteLeoPage7Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina7.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina7.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
    puls3.innerHTML = data[i].pagina7.pulsanteName3;
  }
}

function appendIndizioLeoPage7Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7.indizi.indizio1 +
      " <br> " +
      data[i].pagina7.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage7Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaTavernaFac() {
  alert(
    "Mentre cerchi, passa la cameriera chiedendoti se fossi un amico del gruppetto appena uscito. Uno di loro si è scordato le chiavi dell'albergo, e te le allunga."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - chiavi trovate taverna facile");
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
      var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina7.pulsanteName;
    }
  }
}

//////////////////////PAGE8///////////////////////////////////
function fetchDataLeoPage8Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 8 facile");
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
      appendDataLeoPage8Facile(data);
      appendPictureLeoPage8Facile(data);
      appendPulsanteLeoPage8Facile(data);
      appendIndizioLeoPage8Facile(data);
      appendOggettiLeoPage8Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage8Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage8Facile(data) {
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

function appendPulsanteLeoPage8Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina8.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina8.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina8.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
  }
}

function appendIndizioLeoPage8Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina8.indizi.indizio1 +
      " <br> " +
      data[i].pagina8.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage8Facile(data) {
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

//////////////////////PAGE9///////////////////////////////////
function fetchDataLeoPage9Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage9Facile(data);
      appendPictureLeoPage9Facile(data);
      appendPulsanteLeoPage9Facile(data);
      appendIndizioLeoPage9Facile(data);
      appendOggettiLeoPage9Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage9Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage9Facile(data) {
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

function appendPulsanteLeoPage9Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina9.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina9.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina9.pulsanteName;
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
    puls3.innerHTML = data[i].pagina9.pulsanteName3;
  }
}

function appendIndizioLeoPage9Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina9.indizi.indizio1 +
      " <br> " +
      data[i].pagina9.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage9Facile(data) {
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
function entraCameraFac() {
  alert("Usa la chiave ed entra nella stanza.");

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra camera facile");
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
function fetchDataLeoPage10Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage10Facile(data);
      appendPictureLeoPage10Facile(data);
      appendPulsanteLeoPage10Facile(data);
      appendIndizioLeoPage10Facile(data);
      appendOggettiLeoPage10Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage10Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage10Facile(data) {
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

function appendPulsanteLeoPage10Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina10.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina10.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina10.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina10.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
    puls3.innerHTML = data[i].pagina10.pulsanteName3;
    puls4.innerHTML = data[i].pagina10.pulsanteName4;
  }
}

function appendIndizioLeoPage10Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina10.indizi.indizio1 +
      " <br> " +
      data[i].pagina10.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage10Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaLettoAlbFac() {
  alert(
    "Hai trovato un foglio con scritto il nome di quattro quadri: - La Dama con l'ermellino - La Gioconda - l'Annunciazione - Uomo Vitruviano. E sulla scritta della Dama con l'ermellino c'è segnata una grossa X sopra, come per indicare che la prima operazione fosse stata eseguita con successo."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - foglio quadri facile");
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

function cercaCassettoAlbFac() {
  alert("qui non c'è niente, cerca da un'altra parte");
}

//////////////////////PAGE11///////////////////////////////////
function fetchDataLeoPage11Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage11Facile(data);
      appendPictureLeoPage11Facile(data);
      appendPulsanteLeoPage11Facile(data);
      appendIndizioLeoPage11Facile(data);
      appendOggettiLeoPage11Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage11Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage11Facile(data) {
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

function appendPulsanteLeoPage11Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina11.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina11.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina11.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
  }
}

function appendIndizioLeoPage11Facile(data) {
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

function appendOggettiLeoPage11Facile(data) {
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

//////////////////////PAGE12///////////////////////////////////
function fetchDataLeoPage12Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage12Facile(data);
      appendPictureLeoPage12Facile(data);
      appendPulsanteLeoPage12Facile(data);
      appendIndizioLeoPage12Facile(data);
      appendOggettiLeoPage12Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage12Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage12Facile(data) {
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

function appendPulsanteLeoPage12Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina12.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina12.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina12.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina12.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    puls3.innerHTML = data[i].pagina12.pulsanteName3;
  }
}

function appendIndizioLeoPage12Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage12Facile(data) {
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
function compraBigliettoFac() {
  alert(
    "Il primo treno disponibile per la Francia parte tra un'ora. Devi arrivare prima dei ladri di quadri e sventare i loro piani."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - compro biglietto facile");
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
function fetchDataLeoPage13Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage13Facile(data);
      appendPictureLeoPage13Facile(data);
      appendPulsanteLeoPage13Facile(data);
      appendIndizioLeoPage13Facile(data);
      appendOggettiLeoPage13Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13Facile(data) {
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

function appendPulsanteLeoPage13Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina13.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina13.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
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

function appendIndizioLeoPage13Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13Facile(data) {
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
function usaBigliettoFac() {
  alert("Usa il biglietto per salire sul treno");

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - sali treno facile");
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
function fetchDataLeoPage14Facile() {
  fetch("json/leo/giocoFac.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage14Facile(data);
      appendPictureLeoPage14Facile(data);
      appendPulsanteLeoPage14Facile(data);
      appendIndizioLeoPage14Facile(data);
      appendOggettiLeoPage14Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage14Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage14Facile(data) {
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

function appendPulsanteLeoPage14Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina14.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
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

function appendIndizioLeoPage14Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage14Facile(data) {
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
function louvreFac() {
  alert("Devi sventare i piani dei delinquenti");

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - vai all'Louvre facile");
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

//////////////////////PAGE15///////////////////////////////////
function fetchDataLeoPage15Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage15Facile(data);
      appendPictureLeoPage15Facile(data);
      appendPulsanteLeoPage15Facile(data);
      appendIndizioLeoPage15Facile(data);
      appendOggettiLeoPage15Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage15Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage15Facile(data) {
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

function appendPulsanteLeoPage15Facile(data) {
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

function appendIndizioLeoPage15Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage15Facile(data) {
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
function fetchDataLeoPage16Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage16Facile(data);
      appendPictureLeoPage16Facile(data);
      appendPulsanteLeoPage16Facile(data);
      appendIndizioLeoPage16Facile(data);
      appendOggettiLeoPage16Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage16Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage16Facile(data) {
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

function appendPulsanteLeoPage16Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina16.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina16.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina16.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    // var puls = document.createElement("button");
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

function appendIndizioLeoPage16Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage16Facile(data) {
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
function targhettaGiocondaFac() {
  alert(
    "La gioconda è un dipinto olio su tavola di legno (77x53) di Leonardo Da Vinci, databile al 1503-1504."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - gioconda facile");
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
function fetchDataLeoPage17Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage17Facile(data);
      appendPictureLeoPage17Facile(data);
      appendPulsanteLeoPage17Facile(data);
      appendIndizioLeoPage17Facile(data);
      appendOggettiLeoPage17Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage17Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage17Facile(data) {
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

function appendPulsanteLeoPage17Facile(data) {
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

function appendIndizioLeoPage17Facile(data) {
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
      data[i].pagina17.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage17Facile(data) {
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
function fetchDataLeoPage18Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage18Facile(data);
      appendPictureLeoPage18Facile(data);
      appendPulsanteLeoPage18Facile(data);
      appendIndizioLeoPage18Facile(data);
      appendOggettiLeoPage18Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage18Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage18Facile(data) {
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

function appendPulsanteLeoPage18Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina18.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    var puls4 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina18.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
    puls3.innerHTML = data[i].pagina18.pulsanteName3;
    puls4.innerHTML = data[i].pagina18.pulsanteName4;
  }
}

function appendIndizioLeoPage18Facile(data) {
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

function appendOggettiLeoPage18Facile(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function studiaQuadroFac() {
  alert(
    "L'Uomo Vitruviano è un disegno fatto a penna e inchistro su carta di Leonardo Da Vinci con diemsione 35 x 26 cm"
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - vitruviano facile");
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
      var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina18.pulsanteName;
    }
  }
}

function compraStrumentiFac() {
  alert("Acquista penna, calamaio e il foglio per creare il dipinto");
}

//////////////////////PAGE19///////////////////////////////////
function fetchDataLeoPage19Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage19Facile(data);
      appendPictureLeoPage19Facile(data);
      appendPulsanteLeoPage19Facile(data);
      appendIndizioLeoPage19Facile(data);
      appendOggettiLeoPage19Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage19Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage19Facile(data) {
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

function appendPulsanteLeoPage19Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina19.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
  }
}

function appendIndizioLeoPage19Facile(data) {
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

function appendOggettiLeoPage19Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina19.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE20///////////////////////////////////
function fetchDataLeoPage20Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage20Facile(data);
      appendPictureLeoPage20Facile(data);
      appendPulsanteLeoPage20Facile(data);
      appendIndizioLeoPage20Facile(data);
      appendOggettiLeoPage20Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage20Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage20Facile(data) {
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

function appendPulsanteLeoPage20Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina20.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina20.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
    puls3.innerHTML = data[i].pagina20.pulsanteName3;
  }
}

function appendIndizioLeoPage20Facile(data) {
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

function appendOggettiLeoPage20Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina20.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina20.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina20.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function dipingiFac() {
  alert("Usa la penna con il calamaio e il foglio per dipingere il quadro");

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - dipingi facile");
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
      var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina20.pulsanteName;
    }
  }
}

//////////////////////PAGE21///////////////////////////////////
function fetchDataLeoPage21Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage21Facile(data);
      appendPictureLeoPage21Facile(data);
      appendPulsanteLeoPage21Facile(data);
      appendIndizioLeoPage21Facile(data);
      appendOggettiLeoPage21Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage21Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage21Facile(data) {
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

function appendPulsanteLeoPage21Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina21.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    puls3.innerHTML = data[i].pagina21.pulsanteName3;
  }
}

function appendIndizioLeoPage21Facile(data) {
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

function appendOggettiLeoPage21Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina21.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina21.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina21.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function leggiFac() {
  alert(
    "E' stato rubato un terzo dipinto nell'ultima settimana. Un'altra opera di Leonardo da vinci è scomparsa ieri notte e i testimoni accusano di essere stati aggrediti dall'Arcangelo Gabriele. Il dipinto di cui si tratta è l'Annunciazione, tenuto nella Galleria degli Uffizzi a Firenze. Dipinto a olio e tempera su tavola (98cm x 2,17m) datato tra il 1472-1475..."
  );

  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - leggi facile");
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
      var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina21.pulsanteName;
    }
  }
}

//////////////////////PAGE22///////////////////////////////////
function fetchDataLeoPage22Facile() {
  fetch("json/leo/giocoFac.json")
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
      appendDataLeoPage22Facile(data);
      appendPictureLeoPage22Facile(data);
      appendPulsanteLeoPage22Facile(data);
      appendIndizioLeoPage22Facile(data);
      appendOggettiLeoPage22Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22Facile(data) {
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

function appendPulsanteLeoPage22Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina22.pulsanteName;
    puls2.innerHTML = data[i].pagina22.pulsanteName2;
  }
}

function appendIndizioLeoPage22Facile(data) {
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
      data[i].pagina22.indizi.indizio5 +
      " <br> " +
      data[i].pagina22.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE23///////////////////////////////////
function fetchDataLeoPage23Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 23 facile");
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
      appendDataLeoPage23Facile(data);
      appendPictureLeoPage23Facile(data);
      appendPulsanteLeoPage23Facile(data);
      appendIndizioLeoPage23Facile(data);
      appendOggettiLeoPage23Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage23Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage23Facile(data) {
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

function appendPulsanteLeoPage23Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina23.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina23.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina23.pulsanteName;
    puls2.innerHTML = data[i].pagina23.pulsanteName2;
  }
}

function appendIndizioLeoPage23Facile(data) {
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
      data[i].pagina23.indizi.indizio5 +
      " <br> " +
      data[i].pagina23.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage23Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina23.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina23.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina23.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE24///////////////////////////////////
function fetchDataLeoPage24Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24 facile");
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
      appendDataLeoPage24Facile(data);
      appendPictureLeoPage24Facile(data);
      appendPulsanteLeoPage24Facile(data);
      appendIndizioLeoPage24Facile(data);
      appendOggettiLeoPage24Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24Facile(data) {
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

function appendPulsanteLeoPage24Facile(data) {
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

function appendIndizioLeoPage24Facile(data) {
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
      data[i].pagina24.indizi.indizio5 +
      " <br> " +
      data[i].pagina24.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina24.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE24a1///////////////////////////////////
function fetchDataLeoPage24a1Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24a1");
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
      appendDataLeoPage24a1Facile(data);
      appendPictureLeoPage24a1Facile(data);
      appendPulsanteLeoPage24a1Facile(data);
      appendIndizioLeoPage24a1Facile(data);
      appendOggettiLeoPage24a1Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24a1Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24a1Facile(data) {
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

function appendPulsanteLeoPage24a1Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina24a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a1.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina24a1.pulsanteName;
    puls2.innerHTML = data[i].pagina24a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a1.pulsanteName4;
  }
}

function appendIndizioLeoPage24a1Facile(data) {
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
      data[i].pagina24a1.indizi.indizio5 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio6 +
      " <br> " +
      data[i].pagina24a1.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24a1Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a1.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina24a1.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE24a2///////////////////////////////////
function fetchDataLeoPage24a2Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24a2");
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
      appendDataLeoPage24a2Facile(data);
      appendPictureLeoPage24a2Facile(data);
      appendPulsanteLeoPage24a2Facile(data);
      appendIndizioLeoPage24a2Facile(data);
      appendOggettiLeoPage24a2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24a2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24a2Facile(data) {
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

function appendPulsanteLeoPage24a2Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina24a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a2.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina24a2.pulsanteName;
    puls2.innerHTML = data[i].pagina24a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a2.pulsanteName4;
  }
}

function appendIndizioLeoPage24a2Facile(data) {
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
      data[i].pagina24a2.indizi.indizio5 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio6 +
      " <br> " +
      data[i].pagina24a2.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24a2Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a2.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina24a2.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE24a3///////////////////////////////////
function fetchDataLeoPage24a3Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24a3");
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
      appendDataLeoPage24a3Facile(data);
      appendPictureLeoPage24a3Facile(data);
      appendPulsanteLeoPage24a3Facile(data);
      appendIndizioLeoPage24a3Facile(data);
      appendOggettiLeoPage24a3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24a3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24a3Facile(data) {
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

function appendPulsanteLeoPage24a3Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina24a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina24a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina24a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina24a3.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina24a3.pulsanteName;
    puls2.innerHTML = data[i].pagina24a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina24a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina24a3.pulsanteName4;
  }
}

function appendIndizioLeoPage24a3Facile(data) {
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
      data[i].pagina24a3.indizi.indizio5 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio6 +
      " <br> " +
      data[i].pagina24a3.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24a3Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina24a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina24a3.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina24a3.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25///////////////////////////////////
function fetchDataLeoPage25Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25");
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
      appendDataLeoPage25Facile(data);
      appendPictureLeoPage25Facile(data);
      appendPulsanteLeoPage25Facile(data);
      appendIndizioLeoPage25Facile(data);
      appendOggettiLeoPage25Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25Facile(data) {
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

function appendPulsanteLeoPage25Facile(data) {
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

function appendIndizioLeoPage25Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25.indizi.indizio1 +
      " <br> " +
      data[i].pagina25.indizi.indizio2 +
      " <br> " +
      data[i].pagina25.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE26///////////////////////////////////
function fetchDataLeoPage26Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 26");
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
      appendDataLeoPage26Facile(data);
      appendPictureLeoPage26Facile(data);
      appendPulsanteLeoPage26Facile(data);
      appendIndizioLeoPage26Facile(data);
      appendOggettiLeoPage26Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage26Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage26Facile(data) {
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

function appendPulsanteLeoPage26Facile(data) {
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

function appendIndizioLeoPage26Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina26.indizi.indizio1 +
      " <br> " +
      data[i].pagina26.indizi.indizio2 +
      " <br> " +
      data[i].pagina26.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage26Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina26.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina26.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina26.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE27///////////////////////////////////
function fetchDataLeoPage27Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 27");
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
      appendDataLeoPage27Facile(data);
      appendPictureLeoPage27Facile(data);
      appendPulsanteLeoPage27Facile(data);
      appendIndizioLeoPage27Facile(data);
      appendOggettiLeoPage27Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage27Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage27Facile(data) {
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

function appendPulsanteLeoPage27Facile(data) {
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

function appendIndizioLeoPage27Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina27.indizi.indizio1 +
      " <br> " +
      data[i].pagina27.indizi.indizio2 +
      " <br> " +
      data[i].pagina27.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage27Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina27.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina27.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina27.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE28///////////////////////////////////
function fetchDataLeoPage28Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 28");
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
      appendDataLeoPage28Facile(data);
      appendPictureLeoPage28Facile(data);
      appendPulsanteLeoPage28Facile(data);
      appendIndizioLeoPage28Facile(data);
      appendOggettiLeoPage28Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage28Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage28Facile(data) {
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

function appendPulsanteLeoPage28Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina28.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina28.pulsanteName;
  }
}

function appendIndizioLeoPage28Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina28.indizi.indizio1 +
      " <br> " +
      data[i].pagina28.indizi.indizio2 +
      " <br> " +
      data[i].pagina28.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage28Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina28.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina28.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina28.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE29///////////////////////////////////
function fetchDataLeoPage29Facile() {
  fetch("json/leo/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 29");
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
      appendDataLeoPage29Facile(data);
      appendPictureLeoPage29Facile(data);
      appendPulsanteLeoPage29Facile(data);
      appendIndizioLeoPage29Facile(data);
      appendOggettiLeoPage29Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage29Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage29Facile(data) {
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

function appendPulsanteLeoPage29Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina29.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina29.pulsanteName;
  }
}

function appendIndizioLeoPage29Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina29.indizi.indizio1 +
      " <br> " +
      data[i].pagina29.indizi.indizio2 +
      " <br> " +
      data[i].pagina29.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage29Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina29.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina29.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina29.oggetti.oggetto3;
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

//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function leolog() {
  console.log("gioco leo");
}

//////////////////////PAGE2///////////////////////////////////
function fetchDataLeoPage2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 2 difficile");
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
      appendDataLeoPage2(data);
      appendPictureLeoPage2(data);
      appendPulsanteLeoPage2(data);
      appendIndizioLeoPage2(data);
      appendOggettiLeoPage2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage2(data) {
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

function appendPulsanteLeoPage2(data) {
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

function appendIndizioLeoPage2(data) {
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

function appendOggettiLeoPage2(data) {
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
function ispeziona() {
  alert(
    "Il quadro non sembra essere l'originale. Qualcuno deve averlo rubato e sostituito con un falso. Per terra qualcuno ha lasciato delle fiale accanto al quadro"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ispeziona quadro");
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

function leggiTarghetta() {
  alert(
    "'La Dama con l'ermellino è un dipinto a olio su tavola (54 ×40 cm) di Leonardo da Vinci, databile al 1488-1490. La donna ritratta va quasi sicuramente identificata con Cecilia Gallerani.'"
  );
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataLeoPage3() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3");
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
      appendDataLeoPage3(data);
      appendPictureLeoPage3(data);
      appendPulsanteLeoPage3(data);
      appendIndizioLeoPage3(data);
      appendOggettiLeoPage3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage3(data) {
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

function appendPulsanteLeoPage3(data) {
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

function appendIndizioLeoPage3(data) {
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

function appendOggettiLeoPage3(data) {
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
function esponiFattiQuadriDif() {
  alert(
    "La donna delle pulizie è sotto chock e ritiene che l'ermellino del quadro abbia preso vita e l'abbia aggredito per poi scappare. Tuttavia il quadro esposto non è l'originale. Una tua semplice occhiata da esperto pittore ti ha permesso di notare la falsità di quello esposto."
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ispeziona quadro");
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
function fetchDataLeoPage4() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 4");
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
      appendDataLeoPage4(data);
      appendPictureLeoPage4(data);
      appendPulsanteLeoPage4(data);
      appendIndizioLeoPage4(data);
      appendOggettiLeoPage4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage4(data) {
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

function appendPulsanteLeoPage4(data) {
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

function appendIndizioLeoPage4(data) {
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

function appendOggettiLeoPage4(data) {
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
function fetchDataLeoPage5() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 5");
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
      appendDataLeoPage5(data);
      appendPictureLeoPage5(data);
      appendPulsanteLeoPage5(data);
      appendIndizioLeoPage5(data);
      appendOggettiLeoPage5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage5(data) {
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

function appendPulsanteLeoPage5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina5.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina5.pulsanteFunc4);
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
    puls2.innerHTML = data[i].pagina5.pulsanteName2;
    puls3.innerHTML = data[i].pagina5.pulsanteName3;
    puls4.innerHTML = data[i].pagina5.pulsanteName4;
  }
}

function appendIndizioLeoPage5(data) {
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

function appendOggettiLeoPage5(data) {
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
function ordinaBere() {
  alert("Tieni d'occhio la zona ma mantieni un profilo basso e ordina da bere");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ordina da bere");
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function canta() {
  alert(
    "Mentre canti riesci ad attirare l'attenzione di tutti i presenti, tranne un gruppetto assorti nel loro confabulare. Riesci persino a vederli in volto. Uno di loro presenta un tatuaggio dietro alla nuca con il numero '1452'. Da grande appassionato di Leonardo Da Vinci ti rendi conto che corrisponde al suo anno di nascita"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - canta");
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
      var urlvalue5 = JSON.stringify(data[i].pagina5.pulsanteFunc5);

      var stripped5 = urlvalue5.replace(/['"]+/g, "");

      var puls5 = document.createElement("button");

      puls5.setAttribute("onclick", stripped5);
      puls5.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls5);

      puls5.innerHTML = data[i].pagina5.pulsanteName5;
    }
  }
}

//////////////////////PAGE6a1///////////////////////////////////
function fetchDataLeoPage6a1() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a1");
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
      appendDataLeoPage6a1(data);
      appendPictureLeoPage6a1(data);
      appendPulsanteLeoPage6a1(data);
      appendIndizioLeoPage6a1(data);
      appendOggettiLeoPage6a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6a1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6a1.pulsanteName;
    puls2.innerHTML = data[i].pagina6a1.pulsanteName2;
  }
}

function appendIndizioLeoPage6a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina6a1.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE6a2///////////////////////////////////
function fetchDataLeoPage6a2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a1");
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
      appendDataLeoPage6a2(data);
      appendPictureLeoPage6a2(data);
      appendPulsanteLeoPage6a2(data);
      appendIndizioLeoPage6a2(data);
      appendOggettiLeoPage6a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6a2.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6a2.pulsanteName;
    puls2.innerHTML = data[i].pagina6a2.pulsanteName2;
  }
}

function appendIndizioLeoPage6a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina6a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina6a2.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE6a3///////////////////////////////////
function fetchDataLeoPage6a3() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a3");
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
      appendDataLeoPage6a3(data);
      appendPictureLeoPage6a3(data);
      appendPulsanteLeoPage6a3(data);
      appendIndizioLeoPage6a3(data);
      appendOggettiLeoPage6a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6a3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina6a3.pulsanteFunc3);

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
    //pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina6a2.pulsanteName;
    puls2.innerHTML = data[i].pagina6a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina6a3.pulsanteName3;
  }
}

function appendIndizioLeoPage6a3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina6a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina6a3.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6a3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function entraStanza() {
  alert(
    "Non hai più le chiavi della stanza. Devono esserti cadute alla taverna. Devi tornare indietro"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra stanza");
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
      var urlvalue = JSON.stringify(data[i].pagina6a3.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina6a3.pulsanteName;
    }
  }
}

//////////////////////PAGE6a4///////////////////////////////////
function fetchDataLeoPage6a4() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a4");
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
      appendDataLeoPage6a4(data);
      appendPictureLeoPage6a4(data);
      appendPulsanteLeoPage6a4(data);
      appendIndizioLeoPage6a4(data);
      appendOggettiLeoPage6a4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6a4(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina6a4.pulsanteFunc3);

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
    //pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina6a2.pulsanteName;
    puls2.innerHTML = data[i].pagina6a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina6a4.pulsanteName3;
  }
}

function appendIndizioLeoPage6a4(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina6a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina6a4.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6a4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6a4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function recuperaChiavi() {
  alert("La cameriera dice di aver trovato un paio di chiavi per terra.");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra stanza");
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
      var urlvalue = JSON.stringify(data[i].pagina6a4.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina6a4.pulsanteName;
    }
  }
}

//////////////////////PAGE6a5///////////////////////////////////
function fetchDataLeoPage6a5() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a5");
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
      appendDataLeoPage6a5(data);
      appendPictureLeoPage6a5(data);
      appendPulsanteLeoPage6a5(data);
      appendIndizioLeoPage6a5(data);
      appendOggettiLeoPage6a5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6a5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6a5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6a5.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina6a5.pulsanteName2;
  }
}

function appendIndizioLeoPage6a5(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina6a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina6a5.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6a5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6a5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE6b1///////////////////////////////////
function fetchDataLeoPage6b1() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b1");
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
      appendDataLeoPage6b1(data);
      appendPictureLeoPage6b1(data);
      appendPulsanteLeoPage6b1(data);
      appendIndizioLeoPage6b1(data);
      appendOggettiLeoPage6b1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6b1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6b1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6b1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6b1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6b1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    //pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6b1.pulsanteName;
    puls2.innerHTML = data[i].pagina6b1.pulsanteName2;
  }
}

function appendIndizioLeoPage6b1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b1.indizi.indizio1 +
      " <br> " +
      data[i].pagina6b1.indizi.indizio2 +
      " <br> " +
      data[i].pagina6b1.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6b1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6b1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE6b2///////////////////////////////////
function fetchDataLeoPage6b2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b2");
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
      appendDataLeoPage6b2(data);
      appendPictureLeoPage6b2(data);
      appendPulsanteLeoPage6b2(data);
      appendIndizioLeoPage6b2(data);
      appendOggettiLeoPage6b2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6b2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6b2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6b2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6b2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina6b2.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina6b2.pulsanteName2;
    puls3.innerHTML = data[i].pagina6b2.pulsanteName3;
  }
}

function appendIndizioLeoPage6b2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b2.indizi.indizio1 +
      " <br> " +
      data[i].pagina6b2.indizi.indizio2 +
      " <br> " +
      data[i].pagina6b2.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6b2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6b2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function cercaTaverna() {
  alert(
    "Mentre cerchi, passa la cameriera chiedendoti se fossi un amico del gruppetto appena uscito. Uno di loro si è scordato le chiavi dell'albergo, e te le allunga."
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - prendi chiavi");
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
      var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina6b2.pulsanteName;
    }
  }
}

//////////////////////PAGE6b3///////////////////////////////////
function fetchDataLeoPage6b3() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b3");
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
      appendDataLeoPage6b3(data);
      appendPictureLeoPage6b3(data);
      appendPulsanteLeoPage6b3(data);
      appendIndizioLeoPage6b3(data);
      appendOggettiLeoPage6b3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6b3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina6b3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage6b3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina6b3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6b3.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    //pulsContainer.appendChild(puls);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6b3.pulsanteName;
    puls2.innerHTML = data[i].pagina6b3.pulsanteName2;
  }
}

function appendIndizioLeoPage6b3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b3.indizi.indizio1 +
      " <br> " +
      data[i].pagina6b3.indizi.indizio2 +
      " <br> " +
      data[i].pagina6b3.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage6b3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina6b3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina6b3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE7///////////////////////////////////
function fetchDataLeoPage7() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7");
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
      appendDataLeoPage7(data);
      appendPictureLeoPage7(data);
      appendPulsanteLeoPage7(data);
      appendIndizioLeoPage7(data);
      appendOggettiLeoPage7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage7(data) {
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

function appendPulsanteLeoPage7(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
  }
}

function appendIndizioLeoPage7(data) {
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

function appendOggettiLeoPage7(data) {
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
function entraCamera() {
  alert("Usa la chiave ed entra nella stanza.");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra camera");
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
function fetchDataLeoPage8() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 8");
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
      appendDataLeoPage8(data);
      appendPictureLeoPage8(data);
      appendPulsanteLeoPage8(data);
      appendIndizioLeoPage8(data);
      appendOggettiLeoPage8(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage8(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage8(data) {
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

function appendPulsanteLeoPage8(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
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

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
    puls3.innerHTML = data[i].pagina8.pulsanteName3;
    puls4.innerHTML = data[i].pagina8.pulsanteName4;
  }
}

function appendIndizioLeoPage8(data) {
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

function appendOggettiLeoPage8(data) {
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
function cercaLetto() {
  alert(
    "Hai trovato un foglio con scritto il nome di quattro quadri: - La Dama con l'ermellino - La Gioconda - l'Annunciazione - Uomo Vitruviano. E sulla scritta della Dama con l'ermellino c'è segnata una grossa X sopra, come per indicare che la prima operazione fosse stata eseguita con successo."
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra camera");
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

function cercaCassetto() {
  alert("non hai trovato niente");
}

//////////////////////PAGE9///////////////////////////////////
function fetchDataLeoPage9() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 9");
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
      appendDataLeoPage9(data);
      appendPictureLeoPage9(data);
      appendPulsanteLeoPage9(data);
      appendIndizioLeoPage9(data);
      appendOggettiLeoPage9(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage9(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage9(data) {
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

function appendPulsanteLeoPage9(data) {
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

function appendIndizioLeoPage9(data) {
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
      data[i].pagina9.indizi.indizio3 +
      " <br> " +
      data[i].pagina9.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage9(data) {
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
function fetchDataLeoPage10() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 10");
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
      appendDataLeoPage10(data);
      appendPictureLeoPage10(data);
      appendPulsanteLeoPage10(data);
      appendIndizioLeoPage10(data);
      appendOggettiLeoPage10(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage10(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage10(data) {
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

function appendPulsanteLeoPage10(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina10.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina10.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
    puls3.innerHTML = data[i].pagina10.pulsanteName3;
  }
}

function appendIndizioLeoPage10(data) {
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
      data[i].pagina10.indizi.indizio3 +
      " <br> " +
      data[i].pagina10.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage10(data) {
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
function compraBiglietto() {
  alert(
    "Il primo treno disponibile per la Francia parte tra un'ora. Devi arrivare prima dei ladri di quadri e sventare i loro piani."
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - biglietto treno");
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
function fetchDataLeoPage11() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 11");
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
      appendDataLeoPage11(data);
      appendPictureLeoPage11(data);
      appendPulsanteLeoPage11(data);
      appendIndizioLeoPage11(data);
      appendOggettiLeoPage11(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage11(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage11(data) {
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

function appendPulsanteLeoPage11(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
    puls3.innerHTML = data[i].pagina11.pulsanteName3;
  }
}

function appendIndizioLeoPage11(data) {
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
      data[i].pagina11.indizi.indizio3 +
      " <br> " +
      data[i].pagina11.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage11(data) {
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
function usaBiglietto() {
  alert("Usa il biglietto per salire sul treno e vai a sederti al tuo posto");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - usa biglietto treno");
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
function fetchDataLeoPage12() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 12");
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
      appendDataLeoPage12(data);
      appendPictureLeoPage12(data);
      appendPulsanteLeoPage12(data);
      appendIndizioLeoPage12(data);
      appendOggettiLeoPage12(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage12(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage12(data) {
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

function appendPulsanteLeoPage12(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina12.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina12.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina12.pulsanteFunc4);

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

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    puls3.innerHTML = data[i].pagina12.pulsanteName3;
    puls4.innerHTML = data[i].pagina12.pulsanteName4;
  }
}

function appendIndizioLeoPage12(data) {
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

function appendOggettiLeoPage12(data) {
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
function analizzaFiala() {
  alert("Recati al laboratorio più vicino e fai analizzare la fiala");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - fiala");
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function louvre() {
  alert("Devi sventare i piani dei delinquenti, recati all'Louvre");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - Louvre");
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
      var urlvalue5 = JSON.stringify(data[i].pagina12.pulsanteFunc5);

      var stripped5 = urlvalue5.replace(/['"]+/g, "");

      var puls5 = document.createElement("button");

      puls5.setAttribute("onclick", stripped5);
      puls5.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls5);

      puls5.innerHTML = data[i].pagina12.pulsanteName5;
    }
  }
}

//////////////////////PAGE13a1///////////////////////////////////
function fetchDataLeoPage13a1() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13a1");
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
      appendDataLeoPage13a1(data);
      appendPictureLeoPage13a1(data);
      appendPulsanteLeoPage13a1(data);
      appendIndizioLeoPage13a1(data);
      appendOggettiLeoPage13a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina13a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage13a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina13a1.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina6a5.pulsanteName;
    puls2.innerHTML = data[i].pagina13a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina13a1.pulsanteName3;
  }
}

function appendIndizioLeoPage13a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina13a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina13a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina13a1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina13a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function analizzaLiquido() {
  alert(
    "Dalle analisi risulta essere un siero che porta le persone ad avere allucinazioni. Ecco il motivo per cui la donna delle pulizie accusava di essere stata attaccata dall'ermellino"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - fiala");
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
      var urlvalue = JSON.stringify(data[i].pagina13a1.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina13a1.pulsanteName;
    }
  }
}

//////////////////////PAGE13a2///////////////////////////////////
function fetchDataLeoPage13a2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13a2");
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
      appendDataLeoPage13a2(data);
      appendPictureLeoPage13a2(data);
      appendPulsanteLeoPage13a2(data);
      appendIndizioLeoPage13a2(data);
      appendOggettiLeoPage13a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina13a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage13a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina13a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13a2.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina13a2.pulsanteName;
    puls2.innerHTML = data[i].pagina13a1.pulsanteName2;
  }
}

function appendIndizioLeoPage13a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina13a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina13a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina13a2.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina13a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE13b1///////////////////////////////////
function fetchDataLeoPage13b1() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13b1");
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
      appendDataLeoPage13b1(data);
      appendPictureLeoPage13b1(data);
      appendPulsanteLeoPage13b1(data);
      appendIndizioLeoPage13b1(data);
      appendOggettiLeoPage13b1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13b1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13b1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13b1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina13b1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage13b1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina13b1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13b1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina13b1.pulsanteName;
    puls2.innerHTML = data[i].pagina13b1.pulsanteName2;
  }
}

function appendIndizioLeoPage13b1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13b1.indizi.indizio1 +
      " <br> " +
      data[i].pagina13b1.indizi.indizio2 +
      " <br> " +
      data[i].pagina13b1.indizi.indizio3 +
      " <br> " +
      data[i].pagina13b1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13b1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina13b1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina13b1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE14///////////////////////////////////
function fetchDataLeoPage14() {
  fetch("json/leo/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage14(data);
      appendPictureLeoPage14(data);
      appendPulsanteLeoPage14(data);
      appendIndizioLeoPage14(data);
      appendOggettiLeoPage14(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage14(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage14(data) {
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

function appendPulsanteLeoPage14(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    //pulsContainer.appendChild(puls);

    //puls.innerHTML = data[i].pagina14.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
  }
}

function appendIndizioLeoPage14(data) {
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
      data[i].pagina14.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage14(data) {
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
function targhettaGioconda() {
  alert(
    "'La Gioconda è un dipinto olio su tavola di legno (77x53) di Leonardo Da Vinci, databile al 1503-1504.'"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra camera");
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
function fetchDataLeoPage15() {
  fetch("json/leo/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage15(data);
      appendPictureLeoPage15(data);
      appendPulsanteLeoPage15(data);
      appendIndizioLeoPage15(data);
      appendOggettiLeoPage15(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage15(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage15(data) {
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

function appendPulsanteLeoPage15(data) {
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

function appendIndizioLeoPage15(data) {
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

function appendOggettiLeoPage15(data) {
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
function fetchDataLeoPage16() {
  fetch("json/leo/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage16(data);
      appendPictureLeoPage16(data);
      appendPulsanteLeoPage16(data);
      appendIndizioLeoPage16(data);
      appendOggettiLeoPage16(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage16(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage16(data) {
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

function appendPulsanteLeoPage16(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina16.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina16.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
  }
}

function appendIndizioLeoPage16(data) {
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

function appendOggettiLeoPage16(data) {
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

//////////////////////PAGE17///////////////////////////////////
function fetchDataLeoPage17() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 17");
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
      document.getElementById("dialogFurgone").innerHTML = "";
      //popolo i div con le nuove info
      appendDataLeoPage17(data);
      appendPictureLeoPage17(data);
      appendPulsanteLeoPage17(data);
      appendIndizioLeoPage17(data);
      appendOggettiLeoPage17(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function combinazioneGiusta() {
  alert("Hai aperto la cassaforte !");
  apriFurgoneOk();
}

function combinazioneErrata() {
  alert("La combinazione è errata");
  //to do funzione che cancella combinazione errata
}

function apriFurgoneOK() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti furgone  OK Difficile");
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

  //Faccio apparire tasto avanti
  function newNaziButton2(data) {
    var pulsContainer = document.getElementById("pulsante");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina17.pulsanteName;
    }
  }
}

function clearFurgone() {
  codiceFurgone = "";
}

var codiceFurgone = "";
var codiceApriFurgone = "1452";

function saveNumber() {
  //var sel = document.getElementById("cassaUno");
  //var strUser = sel.options[sel.selectedIndex].value;
  //console.log(strUser);
  console.log("ho cliccato il tasto 1");

  aggiungiNumero();
}

function saveNumber2() {
  console.log("ho cliccato il tasto 2");

  aggiungiNumero2();
}

function saveNumber3() {
  console.log("ho cliccato il tasto 3");

  aggiungiNumero3();
}

function saveNumber4() {
  console.log("ho cliccato il tasto 4");

  aggiungiNumero4();
}

function saveNumber5() {
  console.log("ho cliccato il tasto 5");

  aggiungiNumero5();
}

function saveNumber6() {
  console.log("ho cliccato il tasto 6");

  aggiungiNumero6();
}

function saveNumber7() {
  console.log("ho cliccato il tasto 7");

  aggiungiNumero7();
}

function saveNumber8() {
  console.log("ho cliccato il tasto 8");

  aggiungiNumero8();
}

function saveNumber9() {
  console.log("ho cliccato il tasto 9");

  aggiungiNumero9();
}

function saveNumber0() {
  console.log("ho cliccato il tasto 0");

  aggiungiNumero0();
}

function aggiungiNumero() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName = JSON.stringify(data[i].pagina17.textValue);

      var strippedText = textName.replace(/['"]+/g, "");

      var pulsText = document.createElement("p");

      pulsText.setAttribute("id", strippedText);
      pulsText.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText);
      pulsText.innerHTML = data[i].pagina17.textName;
    }
  }

  if (codiceFurgone.length < 4) {
    var uno = "1";
    var res = codiceFurgone.concat(uno);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 2");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone2(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone2(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName2 = JSON.stringify(data[i].pagina17.textValue2);

      var strippedText2 = textName2.replace(/['"]+/g, "");

      var pulsText2 = document.createElement("p");

      pulsText2.setAttribute("id", strippedText2);
      pulsText2.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText2);
      pulsText2.innerHTML = data[i].pagina17.textName2;
    }
  }

  if (codiceFurgone.length < 4) {
    var due = "2";
    var res = codiceFurgone.concat(due);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero3() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 3");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone3(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone3(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName3 = JSON.stringify(data[i].pagina17.textValue3);

      var strippedText3 = textName3.replace(/['"]+/g, "");

      var pulsText3 = document.createElement("p");

      pulsText3.setAttribute("id", strippedText3);
      pulsText3.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText3);
      pulsText3.innerHTML = data[i].pagina17.textName3;
    }
  }
  var tre = "3";
  var res = codiceFurgone.concat(tre);
  codiceFurgone = res;
  console.log(codiceFurgone);

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero4() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 4");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone4(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone4(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName4 = JSON.stringify(data[i].pagina17.textValue4);

      var strippedText4 = textName4.replace(/['"]+/g, "");

      var pulsText4 = document.createElement("p");

      pulsText4.setAttribute("id", strippedText4);
      pulsText4.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText4);
      pulsText4.innerHTML = data[i].pagina17.textName4;
    }
  }

  if (codiceFurgone.length < 4) {
    var quattro = "4";
    var res = codiceFurgone.concat(quattro);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero5() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 5");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone5(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone5(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName5 = JSON.stringify(data[i].pagina17.textValue5);

      var strippedText5 = textName5.replace(/['"]+/g, "");

      var pulsText5 = document.createElement("p");

      pulsText5.setAttribute("id", strippedText5);
      pulsText5.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText5);
      pulsText5.innerHTML = data[i].pagina17.textName5;
    }
  }

  if (codiceFurgone.length < 4) {
    var cinque = "5";
    var res = codiceFurgone.concat(cinque);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero6() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 6");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone6(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone6(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName6 = JSON.stringify(data[i].pagina17.textValue6);

      var strippedText6 = textName6.replace(/['"]+/g, "");

      var pulsText6 = document.createElement("p");

      pulsText6.setAttribute("id", strippedText6);
      pulsText6.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText6);
      pulsText6.innerHTML = data[i].pagina17.textName6;
    }
  }

  if (codiceFurgone.length < 4) {
    var sei = "6";
    var res = codiceFurgone.concat(sei);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero7() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 7");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone7(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone7(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName7 = JSON.stringify(data[i].pagina17.textValue7);

      var strippedText7 = textName7.replace(/['"]+/g, "");

      var pulsText7 = document.createElement("p");

      pulsText7.setAttribute("id", strippedText7);
      pulsText7.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText7);
      pulsText7.innerHTML = data[i].pagina17.textName7;
    }
  }

  if (codiceFurgone.length < 4) {
    var sette = "7";
    var res = codiceFurgone.concat(sette);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero8() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 8");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone8(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone8(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName8 = JSON.stringify(data[i].pagina17.textValue8);

      var strippedText8 = textName8.replace(/['"]+/g, "");

      var pulsText8 = document.createElement("p");

      pulsText8.setAttribute("id", strippedText8);
      pulsText8.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText8);
      pulsText8.innerHTML = data[i].pagina17.textName8;
    }
  }

  if (codiceFurgone.length < 4) {
    var otto = "8";
    var res = codiceFurgone.concat(otto);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero9() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 9");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone9(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone9(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName9 = JSON.stringify(data[i].pagina17.textValue9);

      var strippedText9 = textName9.replace(/['"]+/g, "");

      var pulsText9 = document.createElement("p");

      pulsText9.setAttribute("id", strippedText9);
      pulsText9.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText9);
      pulsText9.innerHTML = data[i].pagina17.textName9;
    }
  }

  if (codiceFurgone.length < 4) {
    var nove = "9";
    var res = codiceFurgone.concat(nove);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function aggiungiNumero0() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti aggiungiNumero 0");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      testoFurgone0(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  function testoFurgone0(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var textName0 = JSON.stringify(data[i].pagina17.textValue0);

      var strippedText0 = textName0.replace(/['"]+/g, "");

      var pulsText0 = document.createElement("p");

      pulsText0.setAttribute("id", strippedText0);
      pulsText0.setAttribute("style", "background-color:red; color: white;");

      pulsContainer.appendChild(pulsText0);
      pulsText0.innerHTML = data[i].pagina17.textName0;
    }
  }

  if (codiceFurgone.length < 4) {
    var zero = "0";
    var res = codiceFurgone.concat(zero);
    codiceFurgone = res;
    console.log(codiceFurgone);
  }

  if (codiceFurgone === codiceApriFurgone) {
    apriPortaFurgone();
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  } else if (codiceFurgone.length === 4 && codiceFurgone != codiceApriFurgone) {
    alert("codice errato");
    clearFurgone();
    document.getElementById("dialogFurgone").innerHTML = "";
    $("#dialogFurgone").dialog("close");
  }
}

function apriFurgone() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti apriFurgone");
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
    $("#dialogFurgone").dialog();
  }

  function chooseNumber(data) {
    var pulsContainer = document.getElementById("dialogFurgone");

    for (var i = 0; i < data.length; i++) {
      var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc4);
      var urlvalue5 = JSON.stringify(data[i].pagina17.pulsanteFunc5);
      var urlvalue6 = JSON.stringify(data[i].pagina17.pulsanteFunc6);
      var urlvalue7 = JSON.stringify(data[i].pagina17.pulsanteFunc7);
      var urlvalue8 = JSON.stringify(data[i].pagina17.pulsanteFunc8);
      var urlvalue9 = JSON.stringify(data[i].pagina17.pulsanteFunc9);
      var urlvalue10 = JSON.stringify(data[i].pagina17.pulsanteFunc10);
      var urlvalue11 = JSON.stringify(data[i].pagina17.pulsanteFunc11);
      var urlvalue12 = JSON.stringify(data[i].pagina17.pulsanteFunc12);
      var urlvalue13 = JSON.stringify(data[i].pagina17.pulsanteFunc13);

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
      dialogFurgone.setAttribute("title", "INSERISCI CODICE LUCCHETTO");
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

      puls.innerHTML = data[i].pagina17.pulsanteName4;
      puls5.innerHTML = data[i].pagina17.pulsanteName5;
      puls6.innerHTML = data[i].pagina17.pulsanteName6;
      puls7.innerHTML = data[i].pagina17.pulsanteName7;
      puls8.innerHTML = data[i].pagina17.pulsanteName8;
      puls9.innerHTML = data[i].pagina17.pulsanteName9;
      puls10.innerHTML = data[i].pagina17.pulsanteName10;
      puls11.innerHTML = data[i].pagina17.pulsanteName11;
      puls12.innerHTML = data[i].pagina17.pulsanteName12;
      puls13.innerHTML = data[i].pagina17.pulsanteName13;
      //pulsText.innerHTML = data[i].pagina17.textName;
    }
  }
}

function appendDataLeoPage17(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage17(data) {
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

function appendPulsanteLeoPage17(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    // var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina17.pulsanteFunc3);

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
    puls2.innerHTML = data[i].pagina17.pulsanteName2;
    puls3.innerHTML = data[i].pagina17.pulsanteName3;
  }
}

function appendIndizioLeoPage17(data) {
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

function appendOggettiLeoPage17(data) {
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

function apriPortaFurgone() {
  console.log("funzione apriPortaFurgone ");
  alert(
    "Sei riuscito a scappare e ti trovi a Firenze. I ladri staranno sicuramente cercando di rubare il quadro dell'Annunciazione ed è troppo tardi per cercare di sventare il furto. Devi andartene prima che loro tornino e scoprano che sei riuscito a scappare. L'ultimo quadro è l'Uomo Vitruviano, recati a Venezia per cercare di sventare il loro piano."
  );

  fetch("json/leo/giocoDif.json")
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
      var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina17.pulsanteName;
    }
  }
}

//////////////////////PAGE18///////////////////////////////////
function fetchDataLeoPage18() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18");
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
      appendDataLeoPage18(data);
      appendPictureLeoPage18(data);
      appendPulsanteLeoPage18(data);
      appendIndizioLeoPage18(data);
      appendOggettiLeoPage18(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage18(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage18(data) {
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

function appendPulsanteLeoPage18(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18.pulsanteFunc3);

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
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
    puls3.innerHTML = data[i].pagina18.pulsanteName3;
  }
}

function appendIndizioLeoPage18(data) {
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

function appendOggettiLeoPage18(data) {
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
function chiamaTaxi() {
  alert("Raggiungi Venezia prima che si accorgano che sei scappato");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - taxi");
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

//////////////////////PAGE19///////////////////////////////////
function fetchDataLeoPage19() {
  fetch("json/leo/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage19(data);
      appendPictureLeoPage19(data);
      appendPulsanteLeoPage19(data);
      appendIndizioLeoPage19(data);
      appendOggettiLeoPage19(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage19(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage19(data) {
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

function appendPulsanteLeoPage19(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina19.pulsanteFunc4);

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

    //puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
    puls3.innerHTML = data[i].pagina19.pulsanteName3;
    puls4.innerHTML = data[i].pagina19.pulsanteName4;
  }
}

function appendIndizioLeoPage19(data) {
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

function appendOggettiLeoPage19(data) {
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
function studiaQuadro() {
  alert(
    "'L'Uomo Vitruviano è un disegno fatto a penna e inchiostro su carta di Leonardo Da Vinci con diemsione 35 x 26 cm'"
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - taxi");
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

function compraStrumenti() {
  alert("Acquista penna calamaio e un foglio per ricreare il dipinto");
}

//////////////////////PAGE20///////////////////////////////////
function fetchDataLeoPage20() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 20");
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
      appendDataLeoPage20(data);
      appendPictureLeoPage20(data);
      appendPulsanteLeoPage20(data);
      appendIndizioLeoPage20(data);
      appendOggettiLeoPage20(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage20(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage20(data) {
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

function appendPulsanteLeoPage20(data) {
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

function appendIndizioLeoPage20(data) {
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
      data[i].pagina20.indizi.indizio5 +
      " <br> " +
      data[i].pagina20.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage20(data) {
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

//////////////////////PAGE21///////////////////////////////////
function fetchDataLeoPage21() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 21");
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
      appendDataLeoPage21(data);
      appendPictureLeoPage21(data);
      appendPulsanteLeoPage21(data);
      appendIndizioLeoPage21(data);
      appendOggettiLeoPage21(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage21(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage21(data) {
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

function appendPulsanteLeoPage21(data) {
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

    //puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    puls3.innerHTML = data[i].pagina21.pulsanteName3;
  }
}

function appendIndizioLeoPage21(data) {
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
      data[i].pagina21.indizi.indizio5 +
      " <br> " +
      data[i].pagina21.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage21(data) {
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
function dipingi() {
  alert("Usa la penna con il calamaio e il foglio per dipingere il quadro");

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - dipingi");
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
function fetchDataLeoPage22() {
  fetch("json/leo/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataLeoPage22(data);
      appendPictureLeoPage22(data);
      appendPulsanteLeoPage22(data);
      appendIndizioLeoPage22(data);
      appendOggettiLeoPage22(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22(data) {
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

function appendPulsanteLeoPage22(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22.pulsanteFunc3);

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
    puls2.innerHTML = data[i].pagina22.pulsanteName2;
    puls3.innerHTML = data[i].pagina22.pulsanteName3;
  }
}

function appendIndizioLeoPage22(data) {
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

function appendOggettiLeoPage22(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function leggi() {
  alert(
    "E' stato rubato un terzo dipinto nell'ultima settimana. Un'altra opera di Leonardo da vinci è scomparsa ieri notte e i testimoni accusano di essere stati aggrediti dall'Arcangelo Gabriele. Il dipinto di cui si tratta è l'Annunciazione, tenuto nella Galleria degli Uffizzi a Firenze. Dipinto a olio e tempera su tavola (98cm x 2,17m) datato tra il 1472-1475..."
  );

  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - dipingi");
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
function fetchDataLeoPage23() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 23");
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
      appendDataLeoPage23(data);
      appendPictureLeoPage23(data);
      appendPulsanteLeoPage23(data);
      appendIndizioLeoPage23(data);
      appendOggettiLeoPage23(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage23(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage23(data) {
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

function appendPulsanteLeoPage23(data) {
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

function appendIndizioLeoPage23(data) {
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
      data[i].pagina23.indizi.indizio6 +
      " <br> " +
      data[i].pagina23.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage23(data) {
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
function fetchDataLeoPage24() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24");
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
      appendDataLeoPage24(data);
      appendPictureLeoPage24(data);
      appendPulsanteLeoPage24(data);
      appendIndizioLeoPage24(data);
      appendOggettiLeoPage24(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24(data) {
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

function appendPulsanteLeoPage24(data) {
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

function appendIndizioLeoPage24(data) {
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
      data[i].pagina24.indizi.indizio6 +
      " <br> " +
      data[i].pagina24.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24(data) {
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

//////////////////////PAGE25///////////////////////////////////
function fetchDataLeoPage25() {
  fetch("json/leo/giocoDif.json")
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
      appendDataLeoPage25(data);
      appendPictureLeoPage25(data);
      appendPulsanteLeoPage25(data);
      appendIndizioLeoPage25(data);
      appendOggettiLeoPage25(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25(data) {
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

function appendPulsanteLeoPage25(data) {
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

function appendIndizioLeoPage25(data) {
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
      data[i].pagina25.indizi.indizio3 +
      " <br> " +
      data[i].pagina25.indizi.indizio4 +
      " <br> " +
      data[i].pagina25.indizi.indizio5 +
      " <br> " +
      data[i].pagina25.indizi.indizio6 +
      " <br> " +
      data[i].pagina25.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25(data) {
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

//////////////////////PAGE25a1///////////////////////////////////
function fetchDataLeoPage25a1() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a1");
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
      appendDataLeoPage25a1(data);
      appendPictureLeoPage25a1(data);
      appendPulsanteLeoPage25a1(data);
      appendIndizioLeoPage25a1(data);
      appendOggettiLeoPage25a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a1.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a1.pulsanteName;
    puls2.innerHTML = data[i].pagina25a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a1.pulsanteName4;
  }
}

function appendIndizioLeoPage25a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a1.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a1.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a1.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a2///////////////////////////////////
function fetchDataLeoPage25a2() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a2");
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
      appendDataLeoPage25a2(data);
      appendPictureLeoPage25a2(data);
      appendPulsanteLeoPage25a2(data);
      appendIndizioLeoPage25a2(data);
      appendOggettiLeoPage25a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a2.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a2.pulsanteName;
    puls2.innerHTML = data[i].pagina25a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a2.pulsanteName4;
  }
}

function appendIndizioLeoPage25a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a2.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a2.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a2.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a3///////////////////////////////////
function fetchDataLeoPage25a3() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a3");
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
      appendDataLeoPage25a3(data);
      appendPictureLeoPage25a3(data);
      appendPulsanteLeoPage25a3(data);
      appendIndizioLeoPage25a3(data);
      appendOggettiLeoPage25a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a3.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a3.pulsanteName;
    puls2.innerHTML = data[i].pagina25a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a3.pulsanteName4;
  }
}

function appendIndizioLeoPage25a3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a3.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a3.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a3.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a4///////////////////////////////////
function fetchDataLeoPage25a4() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a4");
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
      appendDataLeoPage25a4(data);
      appendPictureLeoPage25a4(data);
      appendPulsanteLeoPage25a4(data);
      appendIndizioLeoPage25a4(data);
      appendOggettiLeoPage25a4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a4(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a4.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a4.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a4.pulsanteName;
    puls2.innerHTML = data[i].pagina25a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a4.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a4.pulsanteName4;
  }
}

function appendIndizioLeoPage25a4(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a4.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a4.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a4.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a5///////////////////////////////////
function fetchDataLeoPage25a5() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a5");
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
      appendDataLeoPage25a5(data);
      appendPictureLeoPage25a5(data);
      appendPulsanteLeoPage25a5(data);
      appendIndizioLeoPage25a5(data);
      appendOggettiLeoPage25a5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a5.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a5.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a5.pulsanteName;
    puls2.innerHTML = data[i].pagina25a5.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a5.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a5.pulsanteName4;
  }
}

function appendIndizioLeoPage25a5(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a5.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a5.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a5.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a6///////////////////////////////////
function fetchDataLeoPage25a6() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a6");
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
      appendDataLeoPage25a6(data);
      appendPictureLeoPage25a6(data);
      appendPulsanteLeoPage25a6(data);
      appendIndizioLeoPage25a6(data);
      appendOggettiLeoPage25a6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a6(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a6.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a6(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a6.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a6.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a6.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a6.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a6.pulsanteName;
    puls2.innerHTML = data[i].pagina25a6.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a6.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a6.pulsanteName4;
  }
}

function appendIndizioLeoPage25a6(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a6.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a6.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a6(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a6.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a6.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a6.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE25a7///////////////////////////////////
function fetchDataLeoPage25a7() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25a7");
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
      appendDataLeoPage25a7(data);
      appendPictureLeoPage25a7(data);
      appendPulsanteLeoPage25a7(data);
      appendIndizioLeoPage25a7(data);
      appendOggettiLeoPage25a7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25a7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25a7(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina25a7.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage25a7(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25a7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina25a7.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina25a7.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina25a7.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina25a7.pulsanteName;
    puls2.innerHTML = data[i].pagina25a7.pulsanteName2;
    puls3.innerHTML = data[i].pagina25a7.pulsanteName3;
    puls4.innerHTML = data[i].pagina25a7.pulsanteName4;
  }
}

function appendIndizioLeoPage25a7(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a7.indizi.indizio1 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio2 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio3 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio4 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio5 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio6 +
      " <br> " +
      data[i].pagina25a7.indizi.indizio7;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage25a7(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a7.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a7.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina25a7.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE26///////////////////////////////////
function fetchDataLeoPage26() {
  fetch("json/leo/giocoDif.json")
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
      appendDataLeoPage26(data);
      appendPictureLeoPage26(data);
      appendPulsanteLeoPage26(data);
      appendIndizioLeoPage26(data);
      appendOggettiLeoPage26(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage26(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage26(data) {
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

function appendPulsanteLeoPage26(data) {
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

function appendIndizioLeoPage26(data) {
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

function appendOggettiLeoPage26(data) {
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
function fetchDataLeoPage27() {
  fetch("json/leo/giocoDif.json")
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
      appendDataLeoPage27(data);
      appendPictureLeoPage27(data);
      appendPulsanteLeoPage27(data);
      appendIndizioLeoPage27(data);
      appendOggettiLeoPage27(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage27(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage27(data) {
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

function appendPulsanteLeoPage27(data) {
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

function appendIndizioLeoPage27(data) {
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

function appendOggettiLeoPage27(data) {
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
function fetchDataLeoPage28() {
  fetch("json/leo/giocoDif.json")
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
      appendDataLeoPage28(data);
      appendPictureLeoPage28(data);
      appendPulsanteLeoPage28(data);
      appendIndizioLeoPage28(data);
      appendOggettiLeoPage28(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage28(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage28(data) {
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

function appendPulsanteLeoPage28(data) {
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

function appendIndizioLeoPage28(data) {
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

function appendOggettiLeoPage28(data) {
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
function fetchDataLeoPage29() {
  fetch("json/leo/giocoDif.json")
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
      appendDataLeoPage29(data);
      appendPictureLeoPage29(data);
      appendPulsanteLeoPage29(data);
      appendIndizioLeoPage29(data);
      appendOggettiLeoPage29(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage29(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage29(data) {
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

function appendPulsanteLeoPage29(data) {
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

function appendIndizioLeoPage29(data) {
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

function appendOggettiLeoPage29(data) {
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

//////////////////////PAGE30///////////////////////////////////
function fetchDataLeoPage30() {
  fetch("json/leo/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 30");
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
      appendDataLeoPage30(data);
      appendPictureLeoPage30(data);
      appendPulsanteLeoPage30(data);
      appendIndizioLeoPage30(data);
      appendOggettiLeoPage30(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage30(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina30.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage30(data) {
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

function appendPulsanteLeoPage30(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina30.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina30.pulsanteName;
  }
}

function appendIndizioLeoPage30(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina30.indizi.indizio1 +
      " <br> " +
      data[i].pagina30.indizi.indizio2 +
      " <br> " +
      data[i].pagina30.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage30(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina30.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina30.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina30.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

/////////////////SCHERMATA INIZIALE/////////////
function backHomeDif() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

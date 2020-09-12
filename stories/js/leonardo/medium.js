//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function leolog() {
  console.log("gioco leo medio");
}

//////////////////////PAGE2///////////////////////////////////
function fetchDataLeoPage2Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 2 Media");
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
      appendDataLeoPage2Media(data);
      appendPictureLeoPage2Media(data);
      appendPulsanteLeoPage2Media(data);
      appendIndizioLeoPage2Media(data);
      appendOggettiLeoPage2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage2Media(data) {
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

function appendPulsanteLeoPage2Media(data) {
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

function appendIndizioLeoPage2Media(data) {
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

function appendOggettiLeoPage2Media(data) {
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
function ispezionaMed() {
  alert(
    "Il quadro non sembra essere l'originale. Qualcuno deve averlo rubato e sostituito con un falso. Per terra qualcuno ha lasciato delle fiale accanto al quadro"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ispeziona quadro Media");
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

function leggiTarghettaMed() {
  alert(
    "'La Dama con l'ermellino è un dipinto a olio su tavola (54 ×40 cm) di Leonardo da Vinci, databile al 1488-1490. La donna ritratta va quasi sicuramente identificata con Cecilia Gallerani.'"
  );
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataLeoPage3Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 Media");
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
      appendDataLeoPage3Media(data);
      appendPictureLeoPage3Media(data);
      appendPulsanteLeoPage3Media(data);
      appendIndizioLeoPage3Media(data);
      appendOggettiLeoPage3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage3Media(data) {
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

function appendPulsanteLeoPage3Media(data) {
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

function appendIndizioLeoPage3Media(data) {
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

function appendOggettiLeoPage3Media(data) {
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
function esponiFattiQuadriMed() {
  alert(
    "La donna delle pulizie è sotto chock e ritiene che l'ermellino del quadro abbia preso vita e l'abbia aggredito per poi scappare. Tuttavia il quadro esposto non è l'originale. Una tua semplice occhiata da esperto pittore ti ha permesso di notare la falsità di quello esposto."
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - esponi fatti Media");
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
function fetchDataLeoPage4Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 4 Media");
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
      appendDataLeoPage4Media(data);
      appendPictureLeoPage4Media(data);
      appendPulsanteLeoPage4Media(data);
      appendIndizioLeoPage4Media(data);
      appendOggettiLeoPage4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage4Media(data) {
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

function appendPulsanteLeoPage4Media(data) {
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

function appendIndizioLeoPage4Media(data) {
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

function appendOggettiLeoPage4Media(data) {
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
function fetchDataLeoPage5Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 5 media");
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
      appendDataLeoPage5Media(data);
      appendPictureLeoPage5Media(data);
      appendPulsanteLeoPage5Media(data);
      appendIndizioLeoPage5Media(data);
      appendOggettiLeoPage5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage5Media(data) {
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

function appendPulsanteLeoPage5Media(data) {
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

function appendIndizioLeoPage5Media(data) {
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

function appendOggettiLeoPage5Media(data) {
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
function ordinaBereMed() {
  alert("Tieni d'occhio la zona ma mantieni un profilo basso e ordina da bere");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - ordina da bere media");
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
function cantaMed() {
  alert(
    "Mentre canti riesci ad attirare l'attenzione di tutti i presenti, tranne un gruppetto assorti nel loro confabulare. Riesci persino a vederli in volto"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - canta media");
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
function fetchDataLeoPage6a1Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a1 medio");
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
      appendDataLeoPage6a1Media(data);
      appendPictureLeoPage6a1Media(data);
      appendPulsanteLeoPage6a1Media(data);
      appendIndizioLeoPage6a1Media(data);
      appendOggettiLeoPage6a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a1Media(data) {
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

function appendPulsanteLeoPage6a1Media(data) {
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

function appendIndizioLeoPage6a1Media(data) {
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

function appendOggettiLeoPage6a1Media(data) {
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
function fetchDataLeoPage6a2Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a2 medio");
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
      appendDataLeoPage6a2Media(data);
      appendPictureLeoPage6a2Media(data);
      appendPulsanteLeoPage6a2Media(data);
      appendIndizioLeoPage6a2Media(data);
      appendOggettiLeoPage6a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a2Media(data) {
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

function appendPulsanteLeoPage6a2Media(data) {
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

function appendIndizioLeoPage6a2Media(data) {
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

function appendOggettiLeoPage6a2Media(data) {
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
function fetchDataLeoPage6a3Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a3 medio");
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
      appendDataLeoPage6a3Media(data);
      appendPictureLeoPage6a3Media(data);
      appendPulsanteLeoPage6a3Media(data);
      appendIndizioLeoPage6a3Media(data);
      appendOggettiLeoPage6a3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a3Media(data) {
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

function appendPulsanteLeoPage6a3Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6a3.pulsanteFunc);
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
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina6a3.pulsanteName;
    puls2.innerHTML = data[i].pagina6a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina6a3.pulsanteName3;
  }
}

function appendIndizioLeoPage6a3Media(data) {
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

function appendOggettiLeoPage6a3Media(data) {
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
function entraStanzaMed() {
  alert(
    "Non hai più le chiavi della stanza. Devono esserti cadute alla taverna. Devi tornare indietro"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - niente chiave media");
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
function fetchDataLeoPage6a4Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a4 medio");
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
      appendDataLeoPage6a4Media(data);
      appendPictureLeoPage6a4Media(data);
      appendPulsanteLeoPage6a4Media(data);
      appendIndizioLeoPage6a4Media(data);
      appendOggettiLeoPage6a4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a4Media(data) {
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

function appendPulsanteLeoPage6a4Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina6a4.pulsanteFunc);
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
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina6a4.pulsanteName;
    puls2.innerHTML = data[i].pagina6a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina6a4.pulsanteName3;
  }
}

function appendIndizioLeoPage6a4Media(data) {
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

function appendOggettiLeoPage6a4Media(data) {
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
function recuperaChiaviMed() {
  alert("La cameriera dice di aver trovato un paio di chiavi per terra.");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - recupera chiavi media");
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
function fetchDataLeoPage6a5Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6a5 medio");
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
      appendDataLeoPage6a5Media(data);
      appendPictureLeoPage6a5Media(data);
      appendPulsanteLeoPage6a5Media(data);
      appendIndizioLeoPage6a5Media(data);
      appendOggettiLeoPage6a5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6a5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6a5Media(data) {
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

function appendPulsanteLeoPage6a5Media(data) {
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

function appendIndizioLeoPage6a5Media(data) {
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

function appendOggettiLeoPage6a5Media(data) {
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
function fetchDataLeoPage6b1Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b1 medio");
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
      appendDataLeoPage6b1Media(data);
      appendPictureLeoPage6b1Media(data);
      appendPulsanteLeoPage6b1Media(data);
      appendIndizioLeoPage6b1Media(data);
      appendOggettiLeoPage6b1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b1Media(data) {
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

function appendPulsanteLeoPage6b1Media(data) {
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
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6b1.pulsanteName;
    puls2.innerHTML = data[i].pagina6b1.pulsanteName2;
  }
}

function appendIndizioLeoPage6b1Media(data) {
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

function appendOggettiLeoPage6b1Media(data) {
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
function fetchDataLeoPage6b2Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b2 medio");
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
      appendDataLeoPage6b2Media(data);
      appendPictureLeoPage6b2Media(data);
      appendPulsanteLeoPage6b2Media(data);
      appendIndizioLeoPage6b2Media(data);
      appendOggettiLeoPage6b2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b2Media(data) {
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

function appendPulsanteLeoPage6b2Media(data) {
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

    //puls.innerHTML = data[i].pagina6b2.pulsanteName;
    puls2.innerHTML = data[i].pagina6b2.pulsanteName2;
    puls3.innerHTML = data[i].pagina6b2.pulsanteName3;
  }
}

function appendIndizioLeoPage6b2Media(data) {
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

function appendOggettiLeoPage6b2Media(data) {
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
function cercaTavernaMed() {
  alert(
    "Mentre cerchi, passa la cameriera chiedendoti se fossi un amico del gruppetto appena uscito. Uno di loro si è scordato le chiavi dell'albergo, e te le allunga."
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - tavolo taverna chiavi media");
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
function fetchDataLeoPage6b3Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6b3 medio");
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
      appendDataLeoPage6b3Media(data);
      appendPictureLeoPage6b3Media(data);
      appendPulsanteLeoPage6b3Media(data);
      appendIndizioLeoPage6b3Media(data);
      appendOggettiLeoPage6b3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage6b3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6b3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage6b3Media(data) {
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

function appendPulsanteLeoPage6b3Media(data) {
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
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina6b3.pulsanteName;
    puls2.innerHTML = data[i].pagina6b3.pulsanteName2;
  }
}

function appendIndizioLeoPage6b3Media(data) {
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

function appendOggettiLeoPage6b3Media(data) {
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
function fetchDataLeoPage7Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7 medio");
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
      appendDataLeoPage7Media(data);
      appendPictureLeoPage7Media(data);
      appendPulsanteLeoPage7Media(data);
      appendIndizioLeoPage7Media(data);
      appendOggettiLeoPage7Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage7Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage7Media(data) {
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

function appendPulsanteLeoPage7Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina7.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    //pulsContainer.appendChild(puls);

    //puls.innerHTML = data[i].pagina7.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
    //puls3.innerHTML = data[i].pagina7.pulsanteName3;
  }
}

function appendIndizioLeoPage7Media(data) {
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

function appendOggettiLeoPage7Media(data) {
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
function entraCameraMed() {
  alert("Usa la chiave ed entra nella stanza.");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - entra camera media");
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
function fetchDataLeoPage8Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 8 medio");
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
      appendDataLeoPage8Media(data);
      appendPictureLeoPage8Media(data);
      appendPulsanteLeoPage8Media(data);
      appendIndizioLeoPage8Media(data);
      appendOggettiLeoPage8Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage8Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage8Media(data) {
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

function appendPulsanteLeoPage8Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina8.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina8.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
    puls3.innerHTML = data[i].pagina8.pulsanteName3;
    puls4.innerHTML = data[i].pagina8.pulsanteName4;
  }
}

function appendIndizioLeoPage8Media(data) {
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

function appendOggettiLeoPage8Media(data) {
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
function cercaLettoMed() {
  alert(
    "Hai trovato un foglio con scritto il nome di quattro quadri: - La Dama con l'ermellino - La Gioconda - l'Annunciazione - Uomo Vitruviano. E sulla scritta della Dama con l'ermellino c'è segnata una grossa X sopra, come per indicare che la prima operazione fosse stata eseguita con successo."
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - foglio quadri camera media");
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

function cercaCassettoMed() {
  alert("Qui dentro non c'è niente, cerca da un'altra parte");
}

//////////////////////PAGE9///////////////////////////////////
function fetchDataLeoPage9Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 9 medio");
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
      appendDataLeoPage9Media(data);
      appendPictureLeoPage9Media(data);
      appendPulsanteLeoPage9Media(data);
      appendIndizioLeoPage9Media(data);
      appendOggettiLeoPage9Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage9Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage9Media(data) {
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

function appendPulsanteLeoPage9Media(data) {
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

function appendIndizioLeoPage9Media(data) {
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

function appendOggettiLeoPage9Media(data) {
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
function fetchDataLeoPage10Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 10 medio");
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
      appendDataLeoPage10Media(data);
      appendPictureLeoPage10Media(data);
      appendPulsanteLeoPage10Media(data);
      appendIndizioLeoPage10Media(data);
      appendOggettiLeoPage10Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage10Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage10Media(data) {
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

function appendPulsanteLeoPage10Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina10.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
    puls3.innerHTML = data[i].pagina10.pulsanteName3;
  }
}

function appendIndizioLeoPage10Media(data) {
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

function appendOggettiLeoPage10Media(data) {
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
function compraBigliettoMedia() {
  alert(
    "Il primo treno disponibile per la Francia parte tra un'ora. Devi arrivare prima dei ladri di quadri e sventare i loro piani."
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - biglietto media");
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
function fetchDataLeoPage11Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 11 medio");
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
      appendDataLeoPage11Media(data);
      appendPictureLeoPage11Media(data);
      appendPulsanteLeoPage11Media(data);
      appendIndizioLeoPage11Media(data);
      appendOggettiLeoPage11Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage11Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage11Media(data) {
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

function appendPulsanteLeoPage11Media(data) {
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

function appendIndizioLeoPage11Media(data) {
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

function appendOggettiLeoPage11Media(data) {
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
function usaBigliettoMed() {
  alert("Usa il biglietto per salire sul treno");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - usa biglietto media");
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
function fetchDataLeoPage12Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 12 medio");
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
      appendDataLeoPage12Media(data);
      appendPictureLeoPage12Media(data);
      appendPulsanteLeoPage12Media(data);
      appendIndizioLeoPage12Media(data);
      appendOggettiLeoPage12Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage12Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage12Media(data) {
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

function appendPulsanteLeoPage12Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina12.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina12.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    puls3.innerHTML = data[i].pagina12.pulsanteName3;
    puls4.innerHTML = data[i].pagina12.pulsanteName4;
  }
}

function appendIndizioLeoPage12Media(data) {
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

function appendOggettiLeoPage12Media(data) {
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
function analizzaFialaMed() {
  alert("Recati al laboratorio più vicino");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - fiala media");
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
function louvreMed() {
  alert("Devi sventare i piani dei delinquenti");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - louvre media");
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
function fetchDataLeoPage13a1Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13a1 medio");
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
      appendDataLeoPage13a1Media(data);
      appendPictureLeoPage13a1Media(data);
      appendPulsanteLeoPage13a1Media(data);
      appendIndizioLeoPage13a1Media(data);
      appendOggettiLeoPage13a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13a1Media(data) {
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

function appendPulsanteLeoPage13a1Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina13a1.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina13a1.pulsanteName;
    puls2.innerHTML = data[i].pagina13a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina13a1.pulsanteName3;
  }
}

function appendIndizioLeoPage13a1Media(data) {
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
      data[i].pagina13a1.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13a1Media(data) {
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
function analizzaLiquidoMed() {
  alert(
    "Dalle analisi risulta essere un siero che porta le persone ad avere allucinazioni. Ecco il motivo per cui la donna delle pulizie accusava di essere stata attaccata dall'ermellino"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - fiala media");
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
function fetchDataLeoPage13a2Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13a2 medio");
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
      appendDataLeoPage13a2Media(data);
      appendPictureLeoPage13a2Media(data);
      appendPulsanteLeoPage13a2Media(data);
      appendIndizioLeoPage13a2Media(data);
      appendOggettiLeoPage13a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13a2Media(data) {
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

function appendPulsanteLeoPage13a2Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina13a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13a2.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina13a2.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina13a2.pulsanteName;
    puls2.innerHTML = data[i].pagina13a2.pulsanteName2;
    //puls3.innerHTML = data[i].pagina13a2.pulsanteName3;
  }
}

function appendIndizioLeoPage13a2Media(data) {
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
      data[i].pagina13a2.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13a2Media(data) {
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
function fetchDataLeoPage13b1Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13b1 medio");
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
      appendDataLeoPage13b1Media(data);
      appendPictureLeoPage13b1Media(data);
      appendPulsanteLeoPage13b1Media(data);
      appendIndizioLeoPage13b1Media(data);
      appendOggettiLeoPage13b1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage13b1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage13b1Media(data) {
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

function appendPulsanteLeoPage13b1Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina13b1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13b1.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina13b1.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina13b1.pulsanteName;
    puls2.innerHTML = data[i].pagina13b1.pulsanteName2;
    //puls3.innerHTML = data[i].pagina13b1.pulsanteName3;
  }
}

function appendIndizioLeoPage13b1Media(data) {
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
      data[i].pagina13b1.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage13b1Media(data) {
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
function fetchDataLeoPage14Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 14 medio");
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
      appendDataLeoPage14Media(data);
      appendPictureLeoPage14Media(data);
      appendPulsanteLeoPage14Media(data);
      appendIndizioLeoPage14Media(data);
      appendOggettiLeoPage14Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage14Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage14Media(data) {
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

function appendPulsanteLeoPage14Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina14.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina14.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    //pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina14.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
    //puls3.innerHTML = data[i].pagina14.pulsanteName3;
  }
}

function appendIndizioLeoPage14Media(data) {
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

function appendOggettiLeoPage14Media(data) {
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
function targhettaGiocondaMed() {
  alert(
    "La gioconda è un dipinto olio su tavola di legno (77x53) di Leonardo Da Vinci, databile al 1503-1504"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - gioconda media");
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
function fetchDataLeoPage15Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 15 medio");
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
      appendDataLeoPage15Media(data);
      appendPictureLeoPage15Media(data);
      appendPulsanteLeoPage15Media(data);
      appendIndizioLeoPage15Media(data);
      appendOggettiLeoPage15Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage15Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage15Media(data) {
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

function appendPulsanteLeoPage15Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina15.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina15.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina15.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina15.pulsanteName;
    puls2.innerHTML = data[i].pagina15.pulsanteName2;
    //puls3.innerHTML = data[i].pagina15.pulsanteName3;
  }
}

function appendIndizioLeoPage15Media(data) {
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

function appendOggettiLeoPage15Media(data) {
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
function fetchDataLeoPage16Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 16 medio");
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
      appendDataLeoPage16Media(data);
      appendPictureLeoPage16Media(data);
      appendPulsanteLeoPage16Media(data);
      appendIndizioLeoPage16Media(data);
      appendOggettiLeoPage16Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage16Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage16Media(data) {
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

function appendPulsanteLeoPage16Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina16.pulsanteFunc);
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

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
    puls3.innerHTML = data[i].pagina16.pulsanteName3;
    puls4.innerHTML = data[i].pagina16.pulsanteName4;
  }
}

function appendIndizioLeoPage16Media(data) {
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

function appendOggettiLeoPage16Media(data) {
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
function studiaQuadroMed() {
  alert(
    "L'Uomo Vitruviano è un disegno fatto a penna e inchistro su carta di Leonardo Da Vinci con diemsione 35 x 26 cm"
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - uomo vistruviano media");
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

function compraStrumentiMed() {
  alert("Acquista penna, calamaio e foglio per creare il dipinto");
}

//////////////////////PAGE17///////////////////////////////////
function fetchDataLeoPage17Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 17 medio");
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
      appendDataLeoPage17Media(data);
      appendPictureLeoPage17Media(data);
      appendPulsanteLeoPage17Media(data);
      appendIndizioLeoPage17Media(data);
      appendOggettiLeoPage17Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage17Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage17Media(data) {
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

function appendPulsanteLeoPage17Media(data) {
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

function appendIndizioLeoPage17Media(data) {
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

function appendOggettiLeoPage17Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina17.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina17.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina17.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE18///////////////////////////////////
function fetchDataLeoPage18Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 18 medio");
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
      appendDataLeoPage18Media(data);
      appendPictureLeoPage18Media(data);
      appendPulsanteLeoPage18Media(data);
      appendIndizioLeoPage18Media(data);
      appendOggettiLeoPage18Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage18Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage18Media(data) {
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

function appendPulsanteLeoPage18Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina18.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
    puls3.innerHTML = data[i].pagina18.pulsanteName3;
  }
}

function appendIndizioLeoPage18Media(data) {
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

function appendOggettiLeoPage18Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina18.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina18.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina18.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

//funzione che fa apparire un tasto dopo averne premuto un altro
function dipingiMed() {
  alert("Usa la penna con il calamaio e il foglio per dipingere il quadro");

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - dipingi media");
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
function fetchDataLeoPage19Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19 medio");
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
      appendDataLeoPage19Media(data);
      appendPictureLeoPage19Media(data);
      appendPulsanteLeoPage19Media(data);
      appendIndizioLeoPage19Media(data);
      appendOggettiLeoPage19Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage19Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage19Media(data) {
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

function appendPulsanteLeoPage19Media(data) {
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

function appendIndizioLeoPage19Media(data) {
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

function appendOggettiLeoPage19Media(data) {
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

//funzione che fa apparire un tasto dopo averne premuto un altro
function leggiMed() {
  alert(
    "E' stato rubato un terzo dipinto nell'ultima settimana. Un'altra opera di Leonardo da vinci è scomparsa ieri notte e i testimoni accusano di essere stati aggrediti dall'Arcangelo Gabriele. Il dipinto di cui si tratta è l'Annunciazione, tenuto nella Galleria degli Uffizzi a Firenze. Dipinto a olio e tempera su tavola (98cm x 2,17m) datato tra il 1472-1475..."
  );

  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti - leggi articolo media");
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
function fetchDataLeoPage20Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 20 medio");
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
      appendDataLeoPage20Media(data);
      appendPictureLeoPage20Media(data);
      appendPulsanteLeoPage20Media(data);
      appendIndizioLeoPage20Media(data);
      appendOggettiLeoPage20Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage20Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage20Media(data) {
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

function appendPulsanteLeoPage20Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina20.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina20.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
    //puls3.innerHTML = data[i].pagina20.pulsanteName3;
  }
}

function appendIndizioLeoPage20Media(data) {
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

function appendOggettiLeoPage20Media(data) {
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
function fetchDataLeoPage21Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 21 medio");
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
      appendDataLeoPage21Media(data);
      appendPictureLeoPage21Media(data);
      appendPulsanteLeoPage21Media(data);
      appendIndizioLeoPage21Media(data);
      appendOggettiLeoPage21Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage21Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage21Media(data) {
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

function appendPulsanteLeoPage21Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina21.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    //l'ordine di queste variabili genera l'ordine di visualizzazione dei pulsanti
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina21.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    //puls3.innerHTML = data[i].pagina21.pulsanteName3;
  }
}

function appendIndizioLeoPage21Media(data) {
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

function appendOggettiLeoPage21Media(data) {
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

//////////////////////PAGE22///////////////////////////////////
function fetchDataLeoPage22Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22 medio");
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
      appendDataLeoPage22Media(data);
      appendPictureLeoPage22Media(data);
      appendPulsanteLeoPage22Media(data);
      appendIndizioLeoPage22Media(data);
      appendOggettiLeoPage22Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22Media(data) {
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

function appendPulsanteLeoPage22Media(data) {
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

function appendIndizioLeoPage22Media(data) {
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

function appendOggettiLeoPage22Media(data) {
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

//////////////////////PAGE22a1///////////////////////////////////
function fetchDataLeoPage22a1Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22a1");
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
      appendDataLeoPage22a1Media(data);
      appendPictureLeoPage22a1Media(data);
      appendPulsanteLeoPage22a1Media(data);
      appendIndizioLeoPage22a1Media(data);
      appendOggettiLeoPage22a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22a1Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage22a1Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22a1.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22a1.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina22a1.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina22a1.pulsanteName;
    puls2.innerHTML = data[i].pagina22a1.pulsanteName2;
    puls3.innerHTML = data[i].pagina22a1.pulsanteName3;
    puls4.innerHTML = data[i].pagina22a1.pulsanteName4;
  }
}

function appendIndizioLeoPage22a1Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina22a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina22a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina22a1.indizi.indizio4 +
      " <br> " +
      data[i].pagina22a1.indizi.indizio5 +
      " <br> " +
      data[i].pagina22a1.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22a1Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22a1.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22a1.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE22a2///////////////////////////////////
function fetchDataLeoPage22a2Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22a2");
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
      appendDataLeoPage22a2Media(data);
      appendPictureLeoPage22a2Media(data);
      appendPulsanteLeoPage22a2Media(data);
      appendIndizioLeoPage22a2Media(data);
      appendOggettiLeoPage22a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22a2Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage22a2Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22a2.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina22a2.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina22a2.pulsanteName;
    puls2.innerHTML = data[i].pagina22a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina22a2.pulsanteName3;
    puls4.innerHTML = data[i].pagina22a2.pulsanteName4;
  }
}

function appendIndizioLeoPage22a2Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina22a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina22a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina22a2.indizi.indizio4 +
      " <br> " +
      data[i].pagina22a2.indizi.indizio5 +
      " <br> " +
      data[i].pagina22a2.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22a2Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22a2.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22a2.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE22a3///////////////////////////////////
function fetchDataLeoPage22a3Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22a3");
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
      appendDataLeoPage22a3Media(data);
      appendPictureLeoPage22a3Media(data);
      appendPulsanteLeoPage22a3Media(data);
      appendIndizioLeoPage22a3Media(data);
      appendOggettiLeoPage22a3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22a3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22a3Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage22a3Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22a3.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22a3.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina22a3.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina22a3.pulsanteName;
    puls2.innerHTML = data[i].pagina22a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina22a3.pulsanteName3;
    puls4.innerHTML = data[i].pagina22a3.pulsanteName4;
  }
}

function appendIndizioLeoPage22a3Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina22a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina22a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina22a3.indizi.indizio4 +
      " <br> " +
      data[i].pagina22a3.indizi.indizio5 +
      " <br> " +
      data[i].pagina22a3.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22a3Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22a3.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22a3.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE22a4///////////////////////////////////
function fetchDataLeoPage22a4Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22a4");
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
      appendDataLeoPage22a4Media(data);
      appendPictureLeoPage22a4Media(data);
      appendPulsanteLeoPage22a4Media(data);
      appendIndizioLeoPage22a4Media(data);
      appendOggettiLeoPage22a4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22a4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22a4Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage22a4Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22a4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22a4.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina22a4.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina22a4.pulsanteName;
    puls2.innerHTML = data[i].pagina22a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina22a4.pulsanteName3;
    puls4.innerHTML = data[i].pagina22a4.pulsanteName4;
  }
}

function appendIndizioLeoPage22a4Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina22a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina22a4.indizi.indizio3 +
      " <br> " +
      data[i].pagina22a4.indizi.indizio4 +
      " <br> " +
      data[i].pagina22a4.indizi.indizio5 +
      " <br> " +
      data[i].pagina22a4.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22a4Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22a4.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22a4.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE22a5///////////////////////////////////
function fetchDataLeoPage22a5Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 22a5");
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
      appendDataLeoPage22a5Media(data);
      appendPictureLeoPage22a5Media(data);
      appendPulsanteLeoPage22a5Media(data);
      appendIndizioLeoPage22a5Media(data);
      appendOggettiLeoPage22a5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage22a5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage22a5Media(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "400");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina22a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteLeoPage22a5Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina22a5.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22a5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22a5.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina22a5.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina22a5.pulsanteName;
    puls2.innerHTML = data[i].pagina22a5.pulsanteName2;
    puls3.innerHTML = data[i].pagina22a5.pulsanteName3;
    puls4.innerHTML = data[i].pagina22a5.pulsanteName4;
  }
}

function appendIndizioLeoPage22a5Media(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina22a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina22a5.indizi.indizio3 +
      " <br> " +
      data[i].pagina22a5.indizi.indizio4 +
      " <br> " +
      data[i].pagina22a5.indizi.indizio5 +
      " <br> " +
      data[i].pagina22a5.indizi.indizio6;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage22a5Media(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina22a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina22a5.oggetti.oggetto2 +
      " <br> " +
      data[i].pagina22a5.oggetti.oggetto3;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE23///////////////////////////////////
function fetchDataLeoPage23Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 23 medio");
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
      appendDataLeoPage23Media(data);
      appendPictureLeoPage23Media(data);
      appendPulsanteLeoPage23Media(data);
      appendIndizioLeoPage23Media(data);
      appendOggettiLeoPage23Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage23Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage23Media(data) {
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

function appendPulsanteLeoPage23Media(data) {
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

function appendIndizioLeoPage23Media(data) {
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
      data[i].pagina23.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage23Media(data) {
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
function fetchDataLeoPage24Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 24 medio");
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
      appendDataLeoPage24Media(data);
      appendPictureLeoPage24Media(data);
      appendPulsanteLeoPage24Media(data);
      appendIndizioLeoPage24Media(data);
      appendOggettiLeoPage24Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage24Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage24Media(data) {
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

function appendPulsanteLeoPage24Media(data) {
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

function appendIndizioLeoPage24Media(data) {
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
      data[i].pagina24.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiLeoPage24Media(data) {
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
function fetchDataLeoPage25Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25 medio");
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
      appendDataLeoPage25Media(data);
      appendPictureLeoPage25Media(data);
      appendPulsanteLeoPage25Media(data);
      appendIndizioLeoPage25Media(data);
      appendOggettiLeoPage25Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage25Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage25Media(data) {
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

function appendPulsanteLeoPage25Media(data) {
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

function appendIndizioLeoPage25Media(data) {
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

function appendOggettiLeoPage25Media(data) {
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
function fetchDataLeoPage26Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 26 medio");
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
      appendDataLeoPage26Media(data);
      appendPictureLeoPage26Media(data);
      appendPulsanteLeoPage26Media(data);
      appendIndizioLeoPage26Media(data);
      appendOggettiLeoPage26Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage26Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage26Media(data) {
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

function appendPulsanteLeoPage26Media(data) {
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

function appendIndizioLeoPage26Media(data) {
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

function appendOggettiLeoPage26Media(data) {
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
function fetchDataLeoPage27Media() {
  fetch("json/leo/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 27 medio");
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
      appendDataLeoPage27Media(data);
      appendPictureLeoPage27Media(data);
      appendPulsanteLeoPage27Media(data);
      appendIndizioLeoPage27Media(data);
      appendOggettiLeoPage27Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataLeoPage27Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureLeoPage27Media(data) {
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

function appendPulsanteLeoPage27Media(data) {
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

function appendIndizioLeoPage27Media(data) {
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

function appendOggettiLeoPage27Media(data) {
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

/////////////////SCHERMATA INIZIALE/////////////
function backHomeMed() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

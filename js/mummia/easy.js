//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function mummialog() {
  console.log("gioco mummia");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataMummiaPage2Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Facile");
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
      appendDataMummiaPage2Facile(data);
      appendPictureMummiaPage2Facile(data);
      appendPulsanteMummiaPage2Facile(data);
      appendIndizioMummiaPage2Facile(data);
      appendOggettiMummiaPage2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage2Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage2Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina2.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina2.pulsanteName2;
    puls3.innerHTML = data[i].pagina2.pulsanteName3;
  }
}

function appendIndizioMummiaPage2Facile(data) {
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

function appendOggettiMummiaPage2Facile(data) {
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

//funzione che fa apparire un modal con dei tasti
function apriZainoFac() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti zaino Facile");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseTascaFac(data);
      openDialogFac();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialogFac() {
    $("#dialog").dialog();
  }

  function chooseTascaFac(data) {
    var pulsContainer = document.getElementById("dialog");

    for (var i = 0; i < data.length; i++) {
      var urlvalue4 = JSON.stringify(data[i].pagina2.pulsanteFunc4);
      var urlvalue5 = JSON.stringify(data[i].pagina2.pulsanteFunc5);

      var stripped4 = urlvalue4.replace(/['"]+/g, "");
      var stripped5 = urlvalue5.replace(/['"]+/g, "");

      var puls4 = document.createElement("button");
      var puls5 = document.createElement("button");

      puls4.setAttribute("onclick", stripped4);
      puls5.setAttribute("onclick", stripped5);

      dialog.setAttribute("title", "SCEGLI UNA TASCA");
      // puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls4);
      pulsContainer.appendChild(puls5);

      puls4.innerHTML = data[i].pagina2.pulsanteName4;
      puls5.innerHTML = data[i].pagina2.pulsanteName5;
    }
  }
}

function destraFac() {
  alert("Hai trovato la tua torcia.");
  tascaOKFac();
  $("#dialog").dialog("close");
  document.getElementById("dialog").innerHTML = "";
}

function tascaOKFac() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Zaino  OK Facile");
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

function sinistraFac() {
  alert("Hai trovato un pugnale. In questo momento non ti serve.");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataMummiaPage3Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 Facile");
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
      appendDataMummiaPage3Facile(data);
      appendPictureMummiaPage3Facile(data);
      appendPulsanteMummiaPage3Facile(data);
      appendIndizioMummiaPage3Facile(data);
      appendOggettiMummiaPage3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage3Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage3Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina3.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina3.pulsanteName2;
    puls3.innerHTML = data[i].pagina3.pulsanteName3;
  }
}

function appendIndizioMummiaPage3Facile(data) {
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

function appendOggettiMummiaPage3Facile(data) {
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

function scarabeoFac() {
  alert(
    "Hai trovato uno scarabeo. Per gli antichi Egizi era considerato un potente amuleto. Credevano infatti che lo scarabeo della specie 'stercorario' potesse rigenerarsi dalla palla di sterco che l’insetto fa rotolare davanti a sé.."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo Facile");
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

//////////////////////PAGE4///////////////////////////////////
function fetchDataMummiaPage4Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage4Facile(data);
      appendPictureMummiaPage4Facile(data);
      appendPulsanteMummiaPage4Facile(data);
      appendIndizioMummiaPage4Facile(data);
      appendOggettiMummiaPage4Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage4Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage4Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage4Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina4.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina4.pulsanteFunc4);

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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina4.pulsanteName2;
    puls3.innerHTML = data[i].pagina4.pulsanteName3;
    puls4.innerHTML = data[i].pagina4.pulsanteName4;
  }
}

function appendIndizioMummiaPage4Facile(data) {
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

function appendOggettiMummiaPage4Facile(data) {
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

function cercaPavimentoFac() {
  alert(
    "Si è aperto un passaggio!! Qui non si vede niente. Dovrai usare la torcia"
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pavimento facile");
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
      var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina4.pulsanteName;
    }
  }
}

function cercaParetiFac() {
  alert("Non hai trovato nessun passaggio. Prova da un'altra parte");
}

//////////////////////PAGE5///////////////////////////////////
function fetchDataMummiaPage5Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage5Facile(data);
      appendPictureMummiaPage5Facile(data);
      appendPulsanteMummiaPage5Facile(data);
      appendIndizioMummiaPage5Facile(data);
      appendOggettiMummiaPage5Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage5Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage5Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage5Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina5.pulsanteName2;
    puls3.innerHTML = data[i].pagina5.pulsanteName3;
  }
}

function appendIndizioMummiaPage5Facile(data) {
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

function appendOggettiMummiaPage5Facile(data) {
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

function amuletoMummiaFac() {
  alert(
    "Camminando ti accorgi di aver calpestato qualcosa. Si tratta di uno strano amuleto... Cosa ci fa un amuleto in un posto come questo? Solitamente gli amuleti accompagnano i defunti, ponendoli nelle bende che avvolgevano le mummie, così da proteggere il loro passaggio nell'oltretomba dai demoni."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti amuleto facile");
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
function fetchDataMummiaPage6Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage6Facile(data);
      appendPictureMummiaPage6Facile(data);
      appendPulsanteMummiaPage6Facile(data);
      appendIndizioMummiaPage6Facile(data);
      appendOggettiMummiaPage6Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage6Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage6Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage6Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina6.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina6.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina6.pulsanteName2;
    puls3.innerHTML = data[i].pagina6.pulsanteName3;
  }
}

function appendIndizioMummiaPage6Facile(data) {
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

function appendOggettiMummiaPage6Facile(data) {
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

function annotaMessaggioFac() {
  alert(
    "Anubi era la divinità umanoide, con un corpo umano e la testa di sciacallo, che proteggeva le necropoli ed il mondo dei morti, assistendo anche nel rituale dell'imbalsamazione. Veniva rappresentato con il corpo di uomo e testa di cane, ma viene contrassegnato come 'testa di sciacallo' per identificare così l'animale che si nutre di carogne e quindi strettamente connesso alla morte."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti graffiti anubi facile");
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

//////////////////////PAGE7///////////////////////////////////
function fetchDataMummiaPage7Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage7Facile(data);
      appendPictureMummiaPage7Facile(data);
      appendPulsanteMummiaPage7Facile(data);
      appendIndizioMummiaPage7Facile(data);
      appendOggettiMummiaPage7Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage7Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina7.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina7.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina7.pulsanteName;
    puls2.innerHTML = data[i].pagina7.pulsanteName2;
    //puls3.innerHTML = data[i].pagina7.pulsanteName3;
  }
}

function appendIndizioMummiaPage7Facile(data) {
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

function appendOggettiMummiaPage7Facile(data) {
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
function fetchDataMummiaPage8Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage8Facile(data);
      appendPictureMummiaPage8Facile(data);
      appendPulsanteMummiaPage8Facile(data);
      appendIndizioMummiaPage8Facile(data);
      appendOggettiMummiaPage8Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage8Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage8Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina8.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage8Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina8.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina8.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
    puls3.innerHTML = data[i].pagina8.pulsanteName3;
  }
}

function appendIndizioMummiaPage8Facile(data) {
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

function appendOggettiMummiaPage8Facile(data) {
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

function perlustraStanzaFac() {
  alert(
    "Analizzando meglio i resti capisci che il decesso è sopraggiunto da poche ore. Com'è possibile? Chi può aver ucciso queste persone?."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti cadavere facile");
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
function fetchDataMummiaPage9Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage9Facile(data);
      appendPictureMummiaPage9Facile(data);
      appendPulsanteMummiaPage9Facile(data);
      appendIndizioMummiaPage9Facile(data);
      appendOggettiMummiaPage9Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage9Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage9Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina9.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage9Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina9.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina9.pulsanteFunc4);

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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
    puls3.innerHTML = data[i].pagina9.pulsanteName3;
    puls4.innerHTML = data[i].pagina9.pulsanteName4;
  }
}

function appendIndizioMummiaPage9Facile(data) {
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

function appendOggettiMummiaPage9Facile(data) {
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

function entraCultoFac() {
  alert("Dentro dovrebbe esserci la tomba del faraone...");

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti entra luogo culto facile");
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

function ispezionaCultoFac() {
  alert(
    "Entrando nel luogo di culto troverai il sarcofago del faraone. Il sarcofago egizio era la cassa destinata a custodire il corpo imbalsamato del defunto e il suo Ka. E' da considerarsi l'elemento più importante di una sepoltura e dimora del defunto per l'eternità. il Ka nel mondo fisico è in grado di conservare i ricordi e i sentimenti della vita terrena"
  );
}

//////////////////////PAGE10///////////////////////////////////
function fetchDataMummiaPage10Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage10Facile(data);
      appendPictureMummiaPage10Facile(data);
      appendPulsanteMummiaPage10Facile(data);
      appendIndizioMummiaPage10Facile(data);
      appendOggettiMummiaPage10Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage10Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage10Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina10.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage10Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
    puls3.innerHTML = data[i].pagina10.pulsanteName3;
  }
}

function appendIndizioMummiaPage10Facile(data) {
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

function appendOggettiMummiaPage10Facile(data) {
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

function entraSarcofagoFac() {
  alert(
    "Sembrerebbe che il sarcofago sia stato profanato e che qualcuno abbia rubato tutte le sue ricchezze. Tra cui l'amuleto trovato prima. Rimettilo al suo posto"
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti entra sarcofago facile");
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

//////////////////////PAGE11///////////////////////////////////
function fetchDataMummiaPage11Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage11Facile(data);
      appendPictureMummiaPage11Facile(data);
      appendPulsanteMummiaPage11Facile(data);
      appendIndizioMummiaPage11Facile(data);
      appendOggettiMummiaPage11Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage11Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage11Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina11.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage11Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina11.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina11.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina11.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina11.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
    //puls3.innerHTML = data[i].pagina11.pulsanteName3;
  }
}

function appendIndizioMummiaPage11Facile(data) {
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

function appendOggettiMummiaPage11Facile(data) {
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
function fetchDataMummiaPage12Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage12Facile(data);
      appendPictureMummiaPage12Facile(data);
      appendPulsanteMummiaPage12Facile(data);
      appendIndizioMummiaPage12Facile(data);
      appendOggettiMummiaPage12Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage12Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage12Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina12.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage12Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina12.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina12.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina12.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina12.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    //puls3.innerHTML = data[i].pagina12.pulsanteName3;
  }
}

function appendIndizioMummiaPage12Facile(data) {
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

function appendOggettiMummiaPage12Facile(data) {
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
function fetchDataMummiaPage13Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage13Facile(data);
      appendPictureMummiaPage13Facile(data);
      appendPulsanteMummiaPage13Facile(data);
      appendIndizioMummiaPage13Facile(data);
      appendOggettiMummiaPage13Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage13Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage13Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina13.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage13Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina13.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina13.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina13.pulsanteFunc4);

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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina13.pulsanteName2;
    puls3.innerHTML = data[i].pagina13.pulsanteName3;
    puls4.innerHTML = data[i].pagina13.pulsanteName4;
  }
}

function appendIndizioMummiaPage13Facile(data) {
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

function appendOggettiMummiaPage13Facile(data) {
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

function perlustraStanzaStatueFac() {
  alert(
    "C'è una tavola scolpita con una strana raffigurazione. Decidi di osservarla meglio."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola Facile");
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

function raccogliFiaccolaFac() {
  alert("Forse un po di luce potrebbe farti comodo.");
}

//////////////////////PAGE14///////////////////////////////////
function fetchDataMummiaPage14Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage14Facile(data);
      appendPictureMummiaPage14Facile(data);
      appendPulsanteMummiaPage14Facile(data);
      appendIndizioMummiaPage14Facile(data);
      appendOggettiMummiaPage14Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage14Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage14Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina14.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage14Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina14.pulsanteFunc);
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

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina14.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
    puls3.innerHTML = data[i].pagina14.pulsanteName3;
    puls4.innerHTML = data[i].pagina14.pulsanteName4;
  }
}

function appendIndizioMummiaPage14Facile(data) {
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

function appendOggettiMummiaPage14Facile(data) {
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

function continuaPerlustrazioneFac() {
  alert(
    "Improvvisamente senti delle urla, sono lontane ma chiaramente udibili. Corri a vedere cosa sta succedendo."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola Facile");
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

function osservaTavolaFac() {
  alert(
    "Quanto scritto sulla tavola sembrerebbe essere un avvertimento riguardo al fatto di non disobbedire mai alle volontà del faraone."
  );
}

//////////////////////PAGE15///////////////////////////////////
function fetchDataMummiaPage15Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage15Facile(data);
      appendPictureMummiaPage15Facile(data);
      appendPulsanteMummiaPage15Facile(data);
      appendIndizioMummiaPage15Facile(data);
      appendOggettiMummiaPage15Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage15Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage15Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina15.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage15Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina4.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina15.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina15.pulsanteFunc3);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina2.pulsanteName;
    puls2.innerHTML = data[i].pagina15.pulsanteName2;
    puls3.innerHTML = data[i].pagina15.pulsanteName3;
  }
}

function appendIndizioMummiaPage15Facile(data) {
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
      data[i].pagina16.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage15Facile(data) {
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

function controllaStanzaFac() {
  alert("Usa la fiaccola per farti strada");

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola facile");
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
function fetchDataMummiaPage16Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage16Facile(data);
      appendPictureMummiaPage16Facile(data);
      appendPulsanteMummiaPage16Facile(data);
      appendIndizioMummiaPage16Facile(data);
      appendOggettiMummiaPage16Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage16Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage16Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina16.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage16Facile(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
    puls3.innerHTML = data[i].pagina16.pulsanteName3;
    puls4.innerHTML = data[i].pagina16.pulsanteName4;
  }
}

function appendIndizioMummiaPage16Facile(data) {
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
      data[i].pagina16.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage16Facile(data) {
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

function osservaDaVicinoFac() {
  alert(
    "Quello che ha in mano sembrerebbe essere l'occhio di Horus. Perché lo aveva lei? Devi sbrigarti a trovare l'ultimo oggetto"
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti osserva Facile");
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

function ispezionaZonaFac() {
  alert(
    "Mentre ispezioni, senti la donna che in punto di morte sussurra 'Anubi'"
  );
}

//////////////////////PAGE17///////////////////////////////////
function fetchDataMummiaPage17Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage17Facile(data);
      appendPictureMummiaPage17Facile(data);
      appendPulsanteMummiaPage17Facile(data);
      appendIndizioMummiaPage17Facile(data);
      appendOggettiMummiaPage17Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage17Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage17Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina17.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage17Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina17.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina17.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina17.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);
    //pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina17.pulsanteName;
    puls2.innerHTML = data[i].pagina17.pulsanteName2;
    //puls3.innerHTML = data[i].pagina17.pulsanteName3;
    //puls4.innerHTML = data[i].pagina17.pulsanteName4;
  }
}

function appendIndizioMummiaPage17Facile(data) {
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
      data[i].pagina17.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage17Facile(data) {
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
function fetchDataMummiaPage18Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage18Facile(data);
      appendPictureMummiaPage18Facile(data);
      appendPulsanteMummiaPage18Facile(data);
      appendIndizioMummiaPage18Facile(data);
      appendOggettiMummiaPage18Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage18Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage18Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina18.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage18Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina18.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina18.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina18.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina18.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    //pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina18.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
    puls3.innerHTML = data[i].pagina18.pulsanteName3;
    //puls4.innerHTML = data[i].pagina18.pulsanteName4;
  }
}

function appendIndizioMummiaPage18Facile(data) {
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
      data[i].pagina18.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage18Facile(data) {
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

function restituisciOcchioFac() {
  alert(
    "L'Occhio di Horus costituisce nella religione egizia il simbolo di protezione, della prosperità, del potere regale e della buona salute, ed è personificato dalla dea Wadjet."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio facile");
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
function fetchDataMummiaPage19Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage19Facile(data);
      appendPictureMummiaPage19Facile(data);
      appendPulsanteMummiaPage19Facile(data);
      appendIndizioMummiaPage19Facile(data);
      appendOggettiMummiaPage19Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage19Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina19.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    //pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina19.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
    puls3.innerHTML = data[i].pagina19.pulsanteName3;
    //puls4.innerHTML = data[i].pagina19.pulsanteName4;
  }
}

function appendIndizioMummiaPage19Facile(data) {
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

function appendOggettiMummiaPage19Facile(data) {
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

function cercaCroceCorridoioFac() {
  alert(
    "Raggiunta la fine del corridoio c'è una luce in fondo. Forse qualcuno è passato di qua"
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti corridoio Facile");
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
function fetchDataMummiaPage20Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage20Facile(data);
      appendPictureMummiaPage20Facile(data);
      appendPulsanteMummiaPage20Facile(data);
      appendIndizioMummiaPage20Facile(data);
      appendOggettiMummiaPage20Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage20Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage20Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina20.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage20Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina20.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina20.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina20.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina20.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);
    //pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
    //puls3.innerHTML = data[i].pagina20.pulsanteName3;
    //puls4.innerHTML = data[i].pagina20.pulsanteName4;
  }
}

function appendIndizioMummiaPage20Facile(data) {
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
      data[i].pagina20.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage20Facile(data) {
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
function fetchDataMummiaPage21Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage21Facile(data);
      appendPictureMummiaPage21Facile(data);
      appendPulsanteMummiaPage21Facile(data);
      appendIndizioMummiaPage21Facile(data);
      appendOggettiMummiaPage21Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage21Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage21Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina21.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage21Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina21.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina21.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina21.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina21.pulsanteFunc4);

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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina21.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    puls3.innerHTML = data[i].pagina21.pulsanteName3;
    puls4.innerHTML = data[i].pagina21.pulsanteName4;
  }
}

function appendIndizioMummiaPage21Facile(data) {
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
      data[i].pagina21.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage21Facile(data) {
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

function usaPugnaleFac() {
  alert(
    "Sei riuscito a distrarre Anubi. Prendi la croce che la ricercatrice ha rubato e corri a rimetterla nel suo posto."
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio facile");
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

function cercaCroceFac() {
  alert(
    "Sei riuscito a prendere la croce. Corri al sarcofago per rimetterla al suo posto"
  );
}

//////////////////////PAGE22///////////////////////////////////
function fetchDataMummiaPage22Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage22Facile(data);
      appendPictureMummiaPage22Facile(data);
      appendPulsanteMummiaPage22Facile(data);
      appendIndizioMummiaPage22Facile(data);
      appendOggettiMummiaPage22Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage22Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage22Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina22.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage22Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina22.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina22.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina22.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina22.pulsanteFunc4);

    //var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    //var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    //puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    //pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina22.pulsanteName;
    puls2.innerHTML = data[i].pagina22.pulsanteName2;
    puls3.innerHTML = data[i].pagina22.pulsanteName3;
    //puls4.innerHTML = data[i].pagina22.pulsanteName4;
  }
}

function appendIndizioMummiaPage22Facile(data) {
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
      data[i].pagina22.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage22Facile(data) {
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

function riponiCroceFac() {
  alert(
    "L'ankh o Croce della vita - è il simbolo della vita, usata dagli antichi Egizi per donare immortalità ai faraoni"
  );

  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio facile");
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
function fetchDataMummiaPage23Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage23Facile(data);
      appendPictureMummiaPage23Facile(data);
      appendPulsanteMummiaPage23Facile(data);
      appendIndizioMummiaPage23Facile(data);
      appendOggettiMummiaPage23Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage23Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage23Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina23.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage23Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina23.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina23.pulsanteName;
  }
}

function appendIndizioMummiaPage23Facile(data) {
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

function appendOggettiMummiaPage23Facile(data) {
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
function fetchDataMummiaPage24Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage24Facile(data);
      appendPictureMummiaPage24Facile(data);
      appendPulsanteMummiaPage24Facile(data);
      appendIndizioMummiaPage24Facile(data);
      appendOggettiMummiaPage24Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage24Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage24Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina24.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage24Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina24.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina24.pulsanteName;
  }
}

function appendIndizioMummiaPage24Facile(data) {
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

function appendOggettiMummiaPage24Facile(data) {
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
function fetchDataMummiaPage25Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 25 facile");
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
      appendDataMummiaPage25Facile(data);
      appendPictureMummiaPage25Facile(data);
      appendPulsanteMummiaPage25Facile(data);
      appendIndizioMummiaPage25Facile(data);
      appendOggettiMummiaPage25Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina25.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina25.pulsanteName;
  }
}

function appendIndizioMummiaPage25Facile(data) {
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
      data[i].pagina25.indizi.indizio5;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25Facile(data) {
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

//////////////////////PAGE25a1///////////////////////////////////
function fetchDataMummiaPage25a1Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage25a1Facile(data);
      appendPictureMummiaPage25a1Facile(data);
      appendPulsanteMummiaPage25a1Facile(data);
      appendIndizioMummiaPage25a1Facile(data);
      appendOggettiMummiaPage25a1Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a1Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a1Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a1Facile(data) {
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

function appendIndizioMummiaPage25a1Facile(data) {
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
      data[i].pagina25a1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a1Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE25a2///////////////////////////////////
function fetchDataMummiaPage25a2Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage25a2Facile(data);
      appendPictureMummiaPage25a2Facile(data);
      appendPulsanteMummiaPage25a2Facile(data);
      appendIndizioMummiaPage25a2Facile(data);
      appendOggettiMummiaPage25a2Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a2Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a2Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a2Facile(data) {
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

function appendIndizioMummiaPage25a2Facile(data) {
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
      data[i].pagina25a2.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a2Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE25a3///////////////////////////////////
function fetchDataMummiaPage25a3Facile() {
  fetch("json/mummia/giocoFac.json")
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
      appendDataMummiaPage25a3Facile(data);
      appendPictureMummiaPage25a3Facile(data);
      appendPulsanteMummiaPage25a3Facile(data);
      appendIndizioMummiaPage25a3Facile(data);
      appendOggettiMummiaPage25a3Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a3Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a3Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a3Facile(data) {
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

function appendIndizioMummiaPage25a3Facile(data) {
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
      data[i].pagina25a3.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a3Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE26///////////////////////////////////
function fetchDataMummiaPage26Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 26 facile");
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
      appendDataMummiaPage26Facile(data);
      appendPictureMummiaPage26Facile(data);
      appendPulsanteMummiaPage26Facile(data);
      appendIndizioMummiaPage26Facile(data);
      appendOggettiMummiaPage26Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage26Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage26Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina26.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage26Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina26.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina26.pulsanteName;
  }
}

function appendIndizioMummiaPage26Facile(data) {
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

function appendOggettiMummiaPage26Facile(data) {
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
function fetchDataMummiaPage27Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 27 facile");
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
      appendDataMummiaPage27Facile(data);
      appendPictureMummiaPage27Facile(data);
      appendPulsanteMummiaPage27Facile(data);
      appendIndizioMummiaPage27Facile(data);
      appendOggettiMummiaPage27Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage27Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage27Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina27.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage27Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina27.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina27.pulsanteName;
  }
}

function appendIndizioMummiaPage27Facile(data) {
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

function appendOggettiMummiaPage27Facile(data) {
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

//////////////////////PAGE28///////////////////////////////////
function fetchDataMummiaPage28Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 28 facile");
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
      appendDataMummiaPage28Facile(data);
      appendPictureMummiaPage28Facile(data);
      appendPulsanteMummiaPage28Facile(data);
      appendIndizioMummiaPage28Facile(data);
      appendOggettiMummiaPage28Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage28Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage28Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina28.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage28Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina28.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina28.pulsanteName;
  }
}

function appendIndizioMummiaPage28Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina28.indizi.indizio1 +
      " <br> " +
      data[i].pagina28.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage28Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina28.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina28.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE29///////////////////////////////////
function fetchDataMummiaPage29Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 29 facile");
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
      appendDataMummiaPage29Facile(data);
      appendPictureMummiaPage29Facile(data);
      appendPulsanteMummiaPage29Facile(data);
      appendIndizioMummiaPage29Facile(data);
      appendOggettiMummiaPage29Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage29Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage29Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina29.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage29Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina29.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina29.pulsanteName;
  }
}

function appendIndizioMummiaPage29Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina29.indizi.indizio1 +
      " <br> " +
      data[i].pagina29.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage29Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina29.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina29.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE30///////////////////////////////////
function fetchDataMummiaPage30Facile() {
  fetch("json/mummia/giocoFac.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 30 facile");
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
      appendDataMummiaPage30Facile(data);
      appendPictureMummiaPage30Facile(data);
      appendPulsanteMummiaPage30Facile(data);
      appendIndizioMummiaPage30Facile(data);
      appendOggettiMummiaPage30Facile(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage30Facile(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina30.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage30Facile(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina30.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage30Facile(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina30.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina30.pulsanteName;
  }
}

function appendIndizioMummiaPage30Facile(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina30.indizi.indizio1 +
      " <br> " +
      data[i].pagina30.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage30Facile(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina30.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina30.oggetti.oggetto2;
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

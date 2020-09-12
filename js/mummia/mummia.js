//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function mummialog() {
  console.log("gioco mummia");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataMummiaPage2() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
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
      appendDataMummiaPage2(data);
      appendPictureMummiaPage2(data);
      appendPulsanteMummiaPage2(data);
      appendIndizioMummiaPage2(data);
      appendOggettiMummiaPage2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage2(data) {
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

function appendPulsanteMummiaPage2(data) {
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

function appendIndizioMummiaPage2(data) {
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

function appendOggettiMummiaPage2(data) {
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
function apriZaino() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti zaino");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseTasca(data);
      openDialog();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialog() {
    $("#dialog").dialog();
  }

  function chooseTasca(data) {
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

function destra() {
  alert("Hai trovato la tua torcia.");
  tascaOK();
  $("#dialog").dialog("close");
  document.getElementById("dialog").innerHTML = "";
}

function tascaOK() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Zaino  OK");
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

function sinistra() {
  alert("Hai trovato un pugnale. In questo momento non ti serve.");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataMummiaPage3() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage3(data);
      appendPictureMummiaPage3(data);
      appendPulsanteMummiaPage3(data);
      appendIndizioMummiaPage3(data);
      appendOggettiMummiaPage3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage3(data) {
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

function appendPulsanteMummiaPage3(data) {
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

function appendIndizioMummiaPage3(data) {
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

function appendOggettiMummiaPage3(data) {
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

function scarabeo() {
  alert(
    "Hai trovato uno scarabeo. Per gli antichi Egizi era considerato un potente amuleto. Credevano infatti che lo scarabeo della specie 'stercorario' potesse rigenerarsi dalla palla di sterco che l’insetto fa rotolare davanti a sé.."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo");
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
function fetchDataMummiaPage4() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage4(data);
      appendPictureMummiaPage4(data);
      appendPulsanteMummiaPage4(data);
      appendIndizioMummiaPage4(data);
      appendOggettiMummiaPage4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage4(data) {
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

function appendPulsanteMummiaPage4(data) {
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

function appendIndizioMummiaPage4(data) {
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

function appendOggettiMummiaPage4(data) {
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

function cercaPavimento() {
  alert(
    "Si è aperto un passaggio!! Qui non si vede niente. Dovrai usare la torcia"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo");
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

function cercaPareti() {
  alert("Non hai trovato nessun passaggio. Prova da un'altra parte");
}

//////////////////////PAGE5///////////////////////////////////
function fetchDataMummiaPage5() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage5(data);
      appendPictureMummiaPage5(data);
      appendPulsanteMummiaPage5(data);
      appendIndizioMummiaPage5(data);
      appendOggettiMummiaPage5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage5(data) {
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

function appendPulsanteMummiaPage5(data) {
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

function appendIndizioMummiaPage5(data) {
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

function appendOggettiMummiaPage5(data) {
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

function amuletoMummia() {
  alert(
    "Camminando ti accorgi di aver calpestato qualcosa. Si tratta di uno strano amuleto... Cosa ci fa un amuleto in un posto come questo? Solitamente gli amuleti accompagnano i defunti, ponendoli nelle bende che avvolgevano le mummie, così da proteggere il loro passaggio nell'oltretomba dai demoni."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo");
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
function fetchDataMummiaPage6() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6");
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
      appendDataMummiaPage6(data);
      appendPictureMummiaPage6(data);
      appendPulsanteMummiaPage6(data);
      appendIndizioMummiaPage6(data);
      appendOggettiMummiaPage6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage6(data) {
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

function appendPulsanteMummiaPage6(data) {
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

function appendIndizioMummiaPage6(data) {
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

function appendOggettiMummiaPage6(data) {
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

function annotaMessaggio() {
  alert(
    "Anubi era la divinità umanoide, con un corpo umano e la testa di sciacallo, che proteggeva le necropoli ed il mondo dei morti, assistendo anche nel rituale dell'imbalsamazione. Veniva rappresentato con il corpo di uomo e testa di cane, ma viene contrassegnato come 'testa di sciacallo' per identificare così l'animale che si nutre di carogne e quindi strettamente connesso alla morte."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo");
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
      var urlvalue4 = JSON.stringify(data[i].pagina6.pulsanteFunc4);

      var stripped = urlvalue.replace(/['"]+/g, "");
      var stripped4 = urlvalue4.replace(/['"]+/g, "");

      var puls = document.createElement("button");
      var puls4 = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");
      puls4.setAttribute("onclick", stripped4);
      puls4.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);
      pulsContainer.appendChild(puls4);

      puls.innerHTML = data[i].pagina6.pulsanteName;
      puls4.innerHTML = data[i].pagina6.pulsanteName4;
    }
  }
}

//////////////////////PAGE7a1///////////////////////////////////
function fetchDataMummiaPage7a1() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7a1");
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
      appendDataMummiaPage7a1(data);
      appendPictureMummiaPage7a1(data);
      appendPulsanteMummiaPage7a1(data);
      appendIndizioMummiaPage7a1(data);
      appendOggettiMummiaPage7a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage7a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina7a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7a1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina7a1.pulsanteName;
    puls2.innerHTML = data[i].pagina7a1.pulsanteName2;
  }
}

function appendIndizioMummiaPage7a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina7a1.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage7a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE7a2///////////////////////////////////
function fetchDataMummiaPage7a2() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7a2");
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
      appendDataMummiaPage7a2(data);
      appendPictureMummiaPage7a2(data);
      appendPulsanteMummiaPage7a2(data);
      appendIndizioMummiaPage7a2(data);
      appendOggettiMummiaPage7a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage7a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina7a2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7a2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina7a2.pulsanteFunc3);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina7a2.pulsanteName;
    puls2.innerHTML = data[i].pagina7a2.pulsanteName2;
    puls3.innerHTML = data[i].pagina7a2.pulsanteName3;
  }
}

function appendIndizioMummiaPage7a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina7a2.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage7a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function perlustraStanza() {
  alert(
    "Analizzando meglio i resti capisci che il decesso è sopraggiunto da poche ore. Com'è possibile? Chi può aver ucciso queste persone?"
  );
}

//////////////////////PAGE7b1///////////////////////////////////
function fetchDataMummiaPage7b1() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7b1");
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
      appendDataMummiaPage7b1(data);
      appendPictureMummiaPage7b1(data);
      appendPulsanteMummiaPage7b1(data);
      appendIndizioMummiaPage7b1(data);
      appendOggettiMummiaPage7b1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7b1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7b1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7b1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7b1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7b1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage7b1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina7b1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7b1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina7b1.pulsanteName2;
  }
}

function appendIndizioMummiaPage7b1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b1.indizi.indizio1 +
      " <br> " +
      data[i].pagina7b1.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage7b1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7b1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE7b2///////////////////////////////////
function fetchDataMummiaPage7b2() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7b2");
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
      appendDataMummiaPage7b2(data);
      appendPictureMummiaPage7b2(data);
      appendPulsanteMummiaPage7b2(data);
      appendIndizioMummiaPage7b2(data);
      appendOggettiMummiaPage7b2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7b2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7b2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7b2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7b2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7b2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage7b2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7b2.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina7b2.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina7b2.pulsanteName2;
    puls3.innerHTML = data[i].pagina7b2.pulsanteName3;
  }
}

function appendIndizioMummiaPage7b2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b2.indizi.indizio1 +
      " <br> " +
      data[i].pagina7b2.indizi.indizio2;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage7b2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7b2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function annotaDisegno() {
  alert(
    "La piramide è provvista di un cortile, di un luogo di culto a nord, di un tempio funerario, di una rampa processionale e di un tempio a valle."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti struttura piramide");
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
      var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina7b2.pulsanteName;
    }
  }
}

//////////////////////PAGE7b3///////////////////////////////////
function fetchDataMummiaPage7b3() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 7b3");
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
      appendDataMummiaPage7b3(data);
      appendPictureMummiaPage7b3(data);
      appendPulsanteMummiaPage7b3(data);
      appendIndizioMummiaPage7b3(data);
      appendOggettiMummiaPage7b3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7b3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7b3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7b3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina7b3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina7b3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage7b3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina7b3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina7b3.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina7b3.pulsanteName2;
    puls3.innerHTML = data[i].pagina7b3.pulsanteName3;
  }
}

function appendIndizioMummiaPage7b3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b3.indizi.indizio1 +
      " <br> " +
      data[i].pagina7b3.indizi.indizio2 +
      " <br> " +
      data[i].pagina7b3.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage7b3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina7b3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina7b3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function seguiDisegno() {
  alert(
    "Forse arrivato al sepolcro riuscirai ad individuare qual è la via di uscita"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti struttura piramide");
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
      var urlvalue = JSON.stringify(data[i].pagina7b3.pulsanteFunc);

      var stripped = urlvalue.replace(/['"]+/g, "");

      var puls = document.createElement("button");

      puls.setAttribute("onclick", stripped);
      puls.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls);

      puls.innerHTML = data[i].pagina7b3.pulsanteName;
    }
  }
}

//////////////////////PAGE8///////////////////////////////////
function fetchDataMummiaPage8() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage8(data);
      appendPictureMummiaPage8(data);
      appendPulsanteMummiaPage8(data);
      appendIndizioMummiaPage8(data);
      appendOggettiMummiaPage8(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage8(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage8(data) {
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

function appendPulsanteMummiaPage8(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina8.pulsanteName2;
    puls3.innerHTML = data[i].pagina8.pulsanteName3;
  }
}

function appendIndizioMummiaPage8(data) {
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

function appendOggettiMummiaPage8(data) {
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

function entraCulto() {
  alert("Dentro dovrebbe esserci la tomba del faraone...");

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti struttura piramide");
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

function ispezionaCulto() {
  alert(
    "Entrando nel luogo di culto troverai il sarcofago del faraone. Il sarcofago egizio era la cassa destinata a custodire il corpo imbalsamato del defunto e il suo Ka. E' da considerarsi l'elemento più importante di una sepoltura e dimora del defunto per l'eternità. il Ka nel mondo fisico è in grado di conservare i ricordi e i sentimenti della vita terrena"
  );
}

//////////////////////PAGE9///////////////////////////////////
function fetchDataMummiaPage9() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage9(data);
      appendPictureMummiaPage9(data);
      appendPulsanteMummiaPage9(data);
      appendIndizioMummiaPage9(data);
      appendOggettiMummiaPage9(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage9(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage9(data) {
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

function appendPulsanteMummiaPage9(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina9.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina9.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina9.pulsanteName2;
    puls3.innerHTML = data[i].pagina9.pulsanteName3;
  }
}

function appendIndizioMummiaPage9(data) {
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

function appendOggettiMummiaPage9(data) {
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

function entraSarcofago() {
  alert(
    "Sembrerebbe che il sarcofago sia stato profanato e che qualcuno abbia rubato tutte le sue ricchezze. Tra cui l'amuleto trovato prima. Rimettilo al suo posto"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti amuleto al su posto");
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

//////////////////////PAGE10///////////////////////////////////
function fetchDataMummiaPage10() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage10(data);
      appendPictureMummiaPage10(data);
      appendPulsanteMummiaPage10(data);
      appendIndizioMummiaPage10(data);
      appendOggettiMummiaPage10(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage10(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage10(data) {
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

function appendPulsanteMummiaPage10(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina10.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina10.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina10.pulsanteName;
    puls2.innerHTML = data[i].pagina10.pulsanteName2;
  }
}

function appendIndizioMummiaPage10(data) {
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

function appendOggettiMummiaPage10(data) {
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

//////////////////////PAGE11///////////////////////////////////
function fetchDataMummiaPage11() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage11(data);
      appendPictureMummiaPage11(data);
      appendPulsanteMummiaPage11(data);
      appendIndizioMummiaPage11(data);
      appendOggettiMummiaPage11(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage11(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage11(data) {
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

function appendPulsanteMummiaPage11(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina11.pulsanteName;
    puls2.innerHTML = data[i].pagina11.pulsanteName2;
  }
}

function appendIndizioMummiaPage11(data) {
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

function appendOggettiMummiaPage11(data) {
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
function fetchDataMummiaPage12() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage12(data);
      appendPictureMummiaPage12(data);
      appendPulsanteMummiaPage12(data);
      appendIndizioMummiaPage12(data);
      appendOggettiMummiaPage12(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage12(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage12(data) {
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

function appendPulsanteMummiaPage12(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);
    pulsContainer.appendChild(puls4);

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina12.pulsanteName2;
    puls3.innerHTML = data[i].pagina12.pulsanteName3;
    puls4.innerHTML = data[i].pagina12.pulsanteName4;
  }
}

function appendIndizioMummiaPage12(data) {
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

function appendOggettiMummiaPage12(data) {
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

function perlustraStanzaStatue() {
  alert(
    "C'è una tavola scolpita con una strana raffigurazione. Decidi di osservarla meglio."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola");
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

function raccogliFiaccola() {
  alert("Forse un po di luce potrebbe farti comodo.");
}

//////////////////////PAGE13///////////////////////////////////
function fetchDataMummiaPage13() {
  fetch("json/mummia/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataMummiaPage13(data);
      appendPictureMummiaPage13(data);
      appendPulsanteMummiaPage13(data);
      appendIndizioMummiaPage13(data);
      appendOggettiMummiaPage13(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage13(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage13(data) {
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

function appendPulsanteMummiaPage13(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina13.pulsanteName2;
    puls3.innerHTML = data[i].pagina13.pulsanteName3;
    puls4.innerHTML = data[i].pagina13.pulsanteName4;
  }
}

function appendIndizioMummiaPage13(data) {
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

function appendOggettiMummiaPage13(data) {
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

function continuaPerlustrazione() {
  alert(
    "Improvvisamente senti delle urla, sono lontane ma chiaramente udibili. Corri a vedere cosa sta succedendo."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola");
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

function osservaTavola() {
  alert(
    "Quanto scritto sulla tavola sembrerebbe essere un avvertimento riguardo al fatto di non disobbedire mai alle volontà del faraone."
  );
}

//////////////////////PAGE14///////////////////////////////////
function fetchDataMummiaPage14() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage14(data);
      appendPictureMummiaPage14(data);
      appendPulsanteMummiaPage14(data);
      appendIndizioMummiaPage14(data);
      appendOggettiMummiaPage14(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage14(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage14(data) {
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

function appendPulsanteMummiaPage14(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina14.pulsanteName2;
    puls3.innerHTML = data[i].pagina14.pulsanteName3;
  }
}

function appendIndizioMummiaPage14(data) {
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

function appendOggettiMummiaPage14(data) {
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

function controllaStanza() {
  alert("Usa la fiaccola per farti strada");

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola");
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

//////////////////////PAGE15///////////////////////////////////
function fetchDataMummiaPage15() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage15(data);
      appendPictureMummiaPage15(data);
      appendPulsanteMummiaPage15(data);
      appendIndizioMummiaPage15(data);
      appendOggettiMummiaPage15(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage15(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage15(data) {
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

function appendPulsanteMummiaPage15(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina15.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina15.pulsanteFunc3);
    var urlvalue4 = JSON.stringify(data[i].pagina15.pulsanteFunc4);

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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina15.pulsanteName2;
    puls3.innerHTML = data[i].pagina15.pulsanteName3;
    puls4.innerHTML = data[i].pagina15.pulsanteName4;
  }
}

function appendIndizioMummiaPage15(data) {
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
      data[i].pagina15.indizi.indizio3;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage15(data) {
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

function osservaDaVicino() {
  alert(
    "Quello che ha in mano sembrerebbe essere l'occhio di Horus. Perché lo aveva lei? Devi sbrigarti a trovare l'ultimo oggetto"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola");
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

function ispezionaZona() {
  alert(
    "Mentre ispezioni, senti la donna che in punto di morte sussurra 'Anubi'"
  );
}

//////////////////////PAGE16///////////////////////////////////
function fetchDataMummiaPage16() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage16(data);
      appendPictureMummiaPage16(data);
      appendPulsanteMummiaPage16(data);
      appendIndizioMummiaPage16(data);
      appendOggettiMummiaPage16(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage16(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage16(data) {
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

function appendPulsanteMummiaPage16(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina16.pulsanteName;
    puls2.innerHTML = data[i].pagina16.pulsanteName2;
  }
}

function appendIndizioMummiaPage16(data) {
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

function appendOggettiMummiaPage16(data) {
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
function fetchDataMummiaPage17() {
  fetch("json/mummia/giocoDif.json")
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
      //popolo i div con le nuove info
      appendDataMummiaPage17(data);
      appendPictureMummiaPage17(data);
      appendPulsanteMummiaPage17(data);
      appendIndizioMummiaPage17(data);
      appendOggettiMummiaPage17(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage17(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage17(data) {
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

function appendPulsanteMummiaPage17(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    //var urlvalue = JSON.stringify(data[i].pagina7b2.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina17.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina17.pulsanteFunc3);

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

    //puls.innerHTML = data[i].pagina7b1.pulsanteName;
    puls2.innerHTML = data[i].pagina17.pulsanteName2;
    puls3.innerHTML = data[i].pagina17.pulsanteName3;
  }
}

function appendIndizioMummiaPage17(data) {
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

function appendOggettiMummiaPage17(data) {
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

function restituisciOcchio() {
  alert(
    "L'Occhio di Horus costituisce nella religione egizia il simbolo di protezione, della prosperità, del potere regale e della buona salute, ed è personificato dalla dea Wadjet."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio");
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
function fetchDataMummiaPage18() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage18(data);
      appendPictureMummiaPage18(data);
      appendPulsanteMummiaPage18(data);
      appendIndizioMummiaPage18(data);
      appendOggettiMummiaPage18(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage18(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage18(data) {
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

function appendPulsanteMummiaPage18(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina18.pulsanteName;
    puls2.innerHTML = data[i].pagina18.pulsanteName2;
  }
}

function appendIndizioMummiaPage18(data) {
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

function appendOggettiMummiaPage18(data) {
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

function stanzaSxDx() {
  alert(
    "Raggiunta la fine del corridoio ci sono due direzioni. Quale sarà la strada giusta?"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio");
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
      var urlvalue3 = JSON.stringify(data[i].pagina18.pulsanteFunc3);
      var urlvalue4 = JSON.stringify(data[i].pagina18.pulsanteFunc4);

      var stripped3 = urlvalue3.replace(/['"]+/g, "");
      var stripped4 = urlvalue4.replace(/['"]+/g, "");

      var puls3 = document.createElement("button");
      var puls4 = document.createElement("button");

      puls3.setAttribute("onclick", stripped3);
      puls3.setAttribute("style", "background-color:red;");
      puls4.setAttribute("onclick", stripped4);
      puls4.setAttribute("style", "background-color:red;");

      pulsContainer.appendChild(puls3);
      pulsContainer.appendChild(puls4);

      puls3.innerHTML = data[i].pagina18.pulsanteName3;
      puls4.innerHTML = data[i].pagina18.pulsanteName4;
    }
  }
}

//////////////////////PAGE19a1///////////////////////////////////
function fetchDataMummiaPage19a1() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a1");
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
      appendDataMummiaPage19a1(data);
      appendPictureMummiaPage19a1(data);
      appendPulsanteMummiaPage19a1(data);
      appendIndizioMummiaPage19a1(data);
      appendOggettiMummiaPage19a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a1(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a1.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a1.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a1(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19a1.pulsanteFunc2);

    var stripped = urlvalue.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    var puls2 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    puls2.setAttribute("onclick", stripped2);

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina19a1.pulsanteName;
    puls2.innerHTML = data[i].pagina19a1.pulsanteName2;
  }
}

function appendIndizioMummiaPage19a1(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a1.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a1.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a1.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a1.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a1(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a1.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a1.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE19a2///////////////////////////////////
function fetchDataMummiaPage19a2() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a2");
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
      appendDataMummiaPage19a2(data);
      appendPictureMummiaPage19a2(data);
      appendPulsanteMummiaPage19a2(data);
      appendIndizioMummiaPage19a2(data);
      appendOggettiMummiaPage19a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a2(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a2.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a2.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a2(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a2.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina19a2.pulsanteName;
  }
}

function appendIndizioMummiaPage19a2(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a2.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a2.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a2.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a2.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a2(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a2.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a2.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE19a3///////////////////////////////////
function fetchDataMummiaPage19a3() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a3");
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
      appendDataMummiaPage19a3(data);
      appendPictureMummiaPage19a3(data);
      appendPulsanteMummiaPage19a3(data);
      appendIndizioMummiaPage19a3(data);
      appendOggettiMummiaPage19a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a3(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a3.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a3.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a3(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue1 = JSON.stringify(data[i].pagina19a3.pulsanteFunc1);
    var urlvalue2 = JSON.stringify(data[i].pagina19a3.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19a3.pulsanteFunc3);

    var stripped1 = urlvalue1.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls1 = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    puls1.setAttribute("onclick", stripped1);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls1);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    puls1.innerHTML = data[i].pagina19a3.pulsanteName1;
    puls2.innerHTML = data[i].pagina19a3.pulsanteName2;
    puls3.innerHTML = data[i].pagina19a3.pulsanteName3;
  }
}

function appendIndizioMummiaPage19a3(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a3.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a3.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a3.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a3.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a3(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a3.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a3.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE19a4///////////////////////////////////
function fetchDataMummiaPage19a4() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a4");
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
      appendDataMummiaPage19a4(data);
      appendPictureMummiaPage19a4(data);
      appendPulsanteMummiaPage19a4(data);
      appendIndizioMummiaPage19a4(data);
      appendOggettiMummiaPage19a4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a4.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a4(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue1 = JSON.stringify(data[i].pagina19a4.pulsanteFunc1);
    var urlvalue2 = JSON.stringify(data[i].pagina19a4.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19a4.pulsanteFunc3);

    var stripped1 = urlvalue1.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls1 = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    puls1.setAttribute("onclick", stripped1);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls1);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    puls1.innerHTML = data[i].pagina19a4.pulsanteName1;
    puls2.innerHTML = data[i].pagina19a4.pulsanteName2;
    puls3.innerHTML = data[i].pagina19a4.pulsanteName3;
  }
}

function appendIndizioMummiaPage19a4(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a4.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a4.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a4.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a4.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE19a5///////////////////////////////////
function fetchDataMummiaPage19a5() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a5");
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
      appendDataMummiaPage19a5(data);
      appendPictureMummiaPage19a5(data);
      appendPulsanteMummiaPage19a5(data);
      appendIndizioMummiaPage19a5(data);
      appendOggettiMummiaPage19a5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a5.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a5(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue1 = JSON.stringify(data[i].pagina19a5.pulsanteFunc1);
    var urlvalue2 = JSON.stringify(data[i].pagina19a5.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19a5.pulsanteFunc3);

    var stripped1 = urlvalue1.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls1 = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    puls1.setAttribute("onclick", stripped1);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls1);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    puls1.innerHTML = data[i].pagina19a5.pulsanteName1;
    puls2.innerHTML = data[i].pagina19a5.pulsanteName2;
    puls3.innerHTML = data[i].pagina19a5.pulsanteName3;
  }
}

function appendIndizioMummiaPage19a5(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a5.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a5.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a5.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a5.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE19a6///////////////////////////////////
function fetchDataMummiaPage19a6() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a6");
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
      appendDataMummiaPage19a6(data);
      appendPictureMummiaPage19a6(data);
      appendPulsanteMummiaPage19a6(data);
      appendIndizioMummiaPage19a6(data);
      appendOggettiMummiaPage19a6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a6(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a6.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a6(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue1 = JSON.stringify(data[i].pagina19a6.pulsanteFunc1);
    var urlvalue2 = JSON.stringify(data[i].pagina19a6.pulsanteFunc2);
    var urlvalue3 = JSON.stringify(data[i].pagina19a6.pulsanteFunc3);

    var stripped1 = urlvalue1.replace(/['"]+/g, "");
    var stripped2 = urlvalue2.replace(/['"]+/g, "");
    var stripped3 = urlvalue3.replace(/['"]+/g, "");

    var puls1 = document.createElement("button");
    var puls2 = document.createElement("button");
    var puls3 = document.createElement("button");

    puls1.setAttribute("onclick", stripped1);
    puls2.setAttribute("onclick", stripped2);
    puls3.setAttribute("onclick", stripped3);

    pulsContainer.appendChild(puls1);
    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    puls1.innerHTML = data[i].pagina19a6.pulsanteName1;
    puls2.innerHTML = data[i].pagina19a6.pulsanteName2;
    puls3.innerHTML = data[i].pagina19a6.pulsanteName3;
  }
}

function appendIndizioMummiaPage19a6(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a6.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a6.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a6.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a6.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a6(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a6.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a6.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

function rispostaErrata() {
  alert("la risposta non è corretta");
}

//////////////////////PAGE19a7///////////////////////////////////
function fetchDataMummiaPage19a7() {
  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a7");
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
      appendDataMummiaPage19a7(data);
      appendPictureMummiaPage19a7(data);
      appendPulsanteMummiaPage19a7(data);
      appendIndizioMummiaPage19a7(data);
      appendOggettiMummiaPage19a7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a7(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina19a7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
    //img_url.setAttribute("alt", "The Pulpit Rock");
    //document.body.appendChild(img_url);
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[j].pagina19a7.img_url;
  }

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function appendPulsanteMummiaPage19a7(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a7.pulsanteFunc);

    var stripped = urlvalue.replace(/['"]+/g, "");

    var puls = document.createElement("button");

    puls.setAttribute("onclick", stripped);

    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina19a7.pulsanteName;
  }
}

function appendIndizioMummiaPage19a7(data) {
  var mainContainer = document.getElementById("indizi");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a7.indizi.indizio1 +
      " <br> " +
      data[i].pagina19a7.indizi.indizio2 +
      " <br> " +
      data[i].pagina19a7.indizi.indizio3 +
      " <br> " +
      data[i].pagina19a7.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage19a7(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina19a7.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina19a7.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE20///////////////////////////////////
function fetchDataMummiaPage20() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage20(data);
      appendPictureMummiaPage20(data);
      appendPulsanteMummiaPage20(data);
      appendIndizioMummiaPage20(data);
      appendOggettiMummiaPage20(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage20(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage20(data) {
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

function appendPulsanteMummiaPage20(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);

    puls.innerHTML = data[i].pagina20.pulsanteName;
    puls2.innerHTML = data[i].pagina20.pulsanteName2;
  }
}

function appendIndizioMummiaPage20(data) {
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

function appendOggettiMummiaPage20(data) {
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
function fetchDataMummiaPage21() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage21(data);
      appendPictureMummiaPage21(data);
      appendPulsanteMummiaPage21(data);
      appendIndizioMummiaPage21(data);
      appendOggettiMummiaPage21(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage21(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage21(data) {
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

function appendPulsanteMummiaPage21(data) {
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
    pulsContainer.appendChild(puls4);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina21.pulsanteName;
    puls2.innerHTML = data[i].pagina21.pulsanteName2;
    puls3.innerHTML = data[i].pagina21.pulsanteName3;
    puls4.innerHTML = data[i].pagina21.pulsanteName4;
  }
}

function appendIndizioMummiaPage21(data) {
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

function appendOggettiMummiaPage21(data) {
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

function usaPugnale() {
  alert(
    "Sei riuscito a distrarre Anubi. Prendi la croce che la ricercatrice ha rubato e corri a rimetterla nel suo posto."
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio");
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

function cercaCroce() {
  alert(
    "Sei riuscito a prendere la croce. Corri al sarcofago per rimetterla al suo posto"
  );
}

//////////////////////PAGE22///////////////////////////////////
function fetchDataMummiaPage22() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage22(data);
      appendPictureMummiaPage22(data);
      appendPulsanteMummiaPage22(data);
      appendIndizioMummiaPage22(data);
      appendOggettiMummiaPage22(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage22(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage22(data) {
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

function appendPulsanteMummiaPage22(data) {
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

    pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls3);

    //puls.innerHTML = data[i].pagina22.pulsanteName;
    puls2.innerHTML = data[i].pagina22.pulsanteName2;
    puls3.innerHTML = data[i].pagina22.pulsanteName3;
  }
}

function appendIndizioMummiaPage22(data) {
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

function appendOggettiMummiaPage22(data) {
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

function riponiCroce() {
  alert(
    "L'ankh o Croce della vita - è il simbolo della vita, usata dagli antichi Egizi per donare immortalità ai faraoni"
  );

  fetch("json/mummia/giocoDif.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio");
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
function fetchDataMummiaPage23() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage22(data);
      appendPictureMummiaPage23(data);
      appendPulsanteMummiaPage23(data);
      appendIndizioMummiaPage23(data);
      appendOggettiMummiaPage23(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage23(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage23(data) {
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

function appendPulsanteMummiaPage23(data) {
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

function appendIndizioMummiaPage23(data) {
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

function appendOggettiMummiaPage23(data) {
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
function fetchDataMummiaPage24() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage24(data);
      appendPictureMummiaPage24(data);
      appendPulsanteMummiaPage24(data);
      appendIndizioMummiaPage24(data);
      appendOggettiMummiaPage24(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage24(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage24(data) {
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

function appendPulsanteMummiaPage24(data) {
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

function appendIndizioMummiaPage24(data) {
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

function appendOggettiMummiaPage24(data) {
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
function fetchDataMummiaPage25() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25(data);
      appendPictureMummiaPage25(data);
      appendPulsanteMummiaPage25(data);
      appendIndizioMummiaPage25(data);
      appendOggettiMummiaPage25(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25(data) {
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

function appendPulsanteMummiaPage25(data) {
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

function appendIndizioMummiaPage25(data) {
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

function appendOggettiMummiaPage25(data) {
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
function fetchDataMummiaPage25a1() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a1(data);
      appendPictureMummiaPage25a1(data);
      appendPulsanteMummiaPage25a1(data);
      appendIndizioMummiaPage25a1(data);
      appendOggettiMummiaPage25a1(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a1(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a1(data) {
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

function appendPulsanteMummiaPage25a1(data) {
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

function appendIndizioMummiaPage25a1(data) {
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

function appendOggettiMummiaPage25a1(data) {
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
function fetchDataMummiaPage25a2() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a2(data);
      appendPictureMummiaPage25a2(data);
      appendPulsanteMummiaPage25a2(data);
      appendIndizioMummiaPage25a2(data);
      appendOggettiMummiaPage25a2(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a2(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a2(data) {
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

function appendPulsanteMummiaPage25a2(data) {
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

function appendIndizioMummiaPage25a2(data) {
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

function appendOggettiMummiaPage25a2(data) {
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
function fetchDataMummiaPage25a3() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a3(data);
      appendPictureMummiaPage25a3(data);
      appendPulsanteMummiaPage25a3(data);
      appendIndizioMummiaPage25a3(data);
      appendOggettiMummiaPage25a3(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a3(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a3(data) {
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

function appendPulsanteMummiaPage25a3(data) {
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

function appendIndizioMummiaPage25a3(data) {
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

function appendOggettiMummiaPage25a3(data) {
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

//////////////////////PAGE25a4///////////////////////////////////
function fetchDataMummiaPage25a4() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a4(data);
      appendPictureMummiaPage25a4(data);
      appendPulsanteMummiaPage25a4(data);
      appendIndizioMummiaPage25a4(data);
      appendOggettiMummiaPage25a4(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a4(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a4(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a4.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a4(data) {
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

function appendIndizioMummiaPage25a4(data) {
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
      data[i].pagina25a4.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a4(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a4.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a4.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE25a5///////////////////////////////////
function fetchDataMummiaPage25a5() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a5(data);
      appendPictureMummiaPage25a5(data);
      appendPulsanteMummiaPage25a5(data);
      appendIndizioMummiaPage25a5(data);
      appendOggettiMummiaPage25a5(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a5(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a5(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a5.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a5(data) {
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

function appendIndizioMummiaPage25a5(data) {
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
      data[i].pagina25a5.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a5(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a5.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a5.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE25a6///////////////////////////////////
function fetchDataMummiaPage25a6() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a6(data);
      appendPictureMummiaPage25a6(data);
      appendPulsanteMummiaPage25a6(data);
      appendIndizioMummiaPage25a6(data);
      appendOggettiMummiaPage25a6(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a6(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a6(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a6.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a6(data) {
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

function appendIndizioMummiaPage25a6(data) {
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
      data[i].pagina25a6.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a6(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a6.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a6.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE25a7///////////////////////////////////
function fetchDataMummiaPage25a7() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage25a7(data);
      appendPictureMummiaPage25a7(data);
      appendPulsanteMummiaPage25a7(data);
      appendIndizioMummiaPage25a7(data);
      appendOggettiMummiaPage25a7(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a7(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a7(data) {
  var picContainer = document.getElementById("picture");

  for (var j = 0; j < data.length; j++) {
    var urlvalue = JSON.stringify(data[j].pagina25a7.img_url);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "1100");
    img_url.setAttribute("height", "440");
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

function appendPulsanteMummiaPage25a7(data) {
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

function appendIndizioMummiaPage25a7(data) {
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
      data[i].pagina25a7.indizi.indizio4;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendOggettiMummiaPage25a7(data) {
  var mainContainer = document.getElementById("oggetti");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    var bordo = "border:2px solid black;";
    istruzioni.setAttribute("style", bordo);
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML =
      data[i].pagina25a7.oggetti.oggetto1 +
      " <br> " +
      data[i].pagina25a7.oggetti.oggetto2;
  }
  console.log(istruzioni);
  console.log("----");
}

//////////////////////PAGE26///////////////////////////////////
function fetchDataMummiaPage26() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage26(data);
      appendPictureMummiaPage26(data);
      appendPulsanteMummiaPage26(data);
      appendIndizioMummiaPage26(data);
      appendOggettiMummiaPage26(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage26(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage26(data) {
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

function appendPulsanteMummiaPage26(data) {
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

function appendIndizioMummiaPage26(data) {
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

function appendOggettiMummiaPage26(data) {
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
function fetchDataMummiaPage27() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage27(data);
      appendPictureMummiaPage27(data);
      appendPulsanteMummiaPage27(data);
      appendIndizioMummiaPage27(data);
      appendOggettiMummiaPage27(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage27(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage27(data) {
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

function appendPulsanteMummiaPage27(data) {
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

function appendIndizioMummiaPage27(data) {
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

function appendOggettiMummiaPage27(data) {
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
function fetchDataMummiaPage28() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage28(data);
      appendPictureMummiaPage28(data);
      appendPulsanteMummiaPage28(data);
      appendIndizioMummiaPage28(data);
      appendOggettiMummiaPage28(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage28(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage28(data) {
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

function appendPulsanteMummiaPage28(data) {
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

function appendIndizioMummiaPage28(data) {
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

function appendOggettiMummiaPage28(data) {
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
function fetchDataMummiaPage29() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage29(data);
      appendPictureMummiaPage29(data);
      appendPulsanteMummiaPage29(data);
      appendIndizioMummiaPage29(data);
      appendOggettiMummiaPage29(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage29(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage29(data) {
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

function appendPulsanteMummiaPage29(data) {
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

function appendIndizioMummiaPage29(data) {
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

function appendOggettiMummiaPage29(data) {
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
function fetchDataMummiaPage30() {
  fetch("json/mummia/giocoDif.json")
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
      appendDataMummiaPage30(data);
      appendPictureMummiaPage30(data);
      appendPulsanteMummiaPage30(data);
      appendIndizioMummiaPage30(data);
      appendOggettiMummiaPage30(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage30(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina30.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage30(data) {
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

function appendPulsanteMummiaPage30(data) {
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

function appendIndizioMummiaPage30(data) {
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

function appendOggettiMummiaPage30(data) {
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
function backHomeDif() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

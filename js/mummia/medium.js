//TO DO --> funzione che salva pagina1 in variabile e quando clicchi avanti cambia in pagina2, pagina3 ecc
//se clicchi indietro torna indietro vacendo un replace del numero nel nome della variabile

function mummialog() {
  console.log("gioco mummia");
}

//////////////////////PAGE2///////////////////////////////////

function fetchDataMummiaPage2Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti media");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
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
      appendDataMummiaPage2Media(data);
      appendPictureMummiaPage2Media(data);
      appendPulsanteMummiaPage2Media(data);
      appendIndizioMummiaPage2Media(data);
      appendOggettiMummiaPage2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage2Media(data) {
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

function appendPulsanteMummiaPage2Media(data) {
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

function appendIndizioMummiaPage2Media(data) {
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

function appendOggettiMummiaPage2Media(data) {
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
function apriZainoMed() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti zaino media");
      return response.json();
    })
    //This is where we create the code which will append the data to our page.
    .then(function (data) {
      //popolo i div con le nuove info
      chooseTascaMed(data);
      openDialogMed();
    })
    .catch(function (err) {
      console.log(err);
    });

  //apro un popup
  function openDialogMed() {
    $("#dialog").dialog();
  }

  function chooseTascaMed(data) {
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

function destraMed() {
  alert("Hai trovato la tua torcia.");
  tascaOKMed();
  $("#dialog").dialog("close");
  document.getElementById("dialog").innerHTML = "";
}

function tascaOKMed() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti Zaino  OK media");
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

function sinistraMed() {
  alert("Hai trovato un pugnale. In questo momento non ti serve.");
}

//////////////////////PAGE3///////////////////////////////////
function fetchDataMummiaPage3Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 3 media");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage3Media(data);
      appendPictureMummiaPage3Media(data);
      appendPulsanteMummiaPage3Media(data);
      appendIndizioMummiaPage3Media(data);
      appendOggettiMummiaPage3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage3Media(data) {
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

function appendPulsanteMummiaPage3Media(data) {
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

function appendIndizioMummiaPage3Media(data) {
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

function appendOggettiMummiaPage3Media(data) {
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

function scarabeoMed() {
  alert(
    "Hai trovato uno scarabeo. Per gli antichi Egizi era considerato un potente amuleto. Credevano infatti che lo scarabeo della specie 'stercorario' potesse rigenerarsi dalla palla di sterco che l’insetto fa rotolare davanti a sé.."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti scarabeo media");
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
function fetchDataMummiaPage4Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 4 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage4Media(data);
      appendPictureMummiaPage4Media(data);
      appendPulsanteMummiaPage4Media(data);
      appendIndizioMummiaPage4Media(data);
      appendOggettiMummiaPage4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage4Media(data) {
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

function appendPulsanteMummiaPage4Media(data) {
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

function appendIndizioMummiaPage4Media(data) {
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

function appendOggettiMummiaPage4Media(data) {
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

function cercaPavimentoMed() {
  alert(
    "Si è aperto un passaggio!! Qui non si vede niente. Dovrai usare la torcia"
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pavimento medio");
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

function cercaParetiMed() {
  alert("Non hai trovato nessun passaggio. Prova da un'altra parte");
}

//////////////////////PAGE5///////////////////////////////////
function fetchDataMummiaPage5Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 5 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage5Media(data);
      appendPictureMummiaPage5media(data);
      appendPulsanteMummiaPage5Media(data);
      appendIndizioMummiaPage5Media(data);
      appendOggettiMummiaPage5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage5media(data) {
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

function appendPulsanteMummiaPage5Media(data) {
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

function appendIndizioMummiaPage5Media(data) {
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

function appendOggettiMummiaPage5Media(data) {
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

function amuletoMummiaMed() {
  alert(
    "Camminando ti accorgi di aver calpestato qualcosa. Si tratta di uno strano amuleto... Cosa ci fa un amuleto in un posto come questo? Solitamente gli amuleti accompagnano i defunti, ponendoli nelle bende che avvolgevano le mummie, così da proteggere il loro passaggio nell'oltretomba dai demoni."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti amuleto medio");
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
function fetchDataMummiaPage6Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 6 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage6Media(data);
      appendPictureMummiaPage6media(data);
      appendPulsanteMummiaPage6Media(data);
      appendIndizioMummiaPage6Media(data);
      appendOggettiMummiaPage6Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage6Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina6.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage6media(data) {
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

function appendPulsanteMummiaPage6Media(data) {
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

function appendIndizioMummiaPage6Media(data) {
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

function appendOggettiMummiaPage6Media(data) {
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

function annotaMessaggioMed() {
  alert(
    "Anubi era la divinità umanoide, con un corpo umano e la testa di sciacallo, che proteggeva le necropoli ed il mondo dei morti, assistendo anche nel rituale dell'imbalsamazione. Veniva rappresentato con il corpo di uomo e testa di cane, ma viene contrassegnato come 'testa di sciacallo' per identificare così l'animale che si nutre di carogne e quindi strettamente connesso alla morte."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti graffiti anubi medio");
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
function fetchDataMummiaPage7Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage7Media(data);
      appendPictureMummiaPage7media(data);
      appendPulsanteMummiaPage7Media(data);
      appendIndizioMummiaPage7Media(data);
      appendOggettiMummiaPage7Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage7Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina7.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage7media(data) {
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

function appendPulsanteMummiaPage7Media(data) {
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

function appendIndizioMummiaPage7Media(data) {
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

function appendOggettiMummiaPage7Media(data) {
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
function fetchDataMummiaPage8Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage8Media(data);
      appendPictureMummiaPage8media(data);
      appendPulsanteMummiaPage8Media(data);
      appendIndizioMummiaPage8Media(data);
      appendOggettiMummiaPage8Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage8Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina8.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage8media(data) {
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

function appendPulsanteMummiaPage8Media(data) {
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

function appendIndizioMummiaPage8Media(data) {
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

function appendOggettiMummiaPage8Media(data) {
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

function perlustraStanzaMed() {
  alert(
    "Analizzando meglio i resti capisci che il decesso è sopraggiunto da poche ore. Com'è possibile? Chi può aver ucciso queste persone?."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti cadavere medio");
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
function fetchDataMummiaPage9Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage9Media(data);
      appendPictureMummiaPage9media(data);
      appendPulsanteMummiaPage9Media(data);
      appendIndizioMummiaPage9Media(data);
      appendOggettiMummiaPage9Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage9Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina9.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage9media(data) {
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

function appendPulsanteMummiaPage9Media(data) {
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

function appendIndizioMummiaPage9Media(data) {
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

function appendOggettiMummiaPage9Media(data) {
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

function entraCultoMed() {
  alert("Dentro dovrebbe esserci la tomba del faraone...");

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti entra luogo culto medio");
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

function ispezionaCultoMed() {
  alert(
    "Entrando nel luogo di culto troverai il sarcofago del faraone. Il sarcofago egizio era la cassa destinata a custodire il corpo imbalsamato del defunto e il suo Ka. E' da considerarsi l'elemento più importante di una sepoltura e dimora del defunto per l'eternità. il Ka nel mondo fisico è in grado di conservare i ricordi e i sentimenti della vita terrena"
  );
}

//////////////////////PAGE10///////////////////////////////////
function fetchDataMummiaPage10Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage10Media(data);
      appendPictureMummiaPage10media(data);
      appendPulsanteMummiaPage10Media(data);
      appendIndizioMummiaPage10Media(data);
      appendOggettiMummiaPage10Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage10Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina10.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage10media(data) {
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

function appendPulsanteMummiaPage10Media(data) {
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

function appendIndizioMummiaPage10Media(data) {
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

function appendOggettiMummiaPage10Media(data) {
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

function entraSarcofagoMed() {
  alert(
    "Sembrerebbe che il sarcofago sia stato profanato e che qualcuno abbia rubato tutte le sue ricchezze. Tra cui l'amuleto trovato prima. Rimettilo al suo posto"
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti entra sarcofago medio");
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
function fetchDataMummiaPage11Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage11Media(data);
      appendPictureMummiaPage11media(data);
      appendPulsanteMummiaPage11Media(data);
      appendIndizioMummiaPage11Media(data);
      appendOggettiMummiaPage11Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage11Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina11.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage11media(data) {
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

function appendPulsanteMummiaPage11Media(data) {
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

function appendIndizioMummiaPage11Media(data) {
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

function appendOggettiMummiaPage11Media(data) {
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
function fetchDataMummiaPage12Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage12Media(data);
      appendPictureMummiaPage12media(data);
      appendPulsanteMummiaPage12Media(data);
      appendIndizioMummiaPage12Media(data);
      appendOggettiMummiaPage12Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage12Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina12.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage12media(data) {
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

function appendPulsanteMummiaPage12Media(data) {
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

function appendIndizioMummiaPage12Media(data) {
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

function appendOggettiMummiaPage12Media(data) {
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
function fetchDataMummiaPage13Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 13 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage13Media(data);
      appendPictureMummiaPage13media(data);
      appendPulsanteMummiaPage13Media(data);
      appendIndizioMummiaPage13Media(data);
      appendOggettiMummiaPage13Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage13Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina13.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage13media(data) {
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

function appendPulsanteMummiaPage13Media(data) {
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

function appendIndizioMummiaPage13Media(data) {
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

function appendOggettiMummiaPage13Media(data) {
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

function perlustraStanzaStatueMed() {
  alert(
    "C'è una tavola scolpita con una strana raffigurazione. Decidi di osservarla meglio."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola media");
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

function raccogliFiaccolaMed() {
  alert("Forse un po di luce potrebbe farti comodo.");
}

//////////////////////PAGE14///////////////////////////////////
function fetchDataMummiaPage14Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage14Media(data);
      appendPictureMummiaPage14media(data);
      appendPulsanteMummiaPage14Media(data);
      appendIndizioMummiaPage14Media(data);
      appendOggettiMummiaPage14Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage14Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina14.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage14media(data) {
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

function appendPulsanteMummiaPage14Media(data) {
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

function appendIndizioMummiaPage14Media(data) {
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

function appendOggettiMummiaPage14Media(data) {
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

function continuaPerlustrazioneMed() {
  alert(
    "Improvvisamente senti delle urla, sono lontane ma chiaramente udibili. Corri a vedere cosa sta succedendo."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola media");
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

function osservaTavolaMed() {
  alert(
    "Quanto scritto sulla tavola sembrerebbe essere un avvertimento riguardo al fatto di non disobbedire mai alle volontà del faraone."
  );
}

//////////////////////PAGE15///////////////////////////////////
function fetchDataMummiaPage15Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage15Media(data);
      appendPictureMummiaPage15media(data);
      appendPulsanteMummiaPage15Media(data);
      appendIndizioMummiaPage15Media(data);
      appendOggettiMummiaPage15Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage15Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina15.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage15media(data) {
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

function appendPulsanteMummiaPage15Media(data) {
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

function appendIndizioMummiaPage15Media(data) {
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

function appendOggettiMummiaPage15Media(data) {
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

function controllaStanzaMed() {
  alert("Usa la fiaccola per farti strada");

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti fiaccola medio");
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
function fetchDataMummiaPage16Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage16Media(data);
      appendPictureMummiaPage16media(data);
      appendPulsanteMummiaPage16Media(data);
      appendIndizioMummiaPage16Media(data);
      appendOggettiMummiaPage16Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage16Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina16.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage16media(data) {
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

function appendPulsanteMummiaPage16Media(data) {
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

function appendIndizioMummiaPage16Media(data) {
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

function appendOggettiMummiaPage16Media(data) {
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

function osservaDaVicinoMed() {
  alert(
    "Quello che ha in mano sembrerebbe essere l'occhio di Horus. Perché lo aveva lei? Devi sbrigarti a trovare l'ultimo oggetto"
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti osserva media");
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

function ispezionaZonaMed() {
  alert(
    "Mentre ispezioni, senti la donna che in punto di morte sussurra 'Anubi'"
  );
}

//////////////////////PAGE17///////////////////////////////////
function fetchDataMummiaPage17Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage17Media(data);
      appendPictureMummiaPage17media(data);
      appendPulsanteMummiaPage17Media(data);
      appendIndizioMummiaPage17Media(data);
      appendOggettiMummiaPage17Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage17Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina17.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage17media(data) {
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

function appendPulsanteMummiaPage17Media(data) {
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

function appendIndizioMummiaPage17Media(data) {
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

function appendOggettiMummiaPage17Media(data) {
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
function fetchDataMummiaPage18Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage18Media(data);
      appendPictureMummiaPage18media(data);
      appendPulsanteMummiaPage18Media(data);
      appendIndizioMummiaPage18Media(data);
      appendOggettiMummiaPage18Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage18Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina18.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage18media(data) {
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

function appendPulsanteMummiaPage18Media(data) {
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

function appendIndizioMummiaPage18Media(data) {
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

function appendOggettiMummiaPage18Media(data) {
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

function restituisciOcchioMed() {
  alert(
    "L'Occhio di Horus costituisce nella religione egizia il simbolo di protezione, della prosperità, del potere regale e della buona salute, ed è personificato dalla dea Wadjet."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio medio");
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
function fetchDataMummiaPage19Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage19Media(data);
      appendPictureMummiaPage19media(data);
      appendPulsanteMummiaPage19Media(data);
      appendIndizioMummiaPage19Media(data);
      appendOggettiMummiaPage19Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19media(data) {
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

function appendPulsanteMummiaPage19Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina19.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina19.pulsanteName;
    puls2.innerHTML = data[i].pagina19.pulsanteName2;
    //puls3.innerHTML = data[i].pagina19.pulsanteName3;
    //puls4.innerHTML = data[i].pagina19.pulsanteName4;
  }
}

function appendIndizioMummiaPage19Media(data) {
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

function appendOggettiMummiaPage19Media(data) {
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

function stanzaSxDxMed() {
  alert(
    "Raggiunta la fine del corridoio ci sono due direzioni. Quale sarà la strada giusta?"
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti corridoio media");
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
      var urlvalue3 = JSON.stringify(data[i].pagina19.pulsanteFunc3);
      var urlvalue4 = JSON.stringify(data[i].pagina19.pulsanteFunc4);

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

      puls3.innerHTML = data[i].pagina19.pulsanteName3;
      puls4.innerHTML = data[i].pagina19.pulsanteName4;
    }
  }
}

//////////////////////PAGE19a1///////////////////////////////////
function fetchDataMummiaPage19a1Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a1 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage19a1Media(data);
      appendPictureMummiaPage19a1media(data);
      appendPulsanteMummiaPage19a1Media(data);
      appendIndizioMummiaPage19a1Media(data);
      appendOggettiMummiaPage19a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a1media(data) {
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

function appendPulsanteMummiaPage19a1Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a1.pulsanteFunc);
    var urlvalue2 = JSON.stringify(data[i].pagina19a1.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina19a1.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina19a1.pulsanteFunc4);

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

    puls.innerHTML = data[i].pagina19a1.pulsanteName;
    puls2.innerHTML = data[i].pagina19a1.pulsanteName2;
    //puls3.innerHTML = data[i].pagina19a1.pulsanteName3;
    //puls4.innerHTML = data[i].pagina19a1.pulsanteName4;
  }
}

function appendIndizioMummiaPage19a1Media(data) {
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

function appendOggettiMummiaPage19a1Media(data) {
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
function fetchDataMummiaPage19a2Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a2 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage19a2Media(data);
      appendPictureMummiaPage19a2media(data);
      appendPulsanteMummiaPage19a2Media(data);
      appendIndizioMummiaPage19a2Media(data);
      appendOggettiMummiaPage19a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a2media(data) {
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

function appendPulsanteMummiaPage19a2Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a2.pulsanteFunc);
    //var urlvalue2 = JSON.stringify(data[i].pagina19a2.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina19a2.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina19a2.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    //var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    //var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    //puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    //pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);
    //pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina19a2.pulsanteName;
    //puls2.innerHTML = data[i].pagina19a2.pulsanteName2;
    //puls3.innerHTML = data[i].pagina19a2.pulsanteName3;
    //puls4.innerHTML = data[i].pagina19a2.pulsanteName4;
  }
}

function appendIndizioMummiaPage19a2Media(data) {
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

function appendOggettiMummiaPage19a2Media(data) {
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
function fetchDataMummiaPage19a3Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a3 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage19a3Media(data);
      appendPictureMummiaPage19a3Media(data);
      appendPulsanteMummiaPage19a3Media(data);
      appendIndizioMummiaPage19a3Media(data);
      appendOggettiMummiaPage19a3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a3Media(data) {
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

function appendPulsanteMummiaPage19a3Media(data) {
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

function appendIndizioMummiaPage19a3Media(data) {
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

function appendOggettiMummiaPage19a3Media(data) {
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
function fetchDataMummiaPage19a4Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a4 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage19a4Media(data);
      appendPictureMummiaPage19a4Media(data);
      appendPulsanteMummiaPage19a4Media(data);
      appendIndizioMummiaPage19a4Media(data);
      appendOggettiMummiaPage19a4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a4Media(data) {
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

function appendPulsanteMummiaPage19a4Media(data) {
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

function appendIndizioMummiaPage19a4Media(data) {
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

function appendOggettiMummiaPage19a4Media(data) {
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
function fetchDataMummiaPage19a5Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 19a5 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage19a5Media(data);
      appendPictureMummiaPage19a5media(data);
      appendPulsanteMummiaPage19a5Media(data);
      appendIndizioMummiaPage19a5Media(data);
      appendOggettiMummiaPage19a5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage19a5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina19a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage19a5media(data) {
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

function appendPulsanteMummiaPage19a5Media(data) {
  var pulsContainer = document.getElementById("pulsante");

  for (var i = 0; i < data.length; i++) {
    var urlvalue = JSON.stringify(data[i].pagina19a5.pulsanteFunc);
    //var urlvalue2 = JSON.stringify(data[i].pagina19a5.pulsanteFunc2);
    //var urlvalue3 = JSON.stringify(data[i].pagina19a5.pulsanteFunc3);
    //var urlvalue4 = JSON.stringify(data[i].pagina19a5.pulsanteFunc4);

    var stripped = urlvalue.replace(/['"]+/g, "");
    //var stripped2 = urlvalue2.replace(/['"]+/g, "");
    //var stripped3 = urlvalue3.replace(/['"]+/g, "");
    //var stripped4 = urlvalue4.replace(/['"]+/g, "");

    var puls = document.createElement("button");
    //var puls2 = document.createElement("button");
    //var puls3 = document.createElement("button");
    //var puls4 = document.createElement("button");

    puls.setAttribute("onclick", stripped);
    //puls2.setAttribute("onclick", stripped2);
    //puls3.setAttribute("onclick", stripped3);
    //puls4.setAttribute("onclick", stripped4);

    //pulsContainer.appendChild(puls2);
    pulsContainer.appendChild(puls);
    //pulsContainer.appendChild(puls4);

    puls.innerHTML = data[i].pagina19a5.pulsanteName;
    //puls2.innerHTML = data[i].pagina19a5.pulsanteName2;
    //puls3.innerHTML = data[i].pagina19a5.pulsanteName3;
    //puls4.innerHTML = data[i].pagina19a5.pulsanteName4;
  }
}

function appendIndizioMummiaPage19a5Media(data) {
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

function appendOggettiMummiaPage19a5Media(data) {
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

//////////////////////PAGE20///////////////////////////////////
function fetchDataMummiaPage20Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage20Media(data);
      appendPictureMummiaPage20media(data);
      appendPulsanteMummiaPage20Media(data);
      appendIndizioMummiaPage20Media(data);
      appendOggettiMummiaPage20Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage20Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina20.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage20media(data) {
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

function appendPulsanteMummiaPage20Media(data) {
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

function appendIndizioMummiaPage20Media(data) {
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

function appendOggettiMummiaPage20Media(data) {
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
function fetchDataMummiaPage21Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage21Media(data);
      appendPictureMummiaPage21media(data);
      appendPulsanteMummiaPage21Media(data);
      appendIndizioMummiaPage21Media(data);
      appendOggettiMummiaPage21Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage21Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina21.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage21media(data) {
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

function appendPulsanteMummiaPage21Media(data) {
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

function appendIndizioMummiaPage21Media(data) {
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

function appendOggettiMummiaPage21Media(data) {
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

function usaPugnaleMed() {
  alert(
    "Sei riuscito a distrarre Anubi. Prendi la croce che la ricercatrice ha rubato e corri a rimetterla nel suo posto."
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio medio");
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

function cercaCroceMed() {
  alert(
    "Sei riuscito a prendere la croce. Corri al sarcofago per rimetterla al suo posto"
  );
}

//////////////////////PAGE22///////////////////////////////////
function fetchDataMummiaPage22Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage22Media(data);
      appendPictureMummiaPage22media(data);
      appendPulsanteMummiaPage22Media(data);
      appendIndizioMummiaPage22Media(data);
      appendOggettiMummiaPage22Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage22Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina22.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage22media(data) {
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

function appendPulsanteMummiaPage22Media(data) {
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

function appendIndizioMummiaPage22Media(data) {
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

function appendOggettiMummiaPage22Media(data) {
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

function riponiCroceMed() {
  alert(
    "L'ankh o Croce della vita - è il simbolo della vita, usata dagli antichi Egizi per donare immortalità ai faraoni"
  );

  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti occhio medio");
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
function fetchDataMummiaPage23Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage23Media(data);
      appendPictureMummiaPage23media(data);
      appendPulsanteMummiaPage23Media(data);
      appendIndizioMummiaPage23Media(data);
      appendOggettiMummiaPage23Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage23Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina23.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage23media(data) {
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

function appendPulsanteMummiaPage23Media(data) {
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

function appendIndizioMummiaPage23Media(data) {
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

function appendOggettiMummiaPage23Media(data) {
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
function fetchDataMummiaPage24Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage24Media(data);
      appendPictureMummiaPage24media(data);
      appendPulsanteMummiaPage24Media(data);
      appendIndizioMummiaPage24Media(data);
      appendOggettiMummiaPage24Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage24Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina24.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage24media(data) {
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

function appendPulsanteMummiaPage24Media(data) {
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

function appendIndizioMummiaPage24Media(data) {
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

function appendOggettiMummiaPage24Media(data) {
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
function fetchDataMummiaPage25Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25Media(data);
      appendPictureMummiaPage25media(data);
      appendPulsanteMummiaPage25Media(data);
      appendIndizioMummiaPage25Media(data);
      appendOggettiMummiaPage25Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25media(data) {
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

function appendPulsanteMummiaPage25Media(data) {
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

function appendIndizioMummiaPage25Media(data) {
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

function appendOggettiMummiaPage25Media(data) {
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
function fetchDataMummiaPage25a1Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25a1Media(data);
      appendPictureMummiaPage25a1Media(data);
      appendPulsanteMummiaPage25a1Media(data);
      appendIndizioMummiaPage25a1Media(data);
      appendOggettiMummiaPage25a1Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a1Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a1.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a1Media(data) {
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

function appendPulsanteMummiaPage25a1Media(data) {
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

function appendIndizioMummiaPage25a1Media(data) {
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

function appendOggettiMummiaPage25a1Media(data) {
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
function fetchDataMummiaPage25a2Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25a2Media(data);
      appendPictureMummiaPage25a2Media(data);
      appendPulsanteMummiaPage25a2Media(data);
      appendIndizioMummiaPage25a2Media(data);
      appendOggettiMummiaPage25a2Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a2Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a2.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a2Media(data) {
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

function appendPulsanteMummiaPage25a2Media(data) {
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

function appendIndizioMummiaPage25a2Media(data) {
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

function appendOggettiMummiaPage25a2Media(data) {
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
function fetchDataMummiaPage25a3Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25a3Media(data);
      appendPictureMummiaPage25a3Media(data);
      appendPulsanteMummiaPage25a3Media(data);
      appendIndizioMummiaPage25a3Media(data);
      appendOggettiMummiaPage25a3Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a3Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a3.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a3Media(data) {
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

function appendPulsanteMummiaPage25a3Media(data) {
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

function appendIndizioMummiaPage25a3Media(data) {
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

function appendOggettiMummiaPage25a3Media(data) {
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
function fetchDataMummiaPage25a4Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25a4Media(data);
      appendPictureMummiaPage25a4Media(data);
      appendPulsanteMummiaPage25a4Media(data);
      appendIndizioMummiaPage25a4Media(data);
      appendOggettiMummiaPage25a4Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a4Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a4.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a4Media(data) {
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

function appendPulsanteMummiaPage25a4Media(data) {
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

function appendIndizioMummiaPage25a4Media(data) {
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

function appendOggettiMummiaPage25a4Media(data) {
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
function fetchDataMummiaPage25a5Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage25a5Media(data);
      appendPictureMummiaPage25a5Media(data);
      appendPulsanteMummiaPage25a5Media(data);
      appendIndizioMummiaPage25a5Media(data);
      appendOggettiMummiaPage25a5Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage25a5Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina25a5.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage25a5Media(data) {
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

function appendPulsanteMummiaPage25a5Media(data) {
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

function appendIndizioMummiaPage25a5Media(data) {
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

function appendOggettiMummiaPage25a5Media(data) {
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

//////////////////////PAGE26///////////////////////////////////
function fetchDataMummiaPage26Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage26Media(data);
      appendPictureMummiaPage26media(data);
      appendPulsanteMummiaPage26Media(data);
      appendIndizioMummiaPage26Media(data);
      appendOggettiMummiaPage26Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage26Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina26.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage26media(data) {
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

function appendPulsanteMummiaPage26Media(data) {
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

function appendIndizioMummiaPage26Media(data) {
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

function appendOggettiMummiaPage26Media(data) {
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
function fetchDataMummiaPage27Media() {
  fetch("json/mummia/giocoMed.json")
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
      appendDataMummiaPage27Media(data);
      appendPictureMummiaPage27media(data);
      appendPulsanteMummiaPage27Media(data);
      appendIndizioMummiaPage27Media(data);
      appendOggettiMummiaPage27Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage27Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina27.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage27media(data) {
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

function appendPulsanteMummiaPage27Media(data) {
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

function appendIndizioMummiaPage27Media(data) {
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

function appendOggettiMummiaPage27Media(data) {
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
function fetchDataMummiaPage28Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 28 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage28Media(data);
      appendPictureMummiaPage28media(data);
      appendPulsanteMummiaPage28Media(data);
      appendIndizioMummiaPage28Media(data);
      appendOggettiMummiaPage28Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage28Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina28.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage28media(data) {
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

function appendPulsanteMummiaPage28Media(data) {
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

function appendIndizioMummiaPage28Media(data) {
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

function appendOggettiMummiaPage28Media(data) {
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
function fetchDataMummiaPage29Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 29 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage29Media(data);
      appendPictureMummiaPage29media(data);
      appendPulsanteMummiaPage29Media(data);
      appendIndizioMummiaPage29Media(data);
      appendOggettiMummiaPage29Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage29Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina29.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage29media(data) {
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

function appendPulsanteMummiaPage29Media(data) {
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

function appendIndizioMummiaPage29Media(data) {
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

function appendOggettiMummiaPage29Media(data) {
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
function fetchDataMummiaPage30Media() {
  fetch("json/mummia/giocoMed.json")
    .then(function (response) {
      //get JSON data from the response
      console.log("dati letti pagina 30 medio");
      return response.json();

      //In the second then function we get the actual JSON data as a parameter.
    })
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
      appendDataMummiaPage30Media(data);
      appendPictureMummiaPage30media(data);
      appendPulsanteMummiaPage30Media(data);
      appendIndizioMummiaPage30Media(data);
      appendOggettiMummiaPage30Media(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function appendDataMummiaPage30Media(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[i].pagina30.testo;
  }
  console.log(istruzioni);
  console.log("----");
}

function appendPictureMummiaPage30media(data) {
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

function appendPulsanteMummiaPage30Media(data) {
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

function appendIndizioMummiaPage30Media(data) {
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

function appendOggettiMummiaPage30Media(data) {
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
function backHomeMed() {
  $("#chooseGame").removeClass("hidden");
  $("#game").removeClass("hidden").addClass("hidden");

  $("#etaContainer").removeClass("hidden");

  console.log("Sei a casa");
}

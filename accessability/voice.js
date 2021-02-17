//variabili globali
var utterance = null;
var synthesis = null;

//Quando il documento è pronto chiama la funzione per
//generare i bottoni con i nomi delle storie accessibili
$(document).ready(function() {
  getAccessabilityStorys();

});
//Recupera le storie accessibili per i non vedenti
function getAccessabilityStorys(){

  var com="ls webapp/accessability/eyes/";
  $.ajax({
    type: "GET",
    datatype: "html",
    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com +"",
    success: function(returnData) {
      //crea i bottoni per le storie
      createButtonAccessability(returnData);
    }
  })
}

//per ogni storia crea il bottone corrispondente
function createButtonAccessability(dataAccessability){

  var array=dataAccessability.split("\n");
  var div=document.getElementById("initialAccessability");

  for(var i=0;i<array.length-1;i++){

    var name=array[i].split(".");
    var button=document.createElement("button");
    button.setAttribute("id","button"+parseInt((i+1)));

    button.textContent=name[0];
    button.setAttribute("onClick","startJson()");
    div.appendChild(button);
  }
  //chiama la funzione per leggere i bottoni
  speechNumber();
}
//Permette di leggere i bottoni di ogni storia accessibile
function speechNumber(){

  var number = document.getElementById("initialAccessability").childElementCount;

  Array.from(document.getElementById("initialAccessability").children).forEach((cN, index) => {
    var text = "premere il numero " + (index + 1) + " e poi : invio, per avviare la storia " + cN.textContent + "";
    speech(text);
  });
  speech("E' possibile tornare al player in qualsiasi momento premendo il numero: 6, e poi: invio.");

  chooseNumber(number);

}
//Permette di scegliere la storia
function chooseNumber(number){
  //crea un prompt che permette di inserire un numero
  //corrispondente alla storia che si vuole avviare
  var choose = parseInt(window.prompt(""), 10);
  //controlla che l'input inserito corrisponda ad uno dei bottoni
  if(isNaN(choose) || choose < 1 || choose > number){
    var textError = "numero non corretto, reinserire";
    speech(textError);
    chooseNumber(number);
  } else

  startJson(choose);
}
//Pulisce le strutture e richiama la funzione per generare la storia
function startJson(story){
  var name = document.getElementById("button" + story).textContent;
  var container = document.getElementById("initialAccessability");
  container.innerHTML="";

  eyesJson(name);
}
//recupera la storia e inizia la lettura della stessa
function eyesJson(name){

  fetch("eyes/" + name + ".json")
  .then((response) => {
    //prende il JSON data dalla risposta

    return response.json();

    //nella seconda funzione passiamo la risposta (il JSON).
  })
  .then((data) => {
    //genero la struttura per memorizzare il punteggio
    var score = {};
    score.points = 0;
    //recupero il punto iniziale della storia
    var number=0;
    for(var x in data.player){
      if(data.player[x].start==true){
        number=x;
        break;
      }
    }

    startRead(number, data.player, score);
  });
}
//Si occupa di leggere i testi, la descrizione per le immagini e i bottoni
function startRead(number,data,score){
  synthesis.cancel();
  if(data[number].disableBranch!=true&&data[number].disable!=true){
    text(number, data);
    img(number,data);
    buttons(number, data, score);
  }
}
//genera il testo e ne esegue la lettura
function text(number,data){
  var containerText = document.getElementById("text");
  containerText.innerHTML = "";

  var p = document.createElement("p");
  var p1 = document.createTextNode(data[number].text);

  p.appendChild(p1);
  containerText.appendChild(p);

  speech(data[number].text);
}
//genera l'immagine e ne esegue la lettura se presente
function img(number, data){
  var containerImg=document.getElementById("img");
  containerImg.innerHTML="";
  if(data[number].img!="none"){
    var urlvalue = JSON.stringify("../imgCreate/"+data[number].img);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "440");
    img_url.setAttribute("height", "320");

    if(data[number].textAccessability!=null)
    speech(data[number].textAccessability);
    containerImg.appendChild(img_url);
  }
}
//Genera i bottoni e ne esegue la lettura
function buttons(number, data, score){

  var container = document.getElementById("buttons");
  container.innerHTML = "";
  var buttonsArray = data[number].buttons;

  buttonsArray.forEach((element, index) => {
    if(element.disable!=true)
    speech("premere il numero " + (index + 1) + ", e poi, invio per selezionare il pulsante: " + element.text);

    if(element.type=="ContinueButton"){
      if(element.disable!=true){
        var button = document.createElement("button");
        button.textContent = element.text;
        button.setAttribute("id", "button" + (index + 1));
        button.onclick = function(){
          score.points+=parseInt(element.score);
          startRead(element.id, data, score);
        }
        //button.setAttribute("onclick","startRead("+ element.destination + ",\""+data+"\")");
        container.appendChild(button);
      }
    }
    else if(element.type=="WrongButton"){
      if (element.disable!=true){
        var button = document.createElement("button");
        button.textContent = element.text;
        button.setAttribute("id", "button" + (index + 1));
        button.onclick = function(){
          score.points+=parseInt(element.score);
          //Ripete i bottoni se si sbaglia risposta
          repeatButtons(element, number, data, score);

        }
        container.appendChild(button);
      }
    }
    else if(element.type=="StopButton"){
      if(element.disable!=true){
        var button = document.createElement("button");
        button.textContent = element.text;
        button.setAttribute("id", "button" + (index + 1));
        button.onclick = function(){
          score.points+=parseInt(element.score);
          repeatButtons(element, number, data, score);
        }
        container.appendChild(button);
      }
    }
    else if(element.type=="BridgeButton"){
      if(element.disable!=true){
        var button = document.createElement("button");
        button.textContent = element.text;
        button.setAttribute("id", "button" + (index + 1));
        button.onclick = function(){
          score.points+=parseInt(element.score);
          startRead(element.bridge, data, score);

        }
        container.appendChild(button);
      }
    }
    else if(element.end==true){//se presente nella struttura genera il bottone di fine storia
      if(element.disable!=true){
        var button = document.createElement("button");
        button.textContent = element.text;
        button.setAttribute("id", "button" + (index + 1));
        button.onclick = () => {
          endStory(score);
        }
        container.appendChild(button);
      }
    }

  });


  var buttonNumber = NaN;

  while(isNaN(buttonNumber)){
    buttonNumber = parseInt(
      window.prompt(""),
      10
    );
    //Controlla se viene inserito un numero non corrispondente a nessun bottone
    if(buttonNumber!=6){
      if(isNaN(buttonNumber) || buttonNumber > data[number].buttons.length || buttonNumber <= 0) {
        if(!synthesis.pending)
        speech("Input sbagliato");

        buttonNumber = NaN;
      }
    }else
    window.location.replace("http://site192020.tw.cs.unibo.it");
  }

  $("#button" + buttonNumber).click();

}
//Ripete la pagina se si sbaglia risposta
function repeatButtons(element, id, data, score){
  synthesis.cancel();
  if(element.type=="StopButton"){
    speech(element.alert);
  }else{
    speech("risposta sbagliata");
  }
  speech("premere il numero: 1, e poi: invio per ripetere");
  var number = parseInt(window.prompt(""),10);

  if(number===1){
    startRead(data[id].id, data, score);
  }
  else {
    repeatButtons(element, id, data ,score);

  }
}
//Esegue la lettura del punteggio finale e permette
//di tornare alla selezione delle storie
function endStory(score){
  synthesis.cancel();

  var containerText = document.getElementById("text");
  containerText.innerHTML = "";
  var containerImg = document.getElementById("img");
  containerImg.innerHTML="";

  var container = document.getElementById("buttons");
  container.innerHTML = "";
  var endText = "il tuo punteggio è di: " + score.points+".";

  var p = document.createElement("p");
  var p1 = document.createTextNode(endText);
  p.appendChild(p1);
  containerText.appendChild(p);
  speech(endText);
  speech("premere il numero: 1 e poi: invio per tornare alla selezione delle storie");
  var number = parseInt(window.prompt(""),10);
  if(number==1)
  location.reload();
  else {
    endStory(score);
  }

}
//Esegue la lettura dei dati passati
function speech(data){

  synthesis = window.speechSynthesis;

  if ('speechSynthesis' in window) {
    synthesis = window.speechSynthesis;
    // pende la prima voce `it` nella lista
    var voice = synthesis.getVoices().filter((voice) => {
      return voice.lang === 'it';
    })[0];

    utterance = new SpeechSynthesisUtterance(data);

    // Proprietà per l'utterance
    utterance.voice = voice;
    utterance.pitch = 0.6;
    utterance.rate = 0.8;
    utterance.volume = 1;

    // esegue lo speak per l'utterance 
    synthesis.speak(utterance);

  } else {
    console.log('Text-to-speech not supported.');
  }

}

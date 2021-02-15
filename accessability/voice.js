var utterance = null;
var synthesis = null;

$(document).ready(function() {
  getAccessabilityStorys();


    Array.from(document.getElementById("initialAccessability").children).forEach((cN, index) => {
	var text = "premere il numero " + (index + 1) + " per avviare la storia " + cN.textContent + "";
	speech(text);
    });

    chooseNumber(number);
});

function getAccessabilityStorys(){

    var com="ls accessability/eyes/";
    $.ajax({
    type: "GET",
    datatype: "html",
    url: "http://localhost:8000/getOut?com=" + com +"",
    success: function(returnData) {
  //alert(returnData);
  //data=returnData;
  //console.log(data);
  console.log("il primo "+returnData);
  createButtonAccessability(returnData);
    }
})
}

function addSpaceTitle(str){

    var modString= str.replace(/([A-Z])/g, ' $1').trim();
    console.log(modString);
    return modString;

}
function createButtonAccessability(dataAccessability){
  console.log(dataAccessability);
    var array=dataAccessability.split("\n");
      var div=document.getElementById("initialAccessability");
    array.forEach((item,i) => {
      console.log(item);
      var name=item.split(".");
      var button=document.createElement("button");
      button.setAttribute("id","button"+parseInt((i+1)));

    //  var titleButton=addSpaceTitle(name[0]);
      button.textContent=name[0];
      button.setAttribute("onClick","startJson()");
      div.appendChild(button);
    });
    speechNumber();
}

function speechNumber(){

  var number = document.getElementById("initialAccessability").childElementCount;

  Array.from(document.getElementById("initialAccessability").children).forEach((cN, index) => {
var text = "premere il numero " + (index + 1) + " e poi : invio, per avviare la storia " + cN.textContent + "";
speech(text);
  });
  speech("E' possibile tornare al player in qualsiasi momento premendo il numero: 6, e poi: invio.");
  chooseNumber(number);

}
function chooseNumber(number){
    var choose = parseInt(window.prompt(""), 10);

    if(isNaN(choose) || choose < 1 || choose > number){
	var textError = "numero non corretto, reinserire";
	speech(textError);
	chooseNumber(number);
    } else
	startJson(choose);
}

function startJson(story){
    var name = document.getElementById("button" + story).textContent;
    var container = document.getElementById("initialAccessability");
    container.innerHTML="";

    eyesJson(name);
}

function eyesJson(name){

    fetch("eyes/" + name + ".json")
        .then((response) => {
            //get JSON data from the response
            console.log("dati letti");
            return response.json();

            //In the second then function we get the actual JSON data as a parameter.
        })
	.then((data) => { //This is where we create the code which will append the data to our page.
            var score = {};
            score.points = 0;
            //score.wrong = 0;

            var number=0;
            for(var x in data.player){
              if(data.player[x].start==true){
                number=x;
                break;
              }
            }
            console.log(data);
            startRead(number, data.player, score);
        });
}

function startRead(number,data,score){
    synthesis.cancel();
    if(data[number].disableBranch!=true&&data[number].disable!=true){
    text(number, data);
    img(number,data);
    buttons(number, data, score);
  }
}

function text(number,data){
  console.log(data);
  console.log(number);
  console.log(data[number].text);
    var containerText = document.getElementById("text");
    containerText.innerHTML = "";

    var p = document.createElement("p");
    var p1 = document.createTextNode(data[number].text);

    console.log(data[number].text);
    console.log(data);

    p.appendChild(p1);
    containerText.appendChild(p);

    speech(data[number].text);
}

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
  speech(data[number].textAccessability);
  containerImg.appendChild(img_url);
}
}

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
else if(element.end==true){
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
    speech("reinserire");
    repeatButtons(element, id, data ,score);

  }
}

function endStory(score){
  synthesis.cancel();
  console.log(score);
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

function speech(data){

    synthesis = window.speechSynthesis;

    if ('speechSynthesis' in window) {
	synthesis = window.speechSynthesis;
	// Get the first `it` language voice in the list
	var voice = synthesis.getVoices().filter((voice) => {
	    return voice.lang === 'it';
	})[0];

	utterance = new SpeechSynthesisUtterance(data);

	// Set utterance properties
	utterance.voice = voice;
	utterance.pitch = 0.6;
	utterance.rate = 0.8;
	utterance.volume = 1;

	// Speak the utterance
	synthesis.speak(utterance);

    } else {
	console.log('Text-to-speech not supported.');
    }

}

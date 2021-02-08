var utterance = null;
var synthesis = null;

$(document).ready(function() {
    var number = document.getElementById("initialAccessability").childElementCount;

    Array.from(document.getElementById("initialAccessability").children).forEach((cN, index) => {
	var text = "premere il numero " + (index + 1) + " per avviare la storia " + cN.textContent + "";
	speech(text);
    });
    
    chooseNumber(number);
});

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
            score.correct = 0;
            score.wrong = 0;
            startRead(0, data, score);
        });
}

function startRead(number,data,score){
    synthesis.cancel();
    text(number, data);
    buttons(number, data, score);
}

function text(number,data){
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

function buttons(number, data, score){

    var container = document.getElementById("buttons");
    container.innerHTML = "";
    var buttonsArray = data[number].buttons;

    buttonsArray.forEach((element, index) => {
	speech("premere il numero " + (index + 1) + ", e poi, invio per selezionare il pulsante: " + element.text);

	if(element.destination){
	    var button = document.createElement("button");
            button.textContent = element.text;
            button.setAttribute("id", "button" + (index + 1));
            button.onclick = function(){
		if(element.text != "avanti" && element.text != "Avanti"){
		    score.correct += 1;
		}

		startRead(element.destination, data, score);
            }
            //button.setAttribute("onclick","startRead("+ element.destination + ",\""+data+"\")");
            container.appendChild(button);
	}
	else if(element.errore){
	    var button = document.createElement("button");
            button.textContent = element.text;
            button.setAttribute("id", "button" + (index + 1));
            button.onclick = function(){
		score.wrong += 1;

		speech("risposta sbagliata");
		speech("la risposta corretta era: " + element.correct);
		startRead(element.idCorrect, data, score);
            }
            container.appendChild(button);
	}
	else if(element.end){
            var button = document.createElement("button");
            button.textContent = element.text;
            button.setAttribute("id", "button" + (index + 1));
            button.onclick = () => {
		endStory(score);
            }
            container.appendChild(button);
	}
    });

    	
    
    var buttonNumber = NaN;
    
    while(isNaN(buttonNumber)){
	buttonNumber = parseInt(
	    window.prompt(""),
	    10
	);

	if(isNaN(buttonNumber) || buttonNumber > data[number].buttons.length || buttonNumber <= 0) {
	    if(!synthesis.pending)
		speech("Input sbagliato");
	    
	    buttonNumber = NaN;
	}
    }

    $("#button" + buttonNumber).click();

}

function endStory(score){
    var containerText = document.getElementById("text");
    containerText.innerHTML = "";

    var container = document.getElementById("buttons");
    container.innerHTML = "";
    var endText = "il tuo punteggio è di: " + score.correct + " . Le risposte sbagliate sono state: " + score.wrong;

    var p = document.createElement("p");
    var p1 = document.createTextNode(endText);
    p.appendChild(p1);
    containerText.appendChild(p);
    speech(endText);

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

$(document).ready(function(){

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const story=urlParams.get("story");
  console.log(story);
  //if(story!=null
  if(story!=null)
    playQrStory(urlParams);


});

function playQrStory(urlParams){
  var story = urlParams.get("story");
  var dif = urlParams.get("dif");
  dif+=".json";
  console.log(story);
  console.log(dif);
  $("#age").addClass("hidden");
  var divButton = document.createElement("div");
  divButton.setAttribute("id","divButtonQr");
  divButton.style.textAlign="center";
  var buttonStart = document.createElement("button");
  buttonStart.setAttribute("id","ButtonQrCodeStart");
  buttonStart.textContent=story;
  buttonStart.onclick=function(){
    playStory(story,dif);
  }
  var body=document.getElementById("MainContainer");
  divButton.appendChild(buttonStart)
  body.appendChild(divButton);
  //playStory(story,dif);
}

//esegue un ls nella cartella completeJson dove sono presenti tutte le storie giocabili
function playerButtons(){
  document.getElementById("story").innerHTML="" ;
  var com1="ls webapp/completeJson/";
  $.ajax({
    type: "GET",
    datatype: "html",
    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com1 +"",
    //ritorno i dati dell'esecuzione del comando ls
    success: function(returnData1) {
      findButtons1(returnData1);
    }
  })

}
//Eseguo sempre ls ma questa volta dentro ogni storia per poi prendermi il livello
function findButtons1(data){
  var array = data.split("\n");
  //Per ogni cartella esegue un ls
  for(var i=0;i<array.length - 1;i++){
    var com2= "ls webapp/completeJson/"+array[i];
    $.ajax({
      type: "GET",
      datatype: "html",
      url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com2 +"",
      success: function(returnData2) {
        findButtons2(returnData2);
      }
    })
  }
}

//Prendo i dati della chiamata precedente e per ogni storia a seconda che sia
//easy, medium o hard creo il bottone corrispondente ad avviare la storia
function findButtons2(select){
  var ageValue=document.getElementById("ageSelect").value;
  var arraySelect=select.split("\n");

  for(var j=0;j<arraySelect.length - 1;j++){
    //esegue lo split per prendermi il nome e la difficoltà
    var dif= arraySelect[j].split("-");
    var title=dif[0];

    if(dif[1]=="easy.json"&& ageValue=="1"){

      createButtonsPlayer(title,dif[1]);
    }
    if(dif[1]=="medium.json"&& ageValue=="2")
    createButtonsPlayer(title,dif[1]);

    if(dif[1]=="hard.json"&& ageValue=="3")
    createButtonsPlayer(title,dif[1]);

  }

}
//Aggiunge uno spazio al nome della storia
function addSpaceTitle(str){
  //lo spazio viene aggiunto ad ogni occorrenza di una lettera maiuscola
  var modString= str.replace(/([A-Z])/g, ' $1').trim();
  return modString;

}
//Si occupa di creare i bottoni con il nome della storia i quali poi
//richiameranno il player per la storia selezionata
function createButtonsPlayer(title,dif){
  var br = document.createElement("br");
  var button = document.createElement("button");
  var div = document.getElementById("story");
  //Crea una stringa da usare come nome per il bottone
  var titleButton=addSpaceTitle(title);
  button.textContent=titleButton;
  button.setAttribute("onClick","playStory(\"" + title + "\",\""+ dif +"\")");
  div.appendChild(br);
  div.appendChild(button);
}

//Si occupa di aggiungere un giocatore
function addPlayer(){

  var div = document.getElementById("players");
  var newPlayer = document.createElement("div");
  var img = document.createElement("img");
  var bodyCard = document.createElement("div");
  var t = document.createElement("p");
  var p = document.createElement("p");
  var input= document.createElement("input");
  var numPlayer=div.childElementCount;
  //controllo se si è raggiunto il massimo numero di giocatori
  if(numPlayer==6)
  return alert("Max 4 Player");

  //creo una Card e aggiungo tutti i campi
  newPlayer.classList.add("card");
  newPlayer.classList.add("playerCard");
  newPlayer.style.width="190px";
  newPlayer.setAttribute("id","player"+(numPlayer-1));

  img.classList.add("card-img-top");
  img.classList.add("sizeCard");
  img.src="./mainImg/player_added.png";
  img.alt="Card image";
  img.style.width="80%";

  bodyCard.classList.add("card-body");

  var t1 = document.createTextNode("Player "+(numPlayer-1));
  t.appendChild(t1);

  p.classList.add("p");
  var p1 = document.createTextNode("Scegli il Nome");
  p.appendChild(p1);

  input.classList.add("btn-primary");
  input.classList.add("btn");
  input.size="7";
  input.setAttribute("id","playerName"+(numPlayer-1));

  newPlayer.appendChild(img);
  newPlayer.appendChild(bodyCard);
  bodyCard.appendChild(t);
  bodyCard.appendChild(p);
  bodyCard.appendChild(input);

  div.insertBefore(newPlayer,div.children[(numPlayer-1)]);

  $("#deletePlayer").removeClass("hidden");

}
//Si occupa di eliminare un giocatore
function deletePlayer(){
  var div = document.getElementById("players");
  var numPlayer = div.childElementCount;

  if(numPlayer==4)
  $("#deletePlayer").addClass("hidden");

  var del = document.getElementById("player"+(numPlayer-2));
  div.removeChild(del);
  console.log("poppo "+ div.childNodes[numPlayer]);
  console.log("numeroDelete"+numPlayer);
}
//Controlla che i nomi dei player siano diversi
function controlNamePlayer(objP){
  var i=1;
  var j=1;
  var length=objP.length;
  while(i<length){
    while(j<length){
      if(i!=j){
        if(objP[i].name==objP[j].name){
          return true;
        }
      }
      j++;
    }
    i++;
  }

}
//Controlla che i nomi dei giocatori non siano vuoti
function controlNull(objP){
  var control=false;

  objP.forEach((item)=>{
    if(item.name==="")
    control=true;
  });

  return control;
}
//Si occupa di inizializzare la storia
function playStory(title,dif){

  //variabili di controllo
  var control =false;
  var nullTitle=false;
  //Creo l'oggetto con i nomi dei player
  var objP = createPlayerObj(title,dif);

  //controllo i nomi
  nullTitle=controlNull(objP);
  control=controlNamePlayer(objP);


  if(nullTitle==true)
  return alert("i nomi non possono essere vuoti");
  if(control==true)
  return alert("Non è possibile inserire nomi uguali");

  //Nascondo le strutture
  $("#NavMenu").addClass("hidden");
  $("#qrCodeRow").addClass("hidden");
  $("#WelcomeRow").addClass("hidden");
  $("#IntroductionRow").addClass("hidden");
  
  //Crea il div ed il bottone per poter tornare indietro alla selezione delle storie
  var buttonHome=document.createElement("button");
  buttonHome.setAttribute("id","buttonHome");
  buttonHome.textContent="Torna al player";
  buttonHome.onclick=function(){
    location.reload();
  }
  var divHome=document.createElement("div");
  divHome.style.textAlign="center";
  var body=document.getElementById("body");
  divHome.appendChild(buttonHome);
  body.appendChild(divHome);

  //carica la storia
  generateStory(title,dif,objP[1].name,objP);

}

//crea l'oggetto contenente tutte le informazioni utili per ogni player
function createPlayerObj(title,dif){

  var playerObj=[];
  var div = document.getElementById("players");
  var players = div.childElementCount;

  for(var i = 1; i<(players-1);i++){
    playerObj[i]={};
    playerObj[i].story=title;
    playerObj[i].difficulty=dif;
    playerObj[i].numberOfPlayers=(players-2);
    playerObj[i].name=document.getElementById("playerName"+i).value;
    playerObj[i].score=0;

  }

  return playerObj;
}

//Recupera il css personalizzato e avvia la generazione della storia
function loadCustomCss(story,number,playerName,playerObj,score,css){
  // esegue il fatch del css corrispondente (un file json)
  fetch("create/customCss/createdCss/"+story.storyInfo.css)
  .then(function(response) {
    //prende il JSON data dalla risposta
    return response.json();
  })
  //esegue la funzione che prende la risposta della precedente
  .then(function (cssObj) {
    //applico l'immagine di backgroud del css personalizzato
    applyImgPlayer(cssObj);
    //salvo il css per modificare successivamente bottoni e testi e lo passo nella funzione
    //per la generazione della storia
    css=cssObj;
    css.control=true;
    //applica il css personalizzato anche al bottone che permette di tornare alla selezione delle storie
    applyButtonCss("buttonHome",css);
    //genero la storia
    generation(story.player,number,playerName,playerObj,score,css);

  });

}
//Applica l'imamgine di background del css personalizzato
function applyImgPlayer(css){
  document.body.style.backgroundImage="url(/imgCreate/"+css.img.url+")";
}
//Applica il colore, font e size del css personalizzato al testo
function applyCssText(textId,css){
  document.getElementById(textId).style.color=css.p.color;
  document.getElementById(textId).style.fontFamily=css.p.fontFamily+"px";
  document.getElementById(textId).style.fontSize=css.p.fontSize+"px";

}
//applica il colore di background, il colore del testo,
//e il borderRadius del css personalizzato ai bottoni
function applyButtonCss(buttonId,css){
  document.getElementById(buttonId).style.backgroundColor=css.button.backgroundColor;
  document.getElementById(buttonId).style.color=css.button.color
  document.getElementById(buttonId).style.borderRadius=css.button.borderRadius+"px";
}

//Si occupa di recuperare e generare la storia
function generateStory(title,dif,playerName,playerObj){
  //Oggetti ausiliari per memorizzare css personalizzato e Punteggio
  var css={};
  css.control=false;
  var score={};
  score.points=0;
  //Recupera la storia
  fetch("completeJson/"+title+"/"+title+"-"+dif)
  .then(function(response) {
    //prende il JSON data dalla risposta
    return response.json();
  })
  .then(function (story) {
    //Cerca il punto iniziale della storia
    var number=0;
    for(var x in story.player){
      if(story.player[x].start==true){
        number=x;
        break;
      }
    }

    //Si carica il css scelto per la storia corrispondente
    if(story.storyInfo.css=="default"||story.storyInfo.css=="Simple"||story.storyInfo.css=="ColorFull"){
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'create/cssToLoad/'+story.storyInfo.css+".css") );
    }else{
      loadCustomCss(story,number,playerName,playerObj,score,css);
    }
    //genera la storia
    generation(story.player,number,playerName,playerObj,score,css);

  })

}
//Si occupa di creare tutte le strutture per testi bottoni e immagini ed eventuali widget
//per la storia
function generation(story,number,playerName,playerObj,score,css){
  //prende il MainContainer dove sono presenti tutte le strutture base e lo pulisce
  //per aggiungere le nuove strutture
  document.getElementById("MainContainer").innerHTML="";
  var body = document.getElementById("MainContainer");
  //Crea il div dove si posiziona il nome del giocatore corrente
  var title = document.createElement("div");
  title.setAttribute("id","titlePlayer");
  var p = document.createElement("p");
  p.setAttribute("id","playerName");
  var p1 = document.createTextNode("Gioca il Player "+ playerName);
  p.appendChild(p1);
  title.appendChild(p);
  body.appendChild(title);

  // crea il div dove si posiziona il testo della storia
  var text = document.createElement("div");
  text.setAttribute("id","textStory");
  body.appendChild(text);

  //crea il div dove si posiziona l'immagine
  var image = document.createElement("div");
  image.setAttribute("id","imageStory");
  body.appendChild(image);

  //crea il div dove si posizionano i bottoni
  var buttons = document.createElement("div");
  buttons.setAttribute("id","buttonsStory");
  body.appendChild(buttons);

  //crea il div dove si posizionano le strutture per finire la storia
  var endDiv = document.createElement("div");
  endDiv.setAttribute("id","endStory");
  body.appendChild(endDiv);


  //controlla se esiste il css personalizzato
  if(css.control===true)
  applyCssText(p.id,css);
  //Controlla se il banch che si sta considerando è disabilitato o meno
  if(story[number].disableBranch!=true&&story[number].disable!=true){
    //genera il testo e l'immagine
    generateText(story,number,css);
    generateImg(story,number);
    //Controlla se è presente il widget in caso contrario genera i bottoni
    if(story[number].widgetPuzzle==true){
      generatePuzzle(story,number,score,playerName,playerObj,css);
    }else
    generateButtons(story,number,score,playerName,playerObj,css);

    //controlla se la storia è arrivata alla fine
    checkEnd(story,number,playerName,playerObj,score,css);
  }

}
//Si occupa di generare il puzzle per la storia
function generatePuzzle(story,number,score,playerName,playerObj,css){
  //carica il css per il puzzle
  $('head').append( $('<link rel="stylesheet" id="cssPuzzle" type="text/css" />').attr('href', 'widget/puzzle-game-jquery/dist/StylePuzzle.css') );

  $("#puzzle").removeClass("hidden");
  startPuzzle(story[number].puzzle[0].img,story,number,score,playerName,playerObj,css);
  //Crea un bottone per poter saltare il puzzle in caso di necessità
  var buttonSkip=document.createElement("button");
  buttonSkip.setAttribute("id","skipButton");
  buttonSkip.textContent="Salta Puzzle";

  var div = document.getElementById("buttonsStory");
  div.appendChild(buttonSkip);

  //Applica il css personalizzato se presente
  if(css.control===true)
  applyButtonCss("skipButton",css)

  buttonSkip.onclick=function(){
    setScore(score,"-1");
    $("#puzzle").addClass("hidden");
    generateButtons(story,number,score,playerName,playerObj,css);
  }

}

//recupera dal json della storia il testo della pagina corrente e lo
//aggiunge ad un elemento p che verrà visualizzato nel div per i testi
function generateText(story,number,css){

  var text = document.getElementById("textStory");
  text.innerHTML="";

  var p = document.createElement("p");
  p.setAttribute("id","pTextStory");
  var p1 = document.createTextNode(""+story[number].text);
  p.appendChild(p1);
  text.appendChild(p);

  //Se il css personalizzato è abilitato applica la personalizzazione del testo
  if(css.control===true)
  applyCssText(p.id,css);
}

//si occupa di generare l'immagine o il video della pagina corrente
function generateImg(story,number){
  var imageContainer=document.getElementById("imageStory");

  if(story[number].img!="none"){
    var urlvalue = JSON.stringify("imgCreate/"+story[number].img);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var img_url = document.createElement("IMG");
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "440");
    img_url.setAttribute("height", "320");
    imageContainer.appendChild(img_url);
  }
  else if(story[number].video!="none"){
    var urlvalue = JSON.stringify("imgCreate/"+story[number].video);
    var stripped = urlvalue.replace(/['"]+/g, "");
    var video_url = document.createElement("video");
    video_url.setAttribute("src", stripped);
    video_url.setAttribute("width", "440");
    video_url.setAttribute("height", "320");
    imageContainer.appendChild(video_url);
  }

}
//Si occupa di generare i bottoni per la pagina corrispondente
function generateButtons(story,number,score,name,obj,css){

  var buttons = document.getElementById("buttonsStory");
  buttons.innerHTML="";
  //per ogni bottone nel json della Storia
  //controlla il tipo e crea quello corrispondente
  story[number].buttons.forEach((element,i) => {
    //Se il bottone è disabilitato non lo crea
    if(element.disable!=true){
      var button=document.createElement("button");
      button.setAttribute("id","buttonPlayer"+i);
      button.textContent=element.text;
      //Se è di tipo ContinueButton o BridgeButton Aggiunge un onclick
      //per generare la pagina successiva
      if(element.type=="ContinueButton"){
        button.onclick=function(){
          setScore(score,element.score);
          generation(story,element.id,name,obj,score,css);
        }
      }
      else if(element.type=="StopButton"){
        button.onclick=function(){
          setScore(score,element.score);
          alert(element.alert);
        }
      }
      else if(element.type=="WrongButton"){
        button.onclick=function(){
          setScore(score,element.score);
          alert("errore");
        }
      }
      else if(element.type=="BridgeButton"){
        button.onclick=function(){
          setScore(score,element.score);
          generation(story,element.bridge,name,obj,score,css);
        }
      }
      buttons.appendChild(button);
      //Se è caricato il css personalizzato modifica lo style dei bottoni
      if(css.control===true)
      applyButtonCss(button.id,css);
    }
  });

}

//Si occupa di aggiornare il punteggio del giocatore corrente
function setScore(score,point){
  var pointToAdd= parseFloat(point);
  score.points+=pointToAdd;
}

//Controlla se si è arrivati alla fine
function checkEnd(story,number,playerName,playerObj,score,css){
  //variabile di controllo
  var control=true;
  //Per ogni bottone della pagina attuale controlla se esistono ancora
  //dei bottoni che permettono di proseguire la storia se esistono la variabile di controllo
  //viene settata a false e si continua con la storia
  story[number].buttons.forEach(element => {
    if(element.destination||element.bridge)
    control=false;
  });
  //In caso la variabile di controllo sia true si crea un bottone per terminare la storia
  if(control==true){
    for(var x in playerObj){
      if(playerObj[x].name==playerName)
      playerObj[x].score=score.points;
    }
    end(playerName,playerObj,css);
  }

}

//Permette di terminare la storia e mostra una tabella con
//nome dei giocatori e punteggio finale di ognuno se la storia
//è stata giocata da tutti i giocatori inizialmente scelti
function end(playerName,playerObj,css){
  //trova l'index del giocatore corrente
  var index = findIndex(playerName,playerObj);

  //Se l'index è uguale al numero di giocatori
  //vuol dire che tutti i giocatori hanno completato la storia
  if(index==playerObj[index].numberOfPlayers){
    //Si crea un bottone per terminare la storia e visualizzare i risultati
    var endStoryButton = document.createElement("button");
    endStoryButton.textContent="Fine Storia";
    endStoryButton.setAttribute("id","buttonEndStory");
    endStoryButton.onclick=function(){
      //Crea la tabella con i risultati finali
      tablePlayer(playerObj,css);
    }

    var endStoryBut = document.getElementById("endStory");
    endStoryBut.appendChild(endStoryButton);
    //Applica il css personalizzato al bottone di fine storia
    if(css.control===true)
    applyButtonCss(endStoryButton.id,css);
  }else{
    //Se non si è arrivati al giocatore finale crea un bottone che riavvierà la Storia
    //con il giocatore successivo
    var endStoryButton = document.createElement("button");
    endStoryButton.textContent="Fine Storia";
    endStoryButton.setAttribute("id","buttonEndStory");
    endStoryButton.onclick=function(){
      index++;
      generateStory(playerObj[index].story,playerObj[index].difficulty,playerObj[index].name,playerObj);
    }

    var endStoryBut = document.getElementById("endStory");
    endStoryBut.appendChild(endStoryButton);
    if(css.control===true)
    applyButtonCss(endStoryButton.id,css);

  }

}

//restituisce l'index del giocatore corrente
function findIndex(playerName,playerObj){
  var length=playerObj.length-1;

  var i=1;
  while(i<=length){
    if(playerObj[i].name==playerName)
    return i;

    i++;
  }


}

//Genera le strutture per visualizzare i risultati della storia
function tablePlayer(playerObj,css){

  var body= document.getElementById("body");
  body.innerHTML="";


  var divImgScore = document.createElement("div");
  divImgScore.setAttribute("id","imgScore");
  var imgScore = document.createElement("img");
  imgScore.setAttribute("src","/mainImg/gameOver2Cut.png");
  divImgScore.appendChild(imgScore);
  body.appendChild(divImgScore);

  var playerTable = document.createElement("div");
  playerTable.setAttribute("id","playerTable");
  body.appendChild(playerTable);

  playerObj.forEach((item, i) => {
    //crea delle Card per ogni giocatore
    var newPlayer = document.createElement("div");
    var img = document.createElement("img");
    var bodyCard = document.createElement("div");
    var t = document.createElement("p");
    var p = document.createElement("p");
    t.setAttribute("id","TextT"+i);
    p.setAttribute("id","TextP"+i);


    newPlayer.classList.add("card");
    newPlayer.classList.add("playerCard");
    newPlayer.style.width="190px";
    newPlayer.setAttribute("id","player"+item.name);

    img.classList.add("card-img-top");
    img.classList.add("sizeCard");
    img.src="./mainImg/player_added.png";
    img.alt="Card image";
    img.style.width="100%";

    bodyCard.classList.add("card-body");

    var t1 = document.createTextNode("Player "+item.name);
    t.appendChild(t1);

    p.classList.add("p");
    var p1 = document.createTextNode("Punteggio: "+item.score);
    p.appendChild(p1);

    newPlayer.appendChild(img);
    newPlayer.appendChild(bodyCard);
    bodyCard.appendChild(t);
    bodyCard.appendChild(p);
    playerTable.appendChild(newPlayer);

    if(css.control===true){
      applyCssText(t.id,css);
      applyCssText(p.id,css);
    }

  });
  //Crea il bottone per tornare alla selezione delle storie
  var br = document.createElement("br");
  var divButtonReload = document.createElement("div");
  divButtonReload.setAttribute("id","divButtonReload");
  var buttonReload=document.createElement("button");
  buttonReload.setAttribute("id","buttonReload");
  buttonReload.textContent="Home";
  buttonReload.onclick=function(){
    location.reload();
  }
  body.appendChild(br);
  divButtonReload.appendChild(buttonReload);
  body.appendChild(divButtonReload);
  if(css.control===true)
  applyButtonCss(buttonReload.id,css)

}

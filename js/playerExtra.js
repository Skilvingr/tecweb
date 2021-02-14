//const { endianness } = require("os");
//const { checkServerIdentity } = require("tls");

function playerButtons(){
    document.getElementById("story").innerHTML="" ;
        var com1="ls webapp/completeJson/";
    	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com1 +"",
	    success: function(returnData1) {
		//alert(returnData);
		//data=returnData;
		//console.log(data);
		console.log("il primo "+returnData1);
		findButtons1(returnData1);
	    }
	})



}

function findButtons1(data){
    var array = data.split("\n");
    console.log("array "+array+""+ array.length);
	for(var i=0;i<array.length - 1;i++){
	var com2= "ls webapp/completeJson/"+array[i];
	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com2 +"",
	    success: function(returnData2) {
		console.log("il secondo "+returnData2);
		findButtons2(returnData2);
	    }
	})
    }
}

function findButtons2(select){
    var ageValue=document.getElementById("ageSelect").value;
    var arraySelect=select.split("\n");
    console.log("array "+ arraySelect+""+ arraySelect.length+"age : "+ ageValue);
    for(var j=0;j<arraySelect.length - 1;j++){
	var dif= arraySelect[j].split("-");
	var title=dif[0];
	console.log("dif :"+dif+""+"title :"+title);
	if(dif[1]=="easy.json"&& ageValue=="1"){
	    console.log("patata");
	    createButtonsPlayer(title,dif[1]);
	}
	if(dif[1]=="medium.json"&& ageValue=="2")
	    createButtonsPlayer(title,dif[1]);

	if(dif[1]=="hard.json"&& ageValue=="3")
	    createButtonsPlayer(title,dif[1]);

    }

}

function addSpaceTitle(str){

    var modString= str.replace(/([A-Z])/g, ' $1').trim();
    console.log(modString);
    return modString;

}

function createButtonsPlayer(title,dif){
    var br=document.createElement("br");
    var button =document.createElement("button");
    var div=document.getElementById("story");
    var titleButton=addSpaceTitle(title);
    button.textContent=titleButton;
    button.setAttribute("onClick","playStory(\"" + title + "\",\""+ dif +"\")");
    div.appendChild(br);
    div.appendChild(button);
}

function addPlayer(){

    var div = document.getElementById("players");
    var newPlayer = document.createElement("div");
    var img = document.createElement("img");
    var bodyCard = document.createElement("div");
    var t = document.createElement("p");
    var p = document.createElement("p");
    var input= document.createElement("input");
    var numPlayer=div.childElementCount;

    if(numPlayer==6)
	return alert("Max 4 Player");

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
    console.log("numero"+(numPlayer-1));

}

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

function controlNull(objP){
    var control=false;

    objP.forEach((item)=>{
	if(item.name==="")
	    control=true;
    });

    return control;
}

function playStory(title,dif){
   var control =false;
   var nullTitle=false;
   var objP = createPlayerObj(title,dif);
   nullTitle=controlNull(objP);
   control=controlNamePlayer(objP);
    console.log(objP);
    if(nullTitle==true)
	return alert("i nomi non possono essere vuoti");
    if(control==true)
    return alert("Non è possibile inserire nomi uguali");

   /* for(var x in objP){
        console.log(objP[x].name);
	generateStory(title,dif,objP[x].name,objP);
    }
*/
    generateStory(title,dif,objP[1].name,objP);
    var endStoryButton = document.createElement("button");
    endStoryButton.textContent="Fine Storia";
    endStoryButton.onclick=function(){
        end(objP);
    }
    var body = document.getElementById("body");
    body.appendChild(endStoryButton);
}

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

function loadCustomCss(story,number,playerName,playerObj,score,css){

  fetch("create/customCss/createdCss/"+story.storyInfo.css)
     .then(function(response) {
          //get JSON data from the response
          return response.json();
      })
.then(function (cssObj) {

    applyImgPlayer(cssObj);
    css=cssObj;
    css.control=true;
    generation(story.player,number,playerName,playerObj,score,css);
    //applyGlobal(cssObj,value);

      })

//return dataCss;
}

function applyImgPlayer(css){
  document.body.style.backgroundImage="url(/imgCreate/"+css.img.url+")";
}
function applyCssText(textId,css){
  document.getElementById(textId).style.color=css.p.color;
  document.getElementById(textId).style.fontFamily=css.p.fontFamily+"px";
  document.getElementById(textId).style.fontSize=css.p.fontSize+"px";

}
function applyButtonCss(buttonId,css){
  document.getElementById(buttonId).style.backgroundColor=css.button.backgroundColor;
  document.getElementById(buttonId).style.color=css.button.color
  document.getElementById(buttonId).style.borderRadius=css.button.borderRadius+"px";
}


function generateStory(title,dif,playerName,playerObj){
    console.log(title);
    console.log(dif);
    var css={};
    css.control=false;
    var score={};
    score.points=0;

    fetch("completeJson/"+title+"/"+title+"-"+dif)
       .then(function(response) {
            //get JSON data from the response
            return response.json();
        })
	.then(function (story) {

    var number=0;
    for(var x in story.player){
  if(story[x]!=null){
      number=x;
      break;
  }
    }
console.log(story.storyInfo.css);

      if(story.storyInfo.css=="default"||story.storyInfo.css=="Simple"||story.storyInfo.css=="ColorFull"){
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'create/cssToLoad/'+story.storyInfo.css+".css") );
      }else{
        loadCustomCss(story,number,playerName,playerObj,score,css);
      }


      generation(story.player,number,playerName,playerObj,score,css);

	    	})

}

function generation(story,number,playerName,playerObj,score,css){
  console.log(css);
    document.getElementById("body").innerHTML="";
    var body = document.getElementById("body");

    var title = document.createElement("div");
    title.setAttribute("id","titlePlayer");
    var p = document.createElement("p");
    p.setAttribute("id","playerName");
    var p1 = document.createTextNode("Gioca il Player "+ playerName);
    p.appendChild(p1);
    title.appendChild(p);
    body.appendChild(title);

    var text = document.createElement("div");
    text.setAttribute("id","textStory");
    body.appendChild(text);

    var image = document.createElement("div");
    image.setAttribute("id","imageStory");
    body.appendChild(image);

    var buttons = document.createElement("div");
    buttons.setAttribute("id","buttonsStory");

    body.appendChild(buttons);

    var puzzle = document.createElement("div");
    puzzle.setAttribute("id","puzzleStory");
    body.appendChild(puzzle);

    var endDiv = document.createElement("div");
    endDiv.setAttribute("id","endStory");
    body.appendChild(endDiv);
if(css.control===true)
  applyCssText(p.id,css);
if(story[number].disableBranch!=true){
    generateText(story,number,css);
    generateImg(story,number);
    if(story[number].widgetPuzzle==true){
      generatePuzzle(story,number,score,playerName,playerObj,css);
    }else
    generateButtons(story,number,score,playerName,playerObj,css);

    checkEnd(story,number,playerName,playerObj,score,css);
}

}

function generatePuzzle(story,number,score,playerName,playerObj,css){

  //$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'widget/puzzle-game-jquery/dist/style.css') );

  console.log("pippooo");
  $('head').append( $('<link rel="stylesheet" id="cssPuzzle" type="text/css" />').attr('href', 'widget/puzzle-game-jquery/dist/style.css') );
  /*
  //var ifrm = document.createElement('iframe');
// ifrm.setAttribute('src', '/widget/puzzle-game-jquery/dist/index.html');

  $("#puzzleStory").load("/widget/puzzle-game-jquery/dist/Puzzle.html");
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'widget/puzzle-game-jquery/dist/style.css') );
//  puzzle.appendChild(ifrm);
*/
var puzzleRef=document.getElementById("puzzleStory");

$("#puzzleStory").load("widget/puzzle-game-jquery/dist/puzzle.html");
  story[number].puzzle.forEach((item, i) => {
    startPuzzle(item.img,story,number,score,playerName,playerObj,css);
    //loadClick(story,number,score,playerName,playerObj);
    });

}

function generateText(story,number,css){
   console.log("numero "+number);
    var text = document.getElementById("textStory");
    text.innerHTML="";
    var p = document.createElement("p");
    p.setAttribute("id","pTextStory");
    var p1 = document.createTextNode(""+story[number].text);
    p.appendChild(p1);
    text.appendChild(p);
    console.log(css.control);
    if(css.control===true)
      applyCssText(p.id,css);
}

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
  }  //img_url.innerHTML = data[page].img_url;

}

function generateButtons(story,number,score,name,obj,css){

    var buttons = document.getElementById("buttonsStory");
    buttons.innerHTML="";

    story[number].buttons.forEach((element,i) => {
      if(element.disable!=true){
        var button=document.createElement("button");
        button.setAttribute("id","buttonPlayer"+i);
        button.textContent=element.text;

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
        if(css.control===true)
          applyButtonCss(button.id,css);
      }
    });

}

function setScore(score,point){
    console.log(score);
    var pointToAdd= parseFloat(point);
    score.points+=pointToAdd;
}

function checkEnd(story,number,playerName,playerObj,score,css){
    console.log("number check "+number);
    console.log(story);
    var control=true;
    story[number].buttons.forEach(element => {
        if(element.destination||element.bridge)
        control=false;
    });
    if(control==true){
        for(var x in playerObj){
            if(playerObj[x].name==playerName)
                playerObj[x].score=score.points;
        }
    end(playerName,playerObj,css);
    }
    /*.then(element=> {

        if(element!=null){
            for(var x in playerObj){
                if(playerObj[x].name==playerName)
                    playerObj[x].name.score=score.points;
            }
        end(playerName,playerObj);
        }
    });*/
}

function end(playerName,playerObj,css){
  console.log(playerObj);
  //var index=playerObj.map(function(item){return item.name;}).indexOf(""+playerName);
  //var index = playerObj.findIndex(i => i.name === ""+playerName);
  //var indexPlayer;
  //playerObj.filter(function(item, index) { indexPlayer = index; return item.name == playerName; })

  var index = findIndex(playerName,playerObj);
  console.log("index"+index);
  console.log("playerName"+playerName);

  if(index==playerObj[index].numberOfPlayers){
    var endStoryButton = document.createElement("button");
    endStoryButton.textContent="Fine Storia";
    endStoryButton.setAttribute("id","buttonEndStory");
    endStoryButton.onclick=function(){
    tablePlayer(playerObj,css);
    }

    var endStory = document.getElementById("endStory");
    endStory.appendChild(endStoryButton);
    if(css.control===true)
    applyButtonCss(endStoryButton.id,css);
  }else{
    index++;
    generateStory(playerObj[index].story,playerObj[index].difficulty,playerObj[index].name,playerObj);
  }
  /*
    for(var x in playerObj){
        if(playerObj[x].name==playerName){
            console.log("numero player "+x);
            console.log("nmero pp"+playerObj[2].numberOfPlayers);
            if(x!=playerObj[x].numberOfPlayers){
              console.log(playerObj);
              x++;

            generateStory(playerObj[parseInt((x))].story,playerObj[parseInt((x))].difficulty,playerObj[x].name,playerName,playerObj);
            }
            else{

            var endStoryButton = document.createElement("button");
            endStoryButton.textContent="Fine Storia";
            endStoryButton.onclick=function(){
                tablePlayer(playerObj);
            }
            var body = document.getElementById("body");
            body.appendChild(endStoryButton);
        }
        }
    }
*/
}

function findIndex(playerName,playerObj){
  var length=playerObj.length-1;
  console.log("lenght é "+length)
  var i=1;
  while(i<=length){
    console.log("x è"+i);
    if(playerObj[i].name==playerName)
      return i;

        i++;
    }


}

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

      var newPlayer = document.createElement("div");
      var img = document.createElement("img");
      var bodyCard = document.createElement("div");
      var t = document.createElement("p");
      var p = document.createElement("p");
      t.setAttribute("id","TextT"+i);
      p.setAttribute("id","TextP"+i);
      console.log(t.id);


    newPlayer.classList.add("card");
    newPlayer.classList.add("playerCard");
    newPlayer.style.width="190px";
    newPlayer.setAttribute("id","player"+item.name);

    img.classList.add("card-img-top");
    img.classList.add("sizeCard");
    img.src="./mainImg/player.jpeg";
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
    /*
    for(var x in playerObj){
        var name = document.createElement("p");
        var name1=document.createTextNode("Player "+playerObj[x].name);
        name.appendChild(name1);
        var score = document.createElement("p");
        var score1 = document.createTextNode("Punteggio "+ playerObj[x].score);
        score.appendChild(score1);
        var br= document.createElement("br");
        playerTable.appendChild(name);
        playerTable.appendChild(score);
        playerTable.appendChild(br);
    }
*/
}

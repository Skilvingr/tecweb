const { endianness } = require("os");
const { checkServerIdentity } = require("tls");

function playerButtons(){
    document.getElementById("story").innerHTML="" ;
        var com1="ls completeJson/";
    	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://localhost:8000/getOut?com=" + com1 +"",
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
	var com2= "ls completeJson/"+array[i];
	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://localhost:8000/getOut?com=" + com2 +"",
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

function createButtonsPlayer(title,dif){
    var br=document.createElement("br");
    var button =document.createElement("button");
    var div=document.getElementById("story");
    button.textContent=title;
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
    img.src="./mainImg/player.jpeg";
    img.alt="Card image";
    img.style.width="100%";

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

function playStory(title,dif){

   var objP = createPlayerObj(title,dif);
    console.log(objP);

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

function generateStory(title,dif,playerName,playerObj){
    console.log(title);
    console.log(dif);

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

	    generation(story.player,number,playerName,playerObj,score);

	    	})

}

function generation(story,number,playerName,playerObj,score){

    document.getElementById("body").innerHTML="";
    var body = document.getElementById("body");

    var title = document.createElement("div");
    title.setAttribute("id","titlePlayer");
    var p = document.createElement("p");
    var p1 = document.createTextNode("Gioca il Player "+ playerName);
    p.appendChild(p1);
    title.appendChild(p);
    body.appendChild(title);

    var text = document.createElement("div");
    text.setAttribute("id","textStory");
    body.appendChild(text);

    var buttons = document.createElement("div");
    buttons.setAttribute("id","buttonsStory");

    body.appendChild(buttons);

    generateText(story,number);
    generateImg(story,number);
    generateButtons(story,number,score,playerName,playerObj);

    checkEnd(story,number,playerName,playerObj,score);

}

function generateText(story,number){
   console.log("numero "+number);
    var text = document.getElementById("textStory");
    text.innerHTML="";
    var p = document.createElement("p");
    var p1 = document.createTextNode(""+story[number].text);
    p.appendChild(p1);
    text.appendChild(p);


}

function generateImg(story,number){


}

function generateButtons(story,number,score,name,obj){

    var buttons = document.getElementById("buttonsStory");
    buttons.innerHTML="";

    story[number].buttons.forEach(element => {
        var button=document.createElement("button");
        button.textContent=element.text;

        if(element.destination){
            button.onclick=function(){
                setScore(score,element.score);
                generation(story,element.id,name,obj,score);
            }
        }
        else if(element.alert){
            button.onclick=function(){
                setScore(score,element.score);
                alert(element.text);
            }
        }
        else if(element.error){
            setScore(score,element.score);
            alert("errore");
        }
        else if(element.bridge){
            setScore(score,element.score);
            generation(story,element.bridge,name,obj,score);
        }
        buttons.appendChild(button);

    });


}

function setScore(score,point){
    console.log(score);
    var pointToAdd= parseFloat(point);
    score.points+=pointToAdd;
}

function checkEnd(story,number,playerName,playerObj,score){
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
    end(playerName,playerObj);
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

function end(playerName,playerObj){
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
    endStoryButton.onclick=function(){
    tablePlayer(playerObj);
    }
    var body = document.getElementById("body");
    body.appendChild(endStoryButton);
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

function tablePlayer(playerObj){

    var body= document.getElementById("body");
    body.innerHTML="";
    var playerTable = document.createElement("div");
    body.appendChild(playerTable);

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

}

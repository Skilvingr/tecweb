//controlla se il titolo è vuoto
function validateTitle() {
    if(document.getElementById("titoloStory").value === "")
        alert("Il titolo non può essere una stringa vuota!");
    else
        initialObject();
}


function controlTitle(){
//controlla che il titolo non sia nullo
  var controlTitle = document.getElementById("TitoloMissione");

  if(controlTitle.value=="")
      return false;
//controlla che i titoli delle destinazioni non siano nulli
var extra = document.getElementById("list").value;
  if(extra!=0){
    var temp =1;
    for(var i=0;i<extra;i++){
      var list=document.getElementById("listBut"+temp).value;
      if(list==arrayBut[0]){
        controlExtra=document.getElementById("input"+temp).value;
        if(controlExtra=="")
        return false;
      }
      temp++;
    }

  }
  return true;
}





//********************************** Sta roba viene da Graph-obj.js.old | Inizio ***********************************

function createObject(){

    //predo le informazioni
    obj[id]={};

    var title = document.getElementById("TitoloMissione").value;
    var text = document.getElementById("textS").value;
    var x = document.getElementById("buts").childElementCount;
    var buttons=x/4;
    var oldId=id;
    //creo l'oggetto
    obj[id].id=id;
    obj[id].title = title;
    obj[id].text = text;
    obj[id].numeroBottoni = buttons;
    obj[id].branch=true;
    console.log(obj);

    addExtra(buttons,obj[id].id);
    addScore(obj[id].id);

    id++;
    return oldId;
    console.log(obj);

}

//si occupa di aggiungere informazioni extra(destinations,alert,bridge,wrong)
function addExtra(buttons,id){
    obj[id].buttons=[];

    for(var i=1;i<buttons+1;i++){
	//controllo il tipo di bottone e lo aggiungo al mio oggetto
	var list=document.getElementById("listBut"+i).value;
	switch(list){

	case arrayBut[0]:
	    var destination=document.getElementById("input"+i).value;
	    obj[id].buttons[i-1]={};
	    obj[id].buttons[i-1].text=document.getElementById("button"+i).value;
	    obj[id].buttons[i-1].type="ContinueButton";
	    obj[id].buttons[i-1].destination=destination;
	    break;

	case arrayBut[1]:
	    var alert = document.getElementById("stop"+i).value;
	    obj[id].buttons[i-1]={};
	    obj[id].buttons[i-1].text=document.getElementById("button"+i).value;
	    obj[id].buttons[i-1].type="StopButton";
	    obj[id].buttons[i-1].alert=alert;
	    break;

	case arrayBut[2]:
	    obj[id].buttons[i-1]={};
	    obj[id].buttons[i-1].text=document.getElementById("button"+i).value;
	    obj[id].buttons[i-1].type="WrongButton";
	    obj[id].buttons[i-1].wrong="";
	    break;

	case arrayBut[3]:
	    var bridge = document.getElementById("listBridge"+i).value;
	    obj[id].buttons[i-1]={};
	    obj[id].buttons[i-1].text=document.getElementById("button"+i).value;
	    obj[id].buttons[i-1].type="BridgeButton";
	    obj[id].buttons[i-1].bridge=bridge;
	    break;

	default: break;
	}

    }
}
//inizializza le destinazioni
function initDestination(idObject){
    var buttons=obj[idObject].numeroBottoni;

    for(var i=1;i<buttons+1;i++){
	if(obj[idObject].buttons[i-1].type=="ContinueButton"){
	    obj[id]={};
	    obj[id].img="none";
	    obj[id].video="none";
	    var title=obj[idObject].buttons[i-1].destination;
	    obj[id].title = title;
	    obj[id].text = "";
	    obj[id].numeroBottoni = "0";
	    obj[id].buttons=[];
	    obj[id].id=id;
	    obj[id].branch = false;
      obj[id].fatherIdGraph=obj[idObject].id;
      obj[idObject].buttons[i-1].id=id;
	    id++;

	}
    }

}
//da rivedere

function addScore(id){

    var bottoni=obj[id].numeroBottoni;

    obj[id].buttons.forEach((button, index) => {
      console.log("index:"+index)
      button.score = document.getElementById("score" + (index + 1)).value
    });

}
/*
//aggiungo una destinazione
function addDestination(destination){

    var oldId=id;
    console.log("id destination = "+id);
    obj[id]={};
    obj[id].title = destination;
    obj[id].text = "";
    obj[id].numeroBottoni = "0";
    obj[id].buttons=[];
    obj[id].id=id;
    obj[id].branch = false;
    id++;

    return obj[oldId].id;
}
*/
//********************************** Sta roba viene da Graph-obj.js.old | Fine ***********************************


//Si occupa di creare i bottoni
function createButs(){

    var elem = document.getElementById("list").value;
    var val = 1;

    if(elem==0){
    document.getElementById("buts").innerHTML="";
    return null;
  }
    //prendo il numero corrente di bottoni
    var x = document.getElementById("buts").childElementCount;
    var listButs = document.getElementById("buts");
    var i=0;

  //se non sono zero controllo se devo aggiunge o eliminare bottoni
    if(x!=0){
      var temp=x/4;
      var tempElem=elem*4;
      //elimino i bottoni aggiuntivi
      if(elem<temp){

        while(x>tempElem){
          listButs.removeChild(listButs.childNodes[x-1]);
          listButs.removeChild(listButs.childNodes[x-2]);
          listButs.removeChild(listButs.childNodes[x-3]);
          listButs.removeChild(listButs.childNodes[x-4]);
          x=x-4;

        }
        return null;
      }else{

        i = temp;
        val=temp+1;
        alert(i);
      }
    }
    //eseguo un ciclo per aggiungere bottoni
    while( i < elem){
      i++
        var input = document.createElement("input");
        input.setAttribute("id","button"+val);

        var p = document.createElement("p");
        var p1 = document.createTextNode(val+"° bottone");
        p.appendChild(p1);

        //Crea la lista
        var selectListBut = document.createElement("select");
        selectListBut.setAttribute("id","listBut"+val);

        var optionBut = document.createElement("option");
        optionBut.value = arrayBut[0];
        optionBut.text = arrayBut[0];
        selectListBut.appendChild(optionBut);

        //Aggiunge le opzioni nella lista
        for (var a = 1; a < arrayBut.length; a++) {
            var optionBut = document.createElement("option");
            optionBut.value = arrayBut[a];
            optionBut.text = arrayBut[a];
            selectListBut.appendChild(optionBut);
        }

        var div = document.createElement("div");
        div.setAttribute("id","div"+val);
        div.style.textAlign="center";
        div.style.padding="10px";

        buts.appendChild(p);
        buts.appendChild(input);
        buts.appendChild(selectListBut);
        buts.appendChild(div);
        val++;

    }

    a = 0;

   controlList();

}

function controlList(){

    var temp = 1;
    var control = document.getElementById("buts").childElementCount;

    if(control==0)
    return 0;
    control = control/4;
    for(var i = 0; i < control; i++){

        var div = document.getElementById("div" + temp);
        var x = document.getElementById("div"+temp).childElementCount;
        if(x==0){
        var listContent = document.getElementById("listBut"+ temp);

        document.getElementById("listBut" + temp).setAttribute("onChange", "modifyButtonExtra(" + temp + ")");

       modifyButtonExtra(temp);//Inizializza i pulsanti come "Continue Button"
       //addScoreButton(temp);
     }
        temp++;
    }

}
//si occupa di aggiungere la lista degli extra sotto i bottoni
function modifyButtonExtra(button){

    var temp=button;

    var div=document.getElementById("div"+button);
    div.innerHTML="";

    var listContent = document.getElementById("listBut"+ button);

    if(listContent.value == arrayBut[0]){

        var p = document.createElement("p");
        var p1 = document.createTextNode("Inserire Destinazione");
        p.appendChild(p1);

        var input = document.createElement("input");
        input.setAttribute("id","input"+ temp);
        div.appendChild(p);

        div.appendChild(input);

    }else if (listContent.value == arrayBut[1]){


        var p = document.createElement("p");
        var p1 = document.createTextNode("Inserire alert");
        p.appendChild(p1);

        var inputS = document.createElement("input");
        inputS.setAttribute("id","stop"+temp);

        div.appendChild(p);
        div.appendChild(inputS);

    }else if(listContent.value == arrayBut[3]){

        var arrayBridge = [];
        var arrayBridgeId=[];
        var i=0;
        for(var x in obj){
	    console.log(x);
	    if(obj[x]!=null){
            arrayBridge[i]=obj[x].title;
            arrayBridgeId[i]=obj[x].id;
		i++;
	    }
        }

        var listBridge = document.createElement("select");
        listBridge.setAttribute("id","listBridge"+temp);
/*
        if(arrayBridge.length==2){
        var optionBridge = document.createElement("option");
        optionBridge.value = 0;
        optionBridge.text = "Nessun ponte da poter creare";
        listBridge.appendChild(optionBridge);
        }
        */

        //Aggiunge le opzioni nella lista
        for (var a = 0; a < arrayBridge.length; a++) {
            var optionBridge = document.createElement("option");
            optionBridge.value = arrayBridgeId[a];
            optionBridge.text = arrayBridge[a];
            listBridge.appendChild(optionBridge);
        }
        div.appendChild(listBridge);

        console.log(arrayBridge);

    }
    addScoreButton(button);
}

function addScoreButton(button){

  var div=document.getElementById("div"+button);


  var scoreArray=["-1","-0.5","0","0.5","1","1.5","2"];
  var length=scoreArray.length-1;
  var i=0;
  var select=document.createElement("select");
  select.setAttribute("id","score"+button);

  var p = document.createElement("p");
  var p1 = document.createTextNode("Inserire score");
  p.appendChild(p1);

while(i<length){

  var optionScore = document.createElement("option");
      optionScore.value =scoreArray[i];
      optionScore.text = scoreArray[i];
      select.appendChild(optionScore);
      i++;

  }
  div.appendChild(p);
  div.appendChild(select);

}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function setImg(id){
    var div=document.getElementById("divImgSidenav");
    div.innerHTML="";
    var a1 = document.createElement("a");
    a1.textContent=obj[id].img;
    var a2 = document.createElement("a");
    a2.textContent=obj[id].video;
    div.appendChild(a1);
    div.appendChild(a2);
}
//ripopola la pagina con le informazioni contenute nell'oggetto
function populate(id){

    var titolo = obj[id].title;
    var testo = obj[id].text;
    var bottoni = obj[id].numeroBottoni;
    setImg(id);
    document.getElementById("TitoloMissione").value = titolo;
    document.getElementById("textS").value = testo;

    document.getElementById("list").value = bottoni;
    createButs();
    



var disableButtonSelect =document.getElementById("sidenavButtons");
//pulisco il select per disabilitare i bottoni
//removeAllChildNodes(disableButtonSelect)
//aggiungo alla lista i bottoni da poter disabilitare
  sidenavListButtons(id);
//pulire i addScoreButton se non servono più anche sopra nell select list button

    obj[id].buttons.forEach((element,i) => {


        if( element.type == "ContinueButton"){
            document.getElementById("listBut" + parseInt((i+1))).value = arrayBut[0];
            modifyButtonExtra(parseInt((i+1)));
            //addScoreButton(i);
        }
        else if(element.type == "StopButton"){
            document.getElementById("listBut" + parseInt((i+1))).value = arrayBut[1];
            modifyButtonExtra(parseInt((i+1)));
            //addScoreButton(i);
        }else if (element.type == "BridgeButton"){
            document.getElementById("listBut" + parseInt((i+1))).value = arrayBut[3];
            modifyButtonExtra(parseInt((i+1)));
            //addScoreButton(i);
        }else{
        document.getElementById("listBut" + parseInt((i+1))).value = arrayBut[2];
        modifyButtonExtra(parseInt((i+1)));
       // addScoreButton(i);
      }

    });



    obj[id].buttons.forEach((element,i) => {

        if(element.type == "ContinueButton") {
            document.getElementById("button"+parseInt((i+1))).value=element.text;
            document.getElementById("input"+parseInt((i+1))).value = element.destination;
            document.getElementById("score"+parseInt((i+1))).value=element.score;

        }else if (element.type == "StopButton"){
            document.getElementById("button"+parseInt((i+1))).value=element.text;
            document.getElementById("stop"+parseInt((i+1))).value  =element.alert;
            document.getElementById("score"+parseInt((i+1))).value=element.score;

        }else if (element.type == "BridgeButton"){
            var testoBridge = element.bridge;
            document.getElementById("button"+parseInt((i+1))).value=element.text;
            document.getElementById("listBridge"+parseInt((i+1))).value  = testoBridge;
            document.getElementById("score"+parseInt((i+1))).value=element.score;
        }else{
            document.getElementById("button"+parseInt((i+1))).value=element.text;
            document.getElementById("score"+parseInt((i+1))).value=element.score;
        }

      });



      $("#nextPrev").addClass("hidden");

      //controllo se ci sono bottoni disabilitati
      controlDisable(id);
      //controllo se c'è il tag disableBranch
      controlDisableBranch(id);

    //controllo se c'è il puzzle
    if(obj[id].widgetPuzzle==true){
      var tempPuzzle=0;
      showWidget()
      for(var k=1;k<2;k++){
        var image=document.getElementById("selectImg"+k);
        var addOptionImage=document.createElement("option");
        addOptionImage.value=obj[id].puzzle[tempPuzzle].img;
        addOptionImage.text=obj[id].puzzle[tempPuzzle].img;
        image.appendChild(addOptionImage);
        document.getElementById("checkApplyWidget").checked=true;
        tempPuzzle++;
      }

    }

    try{
      Modify.removeChild(Modify.childNodes[0]);
    }catch(err){

    }

    var modifica = document.createElement("button");
    modifica.id="modifyBut";
    modifica.setAttribute("onClick","modify(\""+ id + "\")");
    modifica.textContent="Modifica";
    modifica.style.float="center";

    Modify.appendChild(modifica);

    console.log(obj);
    $("#Modify").removeClass("hidden");

}

function controlDisableBranch(id){

if(obj[id].disableBranch==true){
  document.getElementById("TitoloMissione").readOnly=true;
  document.getElementById("textS").readOnly=true;
  $('#list').prop('disabled', 'disabled');
  obj[id].buttons.forEach((item, i) => {

    if(item.type=="ContinueButton"){
      document.getElementById("input"+parseInt((i+1))).readOnly=true;
      document.getElementById("button"+parseInt((i+1))).readOnly=true;
      $("#enableButtons").removeClass("hidden")
      $('#listBut'+parseInt(i+1)).prop('disabled', 'disabled');
      $('#score'+parseInt(i+1)).prop('disabled', 'disabled');

    }else{
      if(item.type=="StopButton")
      document.getElementById("stop"+parseInt((i+1))).readOnly=true;

      document.getElementById("button"+parseInt((i+1))).readOnly=true;

      $('#listBut'+parseInt(i+1)).prop('disabled', 'disabled');
      $('#score'+parseInt(i+1)).prop('disabled', 'disabled');
}
  });

}else{
  document.getElementById("TitoloMissione").readOnly=false;
  document.getElementById("textS").readOnly=false;
  $('#list').prop('disabled', false);
}
}

function enable(item){
  //var item=document.getElementById("selectBranchToEnable").value;
  enableBranch(item);
//  enableBranchGraph(item);
  console.log("patata");
}

function enableBranch(id){
obj[id].disableBranch=false;

  obj[id].buttons.forEach((item) => {
    if(item.type=="ContinueButton")
      enableBranch(item.id);

  });
  graph.data(data);
  graph.render();
  graph.fitView();
}



function enableBranchGraph(id){

  var node=findNode(data.children,"id"+id);
  //node.style= node.style.disable
  node.style.fill="green";
  console.log(node);
  obj[id].buttons.forEach((element, i) => {
    if(element.type=="ContinueButton")
      enableBranchGraph(element.id);
  });

}

function controlDisable(id){
//var enableSelect=document.getElementById("selectEnable");
//removeAllChildNodes(enableSelect);

  obj[id].buttons.forEach((item,i) => {

    if(item.disable==true&&item.type=="ContinueButton"){
      document.getElementById("input"+parseInt((i+1))).readOnly=true;
      document.getElementById("button"+parseInt((i+1))).readOnly=true;


      $('#listBut'+parseInt(i+1)).prop('disabled', 'disabled');
      $('#score'+parseInt(i+1)).prop('disabled', 'disabled');

    }else if(item.disable==true){
      if(item.type=="StopButton")
      document.getElementById("stop"+parseInt((i+1))).readOnly=true;

      document.getElementById("button"+parseInt((i+1))).readOnly=true;


      $('#listBut'+parseInt(i+1)).prop('disabled', 'disabled');
      $('#score'+parseInt(i+1)).prop('disabled', 'disabled');

    }

  });
}

function enableButton(id){
//var id= document.getElementById("selectEnable").value;
var element=id.split("-");
if(element[0]=="destination"){
enableAllButton(element[1]);
//enableGraphButton(element[1]);

graph.data(data);
graph.render();
graph.fitView();
}else{
  var tempId=parseInt(element[0]);
  var tempIndex=parseInt(element[1]);
  obj[tempId].buttons[tempIndex].disable=false;

}
alert("abilitato, modificare per apportare i cambiamenti");
}

function enableAllButton(id){

  obj[id].disable=false;
  var temp = obj[id].fatherIdGraph

obj[temp].buttons.forEach((item) => {
  if(item.id==id)
  item.disable=false;
});

  obj[id].buttons.forEach((element) => {
    if(element.type=="ContinueButton")
      enableAllButton(element.id);
  });

}

function enableGraphButton(id){

    var node=findNode(data.children,"id"+id);
    //node.style= node.style.disable
    node.style.fill="green";
    console.log(node);
    obj[id].buttons.forEach((element, i) => {
      if(element.type=="ContinueButton")
        disableGraphButtons(element.id);
    });

}

function modify(id){

    var control=controlTitle();
    if(control==false)
	return alert("assicurarsi di aver inserito tutti i titoli");

    var title = document.getElementById("TitoloMissione").value;
    var text = document.getElementById("textS").value;

    //controllo se è stato inserito il widget
    controlWidget(id);

    //se è stata caricata l'immagine la salvo sennò setto a 'none'
    var file = document.getElementById("selectImage");
    var name = file.value;
    obj[id].img=name;
    var file = document.getElementById("selectImage");
    var name = file.value;
    var ext=name.split(".").pop();

    if(ext=="avi"||ext=="mp4"||ext=="mkv"||ext=="flv"){
	obj[id].video=name;
	obj[id].img="none";
    } else {
	obj[id].video="none";
	obj[id].img=name;
    }

    //se è stato cambiato il titolo della missione lo aggiorno anche nel grafo
    //e nel bottone per eliminare il branch
    if(title!=obj[id].title){
	editNode(obj[id].id,obj[id].id,title);
    }
/*************************************************************************************************/
    var buttons = document.getElementById("list").value;
    // <-- Inserire un controllo sul numero di pulsanti, se differisce, confrontare i vari buttonText con i label
    // del grafo ed eliminare il branch che non serve più, magari mostrando un alert

    // [...Array(buttons).keys()].foreach((index) => {
    // 	// <-- Se il numero di pulsanti è uguale, passare al controllo del tipo (prima cosa) ed eventualmente
    // 	// del valore della destinazione. Se ci sono delle differenze con

    // 	var buttonText = document.getElementById("button" + (index + 1));
    // 	var buttonType = document.getElementById("listBut" + (index + 1));

    //TODO: FIXME: Aggiornare il grafo anche in base a ciò che cambia nell'editor dei pulsanti:
    // quindi controllare che non venga inserita una destinazione già esistente.
    // Nel dubbio, bisogna ricollegarla o se ne deve creare una nuova? Che cazzo ne so? Porcoddio che merda javascript viva java

/*************************************************************************************************/

    obj[id].title=title;
    obj[id].text=text;


    regenObject(id);
    addScore(id);
    graph.data(data);
    graph.render();
    graph.fitView();
    //pulisco la pagina
    document.getElementById("TitoloMissione").value="";
    document.getElementById("textS").value="";
    document.getElementById("list").value=0;
    document.getElementById("buts").innerHTML="";
    $("#nextPrev").removeClass("hidden");
    $("#Modify").addClass("hidden");
    $("#enableButtons").addClass("hidden");
    $("#disable").addClass("hidden");

    //riabilità text titolo e list
    document.getElementById("TitoloMissione").readOnly=false;
    document.getElementById("textS").readOnly=false;
    $('#list').prop('disabled', false);

    alert("Modificato");

}


function openNavGraph(id){
    document.getElementById(id).style.width = "100%";

}

function openNav(id) {
    document.getElementById(id).style.width = "250px";
}

function openStoriesNav(id) {
    var sidenav = document.getElementById(id);
    sidenav.style.width = "250px";

    if(sidenav.id=="loadSidenav")
	getStories(document.getElementById("modifyInnerDiv"));
    else if(sidenav.id=="editSidenav")
	getStories(document.getElementById("editInnerDiv"));
    else if(sidenav.id=="removeSidenav")
	getStoriesComplete(document.getElementById("removeInnerDiv"))
}

function openLevelNav(story) {
    var sidenav = document.getElementById("levelSidenav");
    sidenav.style.width = "250px";

    getAvailableLevels(
	story,
	document.getElementById("levelInnerDiv"),
	"getStory(\"" + story + "\", \"",
	"json"
    );
}

function uploadLevelNav(story) {
    var sidenav = document.getElementById("levelSidenav");
    sidenav.style.width = "250px";

    getAvailableLevels(
	story,
	document.getElementById("levelInnerDiv"),
	"playableStory(\"" + story + "\", \"",
	"json"
    );
}

function removeLevelNav(story) {
    var sidenav = document.getElementById("levelSidenav");
    sidenav.style.width = "250px";

    getAvailableLevels(
	story,
	document.getElementById("levelInnerDiv"),
	"removeStory(\"" + story + "\", \"",
	"completeJson"
    );
}

function closeAllNavs() {
    $(".toRemove").remove();

    for(let sidenav of document.getElementsByClassName("sidenav"))
	sidenav.style.width = "0";

    for(let sidenavGraph of document.getElementsByClassName("sidenavGraph"))
	sidenavGraph.style.width = "0";

    for(let sidenavGraph of document.getElementsByClassName("sidenav leftSidenav"))
	sidenavGraph.style.width = "0";
}

function closeNav(id) {
    document.getElementById(id).style.width = "0";

    $(".toRemove").remove();
}

function completejson(){

var length=obj.length;
alert(length);
for(var i=1 ; i<length;i++){
alert("panino");
if(obj[i]!=null){

if(obj[i].img!="none"){
  var tempImg=obj[i].img
  obj[i].img="img/"+tempImg;
}

  for(var j=0;j<obj[i].numeroBottoni;j++){
    if(obj[i].buttons[j].type=="ContinueButton"){
      obj[i].buttons[j].fun="fetchData('"+ init.storyInfo.title + "',"+ obj[i].buttons[j].id + ")";
      console.log(obj);
    }
    if(obj[i].buttons[j].type=="StopButton"){
      obj[i].buttons[j].fun="alert('"+obj[i].buttons[j].alert+"')";
      console.log(obj);
    }
    if(obj[i].buttons[j].type=="WrongButton"){
      obj[i].buttons[j].fun="alert('errore')";
      console.log(obj);
    }
    if(obj[i].buttons[j].type=="BridgeButton"){
      obj[i].buttons[j].fun="fetchData('"+ init.storyInfo.title + "',"+ obj[i].buttons[j].bridge + ")";
      console.log(obj);
    }


      }

    }

  }
}

function controlWidget(id){
  try{
  var controlList=document.getElementById("checkApplyWidget");
  if(controlList.checked){
    obj[id].widgetPuzzle=true;
    obj[id].puzzle=[];
    var i=1;

      var select=document.getElementById("selectImg"+i);
      obj[id].puzzle[i-1]={};
      obj[id].puzzle[i-1].img=select.value;

    console.log(obj[id].puzzle);


    //prelevare le informazioni creare un teg  creare un oggetto puzzle con le informazioni e richiamare
    //il delete button sulle destinazioni precedenti se presenti e aggiungere la nuova destinazione
  }else
  obj[id].widgetPuzzle=false;
  }catch(err){
    obj[id].widgetPuzzle=false;
  }
  resetWidget();

}

function showWidget(){
  openNav("sidenavForPuzzle");
  try{
      if(document.getElementById("buttonDeleteWidget")){
       // alert("patata");
        return null;
      }
  }catch(err){
    //console.log(err);
  }

  var br =document.createElement("br");
  //var listValue = document.getElementById("widgetList").value;

  //document.getElementById("buts").innerHTML="";

  var div =document.getElementById("sidenavForPuzzle");

  /*
  var image = document.createElement("input");
  image.type = "file";
  image.id="imgWidget";
  image.setAttribute("name","file");


  var submit = document.createElement("input");
  submit.id="submitimg";
  submit.type = "submit";
  submit.value="Carica Foto";
*/


//div.appendChild(image);
  //div.appendChild(submit);
var i=1;

  var select=document.createElement("select");
  select.setAttribute("id","selectImg"+i);
  var p=document.createElement("p");
  var p1=document.createTextNode("Selezionare immagine"+i);

  var countElement=document.getElementById("selectImage").childNodes;
  console.log("element nodes "+countElement.length);

  for(a=1;a<countElement.length;a++){
    var valueImg=countElement[a].value;
    var imgText=countElement[a].text;

    var currentValue=document.createElement("option");
    currentValue.setAttribute("id","optionWidget");
    currentValue.value=valueImg;
    currentValue.text=imgText;
    select.appendChild(currentValue);
  }
  p.appendChild(p1);
  div.appendChild(p);
  div.appendChild(select);


  var buttonDeleteWidget =document.createElement("button");
  var checkApplyWidget=document.createElement("input");
  var label=document.createElement("label");

  checkApplyWidget.type="checkbox";
  checkApplyWidget.setAttribute("id","checkBoxWidget");

  label.innerHTML="Apply";
  label.style.color="white";

  buttonDeleteWidget.textContent="Delete Widget";
  buttonDeleteWidget.setAttribute("id","buttonDeleteWidget");
  buttonDeleteWidget.setAttribute("onclick","resetWidget()");

  checkApplyWidget.setAttribute("id","checkApplyWidget");

  div.appendChild(br);
  div.appendChild(buttonDeleteWidget);
  div.appendChild(checkApplyWidget);
  div.appendChild(label);

  //$("#files").addClass("hidden");

  alert("Widget Creato");
  /*
  $("#").click(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var file=document.getElementById("imgWidget");

    if(getFileName(file)){
    var nameImg= file.files[0].name;


    //crea il testo per inserire il nome dell'immagine
    for(var i=1;i<7;i++){
    var fatherImage=document.getElementById("selectImg"+i);
    var addOptionImage=document.createElement("option");
    addOptionImage.value=nameImg;
    addOptionImage.text=nameImg;
    fatherImage.appendChild(addOptionImage);
    }
    alert("Caricata");
  }

  //document.getElementById("next").setAttribute("onClick", "createPage(\""+ name + "\")");

});
*/
}

function resetWidget(){

 // $("#files").removeClass("hidden");
  document.getElementById("sidenavForPuzzle").innerHTML="";
  closeAllNavs();
}

function getFileName(file) {

  const name = file.files[0].name;
  const lastDot = name.lastIndexOf('.');

  const fileName = name.substring(0, lastDot);
  const ext = name.substring(lastDot + 1);

// outputfile.value = fileName;
 // extension.value = ext;
 if(ext=="jpg"||ext=="png"||ext=="jpeg"||ext=="mkv"||ext=="avi"||ext=="flv"||ext=="mp4"){
    return ext;
  }else{return alert("Cambiare Estensione del file");}

}
//disabilità il bottone selezionato
function disableSelectButton(item){

//var item = document.getElementById("selectButtonToDisable").value;
var element= item.split("-");
if(element[0]=="destination"){
disableAllDestination(parseInt(element[1]));
//disableGraphButtons(parseInt(element[1]));
graph.data(data);
graph.render();
graph.fitView();
controlDisable(obj[element[1]].fatherIdGraph);
}else{
  var tempId=parseInt(element[0]);
  console.log("tempId"+tempId);
  var tempIndex=parseInt(element[1]);
  obj[tempId].buttons[tempIndex].disable=true;
  controlDisable(obj[tempId].id);
}
console.log("item= "+item);

alert("disabilitato");
}

function disableGraphButtons(id){

  var node=findNode(data.children,"id"+id);
  //node.style= node.style.disable
  console.log(node);
  node.style.fill="red";
  console.log(node);
  obj[id].buttons.forEach((element, i) => {
    if(element.type=="ContinueButton")
      disableGraphButtons(element.id);
  });
}

function  disableAllDestination(id){

  obj[id].disable=true;
  var temp = obj[id].fatherIdGraph
//setto il tag disable anche nel bottone del padre
obj[temp].buttons.forEach((item, i) => {
  if(item.id==id)
  item.disable=true;
});

  obj[id].buttons.forEach((element, i) => {
    if(element.type=="ContinueButton")
      disableAllDestination(element.id);
  });

}

function deleteSelectBranch(item){

  //var item = document.getElementById("selectBranch").value;
  //var select=document.getElementById("selectBranch")
  console.log("item = "+item)
  deleteBranch();
  deleteBranchGraph("id"+item);
  graph.data(data);
  graph.render();
  graph.fitView();
   
  //select.remove(select.selectedIndex);
  document.getElementById("TitoloMissione").value="";
  document.getElementById("textS").value="";
  document.getElementById("list").value=0;
  document.getElementById("buts").innerHTML="";
  /*
  $("#nextPrev").removeClass("hidden");
  $("#Modify").addClass("hidden");
  $("#enableButtons").addClass("hidden");
  $("#disable").addClass("hidden");
*/
    console.log(data);
    
}

function disableSelectBranch(item){

  //var item = document.getElementById("selectBranch").value;
  //var select=document.getElementById("selectBranch");
  disableAllBranch(item);
//  disableGraphButtons(item);
  graph.data(data);
  graph.render();
  graph.fitView();
  controlDisableBranch(item);
    alert("Disabilitato");  
}

function disableAllBranch(id){

  obj[id].disableBranch=true;
  obj[id].buttons.forEach((item, i) => {

    if(item.type=="ContinueButton"){
      disableAllBranch(item.id);
    }

  });

}

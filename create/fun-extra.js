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
    if(extra != 0){
	var temp = 1;
	for(var i = 0; i < extra; i++){
	    var list = document.getElementById("listBut"+temp).value;
	    if(list == arrayBut[0]){
		controlExtra = document.getElementById("input" + temp).value;
		if(controlExtra == "")
		    return false;
	    }
	    temp++;
	}
    }
    return true;
}


function createObject(){

    //prendo le informazioni
    obj[id] = {};

    var title = document.getElementById("TitoloMissione").value;
    var text = document.getElementById("textS").value;
    var x = document.getElementById("buts").childElementCount;
    var buttons = x/4;
    var oldId = id;
    //creo l'oggetto
    obj[id].id = id;
    obj[id].title = title;
    obj[id].text = text;
    obj[id].numeroBottoni = buttons;
    obj[id].branch = true;

    addExtra(buttons,obj[id].id);
    addScore(obj[id].id);

    id++;
    return oldId;
}

//si occupa di aggiungere informazioni extra(destinations,alert,bridge,wrong)
function addExtra(buttons, id){
    obj[id].buttons = [];

    for(var i = 1; i < buttons + 1; i++){
	//controllo il tipo di bottone e lo aggiungo al mio oggetto
	var list = document.getElementById("listBut"+i).value;
	switch(list){

	case arrayBut[0]:
	    var destination = document.getElementById("input"+i).value;
	    obj[id].buttons[i - 1] = {};
	    obj[id].buttons[i - 1].text=document.getElementById("button" + i).value;
	    obj[id].buttons[i - 1].type = "ContinueButton";
	    obj[id].buttons[i - 1].destination = destination;
	    break;

	case arrayBut[1]:
	    var alert = document.getElementById("stop" + i).value;
	    obj[id].buttons[i - 1] = {};
	    obj[id].buttons[i - 1].text = document.getElementById("button" + i).value;
	    obj[id].buttons[i - 1].type = "StopButton";
	    obj[id].buttons[i - 1].alert = alert;
	    break;

	case arrayBut[2]:
	    obj[id].buttons[i - 1] = {};
	    obj[id].buttons[i - 1].text = document.getElementById("button" + i).value;
	    obj[id].buttons[i - 1].type = "WrongButton";
	    obj[id].buttons[i - 1].wrong = "";
	    break;

	case arrayBut[3]:
	    var bridge = document.getElementById("listBridge"+i).value;
	    obj[id].buttons[i - 1] = {};
	    obj[id].buttons[i - 1].text = document.getElementById("button" + i).value;
	    obj[id].buttons[i - 1].type = "BridgeButton";
	    obj[id].buttons[i - 1].bridge = bridge;
	    break;

	default: break;
	}

    }
}
//inizializza le destinazioni
function initDestination(idObject){
    var buttons = obj[idObject].numeroBottoni;

    for(var i = 1; i < buttons + 1; i++){
	if(obj[idObject].buttons[i - 1].type=="ContinueButton"){
	    obj[id] = {};
	    obj[id].img = "none";
	    obj[id].video = "none";
	    var title = obj[idObject].buttons[i - 1].destination;
	    obj[id].title = title;
	    obj[id].text = "";
	    obj[id].numeroBottoni = "0";
	    obj[id].buttons = [];
	    obj[id].id = id;
	    obj[id].branch = false;
	    obj[id].fatherIdGraph = obj[idObject].id;
	    obj[idObject].buttons[i - 1].id = id;
	    id++;

	}
    }

}

function addScore(id){

    var bottoni = obj[id].numeroBottoni;

    obj[id].buttons.forEach((button, index) => {

	button.score = document.getElementById("score" + (index + 1)).value
    });

}

//Si occupa di creare i bottoni
function createButs(){

    var elem = document.getElementById("list").value;
    var val = 1;

    if(elem == 0){
	document.getElementById("buts").innerHTML = "";
	return null;
    }
    //prendo il numero corrente di bottoni
    var x = document.getElementById("buts").childElementCount;
    var listButs = document.getElementById("buts");
    var i = 0;

    //se non sono zero controllo se devo aggiunge o eliminare bottoni
    if(x != 0){
	var temp = x / 4;
	var tempElem = elem*4;
	//elimino i bottoni aggiuntivi
	if(elem < temp){

	    while(x > tempElem){
		listButs.removeChild(listButs.childNodes[x - 1]);
		listButs.removeChild(listButs.childNodes[x - 2]);
		listButs.removeChild(listButs.childNodes[x - 3]);
		listButs.removeChild(listButs.childNodes[x - 4]);
		x = x - 4;

	    }
	    return null;
	}else{

	    i = temp;
	    val = temp + 1;

	}
    }
    //eseguo un ciclo per aggiungere bottoni
    while( i < elem){
	i++
	var input = document.createElement("input");
	input.setAttribute("id", "button" + val);

	var p = document.createElement("p");
	var p1 = document.createTextNode(val + "° bottone");
	p.appendChild(p1);

	//Crea la lista
	var selectListBut = document.createElement("select");
	selectListBut.setAttribute("id", "listBut" + val);

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
	div.setAttribute("id", "div" + val);
	div.style.textAlign = "center";
	div.style.padding = "10px";

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

    if(control == 0)
	return 0;
    control = control / 4;
    
    for(var i = 0; i < control; i++){

	var div = document.getElementById("div" + temp);
	var x = document.getElementById("div" + temp).childElementCount;
	if(x == 0){
	    var listContent = document.getElementById("listBut" + temp);

	    document.getElementById("listBut" + temp).setAttribute("onChange", "modifyButtonExtra(" + temp + ")");

	    modifyButtonExtra(temp);//Inizializza i pulsanti come "Continue Button"

	}
	temp++;
    }

}
//si occupa di aggiungere la lista degli extra sotto i bottoni
function modifyButtonExtra(button){

    var temp = button;

    var div = document.getElementById("div" + button);
    div.innerHTML = "";

    var listContent = document.getElementById("listBut" + button);

    if(listContent.value == arrayBut[0]){

	var p = document.createElement("p");
	var p1 = document.createTextNode("Inserire Destinazione");
	p.appendChild(p1);

	var input = document.createElement("input");
	input.setAttribute("id", "input" + temp);
	div.appendChild(p);

	div.appendChild(input);

    }else if (listContent.value == arrayBut[1]){


	var p = document.createElement("p");
	var p1 = document.createTextNode("Inserire alert");
	p.appendChild(p1);

	var inputS = document.createElement("input");
	inputS.setAttribute("id", "stop" + temp);

	div.appendChild(p);
	div.appendChild(inputS);

    }else if(listContent.value == arrayBut[3]){

	var arrayBridge = [];
	var arrayBridgeId = [];
	var i = 0;
	for(var x in obj){
	    if(obj[x] != null){
		arrayBridge[i] = obj[x].title;
		arrayBridgeId[i] = obj[x].id;
		i++;
	    }
	}

	var listBridge = document.createElement("select");
	listBridge.setAttribute("id", "listBridge" + temp);

	//Aggiunge le opzioni nella lista
	for (var a = 0; a < arrayBridge.length; a++) {
	    var optionBridge = document.createElement("option");
	    optionBridge.value = arrayBridgeId[a];
	    optionBridge.text = arrayBridge[a];
	    listBridge.appendChild(optionBridge);
	}
	div.appendChild(listBridge);
    }
    addScoreButton(button);
}

function addScoreButton(button){

    var div = document.getElementById("div" + button);


    var scoreArray=["-1", "-0.5", "0", "0.5", "1", "1.5", "2"];
    var length = scoreArray.length - 1;
    var i = 0;
    var select = document.createElement("select");
    select.setAttribute("id", "score" + button);

    var p = document.createElement("p");
    var p1 = document.createTextNode("Inserire score");
    p.appendChild(p1);

    while(i < length){

	var optionScore = document.createElement("option");
	optionScore.value =scoreArray[i];
	optionScore.text = scoreArray[i];
	select.appendChild(optionScore);
	i++;

    }
    div.appendChild(p);
    div.appendChild(select);

}
//Rimuove tutti gli element nel div passato
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
	parent.removeChild(parent.firstChild);
    }
}
//Crea un elemento a con il nome dell'immagine/video nella sidenav
function setImg(id){
    var div = document.getElementById("divImgSidenav");
    div.innerHTML = "";
    var a1 = document.createElement("a");
    a1.textContent = obj[id].img;
    var a2 = document.createElement("a");
    a2.textContent = obj[id].video;
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

    //aggiungo alla lista i bottoni da poter disabilitare
    sidenavListButtons(id);

    obj[id].buttons.forEach((element, i) => {


	if( element.type == "ContinueButton"){
	    document.getElementById("listBut" + parseInt((i + 1))).value = arrayBut[0];
	    modifyButtonExtra(parseInt((i + 1)));

	}
	else if(element.type == "StopButton"){
	    document.getElementById("listBut" + parseInt((i + 1))).value = arrayBut[1];
	    modifyButtonExtra(parseInt((i + 1)));

	}else if (element.type == "BridgeButton"){
	    document.getElementById("listBut" + parseInt((i + 1))).value = arrayBut[3];
	    modifyButtonExtra(parseInt((i + 1)));

	}else{
	    document.getElementById("listBut" + parseInt((i + 1))).value = arrayBut[2];
	    modifyButtonExtra(parseInt((i + 1)));

	}

    });



    obj[id].buttons.forEach((element, i) => {

	if(element.type == "ContinueButton") {
	    document.getElementById("button" + parseInt((i + 1))).value = element.text;
	    document.getElementById("input" + parseInt((i + 1))).value = element.destination;
	    document.getElementById("score" + parseInt((i + 1))).value = element.score;

	}else if (element.type == "StopButton"){
	    document.getElementById("button" + parseInt((i + 1))).value = element.text;
	    document.getElementById("stop" + parseInt((i + 1))).value  = element.alert;
	    document.getElementById("score" + parseInt((i + 1))).value = element.score;

	}else if (element.type == "BridgeButton"){
	    var testoBridge = element.bridge;
	    document.getElementById("button" + parseInt((i + 1))).value = element.text;
	    document.getElementById("listBridge" + parseInt((i + 1))).value  = testoBridge;
	    document.getElementById("score" + parseInt((i + 1))).value = element.score;
	}else{
	    document.getElementById("button" + parseInt((i + 1))).value = element.text;
	    document.getElementById("score" + parseInt((i + 1))).value = element.score;
	}
    });



    $("#nextPrev").addClass("hidden");

    //controllo se ci sono bottoni disabilitati
    controlDisable(id);
    //controllo se c'è il tag disableBranch
    controlDisableBranch(id);

    //controllo se c'è il puzzle
    if(obj[id].widgetPuzzle == true){
	var tempPuzzle = 0;
	showWidget()
	for(var k = 1; k < 2; k++){
	    var image = document.getElementById("selectImg" + k);
	    var addOptionImage = document.createElement("option");
	    addOptionImage.value = obj[id].puzzle[tempPuzzle].img;
	    addOptionImage.text = obj[id].puzzle[tempPuzzle].img;
	    image.appendChild(addOptionImage);
	    document.getElementById("checkApplyWidget").checked = true;
	    tempPuzzle++;
	}

    }

    try{
	Modify.removeChild(Modify.childNodes[0]);
    }catch(err){

    }

    var modifica = document.createElement("button");
    modifica.id = "modifyBut";
    modifica.setAttribute("onClick", "modify(\""+ id + "\")");
    modifica.textContent = "Modifica";
    modifica.style.float = "center";

    Modify.appendChild(modifica);

    $("#Modify").removeClass("hidden");

}
//Controlla se il Branch è disabilitato
function controlDisableBranch(id){

    if(obj[id].disableBranch == true){
	document.getElementById("TitoloMissione").readOnly = true;
	document.getElementById("textS").readOnly = true;
	$('#list').prop('disabled', 'disabled');
	obj[id].buttons.forEach((item, i) => {

	    if(item.type=="ContinueButton"){
		document.getElementById("input" + parseInt((i + 1))).readOnly = true;
		document.getElementById("button" + parseInt((i + 1))).readOnly = true;
		$("#enableButtons").removeClass("hidden")
		$('#listBut'+parseInt(i+1)).prop('disabled', 'disabled');
		$('#score'+parseInt(i+1)).prop('disabled', 'disabled');

	    }else{
		if(item.type == "StopButton"){
		    document.getElementById("stop" + parseInt((i + 1))).readOnly = true;
		}
		else if(item.type == "BridgeButton"){
		    $('#listBridge' + parseInt(i + 1)).prop('disabled', 'disabled');
		}

		document.getElementById("button" + parseInt((i + 1))).readOnly = true;

		$('#listBut' + parseInt(i + 1)).prop('disabled', 'disabled');
		$('#score' + parseInt(i + 1)).prop('disabled', 'disabled');
	    }
	});

    }else{
	document.getElementById("TitoloMissione").readOnly = false;
	document.getElementById("textS").readOnly = false;
	$('#list').prop('disabled', false);
    }
}
//Abilita il Branch selezionato
function enable(item){

    enableBranch(item);
    alert("Abilitato, Modificare per apportare le modifiche");

}

function enableBranch(id){
    obj[id].disableBranch = false;

    obj[id].buttons.forEach((item) => {
	if(item.type == "ContinueButton")
	    enableBranch(item.id);

    });

}

//Controlla se sono disabilitati i bottoni
function controlDisable(id){

    obj[id].buttons.forEach((item, i) => {

	if(item.disable == true && item.type == "ContinueButton"){
	    document.getElementById("input" + parseInt((i + 1))).readOnly = true;
	    document.getElementById("button" + parseInt((i + 1))).readOnly = true;


	    $('#listBut' + parseInt(i + 1)).prop('disabled', 'disabled');
	    $('#score' + parseInt(i + 1)).prop('disabled', 'disabled');

	}else if(item.disable == true){
	    if(item.type == "StopButton"){
		document.getElementById("stop" + parseInt((i + 1))).readOnly = true;
	    }
	    else if(item.type == "BridgeButton"){
		$('#listBridge'+parseInt(i + 1)).prop('disabled', 'disabled');
	    }

	    document.getElementById("button" + parseInt((i + 1))).readOnly = true;


	    $('#listBut'+parseInt(i + 1)).prop('disabled', 'disabled');
	    $('#score'+parseInt(i + 1)).prop('disabled', 'disabled');

	}

    });
}
//Abilita il bottone selezionato e i suoi figli
function enableButton(id){

    var element=id.split("-");
    if(element[0]=="destination"){
	enableAllButton(element[1]);

    }else{
	var tempId=parseInt(element[0]);
	var tempIndex=parseInt(element[1]);
	obj[tempId].buttons[tempIndex].disable=false;

    }
    alert("Abilitato, modificare per apportare i cambiamenti");
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
//Modifica la pagina corrente ricreando l'oggetto con le informazioni aggiuntive
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

    var buttons = document.getElementById("list").value;

    obj[id].title=title;
    obj[id].text=text;

    //Rigenera l'oggetto'
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

//Apre la nav del grafo
function openNavGraph(id){
    document.getElementById(id).style.width = "100%";

}
//Apre la nav con l'id passato
function openNav(id) {
    if(id==="utilsSidenav"){
	document.getElementById(id).style.width = "350px";
    }else{
	document.getElementById(id).style.width = "250px";
    }
}
//Restituisce una delle funzioni a seconda dell'id passato
function openStoriesNav(id) {
    var sidenav = document.getElementById(id);
    sidenav.style.width = "250px";

    if(sidenav.id=="loadSidenav")
	getStories(document.getElementById("modifyInnerDiv"));
    else if(sidenav.id=="editSidenav")
	getStories(document.getElementById("editInnerDiv"));
    else if(sidenav.id=="removeSidenav")
	getStoriesComplete(document.getElementById("removeInnerDiv"))
    else if(sidenav.id=="accessabilityStorySidenav")
	getStories(document.getElementById("accessabilityStoryInnerDiv"));
    else if(sidenav.id=="accessabilityRemoveSidenav")
	getStoriesForAccessability(document.getElementById("accessabilityStoryToRemoveInnerDiv"));
    else if(sidenav.id=="qrSidenav")
	getStoriesComplete(document.getElementById("qrInnerDiv"))
}
//Ottiene le storie presenti su Json e le mostra sulla sidenav per poter essere modificate
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
//Ottiene le storie da Json e le mostra sulla sidenav per poter essere giocabili
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
//Ottiene le storie da completeJson e le mostra sulla sidenav per poter essere rimosse
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
//Ottiene le storie da Json e le rende modificabili per l'accessibilità
function accessabilityLevelNav(story) {
    var sidenav = document.getElementById("levelSidenav");
    sidenav.style.width = "250px";

    getAvailableLevels(
	story,
	document.getElementById("levelInnerDiv"),
	"getStoryForAccessability(\"" + story + "\", \"",
	"json"
    );
}
//prende le storie del Creator e rende possibili creare un qrcode
function createCustomQrCode(story){
    var sidenav = document.getElementById("levelSidenav");
    sidenav.style.width = "250px";

    getAvailableLevels(
	story,
	document.getElementById("levelInnerDiv"),
	"customQrCodeGeneration(\"" + story + "\", \"",
	"json"
    );
}
//Chiude tutte le Sidenav
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

//Controlla se il Widget esiste
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

	}else
	    obj[id].widgetPuzzle=false;
    }catch(err){
	obj[id].widgetPuzzle=false;
    }
    resetWidget();

}
//Mostra il widget
function showWidget(){
    openNav("sidenavForPuzzle");
    try{
	if(document.getElementById("buttonDeleteWidget")){

	    return null;
	}
    }catch(err){

    }

    var br = document.createElement("br");

    var div = document.getElementById("sidenavForPuzzle");

    var i = 1;

    var select = document.createElement("select");
    select.setAttribute("id", "selectImg" + i);
    var p = document.createElement("p");
    var p1 = document.createTextNode("Selezionare immagine" + i);

    var countElement = document.getElementById("selectImage").childNodes;
    console.log("element nodes " + countElement.length);

    for(a = 1; a < countElement.length; a++){
	var valueImg = countElement[a].value;
	var imgText = countElement[a].text;

	var currentValue=document.createElement("option");
	currentValue.setAttribute("id","optionWidget");
	currentValue.value=valueImg;
	currentValue.text=imgText;
	select.appendChild(currentValue);
    }
    p.appendChild(p1);
    div.appendChild(p);
    div.appendChild(select);


    var buttonDeleteWidget = document.createElement("button");
    var checkApplyWidget = document.createElement("input");
    var label = document.createElement("label");

    checkApplyWidget.type = "checkbox";
    checkApplyWidget.setAttribute("id", "checkBoxWidget");

    label.innerHTML = "Apply";
    label.style.color = "white";

    buttonDeleteWidget.textContent = "Delete Widget";
    buttonDeleteWidget.setAttribute("id", "buttonDeleteWidget");
    buttonDeleteWidget.setAttribute("onclick", "resetWidget()");

    checkApplyWidget.setAttribute("id", "checkApplyWidget");

    div.appendChild(br);
    div.appendChild(buttonDeleteWidget);
    div.appendChild(checkApplyWidget);
    div.appendChild(label);

    alert("Widget Creato");

}
//elimina il widget
function resetWidget(){
    document.getElementById("sidenavForPuzzle").innerHTML="";
    closeAllNavs();
}
//Ottiee l'estensione del file passato
function getFileName(file) {

    const name = file.files[0].name;
    const lastDot = name.lastIndexOf('.');

    const fileName = name.substring(0, lastDot);
    const ext = name.substring(lastDot + 1);


    if(ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "mkv" || ext == "avi" || ext == "flv" || ext=="mp4"){
	return ext;
    }else{
	return alert("Cambiare Estensione del file");
    }
}
//disabilità il bottone selezionato
function disableSelectButton(item){


    var element = item.split("-");
    if(element[0] == "destination"){
	disableAllDestination(parseInt(element[1]));

	graph.data(data);
	graph.render();
	graph.fitView();
	controlDisable(obj[element[1]].fatherIdGraph);
    }else{
	var tempId=parseInt(element[0]);
	var tempIndex=parseInt(element[1]);
	obj[tempId].buttons[tempIndex].disable=true;
	controlDisable(obj[tempId].id);
    }


    alert("disabilitato");
}

function  disableAllDestination(id){

    obj[id].disable = true;
    var temp = obj[id].fatherIdGraph
    //setto il tag disable anche nel bottone del padre
    obj[temp].buttons.forEach((item, i) => {
	if(item.id == id)
	    item.disable = true;
    });

    obj[id].buttons.forEach((element, i) => {
	if(element.type == "ContinueButton")
	    disableAllDestination(element.id);
    });

}
//Elimina il branch selezionato
function deleteSelectBranch(item){

    deleteButtons(item);
    deleteBranchGraph("id" + item);
    graph.data(data);
    graph.render();
    graph.fitView();


    document.getElementById("TitoloMissione").value="";
    document.getElementById("textS").value = "";
    document.getElementById("list").value = 0;
    document.getElementById("buts").innerHTML = "";
}
//Disabilita il branch selezionato
function disableSelectBranch(item){
    if(obj[item].title != document.getElementById("TitoloMissione").value){
	return alert("Bisogna trovarsi sulla pagina iniziale del branch che si vuole disabilitare. Se lo si è bisogna ricordarsi di modificare la pagina se qualcosa è stato cambiato");
    }

    disableAllBranch(item);
    graph.data(data);
    graph.render();
    graph.fitView();
    controlDisableBranch(item);
    alert("Disabilitato");
}
//disabilità ricorsivamente tutti i figli
function disableAllBranch(id){

    obj[id].disableBranch = true;
    obj[id].buttons.forEach((item, i) => {

	if(item.type == "ContinueButton"){
	    disableAllBranch(item.id);
	}

    });

}
//disabilita il widget per la modifica delle storie accessibili
function disablewidgetForAccessaability(){
    var element = null;
    var widgetList = document.getElementById("utilsSidenav").childNodes;
    widgetList.forEach((item, i) => {
	if(item.textContent === "Attiva/Mostra widget"){
	    element = item;
	}
    });
    
    element.onclick = () => {
	alert("non è possibile aggiungere widget per le storie accessibili");
    }
    
    for(var x in obj){
	if(obj[x] != null){
	    if(obj[x].widgetPuzzle === true)
		obj[x].widgetPuzzle = false;
	}

    }
}

//modifica il Creator per eseguire l'upload delle storie per l'accessibilità
function setForAccessability(){
    var body = document.getElementById("body");
    $("#End").addClass("hidden");

    var div = document.createElement("div");
    div.setAttribute("id", "EndAccessability");
    div.style.textAlign="center";
    var button = document.createElement("button");
    button.setAttribute("id", "EndButtonAccessability");
    button.textContent = "Carica Storia Accessibile";

    button.onclick= () => {
	$("#files").addClass("hidden");
	$("#utilsSidenav").addClass("hidden");
	$("#sidenavForBranches").addClass("hidden");
	$("#Drawer").addClass("hidden");
	$("#DrawerUtils").addClass("hidden");
	
	var arrayImg = [];
	var i = 0;
	for(var x in obj){
	    if(obj[x].img != "none"){
		arrayImg[i] = x;
		i++;
	    }
	}


	i = 0;
	textForImages(arrayImg, i);
    }
    div.appendChild(button);
    body.appendChild(div);
}
//permette di aggiungere descrizioni per le foto della storia
function textForImages(arrayImg, i){
    var x = arrayImg[i];
    var body = document.getElementById("body");
    body.innerHTML = "";

    if(arrayImg.length != 0){
	var p = document.createElement("p");
	var p1 = document.createTextNode("Qui è possibile aggiungere le descrizioni per le immagini");
	
	p.appendChild(p1);
	body.appendChild(p);
	
	var img=document.createElement("div");
	var urlvalue = JSON.stringify("../imgCreate/" + obj[x].img);
	var stripped = urlvalue.replace(/['"]+/g, "");
	var img_url = document.createElement("IMG");
	
	img_url.setAttribute("src", stripped);
	img_url.setAttribute("width", "440");
	img_url.setAttribute("height", "320");
	img.appendChild(img_url);
	body.appendChild(img);


	var textarea = document.createElement("textarea");
	textarea.setAttribute("id", "textS");
	textarea.setAttribute("rows", "7");
	textarea.setAttribute("cols", "100");
	body.appendChild(textarea);

	var divButtons=document.createElement("div");
	divButtons.setAttribute("id", "divForButtons");
	if(obj[x].textAccessability)
	    textarea.value=obj[x].textAccessability;

	var buttonNext=document.createElement("button");
	buttonNext.setAttribute("id", "buttonNextImg");
	buttonNext.textContent="Avanti";
	buttonNext.onclick = () => {
	    if(arrayImg[parseInt((i + 1))])
		textForImages(arrayImg, parseInt(i + 1));

	}

	var buttonBack=document.createElement("button");
	buttonBack.setAttribute("id","buttonBackImg");
	buttonBack.textContent="Indietro";
	buttonBack.onclick = () => {
	    if(arrayImg[parseInt((i - 1))])
		textForImages(arrayImg,parseInt(i - 1));

	}

	var buttonSet = document.createElement("button");
	buttonSet.textContent="Applica Testo";
	buttonSet.onclick = () => {
	    obj[x].textAccessability = document.getElementById("textS").value;
	}

	var endButton = document.createElement("button");
	endButton.textContent = "Fine";
	endButton.setAttribute("onClick", "setEndStartAccessabilityStory()");


	body.appendChild(divButtons);

	divForButtons.appendChild(buttonSet);
	divButtons.appendChild(document.createElement("br"));
	divButtons.appendChild(document.createElement("br"));
	divForButtons.appendChild(buttonBack);
	divForButtons.appendChild(buttonNext);
	divButtons.appendChild(document.createElement("br"));
	divButtons.appendChild(document.createElement("br"));
	divForButtons.appendChild(endButton)

	body.style.textAlign = "center";
    }else{
	var divButtons = document.createElement("div");
	divButtons.setAttribute("id","divForButtons");
	var endButton = document.createElement("button");
	endButton.textContent = "Fine";
	endButton.setAttribute("onClick", "setEndStartAccessabilityStory()");
	divButtons.appendChild(endButton)
	divButtons.style.textAlign = "center";
	body.appendChild(divButtons);
	alert("nessuna immagine da mostrare");
	body.style.textAlign = "center";
    }
}
//permette di scegliere un punto iniziale e finale nelle storie
function setEndStartAccessabilityStory(){

    var body = document.getElementById("body");
    body.innerHTML = "";
    showOldStartPoint();

    var p = document.createElement("p");
    var p1 = document.createTextNode("Scegliere punto iniziale");
    p.appendChild(p1);

    var t = document.createElement("p");
    var t1 = document.createTextNode("Scegliere punto finale");
    t.appendChild(t1);

    var array = [];
    var arrayId = [];
    var i = 0;
    for(var x in obj){
	if(obj[x] != null){
	    array[i] = obj[x].title;
	    arrayId[i] = obj[x].id;
	    i++;
	}
    }

    var divStart = document.createElement("div");
    var listStart = document.createElement("select");
    listStart.setAttribute("id", "listStart");

    for (var a = 0; a < array.length; a++) {
	var optionStart = document.createElement("option");
	optionStart.value = arrayId[a];
	optionStart.text = array[a];
	listStart.appendChild(optionStart);
    }
    divStart.appendChild(p);
    divStart.appendChild(listStart);

    var divEnd=document.createElement("div");
    var listEnd = document.createElement("select");
    listEnd.setAttribute("id","listEnd");

    for (var a = 0; a < array.length; a++) {
	var optionEnd = document.createElement("option");
	optionEnd.value = arrayId[a];
	optionEnd.text = array[a];
	listEnd.appendChild(optionEnd);
    }
    divEnd.appendChild(t);
    divEnd.appendChild(listEnd);

    body.appendChild(divStart);
    body.appendChild(divEnd);
    var button = document.createElement("button");
    button.textContent="Carica Storia";
    button.setAttribute("id", "uploadStory");
    button.setAttribute("onclick", "setButtonInObj()");
    body.appendChild(document.createElement("br"));
    body.appendChild(button);

}

function setButtonInObj(){
    var end=document.getElementById("listEnd").value;
    var start=document.getElementById("listStart").value;
    if(end == null || start == null)
	return alert("selezionare punto di inizio e punto di fine");

    for(var x in obj){
	if(obj[x] != null){
	    if(obj[x].start == true)
		obj[x].start = false;
	}
    }
    obj[start].start = true;
    obj[end].end = true;
    var numButtons = obj[end].numeroBottoni;
    obj[end].buttons[parseInt(numButtons)] = {}
    obj[end].buttons[parseInt(numButtons)].text = "Fine Storia";
    obj[end].buttons[parseInt(numButtons)].end = true;
    uploadAccessabilityStory();
}

function showOldStartPoint(){
    var body = document.getElementById("body");
    var divShowOldPoint = document.createElement("div");

    divShowOldPoint.style.textAlign = "center";
    for(var x in obj){
	if(obj[x] != null){
	    if(obj[x].start === true){
		var e = document.createElement("p");
		var e1 = document.createTextNode("Il punto scelto in precedenza era: " + obj[x].title);
		e.appendChild(e1);
		divShowOldPoint.appendChild(e);
	    }
	}
    }

    body.appendChild(document.createElement("br"));
    body.appendChild(divShowOldPoint);

}
//Carica la storia accessibili sul server
function uploadAccessabilityStory(){

    $(document).ready(() => {
	$.ajax({
	    type: "POST",
	    url: "http://site192020.tw.cs.unibo.it/create/accessabilityStory",
	    contentType:"application/json;charset=utf-8",
	    dataType:"html",
	    data: JSON.stringify(init),
	    success: function(result){
		alert(result);
		location.reload();
	    }});
    });

}

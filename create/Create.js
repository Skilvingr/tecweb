var init ={};
init["player"]=[];
var obj=init.player;


var arrayBut = ["ContinueButton","StopButton","WrongButton", "BridgeButton"];
var id=0;
var graphNumber=0;

//creo un oggetto con le informazioni iniziali della storia (età e titolo)

function initialObject(){
    initGraph();

    //graph.data(data);
    //graph.render();

    var age = document.getElementById("agePicker").value;

    title = document.getElementById("titoloStory").value;
    document.getElementById("titolo").innerHTML="";
    init.storyInfo={};
    init.storyInfo.title = title;
    init.storyInfo.età = age;
    start();
}

//Si occupa di creare la pagina
function start() {

    $("#widgets").removeClass("hidden");
    $("#options").removeClass("hidden");
    $("#files").removeClass("hidden");

    $("#Drawer").attr("onClick", "openNavGraph('sidenavForBranches')");
    $("#DrawerUtils").removeClass("hidden");


    var image = document.createElement("input");
    image.type = "file";
    image.id="imgName";
    image.setAttribute("name","file");

    var submit = document.createElement("input");
    submit.id="submit";
    submit.type = "submit";
    submit.value="Carica Foto";


    var page = document.getElementById("page");

    var stor = document.createElement("h1");
    var storyTitle = document.createTextNode(init.storyInfo.title);
    stor.appendChild(storyTitle);


    var storyMis = document.createElement("h2");
    var titleMis = document.createTextNode("Inserisci titolo");
    storyMis.appendChild(titleMis);

    var titoloMis = document.createElement("input");
    titoloMis.setAttribute("id","TitoloMissione");

    var story = document.createElement("h3");
    var title = document.createTextNode("Inserisci storia");
    story.appendChild(title);

    var textarea = document.createElement("textarea");
    textarea.setAttribute("id", "textS");
    textarea.setAttribute("rows", "7");
    textarea.setAttribute("cols", "100");

    var p = document.createElement("p");
    p.id="ChooseNumButs";
    var p1 = document.createTextNode("Scegli il numero di bottoni");
    p.appendChild(p1);

    //Create array of options to be added
    var array = [0,1,2,3,4];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "list";
    selectList.setAttribute("onChange","createButs()");
    //Create and append the options

    array.forEach((el) => {
        var option = document.createElement("option");
        option.value = el;
        option.text = el;
        selectList.appendChild(option);
    });

    var next = document.createElement("button");
    next.id="next";
    next.textContent = "Avanti";
    next.style.float="center";
    next.setAttribute("onClick", "createPage()");

    //selettore per le immagini
    var selectImage = document.createElement("select");
    selectImage.setAttribute("id","selectImage");


    var optionImage = document.createElement("option");
    optionImage.value="none";
    optionImage.text = "selezionare l'immagine per la pagina corrente"
    selectImage.appendChild(optionImage);

    //creo il div per il puzzle
    var divWidget =document.createElement("div");
    divWidget.setAttribute("id","widgetShow");


    imageStory.appendChild(image);
    imageStory.appendChild(submit);

    page.appendChild(stor);
    page.appendChild(selectImage);
    page.appendChild(storyMis);

    page.appendChild(titoloMis);

    page.appendChild(story);
    page.appendChild(textarea);
    page.appendChild(p);
    page.appendChild(selectList);
    page.appendChild(divWidget);


    nextPrev.appendChild(next);



    $("#imageStory").submit(function(e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var url = form.attr('action');

        var file=document.getElementById("imgName");
        //controllo l'estensione
        var ext=getFileName(file);
        if (ext=="jpg"||ext=="jpeg"||ext=="png"||ext=="avi"||ext=="mp4"||ext=="mkv"||ext=="flv"){
            var name = file.files[0].name;
            var data=new FormData(imageStory);
            data.append('file',this.new_attachments)

            $.ajax({
		type: "POST",
		url: url,
		data: data,
		processData: false,
		contentType: false,
		success: function(data)
		{
                    alert("caricato");
		}
            });


	    if(ext=="jpg"||ext=="jpeg"||ext=="png"){
		//crea il testo per inserire il nome dell'immagine
		var fatherImage=document.getElementById("selectImage");
		var addOptionImage=document.createElement("option");
		addOptionImage.value=name;
		addOptionImage.text=name;
		fatherImage.appendChild(addOptionImage);

		//cerca di inserire i nomi delle immagini anche nei select del widget se esiste
		try{
		    for(var i=1;i<7;i++){
			var fatherImage=document.getElementById("selectImg"+i);
			var addOptionImage=document.createElement("option");
			addOptionImage.value=name;
			addOptionImage.text=name;
			fatherImage.appendChild(addOptionImage);
		    }
		}catch(err){console.log(err);}
	    }else if(ext=="avi"||ext=="mp4"||ext=="mkv"||ext=="flv"){

		//crea il testo per inserire il nome del video
		var fatherImage=document.getElementById("selectImage");
		var addOptionImage=document.createElement("option");
		addOptionImage.value=name;
		addOptionImage.text=name;
		fatherImage.appendChild(addOptionImage);
	    }
	}

	//document.getElementById("next").setAttribute("onClick", "createPage(\""+ name + "\")");

    });
}



function createPage(){

    var control = controlTitle();
    if(control == false)
	   return alert("assicurarsi di aver inserito tutti i titoli");

    //creo la pagina
    var objectId = createObject();
    initDestination(objectId);
    //createBranch(objectId);
    controlWidget(objectId);

    //obj.forEach((object) => {
        createBranch(objectId);
        obj[objectId].buttons.forEach((item) => {
          if(item.type==="ContinueButton")
          createBranch(item.id);
        });

      //  });

        console.log(data);
        graph.data(data);
        graph.render();
        graph.fitView();

    //se è stata caricata l'immagine la salvo sennò setto a 'none'

    var file = document.getElementById("selectImage");
    var name = file.value;
    var ext=name.split(".").pop();

    if(ext=="avi"||ext=="mp4"||ext=="mkv"||ext=="flv"){
	obj[objectId].video=name;
	obj[objectId].img="none";
    }else{
	obj[objectId].video="none";
	obj[objectId].img=name;
    }

    //aggiustare il delete branch
    //inizializzo il bottone per eliminare il branch
    var deletePage=document.createElement("option");
    deletePage.setAttribute("id","DeletePage"+document.getElementById("TitoloMissione").value);
    deletePage.text="delete Branch di "+document.getElementById("TitoloMissione").value;
    deletePage.value= obj[objectId].id ;
    selectBranch.appendChild(deletePage);
    $("#elimina").removeClass("hidden");


    //pulisco la pagina
    document.getElementById("TitoloMissione").value="";
    document.getElementById("textS").value="";
    document.getElementById("list").value=0;
    document.getElementById("buts").innerHTML="";
}

function end(){

    var button = document.createElement("button");
    button.id="reqButton";
    button.textContent="carica storia";
    $(document).ready(function(){
	completejson();
        $.ajax({
            type: "POST",
            url: "http://site192020.tw.cs.unibo.it/create/story",
            contentType:"application/json;charset=utf-8",
            dataType:"html",
            data: JSON.stringify(init),
            success: function(result){
                alert(result);
            }});
    });

    //End.appendChild(button);

}

function deleteAllPage(id){
    var ul=obj[id].idGraph;
    if(ul==null)
	return alert("Devi eliminare la pagina dal nodo radice");

    var butN=obj[id].numeroBottoni;
    var temp=1;

    obj[id].buttons
	.filter((button) => button.type === "ContinueButton")
	.forEach((button) => {
	    deleteButtons(button.id);
	    obj[id].numeroBottoni--;
	});


    document.getElementById("TitoloMissione").value="";
    document.getElementById("textS").value="";
    document.getElementById("list").value=0;
    document.getElementById("buts").innerHTML="";

    var next = document.createElement("button");
    next.id="next";
    next.textContent = "Avanti";
    next.style.float="center";
    next.setAttribute("onClick", "createPage()");

    controLista=0;
    document.getElementById("nextPrev").innerHTML="";
    nextPrev.appendChild(next);
    //document.getElementById("imgRef").innerHTML=""

    console.log(`id: ${id}`);
    document.getElementById("ulOrigin"+ul).innerHTML="";
    //ul.innerHTML="";

    delete obj[id];
    console.log(`obj: ${obj}`);

    try{
        $("#nextPrev").removeClass("hidden");
        $("#End").removeClass("hidden");
        $("#Modify").addClass("hidden");

    }catch(err){}

    $(`#${id}`).remove();
}

function getStories(sidenav) {
    $(document).ready(function(){
	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://site192020.tw.cs.unibo.it/getStories",
	    success: function(returnData) {
		handleStories(returnData, sidenav);
	    }
	})
    });
}
function getOut(com) {
    $(document).ready(function(){
	$.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + com +"",
	    success: function(returnData) {
		comOutput(returnData);
	    }
	})
    });
}

function getStory(story, level) {
    $(document).ready(function(){
	$.ajax({
	    type: "GET",
	    dataType: "json",
	    url: "http://site192020.tw.cs.unibo.it/getStory?story=" + story + "&level=" + level,
	    success: function(returnData) {
		closeAllNavs();
		$("#sidenavEntryPoint").addClass("hidden");
		console.log(returnData);
		var temp= returnData;
		delete init;
		delete obj;
		init = returnData;
		obj = returnData.player;
		initPage();
	    }
	})
    });
}

function initPage() {
    document.getElementById("titoloStory").value = init.storyInfo.title;
    document.getElementById("agePicker").value = init.storyInfo.età;
    validateTitle();
    populate(0);
    populateGraph();

    for(var x in obj){
	if(obj[x]!=null){
	    id=obj[x].id;
	}

    }
}


function populateGraph() {

    obj.forEach((page) => {
	createBranch(page.id);
    });

    graph.data(data);
    graph.render();
    graph.fitView();
}


function populatePage(page) {
    document.getElementById("TitoloMissione").value = obj[page].title;
    document.getElementById("textS").value = obj[page].text;

    if(obj.length >= page)
	document.getElementById("next").setAttribute("onClick", "modify(\"" + page + "\")");
    else
	document.getElementById("next").setAttribute("onClick", "createPage()");

    var buttons = obj[page].numeroBottoni;
    console.log("buttons: " + buttons);
    document.getElementById("list").value = buttons;
    createButs();
    populateButs(page, buttons);
}

function populateButs(page, buttons) {
    obj[page].buttons.forEach((button, index) => {
	var buttonText = document.getElementById("button" + (index + 1));
	buttonText.value = button.text;

	var buttonType = document.getElementById("listBut" + (index + 1));
	buttonType.value = button.type;

	modifyButtonExtra(index + 1);

	handleButton(page, index);
    });
}

function handleButton(page, button) {
    switch(obj[page].buttons[button].type) {

    case arrayBut[0]: {
	var buttonDest = document.getElementById("input" + (button + 1));
	buttonDest.value = obj[page].buttons[button].destination;
	break;
    }
    case arrayBut[1]: {
	var buttonStop = document.getElementById("stop" + (button + 1));
	buttonStop.value = obj[page].buttons[button].alert;
	break;
    }
    case arrayBut[3]: {
	var buttonBridge = document.getElementById("listBridge" + (button + 1));

	var optionBridge = document.createElement("option");
	optionBridge.value = obj[page].buttons[button].bridge;
	optionBridge.text = obj[optionBridge.value].title;
	buttonBridge.appendChild(optionBridge);

	break;
    }
    }
}

function handleStories(stories, sidenav){
    var storiesArray = stories.split("\n");

    document.getElementById("editInnerDiv").innerHTML="";

    storiesArray.forEach((story) => {
	var a = document.createElement("a");
	a.className = "storyLabel";
	a.setAttribute("style", "font-size:30px;cursor:pointer");
	a.setAttribute("onclick", "openLevelNav(\"" + story + "\")");
	a.textContent = story;
	sidenav.appendChild(a);

    });
}



function comOutput(data){

    var out = document.getElementById("console");
    var text=document.getElementById("consoleOut");
    text.value=data;
}

function sendCom(){

    var input =document.getElementById("com").value;
    getOut(input);
}

function changeStatus(id) {
    if(obj[id].status === "enabled")
	obj[id].status = "disabled";
    else
	obj[id].status = "enabled";

    var pippo = obj
	.forEach((page) => {
	    page.buttons
		.filter((button) => (button.type === "BridgeButton") && button.id === id)
		.map((button) => {
		    console.log(`disabling button ${button.text}`);
		    button.isEnabled = !button.isEnabled;
		});
	});
}

function listBranches(action) {
    openNav("sidenavForBranches");

    obj.filter((page) => (page != null && page.branch)).map((page) => {
	var a = document.createElement("a");
	a.className = "toRemove";
	a.id = page.id;

	if(page.status === "enabled")
	    a.setAttribute("style", "font-size:20px;cursor:pointer;color:black;background-color:green");
	else
    	    a.setAttribute("style", "font-size:20px;cursor:pointer;color:black;background-color:red");

	if(action === "changeStatus"){
	    a.setAttribute("onclick", `changeStatus(${page.id})`);
	} else {
	    a.setAttribute("onclick", `deleteAllPage(${page.id})`);
	}

	a.textContent = (page.title + ": " + page.status);
	$("#sidenavForBranches").append(a);
    })
}

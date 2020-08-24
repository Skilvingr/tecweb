var title = null;
var bottoni = null;
var numPag=1;

var controlBut = 0;
var controlObj = 0;
var controlHint = 0;

var numButs;
var numObj;
var numHint;

var Storia;

function logz() {
  console.log("faccio qualcosa di globale");
}

//Si occupa di creare la pagina
function start() {
    //document.getElementById("titoloStory").value="ciao";
    // title = document.getElementById("titoloStory").value;
    //document.getElementById("myText").innerHTML = title;
    
    var pageN = document.createElement("p");
    var np = document.createTextNode("Paggina "+numPag);
    pageN.appendChild(np);

    var title = document.getElementById("titoloStory").value;
    document.getElementById("titolo").innerHTML="";

    var page = document.getElementById("page");

    var stor = document.createElement("h1");
    var storyTitle = document.createTextNode(title);
    stor.appendChild(storyTitle);

    var story = document.createElement("h2");
    var title = document.createTextNode("Inserisci storia");
    story.appendChild(title);

    var textarea = document.createElement("textarea");
    textarea.setAttribute("id", "textS");
    textarea.setAttribute("rows", "7");
    textarea.setAttribute("cols", "100");
    
    var p = document.createElement("p");
    var p1 = document.createTextNode("Scegli il numero di bottoni");
    p.appendChild(p1);

  //Create array of options to be added
  var array = [0,1,2,3,4];

  //Create and append select list
  var selectList = document.createElement("select");
  selectList.id = "list";
  //Create and append the options
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  }

    var button = document.createElement("button");
    button.textContent = "Crea";
    button.setAttribute("onClick", "createButs()");
    
    var a = document.createElement("p");
    var a1 = document.createTextNode("Scegli il numero di Oggetti");
    a.appendChild(a1);

  //Crea array per gli oggetti
  var arrayObj = [0,1,2,3,4,5,6,7,8,9];

  //Crea la lista
  var selectListObj = document.createElement("select");
  selectListObj.id = "listObj";

  //Aggiunge le opzioni nella lista
  for (var i = 0; i < arrayObj.length; i++) {
    var optionObj = document.createElement("option");
    optionObj.value = arrayObj[i];
    optionObj.text = arrayObj[i];
    selectListObj.appendChild(optionObj);
  }

    var object = document.createElement("button");
    object.textContent = "Crea";
    object.setAttribute("onClick", "createObj()");

    var b = document.createElement("p");
    var b1 = document.createTextNode("Scegli il numero di Indizi");
    b.appendChild(b1);

  //Crea array per gli Indizi
  var arrayHint = [0,1,2,3,4,5,6,7,8,9];

  //Crea la lista
  var selectListHint = document.createElement("select");
  selectListHint.id = "listHint";

  //Aggiunge le opzioni nella lista
  for (var i = 0; i < arrayHint.length; i++) {
    var optionHint = document.createElement("option");
    optionHint.value = arrayHint[i];
    optionHint.text = arrayHint[i];
    selectListHint.appendChild(optionHint);
  }

    var hint = document.createElement("button");
    hint.textContent = "Crea";
    hint.setAttribute("onClick", "createHint()");
    
    var next = document.createElement("button");
    next.textContent = "Avanti";
    next.style.float="right";
    next.setAttribute("onClick", "next()");

    var prev = document.createElement("button");
    prev.textContent = "Indietro";
    prev.style.float="left";
    prev.setAttribute("onClick", "");

    numPage.appendChild(pageN);
    
    page.appendChild(stor);
    page.appendChild(story);
    page.appendChild(textarea);
    page.appendChild(p);
    page.appendChild(selectList);
    page.appendChild(button);

    obj.appendChild(a);
    obj.appendChild(selectListObj);
    obj.appendChild(object);

    hin.appendChild(b);
    hin.appendChild(selectListHint);
    hin.appendChild(hint);

    nextPrev.appendChild(next);
    nextPrev.appendChild(prev);
}
//Si occupa di creare i bottoni
function createButs(){

  var elem = document.getElementById("list").value;
  var val = 1;

  //Controlla se son già creati dei bottoni
  if(controlBut!=0)
    document.getElementById("buts").innerHTML="";
  
  for (var i = 0; i < elem; i++) {

    var input = document.createElement("input");
    input.setAttribute("id","button"+val);
    
       // creating checkbox element 
       var checkbox = document.createElement('input'); 
              
       // Assigning the attributes 
       // to created checkbox 
       checkbox.type = "checkbox"; 
       checkbox.name = "name"; 
       checkbox.value = "value"; 
       checkbox.id = "id"+val; 

        // creating label for checkbox 
        var label = document.createElement('label'); 
              
        // assigning attributes for the created label tag  
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('Continue button'));  

    var p = document.createElement("p");
    var p1 = document.createTextNode(val+"° bottone");
    p.appendChild(p1);

  
    buts.appendChild(p);
    buts.appendChild(input);
    buts.appendChild(checkbox);
    buts.appendChild(label);
    val++;
  }
  numButs = val-1;
  controlBut = 1;
  
} 

function createObj(){

  var objvar = 1;
  var elemObj = document.getElementById("listObj").value;

  //Controlla se non ci sono già bottoni creati
  if(controlObj!=0)
  document.getElementById("objButs").innerHTML="";

  for (var i = 0; i < elemObj; i++) {

  var object = document.createElement("input");
    object.setAttribute("id","object"+objvar);

    var p = document.createElement("p");
    var p1 = document.createTextNode(objvar+"° oggetto");
    p.appendChild(p1);

    objvar++;

    objButs.appendChild(p);
    objButs.appendChild(object);
  }
  numObj = objvar-1;
  controlObj = 1;
}


function createHint(){

  var hintvar = 1;
  var elemHint = document.getElementById("listHint").value;

    //Controlla se non ci sono già bottoni creati
    if(controlHint!=0)
    document.getElementById("hinButs").innerHTML="";

  
  for (var i = 0; i < elemHint; i++) {

  var hint = document.createElement("input");
    hint.setAttribute("id","hint"+hintvar);

    var p = document.createElement("p");
    var p1 = document.createTextNode(hintvar+"° Indizio");
    p.appendChild(p1);

    hintvar++;

    hinButs.appendChild(p);
    hinButs.appendChild(hint);
  }
   numHint = hintvar-1;
   controlHint = 1;
}

function next(){
numPag++;

/*
document.getElementById("textS").value="";

var pippo = document.getElementById("textS").value;
var temp =1;

for(var i = 0; i < numButs ;i++){
  
  var pippo2 = document.getElementById("button"+temp).value;

  var a = document.createElement("p");
  var a1 = document.createTextNode(pippo2);
  a.appendChild(a1);
  temp++;
  container.appendChild(a);
}

var p = document.createElement("p");
    var p1 = document.createTextNode(pippo);
    p.appendChild(p1);

    container.appendChild(p);
    //document.getElementById("container").innerHTML="";
    */
}
//variabili json
var title ;
var bottoni = null;
var numPag = 1;
var imgN;


var pageControl=0;

var controlBut = 0;
var controlL = 0;

var titleP;

var buttonNext = 1;

var numButs;
var numObj;
var numHint;

var modificatore;
var arrayTitoli = [];
var arrayBut = ["Continue Button","Stop Button","Wrong button"];

var Storia;

var controLista=0;

function logz() {
  console.log("faccio qualcosa di globale");
}

var obj = {

};

//Si occupa di creare la pagina
function start() {
    //document.getElementById("titoloStory").value="ciao";
    //title = document.getElementById("titoloStory").value;
    //document.getElementById("myText").innerHTML = title;

    var pageN = document.createElement("p");
    var np = document.createTextNode("Pagina");
    pageN.appendChild(np);

    var image = document.createElement("input");
    image.type = "file";
    image.id="imgName";
    image.setAttribute("name","file");
    
    var submit = document.createElement("input");
    submit.id="submit";
    submit.type = "submit";
    submit.value="Carica Foto";

    modificatore = document.createElement("input");
    modificatore.setAttribute("id","numeropag");
    modificatore.style.textAlign="center";
    modificatore.size="1";
    modificatore.value = numPag;
    modificatore.readOnly=true;

    title = document.getElementById("titoloStory").value;
    document.getElementById("titolo").innerHTML="";
    obj.title = title;
    var page = document.getElementById("page");

    var stor = document.createElement("h1");
    var storyTitle = document.createTextNode(title);
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

  var buttonImg = document.createElement("button");
  buttonImg.textContent = "Crea";
  buttonImg.setAttribute("onClick", "setImage()");

    var button = document.createElement("button");
    button.textContent = "Crea";
    button.setAttribute("onClick", "createButs()");

    var next = document.createElement("button");
    next.id="next";
    next.textContent = "Avanti";
    next.style.float="right";
    next.setAttribute("onClick", "next()");

    var end = document.createElement("button");
    end.textContent = "Crea";
    end.id="endBut";
    end.style.float="center";
    end.setAttribute("onClick", "end()");

    var g = document.createElement("p");
    var g1 = document.createTextNode("Grafico");
    var x;
    var i=0;

    g.appendChild(g1);

    imageStory.appendChild(image);
    imageStory.appendChild(submit);
   
    numPage.appendChild(pageN);
    numPage.appendChild(modificatore);

    page.appendChild(stor);
    page.appendChild(storyMis);
    page.appendChild(titoloMis);
    page.appendChild(story);
    page.appendChild(textarea);
    page.appendChild(p);
    page.appendChild(selectList);
    page.appendChild(button);

    nextPrev.appendChild(next);
   
    End.appendChild(end);
    Graph.appendChild(g);


    $("#submit").click(function(){
        var url = document.getElementById("imgName");
        var name =url.files[0].name;
        alert("Caricato");
        imgN = name;
    });
}

function setImage(){

var url = document.getElementById("image");
var file = url.files[0].name;
document.getElementById("myImg").src = file;
alert(file);
  //imageUp();
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

    var p = document.createElement("p");
    var p1 = document.createTextNode(val+"° bottone");
    p.appendChild(p1);

    //Crea la lista
    var selectListBut = document.createElement("select");
    selectListBut.setAttribute("id","listBut"+val);
      //Aggiunge le opzioni nella lista
      for (var a = 0; a < arrayBut.length; a++) {
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

  var button = document.createElement("button");
  button.textContent = "Aggiungi Opzioni";
  button.setAttribute("onClick","controlList()");

  buts.appendChild(button);

  numButs = val-1;
  controlBut = 1;
  a = 0;
}

function controlList(){
 
  var temp = 1;
  var selector = numButs;

if(numButs!=0 && numButs!=null)
controLista=1;

  if(controlL!=0){
    for(var a = 0; a < selector; a++){
    document.getElementById("div"+temp).innerHTML="";
    temp++;
   }
   temp = 1;
  }

  for(var i = 0; i < selector; i++){

  var listContent = document.getElementById("listBut"+ temp);
  var div = document.getElementById("div"+ temp);

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
  }
  temp++;
}
controlL = 1;

}
//upload images
function imageUp(){
  var form = document.getElementById("gianni");
  var url = document.getElementById("image");
  
  var data = new FormData(form);
  var file = url.files[0];
  alert(file.name);
  data.append=("imageUp",file);

  $(document).ready(function(){
   
      $.ajax({
          type: "POST",
          url: "http://localhost:8000",
          enctype:"multipart/form-data",
          data:data,
          processData: false,
          contentType: false,
          success: function (data) {
 
            $("#output").text(data);
            console.log("SUCCESS : ", data);
            $("#btnSubmit").prop("disabled", false);

        },
        error: function (e) {

            $("#output").text(e.responseText);
            console.log("ERROR : ", e);
            $("#btnSubmit").prop("disabled", false);

        }
});
});
}


function next(){

  var control=0;
  var controlT=0;
  //azzera tutti gli input e cambia pagina
  var controlTitle = document.getElementById("TitoloMissione");

  //var set = document.getElementById("listBut").value;
  
  console.log(arrayTitoli.length);
  if(controlTitle.value=="")
  alert("Inserire il titolo");
  else{
    for(var t = 0; t < arrayTitoli.length;t++){

      if(arrayTitoli[t]==controlTitle.value){
      alert("cambiare titolo");
      controlT=1;
      }
    }
    if(controlT==0)
    arrayTitoli[numPag-1]=controlTitle.value;
  }
  if(controlT==0){

  var titolo = ""+document.getElementById("TitoloMissione").value;
  var temp = 1;

  var testo = document.getElementById("textS").value;
  console.log(testo);
  if(testo==null)
    testo="";
  
      obj[titolo]={};
      obj[titolo].image=imgN;
      obj[titolo].pagina = numPag;
      obj[titolo].testo = testo;
      obj[titolo].bottoni = numButs;
      
      for(var i = 0; i < numButs; i++){
        if(controLista==1){
      var buttonval = document.getElementById("button"+temp).value;
      var buttoninp = document.getElementById("listBut"+temp).value;
      

      var propertyb = "bottone" + temp;
      obj[titolo][propertyb] = buttonval;

      var scelta = "scelta bottone"+temp;
      
      if(buttoninp == arrayBut[0]){
      var listaBut = document.getElementById("input"+temp).value;
      obj[titolo][scelta] = 0;
      var destBut = "destinazione bottone"+temp;
      obj[titolo][destBut] = listaBut;
      }
      else if(buttoninp == arrayBut[1]){
      var listaBut = document.getElementById("stop"+temp).value;
      obj[titolo][scelta] = 1;
      var destBut = "alert bottone"+temp;
      obj[titolo][destBut] = listaBut;
      }
      else
      obj[titolo][scelta] = 2;
      
        temp ++;
    }else{
    i=numButs;
    control=1;
    }

      }
if(control!=1){
        titleP = controlTitle.value;
        controlTitle.value="";
        document.getElementById("textS").value="";
        document.getElementById("numeropag").value= ++numPag;
        document.getElementById("list").value=0;
        document.getElementById("buts").innerHTML="";

        var br = document.createElement("br");

        var button = document.createElement("button");
        button.setAttribute("id","buttonGraph"+ buttonNext);
        button.textContent = titleP;
        button.setAttribute("onClick","populate(\""+ titleP + "\")");
    
      buttonNext++;
      controLista = 0;
    Graph.appendChild(br);
    Graph.appendChild(button);

  }else 
  alert("inserire opzioni");
  
}

}


function populate(title){

  var temp = 1;
  
  var pagina = obj[title].pagina;
  var testo = obj[title].testo;
  var bottoni = obj[title].bottoni;
  var img = obj[title].img;
  document.getElementById("imgName").files[0] = img;
  document.getElementById("TitoloMissione").value = title;
  document.getElementById("numeropag").value = pagina;
  document.getElementById("textS").value = testo;

  document.getElementById("list").value = bottoni;
  createButs();

  var temp2=1;

  for(var i = 0; i<bottoni; i++){

    var lista = "scelta bottone" + temp2;
    var statusList = obj[title][lista];

    if(statusList == 0){
      document.getElementById("listBut" + temp2).value = arrayBut[0];
    } 
    else if(statusList == 1){
      document.getElementById("listBut" + temp2).value = arrayBut[1];
    }else{
      document.getElementById("listBut" + temp2).value = arrayBut[2];
    }

    temp2++;
  }

  controlList();

  for(var a = 0; a < bottoni; a++){

    lista = "scelta bottone" + temp;
   statusList = obj[title][lista];

    var bottone = "bottone" + temp; 
    document.getElementById("button"+temp).value = obj[title][bottone];

    if(statusList == 0) {
     var inputBut = "destinazione bottone"+temp;
     var testoInput = obj[title][inputBut];
    document.getElementById("input"+temp).value = testoInput;

    }else if (statusList == 1){
      var alertBut = "alert bottone"+temp;
      var testoAlert = obj[title][alertBut];
      document.getElementById("stop"+temp).value  = testoAlert;
    }
    temp++;
  }

  if (pagina != numPag){
    document.getElementById("nextPrev").innerHTML="";
    document.getElementById("End").innerHTML="";
  }

  var modifica = document.createElement("button");
  modifica.id="modifyBut";
  modifica.setAttribute("onClick","modify(\""+ title + "\")");
  modifica.textContent="Modifica";

  End.appendChild(modifica);
  console.log(obj);

}

//applica le modifiche 
function modify(titleB){
var control=0;
var controlT=0;
var title = document.getElementById("TitoloMissione").value; 
var pagina = obj[titleB].pagina;

console.log(arrayTitoli.length);

if(title!=titleB){
if(title==""){
alert("Inserire il titolo");
controlT=1;
}
else{
  for(var t = 0; t < arrayTitoli.length;t++){
    if(arrayTitoli[t]==title){
    alert("cambiare titolo");
    controlT=1;
    }
  }
  if(controlT==0)
  arrayTitoli[pagina-1]=title;
}
}

if(controlT==0){
var temp = 1;

var testo = document.getElementById("textS").value;
var ButN = document.getElementById("list").value;
if(title!=titleB){
obj[title] = obj[titleB];
delete obj[titleB];
}
obj[title].testo = testo;
obj[title].bottoni = ButN;

for(var i=0;i<ButN;i++){
  if (controLista==1){
  var bottone = "bottone"+temp;
  obj[title][bottone] = document.getElementById("button"+temp).value;
  var sceltaB = document.getElementById("listBut"+temp).value;

  if(sceltaB==arrayBut[0]){
    sceltaB=0;
  }else if(sceltaB == arrayBut[1]){
    sceltaB=1;
  }else
  sceltaB=2;

  var lista = "scelta bottone" + temp;
  obj[title][lista] = sceltaB;

  if(sceltaB == 0){
    var inputButt = "destinazione bottone"+temp;
    var input=document.getElementById("input"+temp).value;
    obj[title][inputButt] = input;
  

  }else if (sceltaB == 1){
    var alertBut ="alert bottone"+temp;
    var stop = document.getElementById("stop"+temp).value;
    obj[title][alertBut]=stop;
  }
  temp++;
}else{
  control=1;
  i=ButN;
}
}

if(control==0){
console.log(obj);
alert("Modificato");

        document.getElementById("buttonGraph"+pagina).textContent = title;
        document.getElementById("buttonGraph"+pagina).setAttribute("onClick","populate(\""+ title+ "\")");
        document.getElementById("TitoloMissione").value="";
        document.getElementById("textS").value="";
        document.getElementById("numeropag").value= numPag;
        document.getElementById("list").value=0;
        document.getElementById("buts").innerHTML="";

    var next = document.createElement("button");
    next.id="next";
    next.textContent = "Avanti";
    next.style.float="right";
    next.setAttribute("onClick", "next()");

    var end = document.createElement("button");
    end.textContent = "Crea";
    end.id="endBut";
    end.style.float="center";
    end.setAttribute("onClick", "end()");

        controLista=0;
      document.getElementById("End").innerHTML="";
      nextPrev.appendChild(next);
      End.appendChild(end);
     
}else
alert("inserire le opzioni per i bottoni");
}
}

function end(){

var button = document.createElement("button");
button.id="reqButton";
button.textContent="carica storia";

$(document).ready(function(){
  $("#reqButton").click(function(){
    $.ajax({
        type: "POST",
        url: "http://localhost:8000",
        contentType:"application/json;charset=utf-8",
        dataType:"html",
        data: JSON.stringify(obj),
        success: function(result){
      alert(result);
    }});
});
});


End.appendChild(button);

}

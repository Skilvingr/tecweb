//variabili json
var title ;
var bottoni = null;
var numPag = 1;
var imgN;
var Age=null;

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

var arrayExtra = [];

var Storia;

var controlExtra;

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

    var Age = document.getElementById("agePicker").value;
    obj.età = Age;

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
    p.id="ChooseNumButs";
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
    button.id="createButtons";
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


    var graph=document.createElement("span");
    graph.className="caret";
   
    graph.textContent="Grafico";


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
    GraphView.appendChild(graph);

    $("#imageStory").submit(function(e) {

      e.preventDefault(); // avoid to execute the actual submit of the form.
  
      var form = $(this);
      var url = form.attr('action');
     
      var file=document.getElementById("imgName");
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
           imgN = name;
  
  });

}
function pageNumeration(){
var i=1;
  for(obj[title] in obj){
    console.log(obj[title]);
  
     obj[title].pagina=i
     
    i++;
   if(i==numPag)
   return alert("done");
  }
  console.log(obj);
}

function graphView(title){

  var button = document.createElement("button");
  button.setAttribute("id","buttonGraph"+ buttonNext);
  button.textContent = title;
  button.setAttribute("onClick","populate(\""+ title + "\")");
  buttonNext++;

  var ul=document.createElement("ul");
  //ul.className="nested";
 
  //Graph.appendChild(button);
  GraphView.appendChild(ul);
  var li = document.createElement("li");
  ul.appendChild(li);

  var span = document.createElement("span");
  //span.className="caret";

  li.appendChild(span);
  span.appendChild(button);

  var length = arrayExtra.length-1;
  
  console.log(length);

  var ulExtra=document.createElement("ul");
    ulExtra.id="ulExtra";
    //ulExtra.className="nested";
    li.appendChild(ulExtra);

  for(var i = 0; i <= length; i++){

    var titoloInp = ""+arrayExtra[i];
        obj[titoloInp]={};
        obj[titoloInp].image="";
        obj[titoloInp].pagina = numPag;
        obj[titoloInp].testo = "";
        obj[titoloInp].bottoni = 0;
    

    var liExtra = document.createElement("li");
    liExtra.id="liExtra"+numPag;
    ulExtra.appendChild(liExtra);
    numPag++;
        var buttonExtra = document.createElement("button");
        buttonExtra.setAttribute("id","buttonGraph"+ buttonNext);
        var text = arrayExtra[i];
        buttonExtra.textContent = text;
        buttonExtra.setAttribute("onClick","populate(\""+ text + "\")");

      liExtra.appendChild(buttonExtra);  
      buttonNext++;
  }
  arrayExtra=[];
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

  numButs = val-1;
  controlBut = 1;
  a = 0;

  if (numButs==0||numButs==null)
  return null;

  controlList();
 
}

function controlList(){
 
  var temp = 1;
  var selector = numButs;

//if(numButs!=0 && numButs!=null)
//controlExtra=false;

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

  var buttonModExtra=document.createElement("button");
  buttonModExtra.id="buttonModifyExtra"+temp;
  buttonModExtra.setAttribute("onClick","modifyButtonExtra("+temp+")");
  buttonModExtra.textContent="modifica opzione bottone "+temp;
  div.appendChild(buttonModExtra);

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

function modifyButtonExtra(button){

  var temp=button;

  var div=document.getElementById("div"+button);
  div.innerHTML="";

var buttonModExtra=document.createElement("button");
buttonModExtra.id="buttonModifyExtra"+temp;
buttonModExtra.setAttribute("onClick","modifyButttonExtra("+temp+")");
buttonModExtra.textContent="modifica opzione bottone "+temp;
div.appendChild(buttonModExtra);

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
  }

}

function next(){

  var control=0;
  var controlT=0;
  
  var index=0;

  var p = document.createElement("p");
  p.setAttribute("id","imgRef");
  var p1 = document.createTextNode("");
  p.appendChild(p1);
  imageStory.appendChild(p);

  //azzera tutti gli input e cambia pagina
  var controlTitle = document.getElementById("TitoloMissione");

  //var set = document.getElementById("listBut").value;
  
  if(controlTitle.value=="")
  return alert("Inserire il titolo");
  
  

  var elem = document.getElementById("list").value;
  numButs=elem;

  var titolo = ""+document.getElementById("TitoloMissione").value;
  var temp = 1;

  var testo = document.getElementById("textS").value;
  console.log(testo);

  if(testo==null)
    testo="";

      var arrayind=0;

     var con= controlTitlePage(titolo);
      if(con==true)
      return alert("modifica titolo");


      obj[titolo]={};
      obj[titolo].image=imgN;
      obj[titolo].pagina = numPag;
      obj[titolo].testo = testo;
      obj[titolo].bottoni = numButs;
      
      for(var i = 0; i < numButs; i++){

      var buttonval = document.getElementById("button"+temp).value;
      var buttoninp = document.getElementById("listBut"+temp).value;
      

      var propertyb = "bottone" + temp;
      obj[titolo][propertyb] = buttonval;

      var scelta = "scelta bottone"+temp;
      
      if(buttoninp == arrayBut[0]){
      var listaBut = document.getElementById("input"+temp).value;
      
      arrayExtra[arrayind]=listaBut;
      obj[titolo][scelta] = 0;
      var extraTit =controlTitlePage(listaBut);
      if(extraTit==true){
        delete obj[titolo];
        console.log(obj);
        return alert("modifica destinazione");
      }

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
        arrayind++;
      }  

        titleP = controlTitle.value;
        controlTitle.value="";
        document.getElementById("textS").value="";
        document.getElementById("list").value=0;
        document.getElementById("buts").innerHTML="";
        numPag++;

        graphView(titleP);
        pageNumeration();
        console.log(obj);
        /*
      for(var p = 0; p < arrayNewButs.length; p++){
        var titoloInp = ""+arrayNewButs[p];
        obj[titoloInp]={};
        obj[titoloInp].image="";
        obj[titoloInp].pagina = ++numPag;
        obj[titoloInp].testo = "";
        obj[titoloInp].bottoni = 0;

        var bool2 = controlTitlePage(titoloInp);
      
      if(bool2!=true){

      var length=arrayNewButs.length;
      if(length!=null){
        for(var l=0;l<length;l++){
          deleteTitlePage(arrayNewButs[l]);
        }
      }
      deleteTitlePage(listaBut);
      var titleMis=obj[titolo];
      deleteTitlePage(titleMis);
      controLista=0;
      delete obj[titolo];
      return null;

      }


        var br = document.createElement("br");
        var buttonInp = document.createElement("button");
        buttonInp.setAttribute("id","buttonGraph"+ buttonNext);
        buttonInp.textContent = arrayNewButs[p];
        buttonInp.setAttribute("onClick","populate(\""+ arrayNewButs[p] + "\")");

        Graph.appendChild(br);
        Graph.appendChild(buttonInp);
        buttonNext++;
      }
      numPag++;
      */
      document.getElementById("numeropag").value= numPag;
      //graphView();
}
  


function controlTitlePage(title){

for(obj[title] in obj){
  console.log(obj[title]);
  if(obj[title]==title){
    console.log(obj);
  
  return true;
}

}
}

function deleteTitlePage(title){

  for(var t = 0; t < arrayTitoli.length;t++){

    if(arrayTitoli[t]==title){
    arrayTitoli[t]="";
    return true;

    }
  }
  return false;

  
}

function populate(title){

  var controlImg=document.getElementById("imgRef");
  if(controlImg!=null||controlImg!=""){
    controlImg.innerHTML="";
  }
 
  var temp = 1;
  var img = obj[title].image;
 
  imgRef.textContent="foto caricata:"+img;

  var pagina = obj[title].pagina;
  var testo = obj[title].testo;
  var bottoni = obj[title].bottoni;
 
  

  document.getElementById("TitoloMissione").value = title;
  document.getElementById("numeropag").value = pagina;
  document.getElementById("textS").value = testo;

  document.getElementById("list").value = bottoni;
  createButs();
  /*
  var showNumBut=document.createElement("input");
  showNumBut.id="showButs";
  showNumBut.readOnly=true;
  showNumBut.value=bottoni;
  showNumBut.size="1";

  var titolobut=document.getElementById("ChooseNumButs");
  page.removeChild(titolobut);
  var list= document.getElementById("list");
  page.removeChild(list);
  var buttonCount=document.getElementById("createButtons");
  page.removeChild(buttonCount);

  var p = document.createElement("p");
  var p1=document.createTextNode("Numero di bottoni");
  p.appendChild(p1);
  page.appendChild(p);
  page.appendChild(showNumBut);
  */  
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


var title = document.getElementById("TitoloMissione").value; 
var pagina = obj[titleB].pagina;

console.log(arrayTitoli.length);

if(title!=titleB){
if(title==""){
alert("Inserire il titolo");
return null;
}
}

var temp = 1;
var index=0;

var testo = document.getElementById("textS").value;
var ButN = document.getElementById("list").value;

if(title!=titleB){
  var bool = controlTitlePage(title);
  if(bool==true)
  return alert("modifica titolo");
obj[title] = obj[titleB];
delete obj[titleB];
}

obj[title].image=imgN;
obj[title].testo = testo;
obj[title].bottoni = ButN;

for(var i=0;i<ButN;i++){
  
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
    var input = document.getElementById("input"+temp).value;
    var control = obj[title][inputButt];

    if(control != input){
    var boolExtra = controlTitlePage(input);
    if(boolExtra==true){
      document.getElementById("buttonGraph"+pagina).textContent = title;
      document.getElementById("buttonGraph"+pagina).setAttribute("onClick","populate(\""+ title+ "\")");
      return alert("modificare la destinazione");
    }
  }
  
    arrayExtra[index]=input;
    index++;
    obj[title][inputButt] = input;
  

  }else if (sceltaB == 1){
    var alertBut ="alert bottone"+temp;
    var stop = document.getElementById("stop"+temp).value;
    obj[title][alertBut]=stop;
  }
  temp++;
}

console.log(obj);
alert("Modificato");

        document.getElementById("buttonGraph"+pagina).textContent = title;
        document.getElementById("buttonGraph"+pagina).setAttribute("onClick","populate(\""+ title+ "\")");
        graphModify(title,pagina);
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
      document.getElementById("imgRef").innerHTML="";
      
      End.appendChild(end);
}


function graphModify(title,pagina){

 
  console.log(length);
if(arrayExtra.length!=0){
var liExtra= document.getElementById("liExtra"+pagina); 
var button = document.getElementById("buttonGraph"+pagina);
liExtra.removeChild(button);

var span =document.createElement("span");
span.className="caret";
liExtra.appendChild(span);
span.appendChild(button);
var length=arrayExtra.length-1;
}else
return null;

var ulExtra=document.createElement("ul");
    //ulExtra.className="nested";
    liExtra.appendChild(ulExtra);

  for(var i = 0; i <= length; i++){

    
    var titoloInp = ""+arrayExtra[i];
        obj[titoloInp]={};
        obj[titoloInp].image="";
        obj[titoloInp].pagina = numPag;
        obj[titoloInp].testo = "";
        obj[titoloInp].bottoni = 0;
      

    var liExtra = document.createElement("li");
    liExtra.id="liExtra"+numPag;
    ulExtra.appendChild(liExtra);
    numPag++;
        var buttonExtra = document.createElement("button");
        buttonExtra.setAttribute("id","buttonGraph"+ buttonNext);
        var text = arrayExtra[i];
        buttonExtra.textContent = text;
        buttonExtra.setAttribute("onClick","populate(\""+ text + "\")");
   
      liExtra.appendChild(buttonExtra);  
      buttonNext++;
  }
  arrayExtra=[];

}


function end(){

var button = document.createElement("button");
button.id="reqButton";
button.textContent="carica storia";

$(document).ready(function(){
  $("#reqButton").click(function(){
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/create/story",
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


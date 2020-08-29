//variabili json
var title ;
var bottoni = null;
var numPag = 1;
var temp2 = 1;

var controlBut = 0;
var controlL = 0;


var numButs;
var numObj;
var numHint;

var modificatore;
var arrayBut = ["Continue Button","Stop Button","Wrong button"];

var Storia;

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
    
    
    modificatore = document.createElement("input");
    modificatore.setAttribute("id","numeropag");
    modificatore.style.textAlign="center";
    modificatore.size="1";
    modificatore.value = numPag;
    modificatore.readOnly=true;
    
    
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
    
    var button = document.createElement("button");
    button.textContent = "Crea";
    button.setAttribute("onClick", "createButs()");
    
    var next = document.createElement("button");
    next.textContent = "Avanti";
    next.style.float="right";
    next.setAttribute("onClick", "next()");
    
    var prev = document.createElement("button");
    prev.textContent = "Indietro";
    prev.style.float="left";
    prev.setAttribute("onClick", "prev()");
    
    var end = document.createElement("button");
    end.textContent = "Fine";
    end.style.float="center";
    end.setAttribute("onClick", "end()");
    
    var g = document.createElement("p");
    var g1 = document.createTextNode("Grafico");
    var x;
    var i=0;
    
    g.appendChild(g1);
    
    var end = document.createElement("button");
    end.textContent = "Fine";
    end.style.float="center";
    end.setAttribute("onClick", "end()");
    
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
    nextPrev.appendChild(prev);
    
    End.appendChild(end);
    Graph.appendChild(g);
    
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

function next(){
    //azzera tutti gli input e cambia pagina
    var controlTitle = document.getElementById("TitoloMissione");
    
    if(controlTitle.value=="")
        alert("é necessario un titolo");
    else{
        
        var temp = 1;
        var page = "page"+numPag;
        obj[page]={};
        obj[page].missione = document.getElementById("TitoloMissione").value;
        obj[page].testo = document.getElementById("textS").value;
        
        for(var i = 0; i < numButs; i++){
            var buttonval = document.getElementById("button"+temp).value;
            var buttoninp = document.getElementById("listBut"+temp).value;
            
            
            var propertyb = "bottone" + temp;
            obj[page][propertyb] = buttonval;
            
            var scelta = "scelta bottone"+temp;
            
            if(buttoninp == arrayBut[0]){
                var listaBut = document.getElementById("input"+temp).value;
                obj[page][scelta] = 0;
                var destBut = "destinazione bottone"+temp;
                obj[page][destBut] = listaBut;
            }
            else if(buttoninp == arrayBut[1]){
                var listaBut = document.getElementById("stop"+temp).value;
                obj[page][scelta] = 1;
                var destBut = "alert bottone"+temp;
                obj[page][destBut] = listaBut;
            }
            else
                obj[page][scelta] = 2;
            
            
            temp ++;
        }
        
        var title = controlTitle.value;
        controlTitle.value="";
        document.getElementById("textS").value="";
        document.getElementById("numeropag").value= ++numPag;
        document.getElementById("list").value=0;
        document.getElementById("buts").innerHTML="";
        
        var br = document.createElement("br");
        
        var button = document.createElement("button");
        button.setAttribute("onClick", "load(" + title + ")");
        button.setAttribute("id","buttonGraph"+ temp2);
        button.textContent = title;
        temp2++;
        Graph.appendChild(br);
        Graph.appendChild(button);
        
    }
    
}


function prev(){
    var temp=1;
    document.getElementById("page").innerHTML="";
    //var control = document.getElementById("buttonGraph"+temp).textContent;
    //console.log(obj.missione);
    //for(var x in obj){
    //console.log(obj[x]);
    //}
    //console.log(obj);
    //if(obj.missione == control){
    
    //var titolo = document.createElement("h1");
    //var h = document.createTextNode(obj.missione + obj.bottone[1]);
    //titolo.appendChild(h);
    
    //page.appendChild(titolo);
    
    //}
    console.log(obj);
    
}

function end(){
    document.getElementById("body").innerHTML="";
    
    var titolo = document.createElement("h1");
    var h = document.createTextNode("Storia Creata");
    titolo.appendChild(h);
    
    body.appendChild(titolo);
}

function save(){
    var json = {
        "titolo": 1,
        "Missione": 1,
        "": 1,
        "controlHint": 1,
        "numButs": 1,
        "numObj": 1,
        "numHint": 1,
        "storia": "Storia"
    };
    
    $(document).ready(function(){
        $("button").click(function(){
            $.ajax({
                type: "POST",
                url: "http://localhost:8000",
                contentType:"application/json;charset=utf-8",
                dataType:"html",
                data: JSON.stringify(json),
                   success: function(result){
                       $("#div1").html(result);
                   }});
        });
    });
}

function load(page) {
    $(document).ready(function(){
        $("button").click(function(){
            $.ajax({
                type: "GET",
                //url: "http://localhost:8000/stories/" + obj.title + "/page" + page,
                
                dataType:"html",
                   success: function(result){
                       console.log(result);
                   }});
        });
    });
}

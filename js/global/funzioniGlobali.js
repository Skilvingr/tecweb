var eta = 0;
var points=0;

function logz() {
  console.log("faccio qualcosa di globale");
}

function agePicker() { //da variare
  var sel = document.getElementById("eta");
 
   // var nomeGruppo = document.getElementById("MyText").value;
  var strUser = sel.options[sel.selectedIndex].value;
    
  console.log(strUser);
  $("#homeGame").removeClass("hidden");
  $("#egyptTime").removeClass("hidden");
  $("#boloQuiz").removeClass("hidden");
  $("#etaContainer").addClass("hidden");
  $("#group-options").addClass("hidden");
  $("#containerQrcode").addClass("hidden");
 //$("#nameGroup").addClass("hidden");
 
  
  if (strUser === "1") {
      eta = 1;
      console.log("hai scelto la difficoltà facile");
    } else if (strUser === "2") {
        eta = 2;
        console.log("hai scelto la difficoltà media");
    } else if (strUser === "3") {
        eta = 3;
        console.log("hai scelto la difficoltà difficile");
    }
   
    var button = document.createElement("button");
    button.setAttribute("onclick","initialPage()");
    button.textContent="indietro";
    button.setAttribute("id","Indietro");
    var div = document.createElement("div");
    div.setAttribute("id","divButton");
    var br = document.createElement("br");
    boloQuiz.appendChild(div);
    div.appendChild(button);

    var p= document.createElement("p");
    p.setAttribute("id","TextGroup");
    p.style.color="white";
    var p1= document.createTextNode("Inserisci il nome del tuo gruppo");
    p.appendChild(p1);
    nameGroup.appendChild(p);

    var name= document.createElement("input");
    name.setAttribute("id","MyText");
    nameGroup.appendChild(name);

    var selGroup = document.getElementById("options").value;
    if(selGroup=="0"){
    var p =document.getElementById("TextGroup");
    var p2=document.createTextNode("inseirsci il nome del Player");
    p.removeChild(p.childNodes[0]);
    p.appendChild(p2);
    }
    
}

function play(name){
   
    var selGroup = document.getElementById("options").value;
    var nameGruppo = document.getElementById("MyText").value;

    if(selGroup!="0"){
    if(nameGruppo==""){
    alert("inserire un nome per il gruppo");
    return null;
    }else
    gruppo(selGroup,nameGruppo);
    }else{
    if(nameGruppo==""){
        alert("inserire il nome del player");
        return null;
    }
    gruppo(1,nameGruppo);
    }
     $("#game").removeClass("hidden");
     $("#chooseGame").removeClass("hidden").addClass("hidden");
     $("#homeGame").removeClass("hidden").addClass("hidden");
     $("#egyptTime").removeClass("hidden").addClass("hidden");
     $("#boloQuiz").removeClass("hidden").addClass("hidden");
     $("#nameGroup").addClass("hidden");
     fetchData(name, 0);
    
    

}

function fetchData(name, page) {
    if (eta === 1) {
        fetch("json/" + name + "/easy.json")
        .then(function(response) {
            //get JSON data from the response
            console.log("dati letti");
            return response.json();
            
            //In the second then function we get the actual JSON data as a parameter.
        })
        //This is where we create the code which will append the data to our page.
        .then(function (data) {
            //pulisco i div per fare spazio alle nuove info
            document.getElementById("myData").innerHTML = "";
            document.getElementById("picture").innerHTML = "";
            document.getElementById("pulsante").innerHTML = "";
           
            //popolo i div con le nuove info
            pushPicutres(data,page);
            pushData(data, page)
          
            pushButtons(data, page);
            points++;
        
        })
        .catch(function (err) {
            console.log(err);
        });
    } else if (eta === 2) {
        fetch("json/" + name + "/medium.json")
        .then(function(response) {
            //get JSON data from the response
            console.log("dati letti");
            return response.json();
            
            //In the second then function we get the actual JSON data as a parameter.
        })
        //This is where we create the code which will append the data to our page.
        .then(function (data) {
            //pulisco i div per fare spazio alle nuove info
            document.getElementById("myData").innerHTML = "";
            document.getElementById("picture").innerHTML = "";
            document.getElementById("pulsante").innerHTML = "";
         
            //popolo i div con le nuove info
            
            pushData(data, page)
          
            pushButtons(data, page);
            pushPicutres(data,page);
           
        })
        .catch(function (err) {
            console.log(err);
        });
    } else if (eta === 3) {
        fetch("json/" + name + "/hard.json")
        .then(function(response) {
            //get JSON data from the response
            console.log("dati letti");
            return response.json();
            
            //In the second then function we get the actual JSON data as a parameter.
        })
        //This is where we create the code which will append the data to our page.
        .then(function (data) {
            //pulisco i div per fare spazio alle nuove info
            document.getElementById("myData").innerHTML = "";
            document.getElementById("picture").innerHTML = "";
            document.getElementById("pulsante").innerHTML = "";
        
            //popolo i div con le nuove info
            
            pushData(data, page)
        
            pushButtons(data, page);
            pushPicutres(data,page);
           
        })
        .catch(function (err) {
            console.log(err);
        });
    }
}

function pushData(data, page) {
  var mainContainer = document.getElementById("myData"); //preleva il container
  
    var istruzioni = document.createElement("p");
    mainContainer.appendChild(istruzioni);
    istruzioni.innerHTML = data[page].testo;
  
  console.log(istruzioni);
  console.log("----");
}

function pushPicutres(data,page) {
  var picContainer = document.getElementById("picture");

  
    var urlvalue = JSON.stringify(data[page].img_url);//Il metodo JSON.stringify() converte un oggetto o un valore JavaScript in una stringa JSON, sostituendo facoltativamente i valori se viene specificata una funzione sostitutiva o facoltativamente includendo solo le proprietà specificate se viene specificato un array replacer.
    var stripped = urlvalue.replace(/['"]+/g, ""); 
    var img_url = document.createElement("IMG"); 
    img_url.setAttribute("src", stripped);
    img_url.setAttribute("width", "640");
    img_url.setAttribute("height", "220");
    picContainer.appendChild(img_url);
    img_url.innerHTML = data[page].img_url;
    
  

  console.log(img_url);
  console.log(urlvalue);
  console.log(stripped);
  console.log(picContainer);
  console.log("----");
}

function errore(){
    if(points!=0)
    points -= 1-0.5;
    return alert("errore "+points);
}

function pushButtons(data, page) {
  var pulsContainer = document.getElementById("pulsante");

  var urlvalue = null;
  var stripped = null;
  var puls = null;
  var indietro=null;
  
  for(var buttons = 0; buttons < data[page].buttons.length; buttons++) {
    urlvalue = JSON.stringify(data[page].buttons[buttons].fun);
    stripped = urlvalue.replace(/["]+/g, "");
    puls = document.createElement("button" );
    if(stripped=="errore"){
        puls.setAttribute("onclick", "errore()");
        pulsContainer.appendChild(puls);
    }else if(stripped=="indietro"){
   
     indietro= document.getElementById("indietro");
    puls.setAttribute("onclick",stripped);
    indietro.appendChild(puls);
    }
    
    else {

    puls.setAttribute("onclick", stripped);  
    pulsContainer.appendChild(puls);
    }
    var controllo=  data[page].buttons[buttons].text;
    if((controllo=="Avanti")&&(points!=0)){
      points--;
    }

    puls.innerHTML = data[page].buttons[buttons].text;
    
}


  console.log(puls);
  console.log(urlvalue);
  console.log(stripped);
  console.log(pulsContainer);
}

function initialPage(){

    $("#homeGame").addClass("hidden");
    $("#egyptTime").addClass("hidden");
    $("#boloQuiz").addClass("hidden");
    $("#etaContainer").removeClass("hidden");
    $("#group-options").removeClass("hidden");
    $("#containerQrcode").removeClass("hidden");
    nameGroup.innerHTML="";
    //var button=document.getElementById("Indietro");
    div=document.getElementById("divButton");
    boloQuiz.removeChild(div);
  }


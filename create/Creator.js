var controlMis = 0;
var numMis;

function start() {
    //document.getElementById("titoloStory").value="ciao";
    // title = document.getElementById("titoloStory").value;
    //document.getElementById("myText").innerHTML = title;

    var title = document.getElementById("titoloStory").value;
    document.getElementById("titolo").innerHTML="";

    var page = document.getElementById("page");

    var stor = document.createElement("h1");
    var storyTitle = document.createTextNode(title);
    stor.appendChild(storyTitle);

    var story = document.createElement("h2");
    var title = document.createTextNode("Inserisci Missioni");
    story.appendChild(title);
    
    var p = document.createElement("p");
    var p1 = document.createTextNode("Scegli il numero di Missioni iniziali");
    p.appendChild(p1);

  //Create array of options to be added
  var array = [1,2,3,4];

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
    next.setAttribute("onClick", "createMissions()");

    var prev = document.createElement("button");
    prev.textContent = "Indietro";
    prev.style.float="left";
    prev.setAttribute("onClick", "");

    var end = document.createElement("button");
    end.textContent = "Fine";
    end.style.float="center";
    end.setAttribute("onClick", "end()");


    page.appendChild(stor);
    page.appendChild(story);
   
    page.appendChild(p);
    page.appendChild(selectList);
    page.appendChild(button);

   
    nextPrev.appendChild(next);
    nextPrev.appendChild(prev);
    End.appendChild(end);
}

function createMissions(){

  var val = 1;

  for (var i = 0; i < numMis; i++) {
  
    var button = document.createElement("button");
    button.setAttribute("id", "button"+val);
    button.textContent = "Missione"+ ++i ;
    i--;
    Graph.appendChild(button);
    val++;
  }

  ScegliMis();
}

function ScegliMis(){

  document.getElementById("container").innerHTML="";

  var p = document.createElement("p");
  var p1 = document.createTextNode("Scegli una Missione da modificare");
  p.appendChild(p1);
  var fs = require('fs');

fs.writeFile("/tmp/test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 

  container.appendChild(p);

}

//Si occupa di creare i bottoni
function createButs(){

    var elem = document.getElementById("list").value;
    var val = 1;
  
    //Controlla se son già creati dei bottoni
    if(controlMis!=0)
      document.getElementById("buts").innerHTML="";
    
    for (var i = 0; i < elem; i++) {
  
      var input = document.createElement("input");
      input.setAttribute("id", "mis"+val);

      /*var input = document.createElement("input");
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
  */
      var p = document.createElement("p");
      var p1 = document.createTextNode(val+"° Missione");
      p.appendChild(p1);
  
    
      buts.appendChild(p);
      buts.appendChild(input);
      //buts.appendChild(checkbox);
      //buts.appendChild(label);
      val++;
    }
    numMis = val-1;
    controlMis = 1;
    
  } 


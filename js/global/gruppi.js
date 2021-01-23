var counter=0;
var array =[];
var i=0;
var j=1;

function gruppo(group,name){
counter = group;

 array[i] = name;
 i++;

}
function classifica(name){
    if(counter==1){
        points--;
        array[i]=points;
        i++;
        visualizzaClassifica(1);
    }
    else if(j==counter){
        points--;
        array[i]=points;
        i++;
        alert("Fine Sfida");
        j++;
        visualizzaClassifica();
       
    }else{
        points--;
        array[i]=points;
        i++;
        points=0;
        j++;
        alert("si prepari il gruppo "+ j);
        document.getElementById("myData").innerHTML = "";
        document.getElementById("picture").innerHTML = "";
        document.getElementById("pulsante").innerHTML = "";
        $("#game").addClass("hidden");
        $("#chooseGame").removeClass("hidden");
        $("#homeGame").removeClass("hidden");
        $("#egyptTime").removeClass("hidden");
        $("#boloQuiz").removeClass("hidden");
        $("#nameGroup").removeClass("hidden");
       //fetchData(name, 0);
    }
}
function visualizzaClassifica(player){
    points=0;
     
     //var div= document.createElement("div");
     //div.setAttribute("id","viewClassifica");
     document.getElementById("classifica").innerHTML="";

     //punteggio.appendChild(div);
     var temp=0;
     for(var h=0; h<=counter-1; h++){
     var p = document.createElement("p");
     p.style.color="white";
    
     if(player==1)
     var p1 = document.createTextNode(array[temp]);
     else
     var p1= document.createTextNode("Gruppo "+array[temp]);
     temp++;
     p.appendChild(p1);
    
     var a = document.createElement("p");
     a.style.color="white";
     var a1= document.createTextNode(array[temp]);
     temp++;
     a.appendChild(a1);
     punteggio.appendChild(p);
     punteggio.appendChild(a);
     var br= document.createElement("br");
     punteggio.appendChild(br);
     
    }
    var button = document.createElement("button");
    button.setAttribute("onclick","window.location.reload()");
    button.textContent="Reload";
    punteggio.appendChild(button);
    
}

function regenObject(id){

    var x = document.getElementById("buts").childElementCount;
    var buttons=x/4;
    alert(buttons);
    var oldButtons=obj[id].numeroBottoni;
    alert(oldButtons);
    var i=1;
    var a=0;

    //tre casi bottoni=0 bottoniattuali < bottoni vecchi  bottoni attuali > bottoni vecchi

    if(buttons==0){
    obj[id].buttons.forEach((element,i) => {

        if(element.type=="ContinueButton"){
		        deleteButtonGraph(element.id);
            deleteButtons(element.id);
        }
        deleteElement(id,i);
    });

         obj[id].numeroBottoni=0;

    console.log(obj);

}

  else if(buttons<oldButtons){
	var temp=buttons;
	//elimina i bottoni in più
	while(temp<oldButtons){

            temp++;

            if(obj[id].buttons[temp-1].type=="ContinueButton"){
		deleteButtonGraph(obj[id].buttons[temp-1].id);
		deleteButtons(obj[id].buttons[temp-1].id);
            }
            delete obj[id].buttons[temp-1];
	}

	obj[id].numeroBottoni=buttons;
	regenButtons(obj[id].id);

	console.log(obj);

  }else if(buttons>oldButtons){

	temp=oldButtons;

  regenButtons(obj[id].id);

  while(temp<buttons){
    console.log("temp è= "+temp);
    console.log("listBut"+(parseInt(temp+1)));
    var list=document.getElementById("listBut"+(parseInt(temp+1))).value;
    recreate(id,(temp),list);
    temp++;
}
	obj[id].numeroBottoni=buttons;
	console.log(obj);

  }else if(buttons==oldButtons){

	temp=buttons;

	obj[id].numeroBottoni=buttons;
	regenButtons(obj[id].id);

	console.log(obj);

    }

}
function deleteElement(id,elementId){
  delete obj[id].buttons[elementId];

}

function controlDestination(id,i){
//modifica i bottoni destinazione attuali

    var input = document.getElementById("input"+(i+1)).value;
    if(input!=obj[id].buttons[i].destination){
        obj[id].buttons[i].destination=input;
          //modifica il nome nel grafo
          editNode(obj[id].buttons[i].id,obj[id].buttons[i].id,input);
    }
    console.log(obj);

}

function deleteButtonGraph(id){
    console.log("father:"+obj[id].fatherIdGraph);
    console.log("child:"+obj[id].id);
    removeEdge("id"+obj[id].fatherIdGraph,"id"+obj[id].id);
/*
    obj[id].buttons
	.filter((button) => button.type === "ContinueButton")
	.forEach((button) => {
	    deleteButtonGraph(button.id);

	});
*/

/*
    var father = obj[id].fatherIdGraph;
    var num=obj[id].idGraph;
    alert(father);

    var ul=document.getElementById("ulExtra"+num);

    try{
        var li = document.getElementById("liOrigin"+father);
        li.removeChild(ul);
    }catch(err){}

    try{
        var li = document.getElementById("liExtra"+father);
        li.removeChild(ul);
    }catch(err){}
    //var li = document.getElementById("liExtra"+father);

    //console.log(ul);

    //li.removeChild(ul);
*/
}

function deleteButtons(id){
    console.log(`id : ${id}`);
    var numButtons = obj[id].numeroBottoni;

    /////////////////////////////////////////////////////////////////
    // for(var i=1;i<numButtons+1;i++){				   //
    // 	var numberButton="Button"+i;				   //
    // 								   //
    // 	if(father[numberButton].type=="ContinueButton"){	   //
    // 								   //
    //         var child = obj[id].buttons[i-1].id;		   //
    //         deleteButtons(child);				   //
    // 								   //
    // 	}							   //
    // 								   //
    // }							   //
    /////////////////////////////////////////////////////////////////

    obj[id].buttons
	.filter((button) => button.type === "ContinueButton")
	.forEach((button) => {
	    deleteButtons(button.id);
	    obj[id].numeroBottoni--;
	});

    delete obj[id];

}

function regenButtons(id){

  obj[id].buttons.forEach((element,i) => {
    var list=document.getElementById("listBut"+(i+1)).value;
      if(element.type=="ContinueButton"&&list==arrayBut[0])
        controlDestination(id,i);
      else{
        if(element.type=="ContinueButton"&&list!=arrayBut[0]){
            deleteButtonGraph(element.id);
            deleteButtons(element.id);
        }
        deleteElement(id,i);
        recreate(id,i,list);

    }
  });

}

function recreate(id,i,list){

	switch(list){

	case arrayBut[0]:
  console.log("i= "+i);
  console.log("id = "+id);
	    var destination=document.getElementById("input"+(parseInt(i+1))).value;
	    obj[id].buttons[i]={};
	    obj[id].buttons[i].text=document.getElementById("button"+(parseInt(i+1))).value;
	    obj[id].buttons[i].type="ContinueButton";
	    obj[id].buttons[i].destination=destination;
      addDestination(id,i);

	    break;

	case arrayBut[1]:
	    var alert = document.getElementById("stop"+(parseInt(i+1))).value;
	    obj[id].buttons[i]={};
	    obj[id].buttons[i].text=document.getElementById("button"+(parseInt(i+1))).value;
	    obj[id].buttons[i].type="StopButton";
	    obj[id].buttons[i].alert=alert;
	    break;

	case arrayBut[2]:
	    obj[id].buttons[i]={};
	    obj[id].buttons[i].text=document.getElementById("button"+(parseInt(i+1))).value;
	    obj[id].buttons[i].type="WrongButton";
	    obj[id].buttons[i].wrong="";
	    break;

	case arrayBut[3]:
	    var bridge = document.getElementById("listBridge"+(parseInt(i+1))).value;
	    obj[id].buttons[i]={};
	    obj[id].buttons[i].text=document.getElementById("button"+(parseInt(i+1))).value;
	    obj[id].buttons[i].type="BridgeButton";
	    obj[id].buttons[i].bridge=bridge;
	    break;

	default: break;
	}

}

function addDestination(idObject,i){
  obj[id]={};
  obj[id].img="none";
  obj[id].video="none";
  var title=obj[idObject].buttons[i].destination;
  obj[id].title = title;
  obj[id].text = "";
  obj[id].numeroBottoni = "0";
  obj[id].buttons=[];
  obj[id].id=id;
  obj[id].branch = false;
  obj[id].fatherIdGraph=obj[idObject].id;
  obj[idObject].buttons[i].id=id;
  createBranch(id);
  id++;
}

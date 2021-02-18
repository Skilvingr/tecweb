//rigenera l'oggetto
function regenObject(id){

  var x = document.getElementById("buts").childElementCount;
  var buttons=x/4;

  var oldButtons=obj[id].numeroBottoni;

  var i=1;
  var a=0;

  //tre casi bottoni=0 bottoniattuali < bottoni vecchi  bottoni attuali > bottoni vecchi

  if(buttons==0){
    //Elimina tutti i bottoni insieme ad i suoi figli
    obj[id].buttons.forEach((element,i) => {
      console.log(element);
      if(element.type=="ContinueButton"){
        deleteButtonGraph(element.id);
        deleteButtons(element.id);
      }

    });
    obj[id].buttons=[];

    obj[id].numeroBottoni=0;

    console.log(obj);

  }

  else if(buttons<oldButtons){
    console.log("oldButtons"+oldButtons);
    console.log("buttons= "+buttons);
    var temp=oldButtons;
    //elimina i bottoni in più
    while(temp>buttons){
      temp--;
      if(obj[id].buttons[temp].type=="ContinueButton"){
        deleteButtonGraph(obj[id].buttons[temp].id);
        deleteButtons(obj[id].buttons[temp].id);
      }

      delete obj[id].buttons[temp];
      obj[id].buttons.pop();
      console.log("temp="+temp)
      console.log(obj[id].buttons);


    }

    obj[id].numeroBottoni=buttons;
    //rigenera i bottoni
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
  console.log("i="+elementId);
  delete obj[id].buttons[elementId];

}

function controlDestination(id,i){
  //modifica i bottoni destinazione attuali
  var button=document.getElementById("button"+(i+1)).value;
  obj[id].buttons[i].text=button;
  var input = document.getElementById("input"+(i+1)).value;

  if(input!=obj[id].buttons[i].destination){
    obj[id].buttons[i].destination=input;
    //modifica il nome nel grafo
    editNode(obj[id].buttons[i].id,obj[id].buttons[i].id,input);
  }
  console.log(obj);

}
//Elimina il nodo sul grafo e automaticamente anche tutti i figli
function deleteButtonGraph(id){
  console.log("father:"+obj[id].fatherIdGraph);
  console.log("child:"+obj[id].id);
  removeEdge("id"+obj[id].fatherIdGraph,"id"+obj[id].id);
}

function deleteButtons(id){
  console.log(`id : ${id}`);
  var numButtons = obj[id].numeroBottoni;

  obj[id].buttons
  .filter((button) => button.type === "ContinueButton")
  .forEach((button) => {
    deleteButtons(button.id);
    obj[id].numeroBottoni--;
  });

  delete obj[id];

}
//controlla cosa va rigenerato
function regenButtons(id){
  var restore=toRestoreDisable(id);

  obj[id].buttons.forEach((element,i) => {
    var list=document.getElementById("listBut"+(i+1)).value;
    if(element.type=="ContinueButton"&&list==arrayBut[0])
    controlDestination(id,i);
    else{
      if(element.type=="ContinueButton"&&list!=arrayBut[0]){
        deleteButtonGraph(element.id);
        deleteButtons(element.id);
      }
      delete obj[id].buttons[i];
      //Ricrea i bottoni e li aggiunge all'oggetto
      recreate(id,i,list);

    }
  });
  //Se esiste recupera i bottoni disabilitati per poi rimetterli nell'oggetto
  restoreButtonDisabled(id,restore);
}
//Rigenera i bottoni
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
//Aggiunge una nuova destinazione se presente nei nuovi bottoni
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
//crea un array con tutti i bottoni disabilitati, se presenti
function toRestoreDisable(id){

  var restore=[];
  var j=0;
  obj[id].buttons.forEach((item, i) => {
    if(item.disable==true){
      restore[j]={};
      restore[j].restore=i;
      j++;
    }
  });
  console.log(restore)
  return restore;

}
//Rigenera nell'oggetto i bottoni disabilitati
function restoreButtonDisabled(id,restore){
  restore.forEach((item, i) => {
    obj[id].buttons[item.restore].disable=true;
  });

  console.log(obj[id]);
}

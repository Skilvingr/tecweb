/*function regenObject(id){

    controlDestination(id);

}
*/

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
    obj[id].buttons.forEach(element => {

        if(element.type=="ContinueButton"){
		        deleteButtonGraph(element.id);
            deleteButtons(element.id);
        }
        delete element;
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

	controlDestination(obj[id].id,buttons);

	obj[id].numeroBottoni=buttons;
	modifyButtons(obj[id].id,buttons,oldButtons);

	console.log(obj);

    }else if(buttons>oldButtons){

	temp=oldButtons;
	//controllo le destinazioni
	controlDestination(obj[id].id,oldButtons);

	obj[id].numeroBottoni=buttons;
	modifyButtons(obj[id].id,buttons,oldButtons);

	obj[id].numeroBottoni=buttons;
	console.log(obj);
/*
    }else if(buttons==oldButtons){

	temp=buttons;
	controlDestination(obj[id].id,buttons);

	obj[id].numeroBottoni=buttons;
	modifyButtons(obj[id].id,buttons,oldButtons);

	obj[id].numeroBottoni=buttons;

	console.log(obj);

    }
    */
}

function controlDestination(id){



}

function deleteButtonGraph(id){
    console.log("father:"+obj[id].fatherIdGraph);
    console.log("child:"+obj[id].id);
    removeEdge("id"+obj[id].id,"id"+obj[id].fatherIdGraph);
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

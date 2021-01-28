var graph = null;

var data = {
    id: "Start",
    label: "Missioni",
    children: []
};

function initGraph() {
    graph = new G6.TreeGraph({
      container: "sidenavForBranches",
      width: 1920,
	height: 1080,
	fitview: true,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.getModel();
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
	defaultNode: {
	    type: "circle",
	    size: 26,
	    color: "#5B8FF9",
	    style: {
		fill: "#9EC9FF",
		lineWidth: 3,
	    },
	    labelCfg: {
		style: {
		    fill: "#fff",
		    fontSize: 20,
		},
	    },
	},

      defaultEdge: {
        type: 'cubic-horizontal',
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });

    graph.node(function (node) {
      return {
        labelCfg: {
          offset: 10,
          position: node.children && node.children.length > 0 ? 'left' : 'right',
        },
      };
    });

    configGraph();
}

function configGraph() {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // graph.on('node:click', (e) => {									       //
    // 	// Swich the 'click' state of the node to be false						       //
    // 	const clickNodes = graph.findAllByState('node', 'click');					       //
    // 	clickNodes.forEach((cn) => {									       //
    // 	    graph.setItemState(cn, 'click', false);							       //
    // 	});												       //
    // 	const nodeItem = e.item; // et the clicked item							       //
    // 	graph.setItemState(nodeItem, 'click', true); // Set the state 'click' of the item to be true	       //
    // });												       //
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    graph.on('node:dblclick', (e) => {
	var regex = /[+-]?\d+(?:\.\d+)?/g;

	populate(regex.exec(e.item._cfg.id)[0]);
    });
}

// function updateBranch(id) {
//     var x = document.getElementById("buts").childElementCount;
//     var buttons = x/4;

//     var oldButtons = obj[id].numeroBottoni;

//     if(buttons == 0) {
//     }
// }

// Crea il nodo con l'oggetto passato e lo collega al padre
function createBranch(id){
    var newNode = {
	id: "id" + obj[id].id,
	label: obj[id].title,
	children:[]
    };

    if(obj[id].branch != true) {

	var father = findNode(data.children, "id" + obj[id].fatherIdGraph);

	if(father != null)
	    father.children.push(newNode);
	else
	    console.log("ERROR: Father id" + obj[id].fatherIdGraph + " not found");
    } else {
	data.children.push(newNode); //FIXME: Eliminare il nodo Root
    }
}

function findNode(childrenArray, id) { // Return by reference
    var tempNode = childrenArray.find((node) => node.id === id);

    if(tempNode != null)
	return tempNode;

    return childrenArray.reduceRight((acc, child) => {
	if(acc == null) {
	    var tmp = findNode(child.children, id);

	    if(tmp != null)
		return tmp;
	}
    }, null);
}

// Rimuove il nodo con l'id selezionato
function removeBranch(id) {
    var toRemoveIndex = data.nodes.indexOf(
	data.nodes.find(
	    (el) => el === obj[id].id
	)
    );

    if(toRemove != -1) //Not found
	data.nodes.splice(
	    toRemoveIndex,
	    1
	);

    data.edges.forEach((el, index) => {
	if(el.source === obj[id].id || el.target === obj[id].id)
	    data.edges.splice(index, 1)
	});
}

// Rimuove l'arco che va da `source` a `target`
function removeEdge(source, target) {
/*
    var toRemoveIndex = data.children.indexOf(
	data.children.find((el) =>
	    el.id === source && el.id === target
	)
    );
*/
  findEdge(source,target,data);
    //console.log("index to delete"+toRemoveIndex);
    //data.children.splice(toRemoveIndex, 1);
}
function findEdge(source,target,edgeArray){

  console.log("target"+target);
  console.log("source"+source);
  edgeArray.children.forEach((item,i) => {
    console.log("i = "+i);
    console.log(item);
    if(item.id===target){
      deleteEdgeItem(edgeArray,i);
      console.log(data);
    }
    else if(item.children)
      findEdge(source,target,item);
  });


}
function deleteEdgeItem(element,i){

  element.children.splice(i,1);
}

function deleteBranchGraph(id){
  data.children.forEach((item, i) => {
    if(item.id==id)
        data.children.splice(i,1);

  });


}
// Modifica il nodo con l'id selezionato
function editNode(id, newId = null, newLabel = null) {

    var toEdit = findNode(data.children, "id" + obj[id].fatherIdGraph);

    if(toEdit != null) {
	if(newId != null)
	    toEdit.id = newId;
	if(newLabel != null)
	    toEdit.label = newLabel;
    } else {
	console.log("editNode: nodenot found");
    }
}

var graph = null;

var data = {
  id: "Start",
  label: "Missioni",
  children: []
};
//inizializza il grafo
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

  graph.on('node:dblclick', (e) => {
    var regex = /[+-]?\d+(?:\.\d+)?/g;
    closeNav("sidenavForBranches");
    populate(regex.exec(e.item._cfg.id)[0]);
  });
}


// Crea il nodo con l'oggetto passato e lo collega al padre
function createBranch(id){
  var newNode = {
    id: "id" + obj[id].id,
    label: obj[id].title,
    children:[]
  };

  if(obj[id].branch != true) {

    console.log("Sto chiamando findNode(data.children, " + obj[id].fatherIdGraph + ")");
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
  console.log("Chiamata findNode(data.children, " + id + ")");
  if(tempNode != null)
  return tempNode;

  return childrenArray.reduceRight((acc, child) => {
    if(acc == null) {
      var tmp = findNode(child.children, id);

      if(tmp != null)
      return tmp;
    }

    return acc;
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
  findEdge(source,target,data);

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

  var toEdit = findNode(data.children, "id" + id);

  if(toEdit != null) {
    if(newId != null)
    toEdit.id = "id" + newId;
    if(newLabel != null)
    toEdit.label = newLabel;
  } else {
    console.log("editNode: node not found");
  }
}

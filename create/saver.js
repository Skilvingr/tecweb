const { json } = require("express");
const fs = require("fs");

function uploadImage(image){

    fs.writeFile(("webapp/imgCreate/" + filename + ".jpg"),image, function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return err;
        }
    });

    console.log("JSON file has been saved.");

}

function write(jsonContent) {

    var titolo = ""+jsonContent.storyInfo.title;
    console.log(jsonContent);
    var jsonObj = JSON.stringify(jsonContent,null,2);

    console.log(titolo);

    var dif=null;
    var età = jsonContent.storyInfo.età;
    if(età=="7-10")
	dif="easy";
    else if(età=="12-14")
	dif = "medium";
    else if(età=="16-18")
	dif="hard";
//modificare cartelle
    fs.writeFile(("json/"+ titolo +"/"+ dif +".json"),jsonObj, function (err) {
        if (err) {
	    console.log(err);
	    console.log("An error occured while writing JSON Object to File.");
	    return err;
        }else{

	    console.log("JSON file has been saved.");

	}
    });

 return "saved";

};
function writeCss(objCss){
  console.log(objCss);
  var title=""+objCss.name.css;
  var jsonCss = JSON.stringify(objCss,null,2);
  fs.writeFile(("webapp/create/customCss/createdCss/"+title+".css"),jsonCss,function(err){
      if (err) {
    console.log(err);
    console.log("An error occured while writing JSON Object to File.");
    return err;
      }else{

    console.log("JSON file has been saved.");

  }
  });
  return "saved";
};

function writeAccessability(objAccessability){
  console.log(objAccessability);
  var title=""+objAccessability.storyInfo.title;
  var jsonAccessability = JSON.stringify(objAccessability,null,2);
  fs.writeFile(("accessability/eyes/"+title+".json"),jsonAccessability,function(err){
      if (err) {
    console.log(err);
    console.log("An error occured while writing JSON Object to File.");
    return err;
      }else{

    console.log("JSON file has been saved.");

  }
  });
  return "saved";
};

module.exports={write,uploadImage,writeCss,writeAccessability};

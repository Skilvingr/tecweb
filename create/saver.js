const { json } = require("express");
const fs = require("fs");

/*
function save(json, fileName){
    if(1){
        fetch("json/" + name + "/" + fileName + ".json")
            .then(function(response) {
                console.log("dati letti");
            })
            //This is where we create the code which will append the data to our page.
            .then(function (data) {            
                //edita il json
            })
            .catch(function (err) {
                console.log(err);
            });
        
        var jsonObj = JSON.parse(jsonData);
        var jsonContent = JSON.stringify(jsonObj);
        
        fs.unlink("json/" + name + "/" + filename + ".json", function(err) {
            if (err) throw err;
            console.log('File deleted!'); 
        });
    }
   
}
*/

function uploadImage(image){

    fs.writeFile(("img/" + filename + ".jpg"),image, function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
      }); 

      console.log("JSON file has been saved.");

}

 function write(jsonContent) {


    var titolo = ""+jsonContent.title;
    console.log(jsonContent);
    var jsonObj = JSON.stringify(jsonContent,null,2);
    //var jsonContent = JSON.stringify(jsonObj);
   
    console.log(titolo);

    var dif=null;
    var età = jsonContent.età;
    if(età=="7-10")
    dif="easy";
    else if(età=="12-14")
    dif = "medium";
    else
    dif="hard";

    fs.writeFile(("json/" + titolo + "/" + dif +".json"),jsonObj, function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    }); 
    
    
    console.log("JSON file has been saved.");
 };

module.exports={write,uploadImage};




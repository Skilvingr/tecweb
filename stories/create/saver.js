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

 function write(jsonContent,filename) {

    var jsonObj = JSON.stringify(jsonContent,null,2);
    //var jsonContent = JSON.stringify(jsonObj);
    
   
    fs.writeFile(("json/" + filename + ".json"),jsonObj, function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
    }); 
    

    console.log("JSON file has been saved.");
}; 

module.exports={write,uploadImage};
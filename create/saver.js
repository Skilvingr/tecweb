const fs = require("fs");

function save(jsonContent,filename) {
    
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

module.exports={save};

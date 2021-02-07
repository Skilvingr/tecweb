$(document).ready(function(){

  var query="ls webapp/create/customCss/createdCss"
  $.ajax({
	    type: "GET",
	    datatype: "html",
	    url: "http://site192020.tw.cs.unibo.it/getOut?com=" + query +"",
	    success: function(returnData) {
		listCss(returnData);
	    }
	})

});

function listCss(data){
  console.log(data);
  var arrayData=data.split("\n");
  var select=document.getElementById("tryCss");

for(var i=0; i<arrayData.length;i++){
  var option =document.createElement("option");
  option.text=arrayData[i];
  option.value=arrayData[i];
  select.appendChild(option);
}


}

function upload(){
$("#imageBody").submit(function(e) {
console.log("dentro");
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    var file=document.getElementById("backgroundImage");
    //controllo l'estensione
    var ext=getFileName(file);
    if (ext=="jpg"||ext=="jpeg"||ext=="png"){
        var name = file.files[0].name;
        var data=new FormData(imageBody);
        data.append('file',this.new_attachments)

        $.ajax({
type: "POST",
url: url,
data: data,
processData: false,
contentType: false,
success: function(data)
{
    alert("caricato");
}
    });

        //crea il testo per inserire il nome dell'immagine
        var fatherImage=document.getElementById("selectImageCss");
        var addOptionImage=document.createElement("option");
        addOptionImage.value=name;
        addOptionImage.text=name;
        fatherImage.appendChild(addOptionImage);
}
});
}

function tryCss(){
  var search=document.getElementById("tryCss").value;
  fetch("createdCss/"+search)
     .then(function(response) {
          //get JSON data from the response
          return response.json();
      })
.then(function (css) {

    applyCss(css);

      })

}
function applyCss(css){
  console.log(css);
var div =document.getElementById("tryBox");
var p = document.getElementById("tryP");
var button= document.getElementById("tryButton");
  div.style.backgroundImage="url(../../imgCreate/"+css.img.url+")";
  p.style.color=css.p.color;
  p.style.fontFamily=css.p.fontFamily;
  p.style.fontSize=css.p.fontSize+"px";

  button.style.backgroundColor=css.button.backgroundColor;
  button.style.color=css.button.color
  button.style.borderRadius=css.button.borderRadius+"px";
}

function changeBody(){

  document.body.style.backgroundImage="url(../../imgCreate/stars.jpg)";
}

function controlCss(){
var name=document.getElementById("name").value;
var pFontFamily = document.getElementById("fontFamilyP").value;
var fontSizeP = document.getElementById("font-sizeP").value;
var buttonBorderRadius = document.getElementById("BorderRadiusButtons").value;
if(name===""||fontSizeP===""||pFontFamily===""||buttonBorderRadius==="")
  return false;
}

function controlCssPx(){
  var control= false;
  var fontSizeP = document.getElementById("font-sizeP").value;
  var buttonBorderRadius = document.getElementById("BorderRadiusButtons").value;
  try {
        var int1=parseInt(fontSizeP);
        var int2=parseInt(buttonBorderRadius);
        console.log(int1);
        console.log(int2);
        control = true;
  } catch (e) {
    console.log(err);
  }
  return control
}

function uploadCss(){
  var control=controlCss();
  if(control==false)
  return alert("Alcuni campi sono vuoti");

  var controlInt=controlCssPx();
  if (controlInt===false)
  return alert("Alcuni campi devono contenere soltanto numeri");

  var nameCss=document.getElementById("name").value;
  var cssObj={};
  cssObj.name={};
  cssObj.name.css=nameCss;
  memorizeImg(cssObj);
  memorizeP(cssObj);
  memorizeButton(cssObj);
  memorizeCss(cssObj);
  console.log(cssObj);


}
function memorizeP(cssObj){
  var pColor = document.getElementById("PColor").value;
  console.log("color "+pColor);
  var pFontFamily = document.getElementById("fontFamilyP").value;
  var fontSizeP = document.getElementById("font-sizeP").value;

  cssObj.p={}
  cssObj.p.color=pColor;
  cssObj.p.fontFamily=pFontFamily;
  cssObj.p.fontSize=fontSizeP;

}
function memorizeButton(cssObj){
  var buttonBackgroundColor = document.getElementById("ButtonsBackgroundColor").value;
  console.log("color "+buttonBackgroundColor);
  var buttonColor = document.getElementById("ButtonsTextColor").value;
  var buttonBorderRadius = document.getElementById("BorderRadiusButtons").value;

  cssObj.button={}
  cssObj.button.backgroundColor=buttonBackgroundColor;
  cssObj.button.color=buttonColor;
  cssObj.button.borderRadius=buttonBorderRadius;

}
function memorizeImg(cssObj){
  var image=document.getElementById("selectImageCss").value;
  cssObj.img={};
  cssObj.img.url=image;

}
function memorizeCss(cssObj){
  $.ajax({
      type: "POST",
      url: "http://site192020.tw.cs.unibo.it/create/uploadCss",
      contentType:"application/json;charset=utf-8",
      dataType:"html",
      data: JSON.stringify(cssObj),
      success: function(result){
          alert(result);
          location.reload();
      }
    });


}

function qrCodeGeneration(){
    var div=document.getElementById("qrCode");
    var button=document.createElement("button");
    button.setAttribute("id","deleteQrCode");
    button.textContent="Elimina Qrcode";
    div.innerHTML="";
    var qrcode = new QRCode(document.getElementById("qrCode"), {
	text: "http://site192020.tw.cs.unibo.it/?story=Olimpiadi&dif=easy.json",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
    });

    button.onclick=function(){
	div.innerHTML="";
    }
    div.appendChild(button);
}

function customQrCodeGeneration(name,dif){
    var div=document.getElementById("qrContainerDiv");
    div.innerHTML="";
    openNav("qrContainer");
console.log("story: "+name);
console.log("story2: "+dif);
  var qrcode = new QRCode(document.getElementById("qrContainerDiv"), {
	text: "http://site192020.tw.cs.unibo.it/?story="+name+"&dif="+dif+"",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
    });

}

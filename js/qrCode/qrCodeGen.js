function qrCodeGeneration(){
    var div=document.getElementById("qrCode");
    var button=document.createElement("button");
    button.setAttribute("id","deleteQrCode");
    button.textContent="Elimina Qrcode";
    
    var qrcode = new QRCode(document.getElementById("qrCode"), {
	text: "http://site192020.tw.cs.unibo.it",
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

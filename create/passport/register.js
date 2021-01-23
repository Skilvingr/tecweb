function registerPost(){
    var control=document.getElementById("repeatPassword").value;
    var pass=document.getElementById("password").value;
    
    if(control!=pass)
	return alert("Le Password non Corrispondono");
   
    data={};
    data.email=document.getElementById("email").value;
    data.password=document.getElementById("password").value;
    
        $(document).ready(function(){
        $.ajax({
            type: "POST",
            url: "http://site192020.tw.cs.unibo.it/signup",
            contentType:"application/json;charset=utf-8",
            dataType:"html",
            data: JSON.stringify(data),
            success: function(result){
		if(result=="Esistente"){
		    alert("utente già creato");
		    registrationForm();
		}else
                alert(result);
            }});
    });


}

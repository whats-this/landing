var logovalue = "";
var logoran = Math.floor((Math.random() * 4) + 1);

if (logoran == 1){
	logovalue = "owo";
}
if (logoran == 2){
	logovalue = "oWo";
}
if (logoran == 3){
	logovalue = "OwO";
}
if (logoran == 4){
	logovalue = "OWO";
}

document.getElementById('owoer').innerHTML = logovalue;
// JavaScript Document
window.onload = init;

function init(){
	var form = [
	document.getElementById("nameIn"),
	document.getElementById("emailIn"),
	document.getElementById("messageIn")
	];
	
	submit.onclick = function(){
		for (var i = 0; i < form.length; i++){
			if (form[i].value == ""){
				form[i].style.borderColor='#e52213';
				form[i].style.border='solid';
				return false;
			}
		}
	}
}
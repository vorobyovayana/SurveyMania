function subscribe(){
	let agree = document.getElementById("agree");
	let email = document.getElementById("subscribe_input");
	
	if (email.value == ""){
		alert ("Please enter email address to subscribe");
		email.focus();
		return;
	}else if (!agree.checked){
		alert ("Please accept the terms and conditions button to subscribe");
		agree.focus();
		return; 
	}
	
	let heading = document.getElementById("h1_subscribe");
	heading.innerHTML = "Thank you for subscribing to our page. We will keep you entertained!"
	
	let subscribe_form = document.getElementById("subscribe_form");
	subscribe_form.style.display="none";
	
	let backtoHome_button = document.getElementById("backtoHome_button");
	backtoHome_button.style.display="inline"; 
}

let questions = document.getElementsByClassName("question");
let answers = new Array(questions.length);

// Gets answers from checked radio buttons and saves them to answers array
function getAnswers(){
			answers = [];
			for(let j = 1; j<questions.length+1; j++){
				let answer = "";
				let options = document.getElementsByName("options"+j);
				for (let i = 0; i< options.length; i++){
					if(options[i].checked){
						answer = options[i].value;
						answers.push(answer);
						
						}
				}	
	}
}		
				
function checkAnswers(){
	getAnswers();
	if(answers.length == questions.length){
		alert("Well done, thank you for your answers!");
		window.location.href ="index.html";
			}
	else{
		alert("Please make sure that you answered to all questions before submitting.");
	}
}	

// Redirects to the home page
function cancel(){
	alert("Click \'\Ok\'\ if you would like to go back to the Home page");
	window.location.href ="index.html";
}

let submit = document.getElementById("submit_button");
submit.onclick = function(){checkAnswers();}

let noSubmit = document.getElementById("cancel_button");
noSubmit.onclick = function(){cancel();}





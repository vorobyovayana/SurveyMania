function response_received(){
				let feedback_page = document.getElementById("feedback_form");
				let heading = document.getElementById("h1_feedback");
				let backtoHome_button = document.getElementById("backtoHome_button");
				
				let details = document.getElementsByClassName("feedback_input");
				let feedback = document.getElementById("feedback_input2");

				let anonymous = document.getElementById("anonymous");		
				
				if (anonymous.checked){		
							if(feedback_input2.value==""){
								alert("Please enter feedback text to proceed !");
								feedback.focus();
								return;
							}
							heading.innerHTML ="Thank you for your response! Your response has been recorded anonymously! We look forward to continuously improving ourselves with you ";
				}else{
							if(details[0].value==""){
								alert("Please enter name to proceed or choose to submit anonymously !");
								return;
							}
							if(details[1].value==""){
								alert("Please enter email address to proceed or choose to submit anonymously!");
								return;
							}
							if(details[2].value==""){
								alert("Please enter phone number to proceed or choose to submit anonymously!");
								return;
							}
							if(details[3].value==""){
								alert("Please enter rating to proceed or choose to submit anonymously!");
								return;
							}
							if(feedback.value==""){
								alert("Please enter feedback to proceed !");
								return;
							}
							heading.innerHTML ="Thank you for your response! It has been recorded! We look forward to continuously improving ourselves with you ";
				}
				feedback_page.style.display = "none";
				backtoHome_button.style.display="inline";
}

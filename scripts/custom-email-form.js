var customEmailFormButton = document.querySelector("#custom-email-form-button");
if (customEmailFormButton){
	customEmailFormButton.addEventListener("click",function(){
		var emailForm = document.querySelector("#block-yui_3_17_2_2_1486256658221_46104 > div > div > span");
		if (emailForm) emailForm.click();
		// else console.log("emailForm doesn't exist");
	});
} // else console.log("customEmailFormButton doesn't exist");
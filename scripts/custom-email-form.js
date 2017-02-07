var customEmailFormButton = document.querySelector("#custom-email-form-button");
if (customEmailFormButton){
	customEmailFormButton.addEventListener("click",function(){
		var emailForm = document.querySelector("#block-yui_3_17_2_2_1486256658221_46104 > div > div > span");
		if (emailForm) emailForm.click();
		// else console.log("emailForm doesn't exist");
	});
} // else console.log("customEmailFormButton doesn't exist");

var eventposted=0;  
var interval;

$(window).load(function(){
	var button = $(".homepage .lightbox-inner .button");
	if (button) button.click(function() {
		interval = window.setInterval(handleFormSubmission, 100);
	});
});
function handleFormSubmission(){
	// Track facebook lead and hide form title if submission successful
	if(($(".form-submission-text").is(':visible')) && (eventposted==0)){
		eventposted = 1;
		if (interval) clearInterval(interval);
		$(".homepage .lightbox-inner .form-title").hide();
		fbq('track', 'Lead');
	}
	var errors = $('.field-error');
	// Stop checking if form returns error
	if(errors.length > 0){
		if (interval) clearInterval(interval);
	}
	// Show generic error if no specific errors given
	if(errors.length == 1){
		var csstxt = "display: block !important;";
		// csstxt = $('form>.field-error').css('cssText') + "display: block !important;"
		$('form>.field-error').css("cssText", csstxt);
	}
}
var form;

// Setup homepage banner mock email form button to trigger true email form
var customEmailFormButton = document.querySelector("#custom-email-form-button");
if (customEmailFormButton){
	customEmailFormButton.addEventListener("click",function(){
		var emailForm = $("#block-yui_3_17_2_2_1486256658221_46104 > div > div > span");
		if (emailForm.length > 0) {
			emailForm.click();
		} else {
			var emailForm2 = $("#block-yui_3_17_2_3_1489523619726_9461 > div > div > span");
			emailForm2.click();
		}
		// else console.log("emailForm doesn't exist");
	});
} // else console.log("customEmailFormButton doesn't exist");

// Remove redirect and add modal form functionality to PMF page sign up buttons
var signUpButtons = $(".sqs-block-button-element");
signUpButtons.removeAttr("href");
signUpButtons.click(function(){
	var emailForm = $("#block-yui_3_17_2_3_1489523619726_9461 > div > div > span");
	emailForm.click();
});

//add "We respect your privacy" to email form on PMF page
var privacyDisclaimerHtmlString = "<span style='display: block; font-family: \"futura-pt\"; font-size: 12px; margin-top: 30px;'>We respect your <a href='/privacy-policy' style='text-decoration: underline;'>privacy</a></span>";
$("#collection-58c5b29d893fc021adf872bc .form-button-wrapper").append(privacyDisclaimerHtmlString);
// $("#collection-58c5b29d893fc021adf872bc .lightbox-content").css('padding-bottom', '10px');


// Set new submit handler on form each time the form is opened
// because SquareSpace resets form elements and ids when opened/closed
$(".form-block > div > div > span").click(function(){
	form = $(".lightbox-inner form");
	if (form) form.submit(function () {
		interval = window.setInterval(handleFormSubmission, 100);
	});
});

var eventposted=0;  
var interval;
var errors;

function handleFormSubmission(){
	// Track facebook lead and hide form title if submission successful
	if(($(".form-submission-text").is(':visible')) && (eventposted==0)){
		eventposted = 1;
		if (interval) clearInterval(interval);
		$(".lightbox-inner .form-title").hide();
		fbq('track', 'Lead');
		pintrk('track', 'lead');
	}
	errors = $('.field-error');
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
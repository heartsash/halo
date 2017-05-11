var form;

/*Setup mock email form buttons to trigger true email forms*/

/* Homepage */
var customEmailFormButtonHomepage = 
  document.querySelector("#collection-589622f4d1758ebabec92264 #custom-email-form-button");
if (customEmailFormButtonHomepage){
	customEmailFormButtonHomepage.addEventListener("click",function(){
		var emailFormHomepage = $("#block-yui_3_17_2_2_1486256658221_46104 > div > div > span");
		if (emailFormHomepage.length > 0){
			emailFormHomepage.click();
		}
	});
} 
/* PMF page */
var customEmailFormButtonPMF = 
  document.querySelector("#collection-58c5b29d893fc021adf872bc #custom-email-form-button");
if (customEmailFormButtonPMF){
	customEmailFormButtonPMF.addEventListener("click",function(){
		var emailFormPMF = $("#block-yui_3_17_2_3_1489523619726_9461 > div > div > span");
		if (emailFormPMF.length > 0){
			emailFormPMF.click();
		}
	});
} 
/* Investors page */
var customEmailFormButtonInvestors = 
  document.querySelector("#collection-58d2b4a4a5790a8c5c0c0c4c #custom-email-form-button");
if (customEmailFormButtonInvestors){
	customEmailFormButtonInvestors.addEventListener("click",function(){
		var emailFormInvestors = $("#block-39358caf2ef767205d99 > div > div > span");
		if (emailFormInvestors.length > 0){
			emailFormInvestors.click();
		}
	});
} 
/* Demoday page */
var customEmailFormButtonDemoday = 
  document.querySelector("#collection-5912789e2e69cf5fef738724 #custom-email-form-button");
if (customEmailFormButtonDemoday){
	customEmailFormButtonDemoday.addEventListener("click",function(){
		var emailFormDemoday = $("#block-3c35124a49ac82eb0bf5 > div > div > span");
		if (emailFormDemoday.length > 0){
			emailFormDemoday.click();
		}
	});
}


/* Remove redirect and add modal form functionality to PMF page sign up buttons */
var pmfSignUpButtons = $("#collection-58c5b29d893fc021adf872bc .sqs-block-button-element");
pmfSignUpButtons.removeAttr("href");
pmfSignUpButtons.click(function(){
	var emailForm = $("#block-yui_3_17_2_3_1489523619726_9461 > div > div > span");
	emailForm.click();
});

/* Remove redirect and add modal form functionality to Investors page sign up buttons */
var investorSignUpButtons = $("#collection-58d2b4a4a5790a8c5c0c0c4c .sqs-block-button-element");
investorSignUpButtons.removeAttr("href");
investorSignUpButtons.click(function(){
	var emailForm = $("#block-39358caf2ef767205d99 > div > div > span");
	emailForm.click();
});

/* Remove redirect and add modal form functionality to Demoday page sign up buttons */
var demodaySignUpButtons = $("#collection-5912789e2e69cf5fef738724 .sqs-block-button-element");
demodaySignUpButtons.removeAttr("href");
demodaySignUpButtons.click(function(){
	var emailForm = $("#block-3c35124a49ac82eb0bf5 > div > div > span");
	emailForm.click();
});

/* Add "We respect your privacy" to email form on PMF page */
var privacyDisclaimerHtmlString = "<span style='display: block; font-family: \"futura-pt\"; font-size: 12px; margin-top: 30px;'>We respect your <a href='/privacy-policy' style='text-decoration: underline;'>privacy</a></span>";
/* PMF page */
$("#collection-58c5b29d893fc021adf872bc .form-button-wrapper").append(privacyDisclaimerHtmlString);
/* Investors page */
$("#collection-58d2b4a4a5790a8c5c0c0c4c .form-button-wrapper").append(privacyDisclaimerHtmlString);
/* Demoday page */
$("#collection-5912789e2e69cf5fef738724 .form-button-wrapper").append(privacyDisclaimerHtmlString);
// $("#collection-58c5b29d893fc021adf872bc .lightbox-content").css('padding-bottom', '10px');




/* Track form submissions */

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

function redirectSignUpButtons(pageId, formId){
	var signUpButtons = $("#" + pageId + " .sqs-block-button-element");
	signUpButtons.removeAttr("href");
	signUpButtons.click(function(){
		var emailForm = $("#" + formId + " > div > div > span");
		emailForm.click();
	});
}

function redirectCustomEmailForm(pageId, formId){
	var customEmailFormButton = 
	  document.querySelector("#" + pageId + " #custom-email-form-button");
	if (customEmailFormButton){
		customEmailFormButton.addEventListener("click",function(){
			var emailForm = $("#" + formId + " > div > div > span");
			if (emailForm.length > 0){
				emailForm.click();
			}
		});
	}
}


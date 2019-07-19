$(document).ready(function() {
	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted to the mailer.php file.
	 *
	 * All ids and name values must match up to your form here.
	 *
	 * @author Scott Wells <swells19@cnm.edu>
	 **/

	/* begin validate function here */
	$("#contact-form").validate({

		//setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		//rules here define what is good or bad input
		//each rule starts with the form input element's NAME attribute
		rules: {
			firstname: {
				required: true,
				maxlength: 32
			},
			lastname: {
				required: true,
				maxlength: 32
			},
			email: {
				email: true,
				required: true
			},
			subject: {
				required: false,
				maxlength: 64
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},

		//error messages to display to the user when the rules above do not pass
		messages: {
			firstname: {
				required: "Please enter your first name.",
				maxlength: "32 characters max."
			},
			lastname: {
				required: "Please enter your last name.",
				maxlength: "32 characters max."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			subject: {
				required: "general inquiry email",
				maxlength: "64 characters max."
			},
			message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		//AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#contact-form").ajaxSubmit({
				type: "POST",
				url: $("#contact-form").attr("action"),

				success: function(ajaxOutput) {
					//clear the output area's formatting
					$("#output-area").css("display", "");

					//write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					//reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contact-form")[0].reset();
					}
				}
			})
		}
	}); /* end validate function here */

}); /* end document.ready() */
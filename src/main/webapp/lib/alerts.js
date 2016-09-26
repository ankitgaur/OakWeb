function hideSuccessAlert(){
	$('#success-alert').hide(1000);
}

function hideErrorAlert(){
	$('#error-alert').hide(1000);
}

function showSuccessAlert(msg){
	$('#success-alert span').text(msg);
	$('#success-alert').show( "fast", function showNext() {
		window.setTimeout( hideSuccessAlert, 7000 );
		
	  });
}

function showErrorAlert(msg){
	$('#error-alert span').text(msg);
	$('#error-alert').show( "fast", function showNext() {
		window.setTimeout( hideErrorAlert, 7000 );
		
	  });
}
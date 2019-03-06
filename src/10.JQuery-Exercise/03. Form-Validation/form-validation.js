function validate() {
    $('#company').on('click', function() {
        $('#companyInfo').css('display', 'block');
    });

	$('#submit').on('click', (e) => {
	    e.preventDefault();
	    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let usernameElement = $('#username');
        let username = usernameElement.val();

        let usernameValid;

        if(username.match(usernamePattern)){
            usernameElement.css('border', 'none');
            usernameValid = true;
        }
        else{
            usernameElement.css('border-color', 'red');
            usernameValid = false;
        }

        let passwordPattern = /^[A-Za-z0-9_]{5,15}$/;
        let passwordElement = $('#password');
        let password = passwordElement.val();

        let confirmPasswordElement = $('#confirm-password');
        let confirmPassword = confirmPasswordElement.val();

        let passwordsValid;

        if(!password.match(passwordPattern) || !confirmPassword.match(passwordPattern) || password !== confirmPassword){
            passwordElement.css('border-color', 'red');
            confirmPasswordElement.css('border-color', 'red');
            passwordsValid = false;
        }
        else{
            passwordElement.css('border', 'none');
            confirmPasswordElement.css('border', 'none');
            passwordsValid = true;
        }

        let emailElement = $('#email');
        let email = emailElement.val();

        let emailValid;
        let emailPattern = /^.*@.*\..*$/;

        if(email.match(emailPattern)){
            emailElement.css('border', 'none');
            emailValid = true;
        }
        else{
            emailElement.css('border-color', 'red');
            emailValid = false;
        }
        let companyValid = true;
        let companyElement = $('#company');

        if(companyElement.is(':checked')){
            companyValid = false;
            let numberElement = $('#companyNumber');
            let companyNumber = Number(numberElement.val());

            if(companyNumber >= 1000 && companyNumber <= 9999){
                numberElement.css('border', 'none');
                companyValid = true;
            }
            else{
                numberElement.css('border-color', 'red');
                companyValid = false;
            }
        }

        if(usernameValid && passwordsValid && emailValid && companyValid){
            $('#valid').css('display', 'block');
        }
    });
}
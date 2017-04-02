var submit=document.getElementById("submit");

submit.onclick=validate;

function validate()
{
	//variable for if fields are filled in
	var firstName = document.getElementById("first-name");
	var lastName = document.getElementById("last-name");
	var emailAddress = document.getElementById("email-address");
	var emailConfirm = document.getElementById("email-address-confirm");
	
	//variable for if field are left blank
	var firstNameError = document.getElementById("first-name-error");
	var lastNameError = document.getElementById("last-name-error");
	var emailAddressError = document.getElementById("email-address-error");
	var emailConfirmError = document.getElementById("email-address-confirm-error");
	
	if(firstName.value == "")
	{
		firstNameError.innerHTML = "* Please fill in your first name";
	}
	else
	{
		firstNameError.innerHTML = "";
	}
	
	if(lastName.value == "")
	{
		lastNameError.innerHTML = "* Please fill in your last name";
	}
	else
	{
		lastNameError.innerHTML = "";
	}
	if(emailAddress.value == "")
	{
		emailAddressError.innerHTML = "* Please enter a valid email address";
	}
	else
	{
		emailAddressError.innerHTML = "";
	}
	
	if(emailConfirm.value == "")
	{
		emailConfirmError.innerHTML = "* Please enter a valid email address";
	}
	else
	{
		emailConfirmError.innerHTML = "";
	}
	
	if(emailAddress.value != emailConfirm.value)
	{
		emailConfirmError.innerHTML = "*Your email addresses do not match, please re-enter";
	}
	
	var message = "Please press 'OK' to confirm the following information is correct\n\n"
	
	if(firstName.value != "" &&
		lastName.value != "" &&
		emailAddress.value != "" &&
		emailConfirm.value != "" &&
		emailAddress.value == emailConfirm.value)
		{
			alert(message + "First Name:  "+ firstName.value +
			"\n\n" + "Last NameL  " + lastName.value + "\n\n" +
			"Email Address:  " +emailAddress.value);
		window.location.assign("http://www.creativeprintables.org/uploads/6/3/4/3/6343807/3080196_orig.png");//sends user back to home page
		}
}



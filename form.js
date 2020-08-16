const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const generror = document.querySelector(".general-error");

const inpvalidation = {
    firstname:/^[a-zA-z]{3,18}$/,
    lastname:/^[a-zA-z]{3,18}$/,
	password:/^[\w@\.-]{8,25}$/,
	email:/^([a-zA-z\d\.\\-]+)@([a-zA-Z\d\\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};
function validate(field,regex){
   if(regex.test(field.value)){
     field.className = "valid";
   }else{
     field.className = "invalid";
   }
}
inputs.forEach((input) => {
	input.addEventListener("keyup",(e) => {
		if(e.target.attributes.name.value  == "confirmpassword")
			return;
		validate(e.target,inpvalidation[e.target.attributes.name.value]);
	});
});

form.onsubmit = function(e){
	e.preventDefault();
	if( inputs[0].value == "" ||inputs[1].value == "" ||inputs[2].value == "" ||inputs[3].value == ""||inputs[4].value == "")
	{
         generror.innerHTML = "All fields are required";

	}else if(inputs[3].value !== inputs[4].value){
		 generror.innerHTML = "paawword and confirmpassword are not same";
	}
};

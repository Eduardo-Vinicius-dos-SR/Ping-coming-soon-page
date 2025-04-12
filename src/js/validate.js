const inputs = document.querySelector("#inputs");
const inputEmail = document.querySelector("#input-email");
const inputNotify = document.querySelector("#btn-notify");

inputNotify.addEventListener("click", () => {
	if (inputEmail.checkValidity() && inputEmail.value.length != 0) {
		inputs.classList.remove("invalid");
		inputEmail.value = "";
	} else {
		inputs.classList.add("invalid");
		if (!inputEmail.checkValidity()) {
			alert("Please provide a valid email address");
		} else if (inputEmail.value.length === 0) {
			alert("Whoops! It looks like you forgot to add your email");
		}
	}
});

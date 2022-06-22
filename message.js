let nameInput = document.getElementById("name-field");
let emailInput = document.getElementById("email-field");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("submit", () => {
	console.log(
		"MUAHAHAAA!! u have been scammed!!!. Poor " +
			nameInput.value +
			", want or not, your email " +
			emailInput.value +
			" now is filled with spam mails, those mails have special virus, fastly you will be infected with it. far well, " +
			nameInput.value +
			"!"
	);
});

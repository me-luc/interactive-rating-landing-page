function select(button) {
	const selectedBefore = document.getElementById("selected");

	if (selectedBefore !== null) {
		selectedBefore.id = "";
	}

	button.id = "selected";

	ableButton();
}

function submit() {
	const hidedElements = document.getElementById("hide");
	hidedElements.id = "";

	const visibleElements = document.querySelector(".square1-elements");
	visibleElements.id = "hide";

	const rating = document.getElementById("selected");

	document.querySelector(".star").innerHTML = rating.innerHTML;
}

function ableButton() {
	document.querySelector(".submit").removeAttribute("disabled");
}

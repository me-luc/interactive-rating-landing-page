function select(button) {
	const selectedBefore = document.getElementById("selected");

	if (selectedBefore !== null) {
		selectedBefore.id = "";
	}

	button.id = "selected";
}

function submit() {}

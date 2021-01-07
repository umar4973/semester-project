var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function strikeThrough(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function createListButton() {
	var libtn = document.querySelectorAll("li");
	var btn = document.createElement("button");
	btn.className = "btnli";
	btn.appendChild(document.createTextNode("Delete"));
	libtn[libtn.length - 1].appendChild(btn);
	console.log("li-length", libtn.length);
}

function deleteNodeOnClick(e) {
	var trash = document.querySelectorAll(".btnli");
	for (var ind = 0; ind < trash.length; ind++) {
		console.log(e);
		this.parentNode.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createListButton();
		deleteParentNodeOnClick();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createListButton();
		deleteParentNodeOnClick();
	}
}

function deleteParentNodeOnClick() {
	var deleteButton = document.querySelectorAll(".btnli");
	for (var i = 0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener("click", deleteNodeOnClick);
	}
	console.log("del-btn", deleteButton.length);
}

ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
deleteParentNodeOnClick();


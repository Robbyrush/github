document.addEventListener("DOMContentLoaded", () => {

	// Variables
	var myArray = [];
	var input = document.getElementById("txtInput");
	var p = document.getElementById("output");

	input.focus();

	// Adds click events to the buttons.
	document.getElementById("btnPush").addEventListener("click", pushArray);
	document.getElementById("btnPop").addEventListener("click", popArray);
	document.getElementById("btnShift").addEventListener("click", shiftArray);
	document.getElementById("btnUnshift").addEventListener("click", unshiftArray);
	document.getElementById("btnMap").addEventListener("click", arrMap);

	function update() 
	{
		p.innerHTML = "";

		var myArrayR = myArray.reduce((total, value, index) => {
			return total + (index + 1) + ". " + value + "<br>";
		}, "");

		p.innerHTML = myArrayR;
		input.value = "";
		input.focus();
	}

	function pushArray() 
	{
		var splitArray = input.value.split(" ");
		splitArray.forEach(element => {
			if (element.trim() !== "") {
				myArray.push(element);
			}
		});
		update();
	}

	function popArray()
	{
		myArray.pop();
		update();
	}

	function shiftArray()
	{
		myArray.shift();
		update();
	}

	function unshiftArray()
	{
		if (input.value != "") {
			myArray.unshift(input.value);
			update();
		}
	}

	function arrMap()
	{
		var arr = myArray.map((note) => {
			return input.value + note;
			// If you wanted it capitalized:
			//return input.value.toUpperCase() + note;
		});
		myArray = arr;
		update();
	}

});

// Add number function

function Add(numbers) {

	if (numbers == "") {

		return 0;
	}

	if (numbers.includes(",")) {

		var numberArray = numbers.split(",");
		return sum(numberArray);
	}
	
	else {

		return parseInt(numbers);
	}
	
}

	function sum(numberArray) {

		var total = 0;
		for (var i = 0; i < numberArray.length; i++) {
		total += parseInt(numberArray[i]);
	}

module.exports = Add;
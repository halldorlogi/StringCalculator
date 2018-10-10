// Add number function

function Add(numbers) {

	if (numbers == "") {

		return 0;
	}

	if (numbers.includes(",") || numbers.includes("\n")) {

		var validSizeArray = [];
		var numberArray = numbers.split(/[,\n]/);
		validSizeArray = checkForSize(numberArray);
		if (!checkForNegatives(validSizeArray)) {
			return sum(validSizeArray);
		}

	}
	else {
		if (parseInt(numbers) < 0) {
			throw new Error('Negatives not allowed: ' + parseInt(numbers));
		}
		else if (parseInt(numbers) > 1000) {
			return 0;
		}
		else {
			return parseInt(numbers);
		}
	}
}

function sum(numberArray) {

	var total = 0;
	for (var i = 0; i < numberArray.length; i++) {

		total += parseInt(numberArray[i]);
	}
	return total; 
}

function checkForNegatives(numberArray) {

	var negativeArray = [];
		j = 0;
		for (var i = 0; i < numberArray.length; i++) {
			if (parseInt(numberArray[i]) < 0) {
				negativeArray[j] = parseInt(numberArray[i]);
				j++;
			}
		}
		if (negativeArray.length > 0) {
			throw new Error('Negatives not allowed: ' + negativeArray.map(Number));
			return true;
		}
		return false;
}

function checkForSize(numberArray) {
	var validSizeArray = [];
	var j = 0;
	for (var i = 0; i < numberArray.length; i++) {
		if (parseInt(numberArray[i]) < 1000) {
			validSizeArray[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	return validSizeArray;
}

module.exports = Add;

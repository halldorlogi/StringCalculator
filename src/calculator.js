// Add number function

function Add(numbers) {

	var numberArray = []
	var validSizeArray = [];

	if (numbers == "") {

		return 0;
	}

	if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
		var delimeter = numbers.charAt(2);
		var numbers = numbers.slice(4, numbers.length);
		numberArray = numbers.split(delimeter);
	}

	else if (numbers.includes(",") || numbers.includes("\n")) {
		numberArray = numbers.split(/[,\n]/);
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

	validSizeArray = checkForSize(numberArray);
	
	if (!checkForNegatives(validSizeArray)) {
		return sum(validSizeArray);
	}
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

function sum(array) {

	var sum = 0; 

	for (var i = 0; i < array.length; i++) {
		sum += parseInt(array[i]);
	}
	
	return sum;
}

module.exports = Add;

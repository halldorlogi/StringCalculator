// Add function
function Add(numbers) {

	var numberArray = []
	var validSizeArray = [];	// An array for numbers <= 1000

	if (numbers == "") {

		return 0;
	}

	// Check if first two letters of string are "//"
	if (numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
		// The delimeter can be found at index 2
		var delimeter = numbers.charAt(2);
		// Cut string from index 4 to end of string.
		var numbers = numbers.slice(4, numbers.length);
		// Split the remaining string on either the new delimeter or either "," or "\n"
		numberArray = numbers.split(delimeter).join(/[,\n]/);
	}

	// If no special delimeter specified
	else if (numbers.includes(",") || numbers.includes("\n")) {
		// Split on "," or "\n"
		numberArray = numbers.split(/[,\n]/);
	}

	// If only one number
	else {
		// If number is negative
		if (parseInt(numbers) < 0) {
			throw new Error('Negatives not allowed: ' + parseInt(numbers));
		}
		// If number is > 1000
		else if (parseInt(numbers) > 1000) {
			return 0;
		}
		else {
			return parseInt(numbers);
		}
	}
	// Use a helper function to check for size of numbers
	validSizeArray = checkForSize(numberArray);
	// Use a helper function to check for negative numbers
	if (!checkForNegatives(validSizeArray)) {
		// Use a helper function to calculate sum
		return sum(validSizeArray);
	}
}

// Helper function to check for negative numbers
function checkForNegatives(numberArray) {

	// An array to keep track of negative numbers
	var negativeArray = [];
	j = 0;
	// Iterate through number array and add negative numbers to new array
	for (var i = 0; i < numberArray.length; i++) {
		if (parseInt(numberArray[i]) < 0) {
			negativeArray[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	// If the negativeArray is not empty, throw an exception
	if (negativeArray.length > 0) {
		throw new Error('Negatives not allowed: ' + negativeArray.map(Number));
	}
	return false;
}

// A helper function to check for numbers > 1000
function checkForSize(numberArray) {
	
	// An array to keep track of numbers > 1000
	var validSizeArray = [];
	var j = 0;
	// Iterate through number array and add numbers smaller or equal to 1000 to it.
	for (var i = 0; i < numberArray.length; i++) {
		if (parseInt(numberArray[i]) <= 1000) {
			validSizeArray[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	// Return valid numbers and use them from this point.
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

// Add number function

function Add(numbers) {

	if (numbers == "") {

		return 0;
	}

	if (numbers.includes(",") || numbers.includes("\n")) {

		var numberArray = numbers.split(/[,\n]/);
		if (!checkForNegatives(numberArray)) {
			return sum(numberArray);
		}
	
	}
	
	else {
		if (parseInt(numbers) < 0) {
			throw new Error('Negatives not allowed: ' + parseInt(numbers));
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

module.exports = Add;
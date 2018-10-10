const add = require("./calculator");


it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
})

it("should return the sum of two given numbers", () => {
	expect(add("1, 2")).toBe(3);
})

it("should sumerize multiple numbers", () => {
	expect(add("1, 2, 3")).toBe(6);
})

it("should return the sum of two given numbers", () => {
	expect(add("1\n2")).toBe(3);
})

it("should return the sum of two given numbers", () => {
	expect(add("1\n2, 3")).toBe(6);
})

it('should throw an exception if number is negative', () => {
	function addNegative() {
		add("-1");
	}
	expect(addNegative).toThrowError('Negatives not allowed: -1');
	expect(addNegative).toThrowError(Error);
})

it('should throw an exception if all numbers are negative', () => {
	function addNegative() {
		add("-1, -2");
	}
	expect(addNegative).toThrowError('Negatives not allowed: -1,-2');
	expect(addNegative).toThrowError(Error);
})

it('should throw an exception if any number is negative', () => {
	function addNegative() {
		add("-1, 1, -2, 2, -5");
	}
	expect(addNegative).toThrowError('Negatives not allowed: -1,-2,-5');
	expect(addNegative).toThrowError(Error);
})

it("Should return empty if number is >= 1000 (one number)", () => {
	expect(add("1001")).toBe(0);
})

it("Does not return numbers >= 1000 (two numbers)", () => {
	expect(add("1, 1001")).toBe(1);
})

it("Does not return numbers >= 1000 (two or more numbers)", () => {
	expect(add("1, 1001, 1002, 4")).toBe(5);
})







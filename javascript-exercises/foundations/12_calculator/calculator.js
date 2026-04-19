const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length == 0) return 0;
	return arr.reduce((sum, num) => num + sum);
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((sum, num) => num * sum);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, curr) => total + curr, 0);

const multiply = (arr) => arr.reduce((total, curr) => total * curr, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = function(num) {
  if (num === 0) {
    return 1
  }
  let result = 1;
	for (let i = num; i > 0; i--){
    result *= i;
  }
  return result
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

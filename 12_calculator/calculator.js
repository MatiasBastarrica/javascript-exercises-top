const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((acc, current) => {
    return acc * current;
  }, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let factorial = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

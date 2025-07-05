const sumAll = function (num1, num2) {
  // let result;
  let orderedRange = [num1, num2].sort((a, b) => a - b);
  let rangeStart = orderedRange[0];
  let rangeEnd = orderedRange[1];

  if (
    Number.isInteger(num1) &&
    num1 > 0 &&
    Number.isInteger(num2) &&
    num2 > 0
  ) {
    let sumTotal = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
      sumTotal += i;
    }
    return sumTotal;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;

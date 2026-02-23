const pascal = function (rowNum) {
  if (rowNum === 1) {
    return [1];
  }
  let prevRow = pascal(rowNum - 1);

  let prevRowWithZeros = [0, ...prevRow, 0];

  let row = [];

  for (let i = 0; i < prevRowWithZeros.length - 1; i++) {
    const num = prevRowWithZeros[i];
    const rightmostNum = prevRowWithZeros[i + 1];
    row.push(num + rightmostNum);
  }

  return row;
};

// Do not edit below this line
module.exports = pascal;

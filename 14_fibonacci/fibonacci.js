const fibonacci = function (num) {
  let arr = [0, 1];

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 2; i <= +num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[+num];
};

// Do not edit below this line
module.exports = fibonacci;

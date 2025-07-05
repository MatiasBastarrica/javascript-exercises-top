const convertToCelsius = function (temp) {
  const initialResult = (temp - 32) * (5 / 9);
  const resultRounded = Math.round(initialResult * 10) / 10;
  return resultRounded;
};

const convertToFahrenheit = function (temp) {
  const initialResult = (temp * 9) / 5 + 32;
  const resultRounded = Math.round(initialResult * 10) / 10;
  return resultRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

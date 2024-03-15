const convertToCelsius = function (x) {
  let Celsius = (x - 32) * (5 / 9);
  let rounded = Math.round(Celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (x) {
  let Fahrenheit = x * (9 / 5) + 32;
  return Math.round(Fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

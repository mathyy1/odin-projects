const convertToCelsius = degreesInFahrenheit => Math.round((degreesInFahrenheit - 32) * (5 / 9) * 10) / 10;

const convertToFahrenheit = degreesInCelsius => Math.round((degreesInCelsius * 9 / 5 + 32) * 10) / 10;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

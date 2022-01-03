"use strict"
// convert from Celsius to Fahrenheit.
function convertToFahrenheit(celsius) {
    const convert = celsius * 9/5 + 32;
    return convert;
}
convertToFahrenheit(30); //?
convertToFahrenheit(-30); //?

// convert from Fahrenheit to Celsius.
function convertToCelsius(fahrenheit) {
    const convert = ((fahrenheit - 32) * 5) / 9;
    return convert;
}
convertToCelsius(32); //?
convertToCelsius(50); //?

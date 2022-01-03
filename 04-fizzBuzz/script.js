"use strict"
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return "";
    }
}
fizzBuzz(3); //?
fizzBuzz(5); //?
fizzBuzz(15); //?
fizzBuzz(8); //?

function fizzBuzz2(num) {
    let word = "";
    if (num % 3 === 0) {
        word = word.concat("fizz");
    }
    if (num % 5 === 0) {
        word = word.concat("buzz");
    }
    return word;
}
fizzBuzz2(3); //?
fizzBuzz2(5); //?
fizzBuzz2(15); //?
fizzBuzz2(8); //?

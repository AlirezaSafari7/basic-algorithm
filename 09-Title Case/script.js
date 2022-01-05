"use strict"
function titleCase(str) {
    let userInput = str.split(' ');
    userInput = userInput.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        word = firstLetter.concat(word.slice(1, word.length));
        return word;
    });
    userInput = userInput.join(' ');
    return userInput;
}

titleCase("i am a coding god"); //?
titleCase("i would like to work for Google"); //?

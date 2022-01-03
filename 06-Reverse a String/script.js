"use strict"
function reversString(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        // reverseWord = reverseWord.concat(word[i]);
    }
    return reverseWord;
}

reversString("codegod"); //?
reversString("javascript"); //?
// ---------

function reversString1(word) {
    let reversedWord = word.split('').reverse().join('');
    return reversedWord;
}
reversString1("codegod"); //?
reversString1("javascript"); //?
// ---------

function reversString2(word) {
    let reverseWord = word.split('');
    reverseWord = reverseWord.reverse();
    reverseWord = reverseWord.join('');
    return reverseWord;
}
reversString2("biden"); //?
reversString2("typescript"); //?
reversString2("putin"); //?


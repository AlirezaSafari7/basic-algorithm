"use strict"
function isPalindrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = forwardStr.split('').reverse().join('');
    return forwardStr === reversedStr;
}

isPalindrome("A Man, a plan, a canal. Panama"); //?
isPalindrome("My age is 0, 0 si ega ym."); //?
isPalindrome("_codegod"); //?
isPalindrome("legendary"); //?
isPalindrome(".0_0(:/-\:)0-0"); //?
isPalindrome("wow"); //?


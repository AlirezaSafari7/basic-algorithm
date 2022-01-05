"use strict"
function repeatStr(str, num) {
    let repeatedString = '';
    while (num > 0) {
        // repeatedString = repeatedString.concat(str);
        repeatedString += str.concat(' ');
        num--;
    }
    return repeatedString;
}
repeatStr("codinggod", 2); //?
repeatStr("google", 3); //?

// ----------
function repeatStr2(str, num) {
    return str.concat(' ').repeat(num);
}
repeatStr2("codinggod", 2); //?
repeatStr2("google", 3); //?
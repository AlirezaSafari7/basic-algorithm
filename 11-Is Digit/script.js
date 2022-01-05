"use script"
function isDigit(str) {
    const digitArray = ["0", "1", "2", "3", "4", " 5", "6", "7", "8", "9"];
    return digitArray.includes(str);
}
isDigit("1"); //?
isDigit("d"); //?
isDigit("3"); //?
isDigit("a"); //?
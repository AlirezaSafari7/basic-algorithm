"use strict"

function longestWordLength5(str) {
    let longestWordLength = str.split(" ").sort((word1, word2) => {
        return word2.length - word1.length;
    })[0].length;
    return longestWordLength;
}
longestWordLength5("I am a coding god") //?
longestWordLength5("I would like to work for Google") //?
longestWordLength5("Ain't no fun if the homie don't code none") //?

// ------------
function longestWordLength4(str) {
    // let strArray = str.split(" ");
    // strArray = strArray.sort((word1, word2) => {
    //     return word2.length - word1.length;
    // })[0].length;
    let strArray = str.split(" ").sort((word1, word2) => {
        return word2.length - word1.length;
    })[0].length;
    return strArray;
}
longestWordLength4("I am a coding god") //?
longestWordLength4("I would like to work for Google") //?
longestWordLength4("Ain't no fun if the homie don't code none") //?


// -------------
function longestWordLength3(str) {
    let longestLength = 0;
    let strArray = str.split(' ');

    strArray.forEach(word => {
        longestLength = longestLength < word.length ? word.length : longestLength; 
    });
    return longestLength;
}
longestWordLength3("I am a coding god") //?
longestWordLength3("I would like to work for Google") //?
longestWordLength3("Ain't no fun if the homie don't code none") //?

// -------------
// function longestWordLength2(str) {
//     let longestLength = 0;
//     let strArray = str.split(' ');
//     for (let i = 0; i < strArray.length; i++) {
//         longestLength = longestLength < strArray[i].length ? strArray[i].length : longestLength;
//     }
//     return longestLength;
// }
// longestWordLength2("I am a coding god") //?
// longestWordLength2("I would like to work for Google") //?
// longestWordLength2("Ain't no fun if the homie don't code none") //?


// -------------
// function longestWordLength(str) {
//     let longestLength = 0;
//     let strArray = str.split(' ');
//     for (let i = 0; i < strArray.length; i++) {
//         if (longestLength < strArray[i].length) {
//             longestLength = strArray[i].length;
//         }
//     }
//     return longestLength;
// }
// longestWordLength("I am a coding god") //?
// longestWordLength("I would like to work for Google") //?
// longestWordLength("Ain't no fun if the homie don't code none") //?



"use strict"
function factorializeNumber(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}
factorializeNumber(5); //?
factorializeNumber(4); //?
factorializeNumber(1); //?
factorializeNumber(0); //?
factorializeNumber(10); //?

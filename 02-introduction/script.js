"use strict"

function introduction1(firstName, lastName) {
    const introduction = `Hi, my name is ${firstName} ${lastName}.`;
    return introduction;
}
introduction1("Alex", "Mercer"); //?

function introduction2(firstName, lastName) {
    const introduction = "Hi, my name is ".concat(firstName, " ", lastName, ".");
    return introduction;
}
introduction2("John", "Wick"); //?

function introduction3(firstName, lastName) {
    const introduction = "Hi, my name is " + firstName + " " + lastName + ".";
    return introduction;
}
introduction3("Michel", "Max"); //?
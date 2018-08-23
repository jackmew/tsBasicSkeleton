"use strict";
// Block scope
console.log("-- Block scope --");
var variable = "First Value";
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("-- Arrow Functions --");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function (friend) {
    console.log("Hello " + friend);
};
greet("Zest");
// Default Parameters
console.log("-- Default Parameters --");
var countDown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log("start: " + start);
    console.log("end: " + end);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown();

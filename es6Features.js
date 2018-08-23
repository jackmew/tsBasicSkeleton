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

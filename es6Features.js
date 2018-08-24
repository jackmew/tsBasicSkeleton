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
// Rest & Spread
console.log("-- Rest & Spread --");
var numbers = [1, 10, 99, -5];
// spread
console.log(Math.max.apply(Math, numbers));
// rest 將剩下的參數都收集起來
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    return args;
}
console.log(makeArray("zest", 1, 2, 3, 4));
// Destructuring Array
console.log("-- Destructuring Array --");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// console.log(...myHobbies);
// Destructuring Object
console.log("-- Destructuring Array --");
var myUserData = { myUserName: "Zest", age: 27 };
// alias
var newMyUserName = myUserData.myUserName, age = myUserData.age;
console.log(newMyUserName, age);
// Template Literals
var myGreeting = "This is heading\nI'm " + myUserData.myUserName + "\nGood morning";
console.log(myGreeting);

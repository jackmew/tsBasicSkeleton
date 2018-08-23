"use strict";
// string
var myName = "zest";
// number
var myAge = 30;
// boolean
var isCrazy = false;
// array
var bosses = ["Jason", "Michael"];
// tuples
var myExam = ["math", 98];
console.log(myExam[0]);
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 100] = "Gray";
    Color[Color["Green"] = 101] = "Green";
    Color[Color["Blue"] = 102] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Gray;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car.brand);
// function - return type
function getMyName() {
    return myName;
}
// function - void
function sayHello() {
    console.log("hello");
}
// function - argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(3, 7));
// function types
var myMultiply;
// myMultiply = sayHello;
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
// complex object
var complexObject1 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complexObject2 = {
    data: [20, 2.97, 22],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = false
// check types
var finalValue = 30;
if (typeof finalValue === "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error("An error!");
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canThisBeNull = null;
canThisBeNull = 12;

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

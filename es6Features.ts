// Block scope
console.log("-- Block scope --");
let variable = "First Value";

function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("-- Arrow Functions --");
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = (friend: string) => {
  console.log(`Hello ${friend}`);
};
greet("Zest");
// Default Parameters
console.log("-- Default Parameters --");
const countDown = (start: number = 10, end: number = start - 5): void => {
  console.log(`start: ${start}`);
  console.log(`end: ${end}`);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};
countDown();

// Rest & Spread
console.log("-- Rest & Spread --");
const numbers = [1, 10, 99, -5];
// spread
console.log(Math.max(...numbers));

// rest 將剩下的參數都收集起來
function makeArray(name: string, ...args: number[]) {
  console.log(name);
  return args;
}
console.log(makeArray("zest", 1, 2, 3, 4));

// Destructuring Array
console.log("-- Destructuring Array --");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
// console.log(...myHobbies);

// Destructuring Object
console.log("-- Destructuring Array --");
const myUserData = { myUserName: "Zest", age: 27 };
// alias
const { myUserName: newMyUserName, age } = myUserData;
console.log(newMyUserName, age);

// Template Literals
const myGreeting = `This is heading
I'm ${myUserData.myUserName}
Good morning`;
console.log(myGreeting);

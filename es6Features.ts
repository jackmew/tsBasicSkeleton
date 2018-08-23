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

// string
let myName: string = "zest";

// number
let myAge: number = 30;

// boolean
let isCrazy: boolean = false;

// array
let bosses: string[] = ["Jason", "Michael"];

// tuples
let myExam: [string, number] = ["math", 98];
console.log(myExam[0]);

// enum
enum Color {
  Gray = 100,
  Green,
  Blue
}
let myColor: Color = Color.Gray;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car.brand);

// function - return type
function getMyName(): string {
  return myName;
}

// function - void
function sayHello(): void {
  console.log("hello");
}

// function - argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(3, 7));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
myMultiply = multiply;
console.log(myMultiply(5, 2));

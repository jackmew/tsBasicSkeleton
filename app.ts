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

// objects
let userData: { name: string; age: number } = {
  name: "Max",
  age: 27
};
// userData = null;
// userData.name = null;
// userData.age = null;

type TComplex = { data: number[]; output: (all: boolean) => number[] };
// complex object
let complexObject1: TComplex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
let complexObject2: TComplex = {
  data: [20, 2.97, 22],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = false

// check types
let finalValue = 30;
if (typeof finalValue === "number") {
  console.log("Final value is a number");
}

// never
function neverReturns(): never {
  throw new Error("An error!");
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canThisBeNull: number | null = null;
canThisBeNull = 12;

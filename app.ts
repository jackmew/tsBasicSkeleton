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

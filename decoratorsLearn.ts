// function logged(constructorFn: Function) {
//     console.log(constructorFn);
// }
// @logged
// class Animal {
//     constructor() {
//         console.log("Hi !");
//     }
// }

// // Factory
// function logging(value: boolean) {
//     return value ? logged : null
// }

// @logging(true)
// class Car {

// }

// // Advanced
// function printable(constructorFn: Function) {
//     constructorFn.prototype.print = function() {
//         console.log(this);
//     }
// }
// @logging(true)
// @printable
// class Plane {
//     name = "Green Plane"
// }
// const plane = new Plane();
// (<any>plane).print();

// // Method Decorator
// function editable(value: boolean) {
//     return function(target: any, propName: string, descriptor: PropertyDescriptor) {
//         descriptor.writable = value;
//     }
// }
// function overwritable(value: boolean) {
//     return function(target: any, propName: string): any {
//         const newDescriptor: PropertyDescriptor = {
//             writable: value
//         };
//         return newDescriptor;
//     }
// }

// class ZestProject {
//     @overwritable(false)
//     projectName: string;

//     constructor(name: string) {
//         this.projectName = name;
//     }
//     @editable(false)
//     calcBudge() {
//         console.log(1000);
//     }
// }
// const zProject = new ZestProject('Zest Project');
// zProject.calcBudge();
// zProject.calcBudge = function() {
//     console.log(2000);
// }
// zProject.calcBudge();
// console.log(zProject);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course("Super course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
// function logged(constructorFn: Function) {
//     console.log(constructorFn);
// }
// @logged
// class Animal {
//     constructor() {
//         console.log("Hi !");
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

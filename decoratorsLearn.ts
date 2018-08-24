function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class Animal {
    constructor() {
        console.log("Hi !");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null
}

@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}
@logging(true)
@printable
class Plane {
    name = "Green Plane"
}
const plane = new Plane();
(<any>plane).print();


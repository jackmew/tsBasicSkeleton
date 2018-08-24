class Person {
  name: string; // default is public
  protected age: number = 20; // which inheriance from this class. child class can access.
  private type: string = 'Cool'; // only avaible from the object you create. Only in this object

  constructor(name: string, protected username: string) {
    this.name = name;
  }
}
const person = new Person("Zest", 'max');
console.log(person.name);
// console.log(person.name, person.username, person.type);

// Getter & Setter
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 0;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);


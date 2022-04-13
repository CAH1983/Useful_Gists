let name = {
  firstName: "Caroline",
  lastName: "Ho",

  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let name2 = {
  firstName: "Bernardo",
  lastName: "Pepito",
};

name.printFullName.call(name2);

// alternatively, we can separate the function from the 1st object
let name = {
  firstName: "Caroline",
  lastName: "Ho",
};

function printFullName(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + state);
}

let name2 = {
  firstName: "Bernardo",
  lastName: "Pepito",
};

printFullName.apply(name2, ['Senlis', 'Picardie'] );
// other example for using call method
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  Car.call(this, make, model, year); // will borrow the properties of Car with the call method
  this.numWheels = 2;
}

// this version is with the apply method, we don't even need to pass parameters in the function!
function MotorcycleV2() {
  Car.apply(this, arguments);
  this.numWheels = 2;
}

const moto2 = new Motorcycle('Honda', 'X32', 2019);
const moto3 = new MotorcycleV2('MBK', 'Booster', 2000);

console.log(moto2);
console.log(moto3)

// Data types

// strings -- "Hello world", 'Hello world', `Hello world`
// boolean -- true or false
// null ---
// numbers - 23, 4, 5.6
// objects - {}, {a : 2}
// symbols - Symbol('crypto')
// undefined
// arrays - []
// bigint

// primitive/complex (non-primitive) data types

// Primitives
// 1. string
// 2. boolean
// 3. null
// 4. Undefined
// 5. Symbol
// 6. number
// 7. bigint

// null vs undefined

// Non - Primitives
// 1. Arrays
// 2. Objects
// 3. Functions

// const countries = [["Canada"], ["USA"], [1, 2], [() => {}]];
const countries = ["red", "blue", "green", "yellow"];

// index - 0 based
// console.log(countries[2]);
// console.log(countries[3]);
// console.log(countries[0]);
// console.log(countries[1]);

// Objects
// hash, map, associative arrays in other languages
// const instructor = {
//   age: 34,
//   name: "Taiwo",
//   isEnrolled: true,
//   dynamicKey: "Dynamic key",
//   color: "Yellow",
//   plants: ["pothos", "corn", "aloe", "fiddle head fig", "asparagus fern"],
// };

// dot notation or bracket/block notation
// console.log(instructor.age);

const key = "a" + "g" + "e";

// console.log(instructor["a" + "g" + "e"]);

// Functions

// const sum = function (width, height) {
//   // console.log('In a function')
//   return width + height;
// };

// let instructor = "Ian"; // X1234AWE

// const updateInstructor = function (instructor) {
//   // instructor = "Paul";

//   // X1234AWE456655
//   console.log("instructor >>>");
//   // console.log('In a function')
//   instructor2 = "Taiwo";
//   return instructor;
// };

// // // console.log(updateInstructor); // function reference

// console.log(instructor); // Ian
// console.log(updateInstructor(instructor)); // Taiwo
// console.log(instructor); // Ian

// memory reference X1234AWE
// const instructor = {
//   age: 34,
//   name: "Ian",
//   isEnrolled: true,
//   dynamicKey: "Dynamic key",
//   color: "Yellow",
//   plants: ["pothos", "corn", "aloe", "fiddle head fig", "asparagus fern"],
// };

// const age = 10;

// const updateInstructor = function (newInstructor) {
//   // X1234AWE
//   console.log("newInstructor >>>", newInstructor);
//   // console.log('In a function')
//   newInstructor.name = "Taiwo";
//   return newInstructor.name;
// };

// // console.log(updateInstructor); // function reference

// console.log(instructor.name); // Ian
// console.log(updateInstructor(instructor)); // Taiwo
// console.log(instructor.name); // Taiwo

// Methods/Functions & Context

const carBluePrint = {
  name: "",
  brand: "",
  mileage: 0,
  fuelLevel: 0,
  maxFuelLevel: 0,
  litrePerKm: 0,
  drive: function (km) {
    this.mileage += km;
    this.fuelLevel -= km * this.litrePerKm;
  },
};

const car = {
  name: "Camry",
  brand: "Toyota",
  mileage: 10000,
  fuelLevel: 18,
  maxFuelLevel: 30,
  litrePerKm: 0.05,
  drive: function (km) {
    car.mileage += km;
    car.fuelLevel -= km * car.litrePerKm;
  },
};

const car1 = {
  name: "Camry",
  brand: "Toyota",
  mileage: 10000,
  fuelLevel: 18,
  maxFuelLevel: 30,
  litrePerKm: 0.05,
  drive: function (km) {
    this.mileage += km;
    this.fuelLevel -= km * this.litrePerKm;
  },
};

const x = function (aFunction) {
  aFunction();
};

console.log(car.mileage);
console.log(car.fuelLevel);
console.log(car.drive);
console.log(car.mileage);
console.log(car.fuelLevel);

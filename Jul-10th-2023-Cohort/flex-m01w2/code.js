// Objects in JS

// const

// Data types

// Primitive data types
// - Number (Int / Float / Long / Double) - 2, 3, 5.6, -9
// - BigInt
// - Boolean --- True/false, 1/0
// - String ---- "string", 'string', `string ` --
//   `
//    Hi ${firstName}

//    Thanks for making a purchase.

//    Sincerely
//   `
// - null
// - undefined
// - Symbol // - string that can't be changed

var time;
var time = null;
var time = "Today";
time = "Yesterday";

// non-primitive data types or complex data types

// - array
// - objects
// - functions

// 1. Arrays

const fruits = ["orange", "banana"]; // implicit declaration or new Array()
const mixArray = [[[]], "string", 321, Symbol, 2.3];

// Index of item in the array
console.log(mixArray[50]);
// console.log(mixArray[1]);
// console.log(mixArray[2]);
// console.log(mixArray[3]);

// 2. Objects - hashes, associative array, hashmap
const instructor = {
  age: 34,
  name: "Taiwo",
  isEnrolled: true,
  dynamicKey: "car",
  car: "Toyota",
  plants: ["pothos", "corn", "aloe", "fiddle head fig", "asparagus fern"],
  plants_red: "rose",
  date: {
    year: 2022,
    time: {
      year: 2023,
    },
  },
};

// 1. How do we access data inside an object
// dot notation
console.log(instructor.age);
console.log(instructor.plants);

// bracket notation
console.log(instructor["age"]);
console.log(instructor["plants"]);
const colour = "red";
console.log(instructor[`plants_${colour}`]);

// Why does typeof Array return object

// Object Oriented Design ------------------------- Object data type {}

// 3. function

let name = "Ian";
let year = 2022;

const data = {
  name: "Ian B",
  location: "Montral, QC",
};

// Passing data in functions by value/copy or by reference
function updateInstructor(data, year) {
  data.name = "Taiwo O";
  console.log("In the function!!", data);
}

// referencing a function and invoking/calling/executing a function

// console.log(name); /// Ian
// updateInstructor(name, year); // Taiwo
// console.log(name); // Ian

// console.log(data); /// Ian B
// updateInstructor(data, year); // Taiwo O
// console.log(data); //

const car = {
  name: "Camry",
  brand: "Toyota",
  mileage: 10_000,
  fuelLevel: 18,
  maxFuelLevel: 30,
  litrePerKm: 0.05,
  drive: function (km) {
    // console.log(car.mileage);
    // car
    this.mileage += km;
    this.fuelLevel -= km * this.litrePerKm;
  },
};

// context
console.log(car.mileage);
console.log(car.drive(5000));
console.log(car.mileage);

// const / let / var

// Primitve types

const str = "this is a string"; // string
let year = 2002;

year = 2022;

const num = 1.2;

const isTrue = true; // false

const _undefined = undefined;

const _null = null;

const sym = Symbol("crypto");

// BigINT
const someLargeNumber = 1111111111111111111111111111111111;

// Non - primitive types

// 1. Arrays
// 2. Objects // Ruby - hash, java - associative array, C# hash map/table
// 3. Functions // or methods

// const ary = [1, 2, 3, 4, 5];
// const ary1 = [1, 2, 3, "4", "5", [2, 3]];

const obj = {
  name: "Taiwo",
  car_company: "Toyota",
  car: "Another car",
  model: {
    type: "camry",
    colour: "red",
  },
  ary: [2022, 2001],
  2: 4000,
};

// console.log(obj.car_company);

// const val = "company";
// // string interpolation
// console.log(obj[`car_${val}`]);

// const thisFunction = function addNumbers(num1, num2) {
//   return num1 + num2;
// };

// const sum = thisFunction([1, 2], [3, 4]);
// console.log("sum", sum);

// let instructor = "taiwo";

// // Passing by value
// const updateInstructor = function (instructor) {
//   instructor = "Ian";
//   console.log("instructor in function", instructor);
// };

// console.log("instructor before function call/invocation", instructor);
// updateInstructor(instructor); // taiwo
// console.log("instructor after function call/invocation", instructor);

// let instructor = 10;

// // Functions scopes
// // Passing by value
// const updateInstructor = function (instr) {
//   instr = 11;
//   console.log("instructor in function", instr);
// };

// console.log("instructor before function call/invocation", instructor);
// updateInstructor(instructor); // taiwo
// console.log("instructor after function call/invocation", instructor);

// const obj = {
//   name: "Taiwo",
//   car: "Toyota",
//   model: {
//     type: "camry",
//     colour: "red",
//   },
//   ary: [2022, 2001],
//   2: 4000,
// };

// const obj = [1, 2, 3, 5];

// // Passing by reference
// const updateObject = function (myObj) {
//   myObj[0] = 11;
//   console.log("obj in function", myObj);
// };

// console.log("obj before function call/invocation", obj);
// updateObject(obj);
// console.log("obj after function call/invocation", obj);

const destinations = [
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Saskatoon",
  "Regina",
];

// looping operations/constructs

// const arg = function (destination) {
//   console.log(destination);
// };

// destinations.forEach(arg);

// for (const dest of destinations) {
//   console.log(dest);
// }

// destinations.forEach(function (destination) {
//   console.log(destination);
// });

const obj = {
  name: "Taiwo",
  car: "Toyota",
  model: {
    type: "camry",
    colour: "red",
  },
  ary: [2022, 2001],
  2: 4000,
};

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

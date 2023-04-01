// Object (object oriented programming OOP)

// Non-primitive data types
// arrays ([], new Array),
// objects ({ name: 'text'}), // hashes, associative array, maps
// functions (() => {})

// let str = "title";

// console.log(str);

// str = "Harry Potter";

// function printName() {}

// console.log(nameFunction);

// nameFunction = function () {};

// console.log(nameFunction);
// console.log(function () {});

// const iterator = function (item) {
//   console.log(item);
// };

// [40, 10, 20].forEach(iterator);

// const addTwo = function (num) {
//   return num + 2;
// };

// const functions = [
//   function (num) {
//     return num + 2;
//   },
//   function (num) {
//     return num * 2;
//   },
// ];
// // console.log(functions[0](1));

// const objFunctions = {
//   add: function (num) {
//     return num + 2;
//   },
//   multiply: function (num) {
//     return num * 2;
//   },
// };
// console.log(objFunctions.add(1));
// console.log(objFunctions.multiply(1));

// Calling/Invoking/Executing vs Passing (reference)

// const addNumbers = function (num1, num2) {
//   console.log(num1, num2);
//   return num1 + num2;
// };

// console.log(addNumbers);
// console.log(addNumbers(3));

// function defintion
// parameters are cb, x, z
// const getNumbers = function (sumFunction, x, z) {
//   const num1 = 10; // this could be a more complicated number generation
//   const num2 = 20; // this could be a more complicated number generation
//   console.log("sum is = ", sumFunction(num1, num2));
// };

// const getNames = function (x, z) {
//   // tod
// };

// getNumbers(addNumbers, 1, 2); // arguments are addNumbers, 1, 2

// Function arguments vs parameters

// inline callback
// [10, 1, 2, 3, 4, 5, 5].forEach(function (item) {
//   console.log(item);
// });

// // separate callback
// const iterator = function (item) {
//   console.log(item);
// };
// [10, 1, 2, 3, 4, 5, 5].forEach(iterator);

// higher order functions
// 1. Any function that takes another function as an argument
// 2. Any function that returns another function

// const getNumbers = function () {
//   return function sum() {
//     return 20;
//   };
// };

// console.log(getNumbers()());

// const iterator = function (item) {
//   console.log(item);
// };
// // arrow function
// const iterator2 = (item) => {
//   console.log(item);
// };

// [10, 1, 2, 3, 4, 5, 5].forEach(iterator2);

// const car = {
//   maxFuelLevel: 100,
//   fuelLevel: 10,
//   displayFuelLevel: () => {
//     console.log(`Current fuel level is ${this.fuelLevel}`);
//   },
// };

// console.log(car.displayFuelLevel());

// const name = "Harry Potter";
// function first() {
//   console.log("name is", name);
//   const inFirst = "declared in first function";

//   second();
//   function second() {
//     third();
//     const otherName = "Harry Potter 2";
//     console.log("otherName", otherName);

//     function third() {
//       fourth();
//       function fourth() {
//         console.log(inFirst);
//         // do something
//       }
//     }
//   }
// }

// first();

// Live code a forEachInReverse that does
// reverse iteration on an array and takes a cb much like forEach would
// Once implemented, add a second parameter to the
//  callback to support index passing (i).

const ary = [1, 2, 3, 4, 5, 6];

// ary.reverse().forEach((number) => {
//   console.log(number);
// });

const printNumber = (num, index) => {
  console.log(num, index);
};

const forEachInReverse = (items, cb) => {
  // for (let i = 0; i < items.length; i++) {}
  for (let i = items.length - 1; i >= 0; i--) {
    cb(items[i], i);
  }
};

forEachInReverse(ary, printNumber);

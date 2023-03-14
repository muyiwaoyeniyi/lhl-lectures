// import sum from "sum"; // ES6

// 1.
const sum = require("./utils"); // ES5

console.log(sum(100, 212) == 312);
console.log(sum("300", "212") == 512);

console.log(sum(100, 212) === 312);
console.log(sum("300", "212") === 512);

// 2., 3.
const utilFunctions = require("./utils"); // ES5

console.log(utilFunctions.sum(100, 212) == 312);
console.log(utilFunctions.difference("300", "212") == 512);

// OR

// Object destructuring
// const obj = {
//   name: "Taiwo",
//   color: "red",
// };

// console.log(obj.name, obj.color);

// const { name, color } = obj;
// console.log(name, color);

const { sum, difference } = require("./utils"); // ES5

console.log(sum(100, 212) == 312);
console.log(difference("300", "212") == 512);

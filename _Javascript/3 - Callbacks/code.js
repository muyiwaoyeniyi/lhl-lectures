// const myFunction = function () {};

// const myFunction2 = function (aFunction) {
//   aFunction();
// };

// myFunction2(myFunction);

// const sum = function () {
//   let x = 1;
//   let y = 2;
//   return myFunction2
// };

// const val = sum();

// console.log(val);

// anonymous function
// function () {
//   // todo
// }

// // named function
// function functionName() {
//   // todo
// }

// // anonymous function assigned to variable
// const myFunction = function (arg1, arg2) {
//   // todo
// }

// // anonymous function assigned to variable
// const myFunction1 = function functionName () {
//   // todo
// }

// const destinations = [
//   "Vancouver",
//   "Calgary",
//   "Edmonton",
//   "Saskatoon",
//   "Regina",
// ];

// callback function
// const logValue = function (value) {
//   console.log(value);
// };

// destinations.forEach(arg);

// const sum = function (callbackArg) {
//   const val = 10 + 20;
//   callbackArg(val);
// };

// const sum1 = (callbackArg) => {
//   const val = 10 + 20;
//   callbackArg(val);
// };

// sum1(logValue);

// destinations.forEach(function (destination) {
//   console.log(destination);
// });

// let name = "Ian"; // top level

// // top level
// const first = () => {
//   let color = "red"; // nested level ... within first
//   // first
//   console.log("in first", name);

//   // .. make .. no

//   const third = () => {
//     let make = "Toyota"; // 3 levels deep

//     color = "blue";
//     // .. name .. yes
//     // .. color .. yes
//   };
// };

// // top level
// const second = () => {
//   let year = 2022; // nested level ... with second
//   console.log("in second", name);
//   // second
// };

// const destinations = [
//   "Vancouver",
//   "Calgary",
//   "Edmonton",
//   "Saskatoon",
//   "Regina",
// ];

// // // callback function
// const arg = function (value) {
//   console.log(value);
// };

// destinations.forEach(arg);

// const forEachInReverse = (ary, cb) => {
//   ary.reverse().forEach(cb);
// };

// forEachInReverse(destinations, arg);

/***** Exercise ********/

// Create a function that accepts 3 arguments. The first two arguments should be numbers and the third should be a callback function.
// Within the function, sum up the two number arguments and pass it into the callback function. Within the callback function, add 10 to
// the sum you passed in and log it to the console.

// Ex. If you pass in 5 and 10. The final value logged into the console should be 25.

// function add_10(v) {
//   return v + 10;
// }

// function f(a, b, callback) {
//   v = a + b;
//   return callback(v);
// }

// console.log(f(5, 10, add_10));

function myCallbackFunction(sum) {
  let newSum = sum + 10;
  console.log(newSum);
}

function myFunction(x = 1, y = 2, myCallbackFunction) {
  let sum = x + y;
  myCallbackFunction(sum);
  // console.log(sum);
}

myFunction(2, 3, myCallbackFunction);
// myCallbackFunction();

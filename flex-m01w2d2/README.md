# Callbacks

## Resources
 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/flex-m01w2d2
 - Video: https://vimeo.com/674014992/f4edb4d0d4

## Content
-----------------------
- [X] Functions as values
- [X] Anonymous functions
- [X] Function calling vs passing (reference to a function)
- [X] Callback functions and Higher Order function. Why they exist, Implementing our own forEach and/or our own filter.
- [X] Break: 10 minutes
- [X] Arrow Functions (and their common use for callback functions)
- [X] Nested scope and "scope chain"
- [X] Single Responsibility Principle
- [X] Live Coding


## Functions as values
---------------
* Recap: Functions are objects
* Functions are first class citizens in JS as such --
  * They can be treated like any other value in JS
  * They can be assigned to a variable
  * They can be passed as argument
  * They can be returned by another function

## Anonymous function
------------
* An anonymous function is a function without a name


## Examples
-------------

```js
// named function
function sayHello(person) {
    console.log("Hello,", person)
}

// anonymous function
function() {
  // DO STUFF
}

// anonymous function stored in a variable
// addTwo is a variable that holds a _reference_ to a function.
const addTwo = function(num) {
  return num + 2;
}

// Functions are stored in variables, so we can assign them into other variables
const addDeux = addTwo; //alias `addTwo` as `addDeux`.
console.log(addTwo);
console.log(addDeux);


const functions = [
  function(num) { return num + 2; }, // this function has no name!
  function(num) { return num * 2; }
];

for (fx of functions) {
  console.log(fx); // but we can still access it's reference
  console.log(fx(3));
}

// Just like how we can store them in objects
const functions = {
    addTwo: function(num) { return num + 2; }
}
functions.timesTwo = function(num) {return num *= 2; };

for (key in functions) {
    console.log(functions[key](3));
}
```

## Function calling vs passing
------------------
* Functions are distinct from other objects in JavaScript because they are `callable` or `invokable`
* This means functions can be `called` or `invoked`, usually by using bracket notation `exampleFunc(someArg)`
* By excluding the brackets we can instead pass a reference to the function
* Function arguments vs parameters

```javascript
function sayHello(person) {
    console.log("Hello,", person)
}

function actions(action) {
    console.log("call passed in action,", action('Taiwo'))
}

// calling the function
sayHello('Taiwo')

// passing the function into another function
actions(sayHello)
```

## Callback functions and higher-order functions
-------
* A function that is passed to another function as an argument is called a **Callback**
* The function can then call the callback like it would any other function
* Functions that operate on other functions, either by taking them as arguments or by returning them, are called **higher-order functions**.
  * Higher-order functions allow us to abstract over actions, not just values.
  * .map, .filter, .forEach, .reduce etc

```js
const addTwo = function(num) {
    return num + 2;
}

const doSomething = function(callback) {
    return callback(2);
}

doSomething(console.log) // => 2
doSomething(addTwo) // => 4
```

// But we can do something first
```js
const addTwo = function(num) {
    return num + 2;
}

const sumThenApplyCallback = function(nums, callback) {
    let sum = 0;
    for (num of nums) {
        sum += num;
    }
    console.log("sum", sum);
    return callback(sum);
}

const result = sumThenApplyCallback([1, 2, 3], addTwo);
console.log("result", result);

> sum 6
> result 8

const addWhatever = function(num1) {
  return function (num2) {
    return num1 + num2
  };
}

console.log("result", addWhatever(10)(10));

> result 20
```

## Arrow functions
---------------

- Arrow functions are a syntactic sugar for creating a limited function. See [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- Arrow functions inherit context from their definition location - so aren't appropriate to use as `methods` on objects.
- Arrow functions are mostly designed for use as callbacks


```js
const addTwo = function(num) {
    return num + 2;
}

// In the simplest view, just remove `function` keyword and add `fat arrow`
const addTwo = (num) => {
    return num + 2;
}

// For functions with exactly one parameter, then `()`s are optional
const addTwo = num => {
    return num + 2;
}

// For one-line functions, the return statement becomes implicit
const addTwo = num => num + 2

// For functions with zero parameters, `()` is mandatory
const alwaysTrue = () => true;

// For functions with multiple parameters. `()` are also mandatory
const addTwoNumbers = (num1, num2) => num1 + num2;

```

### Arrow functions can't be used as methods

```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: function () {
        console.log(`Currentley fueled at ${this.fuelLevel}L ${this.maxFuelLevel / this.fuelLevel}% of max`);
    }
}
```

With regular `function` declaration syntax, the context of the function is the `car` object.

```js
const car = {
    maxFuelLevel: 100,
    fuelLevel: 10,
    displayFuelLevel: () => {
        console.log(`Currentley fueled at ${this.fuelLevel}L ${this.maxFuelLevel / this.fuelLevel}% of max`);
    }
}
```
With an arrow function, the context of the function is the `module` - _not_ the `car` object.


## Nested scope and "scope chain"
-------------------


```js
function first() {
    second();
    function second() {
        third();
        function third() {
            fourth();
            function fourth() {
                // do something
            }
        }
    }
}
first();
```

## Single Responsibility Principle
----------------
* A function should do one thing! Please?
* HOFs
* `Master Yuan-Ma, The Book of Programming
There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.`


## Live Coding
-----
* Live code a forEachInReverse that does reverse iteration on an array and takes a cb much like forEach would.
* Once implemented, add a second parameter to the callback to support index passing (i).
* Important scope review: talk about the two different i vars there. Change one of them to demo how they don't need to be the same variable name.


## Useful links
------
* Callbacks: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), [wikipedia](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* Higher-order functions: [Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html)
* Arrow Function: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
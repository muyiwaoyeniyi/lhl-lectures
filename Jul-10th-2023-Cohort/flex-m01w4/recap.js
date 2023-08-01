// Higher order functions
// 1. a function that accepts another function as a parameter
// 2. a function that returns another function

// Option 1
function getName(name, cb) {
  console.log("name", name);
  cb();
}

function printOne() {
  console.log("1");
}

getName("test", printOne);

// .forEach, .map, .reduce, .filter, .some, .every

const cb = function (item) {
  console.log(item);
};

// 5-minute long code here

[1, 2, 3, 4].forEach(cb);

[1, 2, 3, 4].forEach(function (item) {
  console.log(item);
});

// Option 2

function getYear(year) {
  // compute new data for inside function
  const x = year + 1;

  return function insideFunction() {
    console.log("inside returned function", x + 10);
  };
}

console.log(getYear(20)());

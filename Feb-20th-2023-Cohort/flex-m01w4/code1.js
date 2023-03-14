// const item = "Test";

// const height = 20;

// function printNameAndHeight() {
//   console.log(`Name is ${item} and height is ${height}`);
// }

// console.log("Testing 123");
// printNameAndHeight();

// Recap: Higher order functions / Callbacks

const ary = [1, 2, 3, 4, 5];

// ary.forEach((item) => console.log(item));

const getName = () => {
  const name = "test";
  return () => {
    console.log(name);
    // return undefined;
  };
};
// console.log(getName()());

const getHeight = () => {};

// console.log(getHeight());

function randomDelay() {
  while (true) {
    if (Math.random() < 0.0001) {
      console.log("breaking!");
      break;
    }
  }
}

// randomDelay();

// console.log("WAITING!!!!");
// setTimeout(() => {
//   randomDelay();
// }, 0);
// console.log("DONE!!");

let count = 1;
console.log("WAITING!!!!");
const intervalHandler = setInterval(() => {
  console.log(count);
  count = count + 1;
  if (count === 10) clearInterval(intervalHandler); // clearTimeout
}, 1000);
console.log("DONE!!");

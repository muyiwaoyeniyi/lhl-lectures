// let counter = 0;

// console.log("Here 1");

// const cb = () => {
//   counter = counter + 1;
//   console.log(counter);
// };

// console.log("Here 2");

// setTimeout(cb, 3000);

// console.log("Here 3");

function randomDelay() {
  while (true) {
    if (Math.random() < 0.000000000000000000001) {
      break;
    }
  }
}

const a = 1;
randomDelay();
console.log(a);

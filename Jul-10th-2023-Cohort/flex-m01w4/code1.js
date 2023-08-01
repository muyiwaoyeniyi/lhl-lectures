function randomDelay() {
  while (true) {
    if (Math.random() < 0.00001) {
      break;
    }
  }
}

const a = "Log here!!!!";

let count = 0;
const timeoutHandle = setTimeout(function () {
  console.log("in settimeout", count);
  // clearTimeout(timeoutHandle);
}, 1000);

// let count = 0;

// const intervalHandle = setInterval(function () {
//   console.log("in settimeout", count);
//   // if (count === 3) clearInterval(intervalHandle);
// }, 1000);

count = 10;
// console.log(intervalHandle);

// randomDelay();

// clearInterval(intervalHandle);

// console.log(a);

// callbacks
// events
// Promises

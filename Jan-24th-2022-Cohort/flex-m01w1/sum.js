// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it. Do support negative numbers though.
// If any argument is not a number, output an error message. We need at least 2 arguments.

// Psuedo code
// 1. Accept unlimited number of command line args (accept at least 2 arguments) -- DONE
// 2. Print the sum of the numbers ------------------------------------------------ DONE
// 3. Skip non whole numbers or non-integers -------------------------------------- DONE
// 4. Allow negative numbers ------------------------------------------------------ DONE
// 5. If argument is not a number, show error message ----------------------------- DONE

const argumentAry = process.argv.slice(2);

if (argumentAry.length < 2) {
  console.log("We need at least 2 arguments");
  return;
}

function isInteger(num) {
  return Number.isInteger(num);
}

let sum = 0;

for (let i = 0; i < argumentAry.length; i++) {
  let num = Number(argumentAry[i]);

  if (Number.isNaN(num)) {
    console.log(`${argumentAry[i]} is not a number`);
  } else if (isInteger(num)) {
    sum = num + sum;
  }
}

console.log("sum --", sum);

// [ 5, 4, 3, 4 ]

// // sum = num + sum;
// // 1st iteration index 0
// sum = 5 + 0 // 5

// // 2nd iteration index 1
// sum = 4 + 5 // 9

// // 3rd iteration index 2
// sum = 3 + 9 // 12

// // 4th iteration index 3
// sum = 4 + 12 // 16

// total = 17

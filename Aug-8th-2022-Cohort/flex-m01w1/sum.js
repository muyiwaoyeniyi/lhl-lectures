// Write a node program that takes in an unlimited number of command line arguments,
// goes through each and prints out the sum of them. If any argument is not a whole number, skip it.
// Do support negative numbers though. If any argument is not a number, output an error message.
// We need at least 2 arguments.

// Process/Requirements/Pseudocode
// 1. Takes an unlimited amount of args  --------------------- DONE
// 2. Print the sum of numbers/args -------------------------- DONE
//    2a. If not whole number, skip -------------------------- DONE
//    2b. If not a number, show an error
// 3. We need at least 2 args

const argsAry = process.argv.slice(2);

console.log(argsAry);

let sum = 0;
for (let i = 0; i < argsAry.length; i++) {
  const number = Number(argsAry[i]);
  // console.log(Number.isInteger(number), number, Number(number));
  if (Number.isInteger(number)) {
    sum = sum + Number(number);
  }
}

console.log("sum is >>", sum);

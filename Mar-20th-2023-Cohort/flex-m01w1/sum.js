// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do support negative numbers though.
// If any argument is not a number, output an error message. We need at least 2 arguments.

// process/pseudocode

// 1. accept any number of arguments from the command line (but at least 2) - DONE
// 2. if argument is not whole number (integer), skip ----------------------- DONE
// 3. If argument is negative, accept --------------------------------------- DONE
// 4. if argument is not a number, show error ------------------------------- DONE
// 5. print the sum -------------------------------------------------------- DONE

// [ 1,2,3,4, 'test', 'name']
const argumentAry = process.argv.slice(2);

console.log(argumentAry);

const isInteger = (num) => {
  return Number.isInteger(num);
};

let count = 0;
for (let i = 0; i < argumentAry.length; i++) {
  let num = Number(argumentAry[i]);

  if (Number.isNaN(num)) {
    console.log(`${argumentAry[i]} is not a number`);
  } else if (isInteger(num)) {
    count = count + num;
  }
}

console.log(count);

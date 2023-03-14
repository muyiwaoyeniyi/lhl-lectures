const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (word) => {
  if (typeof word !== "string") return undefined;

  let count = 0;

  for (const char of word) {
    // if (
    //   (char === "a" ||
    //   char === "e" ||
    //   char === "i" ||
    //   char === "o" ||
    //   char === "u"
    // )
    if (vowels.includes(char)) {
      count = count + 1;
    }
  }

  return count;
};

const sum = (num1, num2, num3 = 0) => {
  return num1 + num2 + num3;
};

const difference = (num1, num2) => {
  return num1 - num2;
};

const getAccountBalance = () => {
  return sum(100, 212, 9);
};

// console.log(getAccountBalance());

// 1.
// module.exports = sum; // ES5

// 2.
// module.exports.sum = sum; // ES5
// module.exports.difference = difference; // ES5

// 3.
// ES5
module.exports = {
  sum: sum,
  countVowels,
  difference: difference,
};

// export default sum; // ES6

console.log(module);

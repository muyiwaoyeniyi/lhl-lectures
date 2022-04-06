/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function (arr) {
  const obj = {};

  arr.forEach((item) => {
    if (Array.isArray(item[1])) {
      // recursion
      // obj[item[1][0]] = item[1][1];
      // obj[item[1][0][1]] = item[1][1][1];
      // obj[item[1][0][1][1]] = item[1][1][1][1];
      // obj[item[1][0][1][1]] = item[1][1][1][1];
      obj[item[0]] = deepArrayToObject(item[1]);
    } else {
      obj[item[0]] = item[1];
    }
  });

  return obj;
};

deepArrayToObject([
  ["a", 1],
  ["b", 2],
  ["c", [["d", 4]]],
  //["c", { d: 4}], ["c", [["d", 4]]],
]);

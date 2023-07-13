const x = 1;
const ary = [1, 2, 3];
const obj = {
  time: "now",
  name: "Taiwo",
};

function test(params) {
  // param --- 1 but not x
  // param = 2

  // params --- [1,2,3] and it's ary
  params.push(4); // [1,2,3,4] so is ary

  console.log(params);
}

test(x);
test(ary);
test(obj);


const array = [1, 2, 3];


// mutate the array in place
array.sort();
setState(array)  /// nope
const array2 = [...array].sort()
setState(array2) // works

array.pop();
setState(array) /// nope
const array2 = [...array].pop()
setState(array2) // works

array.push();
array.splice();

// don't change the original array
const newArr = array.concat([]); // OR [ ...array ]
setState(newArr)

const newArr1 = array.map((item) => {
  return item + 1
}); // --> [2,3,4]

const newArr2 = array.filter(); // [ 1, 2] odd numbers
const newArr3 = array.slice();



{ ...obj }, [ ...arr ]
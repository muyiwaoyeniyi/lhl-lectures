// Review 3

const obj = { x: { y: { z: { a: { e: [1, 2] } } } } };

// NOT GOOD
const ary = obj.x.y.z.a.e;
ary.push(3);

// GOOD
obj.x.y.z.a.e = [...obj.x.y.z.a.e, 3];

// GOOD
obj.x.y.z.a.e = obj.x.y.z.a.e.concat([3]);

// GOOD
obj.x.y.z.a.e = obj.x.y.z.a.e.map((i) => i);
obj.x.y.z.a.e.push(3);

// OR;

// GOOD
obj.x.y.z.a.e = [...obj.x.y.z.a.e];
obj.x.y.z.a.e.push(3);

// Review 2

const obj = { x: { y: 2 } };
obj.x.y = 5;

// This will make react re-render but might not be sufficient since the object ref around y is still the same
setObj({ ...obj });

setObj({ ...obj, x: { ...obj.x } });

// Review 1

// const obj = { x: 1 };
// --- 1

// obj.x = 2
// setObj({ ...obj })

// ----- 2

// setObj({ ...obj, x: 5 })

// {
//   x: 1,
//   x: 5
// }

const x = 1;
let y = x;
y = 2;

console.log(y); // 2
console.log(x); // 1

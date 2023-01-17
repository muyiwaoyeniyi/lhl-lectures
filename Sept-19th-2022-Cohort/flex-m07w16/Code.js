// fetched data
const data = [];

// data.forEach((item) => {
//   $("#results").append(<div>item</div>)
// })

import React from "react";

// const name = "Sam";
// const age = "5";

// const data = {
//   name: "Sam",
//   age: "5",
// };

// const ary = ["5", "Sam"];

// { color: 'red', time: 'today }
// export const Code = (props) => {
// object destructuring

export const Code = ({ color, time, setColor }) => {
  // const { name, age } = data;
  // const [name, age] = ary;

  // hook
  const [name, setName] = useState("Sam"); // => ["Sam", () => {}]
  // const nameAry = useState("Sam")

  const changeName = () => {
    // name = 'Sam1' // Not good
    // nameAry[1]('Sam1') // tedious

    // color = "blue"; // Not good

    setName("Sam1");
    setColor("blue");
  };

  return (
    <div>
      <div>{color}</div>
      {/* <div>{props.color}</div> */}
      {name + age}
    </div>
  );
};

console.log(Code("123"));

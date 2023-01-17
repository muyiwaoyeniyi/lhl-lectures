import React, { useState } from "react";
import { Code } from "./Code";

// mounting
// rendering/re-rendering
// children

// const color = "red";

const App = () => {
  const [color, setColor] = useState("red");

  // const changeColor = (newColor) => {
  //   setColor(newColor);
  // };

  return (
    <div>
      <Code color={color} setColor={setColor} time="tomorrow" />{" "}
      {/* <div>{"Sam" + "5"}</div> */}
      {/* {Code({ color: "red", time: "today" })} */}
      {/* <Code><Code /> */}
      <b class="test">Test</b>
      <button id="testButton"></button>
      {/* <div></div>
      <div /> */}
      {/* {Code()} */}
    </div>
  );
};

export default App;

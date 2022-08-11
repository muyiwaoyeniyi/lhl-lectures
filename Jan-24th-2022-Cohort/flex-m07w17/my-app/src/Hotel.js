import React, { useState } from "react";

const Hotel = ({ name, city }) => {
  const [counter, setCounter] = useState(0);

  console.log("render >>", name);

  return (
    <div className="LOOK AT ME">
      Hotel name is {name} in {city}
      <p>Count is {counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hotel;

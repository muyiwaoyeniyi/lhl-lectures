// class components

import axios from "axios";
import { useState, useEffect } from "react";

// const fetchUsers = () => {
//   fetch({
//     url: "",
//     method: "POST",
//   });
// };

// 1
// Visit a page
// React calls your functional component, build every variable in the component and  mounts (renders) the component

// 2
// State or props is updated
// React calls your functional component, builds every variable in the component and  updates (re-renders) the component

// 3
// React unmounts component

// functional component
const App = () => {
  // hooks - useMemo, useCallback, useReducer
  const [counter1, setCounter1] = useState(1); // hooks for holding/storing data
  const [counter2, setCounter2] = useState(100);
  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(true);

  // fetchUsers(); // not allowed in React

  // useEffect - hook for running side effects
  // useEffect(() => {
  //   console.log(
  //     "React is done with the render phase.. so we can run side effects in a useEffect"
  //   );
  //   setTimeout(() => {
  //     setCounter1(counter1 + 50);
  //   }, 2000);
  //   // fetchUsers();
  //   // run your side effects or whatever code here
  // }, []);

  // an empty deps - runs effect once after mounting (first render)
  // some deps - runs effect after render if the deps have changed
  // no array - this is just bad

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("in settimeout", counter1, counter2);
  //     setCounter2(counter1 + counter2);
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [counter1]);

  // console.log(
  //   "React is in render phase.. so we can't run side effects",
  //   counter1,
  //   counter2
  // );

  // const onClick = () => {
  //   setCounter1(counter1 + 1);
  // };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      // console.log("response", response);
      setPokemons(response.data.results);
      setLoading(false);
    });
  }, []);

  console.log("pokemons", pokemons);

  return (
    <div className="App">
      {/* <div>Counter 1: {counter1}</div>
      <div>Counter 2: {counter2}</div>
      <div>
        <button type="button" onClick={onClick}>
          Add to Counter
        </button>
      </div> */}
      <div>List</div>
      {loading ? (
        [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1].map((item) => {
          return (
            <div
              style={{
                background: "gray",
                height: "10px",
                width: "100px",
                marginTop: "2px",
              }}
            />
          );
        })
      ) : (
        <div>
          {pokemons.map((item) => {
            return <div key={item.name}> {item.name} </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;

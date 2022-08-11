// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

// 1st render -- Execute App function/component, render the return statement -- include calling fetchData()
// 2nd render -- Execute App function/component, render the return statement possibly with new html
//            -- include calling fetchData()

function App() {
  // NOPE!
  // const fetchData = () => {
  //   fetch({
  //     url: "http://localhost:3000/items",
  //     method: "POST",
  //   });
  // };

  // fetchData();

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  // console.log("About to render");

  // useEffect(() => {
  //   // console.log("I just rendered!!");
  //   const interval = setInterval(() => {
  //     console.log("Updating!!");
  //     // setCounter2(counter2 + 10);
  //     setCounter2((currentState) => currentState + 10);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //     // console.log("i just cleaned up effect");
  //   };
  // }, [counter1]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      console.log("response >>", response);
      // setTimeout(() => {
      setPokemons(response.data.results);
      setLoading(false);
      // }, 2000);
    });
  }, []);

  return (
    <div className="App">
      {/* <h3>REACT!</h3>
      <p>Counter 1 is -- {counter1}</p>
      <p>Counter 2 is -- {counter2}</p>
      <button
        type="button"
        onClick={() => {
          setCounter1(counter1 + 1);
          // setCounter2(counter + 20)
        }}
      >
        Increase counter 1
      </button> */}
      <h3>Items</h3>
      {loading
        ? [1, 2, 3, 4, 5].map((p) => {
            return (
              <h3
                key={p}
                style={{
                  backgroundColor: "gray",
                  height: "10px",
                  width: "105px",
                }}
              />
            );
          })
        : pokemons.map((p) => {
            return <h3 key={p.name}>{p.name}</h3>;
          })}
    </div>
  );
}

export default App;

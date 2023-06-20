// import logo from "./logo.svg";
import "./App.css";

import { useState, Fragment } from "react";
import Hotel from "./Hotel";
import CreateHotel from "./CreateHotel";
import Button from "./Button";

function App() {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Marriott", city: "New York" },
    { id: 2, name: "Holiday Inn", city: "Vancouver" },
  ]);

  const onUpdate = () => {
    setHotels([{ id: 3, name: "Marriott", city: "Calgary" }, ...hotels]); // state updates are asynchronous
    console.log(hotels[0].id); // value is 1
  };

  const onAdd = (newHotel) => {
    setHotels([{ id: 4, name: newHotel, time: "Today" }, ...hotels]);
  };

  // const obj = {
  //   time: "Now",
  //   age: 40,
  //   country: "CA",
  // };

  // const obj2 = { ...obj };

  // props
  // Hotel({ hotel: hotels[0], time: "Today" })
  // props spreading
  // object/props destructuring

  return (
    <div className="App">
      <div>
        <div>
          <CreateHotel callback={onAdd} />
          {/* <Hotel hotel={hotels[0]} time="Today" />
           <Hotel
            time="Today"
            id={hotels[0].id}
            city={hotels[0].city}
            name={hotels[0].name}
          />
          <Hotel
            time="Today"
            id={hotels[1].id}
            city={hotels[1].city}
            name={hotels[1].name}
          /> */}

          {hotels.map((hotel) => {
            // key
            return <Hotel key={hotel.id} time="Today" {...hotel} />;
          })}
          {/* {[<Hotel time="Today" {...hotels[0]} />]} */}
        </div>
      </div>
      <div>
        <Button text="Update" onClick={onUpdate} />
      </div>
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Hotel } from "./Hotel";
import { NewHotelForm } from "./NewHotelForm";

let lastId = 2;

function App() {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Marriott", city: "Los Angeles" },
    { id: 2, name: "Hilton", city: "Vancouver" },
  ]);

  const onAdd = (name) => {
    // --
    const newId = lastId + 1;
    lastId = newId;
    // ---
    console.log("in onAdd", name);
    // hotels.push({ name, id: newId }); // NOPE
    // console.log("hotels", hotels);
    setHotels(hotels.concat([{ name, id: newId }]));
  };

  const onRemove = (id) => {
    console.log("idtoRemove", id);

    // Using function scope to see `hotels`
    // const newHotels = hotels.filter((h) => h.id !== id);
    // setHotels(newHotels);

    // OR

    // setHotels('some object here')
    // setHotels((currentStateValue) => {
    //   return "some object here";
    // });
    setHotels((hotelsValue) => {
      return hotelsValue.filter((h) => h.id !== id);
    });
  };

  return (
    <div className="App">
      <NewHotelForm onAdd={onAdd} />
      <br />
      <h3>Hotels</h3>
      {hotels.map((h) => {
        return <Hotel id={h.id} key={h.id} name={h.name} onRemove={onRemove} />;
      })}
    </div>
  );
}

export default App;

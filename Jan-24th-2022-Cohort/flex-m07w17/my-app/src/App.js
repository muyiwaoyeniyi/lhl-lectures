// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateHotel from "./CreateHotel";
import Hotel from "./Hotel";

let lastId = 2;

// const phil = new Vampire();

// phil.ancestors;
// phil.makeVampires();
// phil.ancestors;
// phil.makeVampires();

function App() {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Marriott", city: "Los Angeles" },
    { id: 2, name: "Hilton", city: "Vancouver" },
  ]);

  const onAddHotel = (newHotelName) => {
    // hotels.push({id: 4, name: newHotelName}) ...... NOPE
    lastId += 1;
    // setHotels([...hotels, { id: lastId, name: newHotelName }]);
    setHotels([{ id: lastId, name: newHotelName }, ...hotels]);
    // setHotels([
    //   { id: 1, name: "Marriott3", city: "Los Angeles" },
    //   { id: 2, name: "Hilton", city: "Vancouver" },
    //   { id: lastId, name: newHotelName },
    // ]);
  };

  console.log("hotels >>>", hotels);

  // First Render

  return (
    <div className="App">
      <CreateHotel onAddHotel={onAddHotel} />
      <div>
        Hotels
        {hotels.map((h, i) => (
          <Hotel key={i} name={h.name} city={h.city} />
        ))}
      </div>
    </div>
  );
}

export default App;

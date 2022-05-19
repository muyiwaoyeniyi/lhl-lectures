// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateHotel from "./CreateHotel";
import Hotel from "./Hotel";

function App() {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Marriott", city: "Los Angeles" },
    { id: 1, name: "Hilton", city: "Vancouver" },
  ]);

  const onAddHotel = (newHotelName) => {
    // hotels.push({id: 4, name: newHotelName}) ...... NOPE
    setHotels([...hotels, { id: 4, name: newHotelName }]);
  };

  console.log("hotels >>>", hotels);

  return (
    <div className="App">
      <CreateHotel onAddHotel={onAddHotel} />
      <div>
        Hotels
        {hotels.map((h) => (
          <Hotel name={h.name} city={h.city} />
        ))}
      </div>
    </div>
  );
}

export default App;

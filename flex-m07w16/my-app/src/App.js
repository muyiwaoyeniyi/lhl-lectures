// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateHotel from "./CreateHotel";

function App() {
  const [hotels, setHotels] = useState([
    { id: 1, name: "Marriott" },
    { id: 1, name: "Hilton" },
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
          <h3>{h.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default App;

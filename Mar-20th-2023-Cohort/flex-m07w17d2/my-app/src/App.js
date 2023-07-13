import { useState } from "react";

import "./App.css";
import AddHotel from "./AddHotel";
import Hotel from "./Hotel";

function App() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Marriott",
      city: ["New York", "Boston"],
      logo: "https://dwglogo.com/wp-content/uploads/2016/04/Marriott_Vector_logo.png",
    },
    {
      id: 2,
      name: "Hilton",
      city: ["Toronto", "Calgary"],
      logo: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/63d38395554453.5e9a29196cec6.jpg",
    },
  ]);
  // const [num, setNum] = useState(1);

  const onAddHotel = (newHotel) => {
    // const newHotels = [...hotels];
    // newHotels.push(newHotel);
    // setHotels(newHotels);
    // hotels.push(newHotel); // nope
    // setHotels(hotels);
    // const newHotels = hotels.concat([newHotel]); // nope
    // setHotels(newHotels);
    // setNum(num + 1);

    const newHotels = [...hotels];
    newHotels[0] = { ...newHotels[0] };
    // newHotels[0].city = [...newHotels[0].city, newHotel.city];
    newHotels[0].city = newHotels[0].city.filter(
      (city) => city !== newHotel.city
    );
    setHotels(newHotels);
  };

  const onDeleteHotel = (hotelId) => {
    const newHotels = hotels.filter((hotel) => hotel.id !== hotelId);
    setHotels(newHotels);
  };

  return (
    <div className="App">
      <AddHotel onAddHotel={onAddHotel} />
      {hotels.map((hotel) => {
        return (
          <Hotel key={hotel.id} hotel={hotel} onDeleteHotel={onDeleteHotel} />
        );
      })}
    </div>
  );
}

export default App;

import { useState } from "react";

import "./App.css";

import Hotel from "./Hotel";
import AddHotel from "./AddHotel";

function App() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Marriott",
      city: "New York",
      logo: "https://dwglogo.com/wp-content/uploads/2016/04/Marriott_Vector_logo.png",
    },
    {
      id: 2,
      name: "Hilton",
      city: "Toronto",
      logo: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/63d38395554453.5e9a29196cec6.jpg",
    },
  ]);

  console.log(hotels, "asdsa");

  const onAddHotel = (newHotel) => {
    console.log("HERE >>>", newHotel);
    // const newHotels = [...hotels];
    // newHotels.push(newHotel);

    // const newHotels = [...hotels, newHotel]; <<
    const newHotels = hotels.concat(newHotel);

    setHotels(newHotels);
  };

  const onDeleteHotel = (name) => {
    // const newHotels = hotels.filter((hotel) => {
    //   return hotel.name !== name;
    // });
    // setHotels(newHotels);

    // setHotels(DATA_TO_SET);
    // setHotels((currentStateValueHERE) => {
    //   return DATA_TO_SET;
    // });

    // STATE UPDATES IN REACT ARE ASYNCHRONOUS

    // hotels =  1
    setHotels(hotels + 1); // 2
    setHotels(hotels + 1); // expects 3 but it's 2
    setHotels(hotels + 1); // expects 4 but it's 2

    setHotels((currentStateValueHERE) => {
      return currentStateValueHERE + 1; // 2
    });
    setHotels((currentStateValueHERE) => {
      return currentStateValueHERE + 1; // 3
    });
    setHotels((currentStateValueHERE) => {
      return currentStateValueHERE + 1; // 4
    });
  };

  return (
    <div className="App">
      <AddHotel onAddHotel={onAddHotel} />
      {hotels.map((hotel) => {
        return (
          <Hotel
            key={hotel.id}
            name={hotel.name}
            city={hotel.city}
            logo={hotel.logo}
            onDeleteHotel={onDeleteHotel}
          />
        );
      })}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const AddHotel = ({ onAddHotel }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");

  const onSubmit = () => {
    const newHotel = { name, city, logo };
    onAddHotel(newHotel);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter hotel name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Enter hotel city"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="logo"
          value={logo}
          placeholder="Enter hotel logo "
          onChange={(e) => setLogo(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

AddHotel.propTypes = {};

export default AddHotel;

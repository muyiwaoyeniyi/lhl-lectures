import React, { useState } from "react";

const AddHotel = ({ onAddHotel }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");

  const onSubmit = () => {
    onAddHotel({ name, city, logo });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Hotel name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Enter Hotel city"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="logo"
          value={logo}
          placeholder="Enter Hotel logo"
          onChange={(e) => setLogo(e.target.value)}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AddHotel;

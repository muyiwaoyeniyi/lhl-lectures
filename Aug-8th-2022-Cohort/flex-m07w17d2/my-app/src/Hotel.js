import React from "react";

const Hotel = ({ name, logo, city, onDeleteHotel }) => {
  const onDelete = () => {
    onDeleteHotel(name);
  };

  return (
    <div>
      <div>
        logo: <img src={logo} alt="logo" width="50" height="50" />
      </div>
      <div>Name: {name}</div>
      <div>City: {city}</div>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Hotel;

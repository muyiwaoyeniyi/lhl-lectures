import React from "react";

const Hotel = ({ hotel, onDeleteHotel }) => {
  const onDelete = () => {
    onDeleteHotel(hotel.id);
  };

  return (
    <div>
      <div>
        logo: <img src={hotel.logo} alt="logo" width="50" height="50" />
      </div>
      <div>Name: {hotel.name} </div>
      <div>Name: {hotel.city} </div>
      {/* // type - button, submit, cancel */}
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Hotel;

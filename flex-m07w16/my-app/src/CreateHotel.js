import { useState } from "react";

const CreateHotel = (props) => {
  const [hotelName, setHotelName] = useState("");

  // console.log(hotelName);

  // Controlled input/uncontrolled inputs

  const onNameChange = (e) => {
    setHotelName(e.target.value);
  };

  const onSave = () => {
    props.onAddHotel(hotelName);
  };

  return (
    <>
      <input
        type="text"
        value={hotelName}
        onChange={onNameChange}
        placeholder="Enter hotel name"
      />
      <button type="button" onClick={onSave}>
        Save
      </button>
    </>
  );
};

export default CreateHotel;

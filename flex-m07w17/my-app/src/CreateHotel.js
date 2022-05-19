import { useState } from "react";

const CreateHotel = (props) => {
  const [error, setError] = useState("");
  const [hotelName, setHotelName] = useState("");

  // console.log(hotelName);

  // Controlled input/uncontrolled inputs

  const onNameChange = (e) => {
    const val = e.target.value;
    setHotelName(val);
  };

  const onSave = () => {
    if (hotelName.length > 0) {
      setError("");
      setError("Please provide a name");
      // props.onAddHotel(hotelName);
    } else {
      setError("Please provide a name");
    }
  };

  return (
    <>
      <input
        type="text"
        data-testid="name"
        value={hotelName}
        onChange={onNameChange}
        placeholder="Enter hotel name"
      />
      <div>{error}</div>
      <div>
        <button type="button" onClick={onSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default CreateHotel;

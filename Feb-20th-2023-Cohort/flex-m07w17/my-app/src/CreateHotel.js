import { useState } from "react";
import Button from "./Button";

const CreateHotel = ({ callback }) => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const onAdd = () => {
    callback(name);
  };

  // Fully controlled input, uncontrolled input, partially controlled input
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter hotel name"
        value={name}
        onChange={onChange}
      />
      <div>
        <Button text="Add" onClick={onAdd} />
      </div>
    </div>
  );
};

export default CreateHotel;

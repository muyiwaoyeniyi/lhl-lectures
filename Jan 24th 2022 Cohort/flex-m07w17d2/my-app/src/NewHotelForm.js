import React, { useState } from "react";

export const NewHotelForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onSave = () => {
    onAdd(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

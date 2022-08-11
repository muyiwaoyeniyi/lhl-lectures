import React from "react";

export const Hotel = ({ id, name, onRemove }) => {
  return (
    <>
      <div>{`${name} hotel `}</div>
      <button onClick={() => onRemove(id)}>Remove</button>
      <br />
      <br />
    </>
  );
};

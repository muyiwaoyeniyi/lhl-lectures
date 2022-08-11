import React from "react";

export const Task = ({ id, name, completed, onRemove }) => {
  return (
    <p>
      {name} status: {completed}
      <button type="button" onClick={() => onRemove(id)}>
        delete
      </button>
    </p>
  );
};

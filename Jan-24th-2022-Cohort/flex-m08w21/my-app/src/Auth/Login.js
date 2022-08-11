import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Login = ({ dispatch }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const navigate = useNavigate();

  const onHandleClick = () => {
    // onLogin({ firstName, lastName });
    dispatch({
      type: "LOGIN",
      payload: { firstName, lastName },
    });
    navigate("/");
  };

  return (
    <div>
      Login
      <div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <button onClick={onHandleClick}>Log me in!</button>
      </div>
    </div>
  );
};

import { useNavigate } from "react-router";
import React, { useContext, useState } from "react";

import { AuthContext } from "../Contexts/AuthContext";

export const Login = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const onHandleClick = () => {
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

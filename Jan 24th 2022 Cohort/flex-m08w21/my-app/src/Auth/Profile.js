import styled from "styled-components";
import React, { useContext } from "react";

import { AuthContext } from "../Contexts/AuthContext";

const Container = styled.div`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;

export const Profile = () => {
  // const { firstName, lastName, onLogout } = useContext(AuthContext);
  const { state, dispatch } = useContext(AuthContext);

  const onHandleClick = () => {
    // onLogout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <Container>
        Hi {state.firstName} {state.lastName}
      </Container>
      <button onClick={onHandleClick}>log out</button>
    </div>
  );
};

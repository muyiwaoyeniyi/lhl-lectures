import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "./redux/authSlice";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  const onClick = (user) => {
    dispatch(setName(user.name));
  };

  return (
    <div>
      <div>Welcome Home {auth.username}</div>
      <br />
      <br />
      <br />
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} onClick={() => onClick(user)}>
              {user.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

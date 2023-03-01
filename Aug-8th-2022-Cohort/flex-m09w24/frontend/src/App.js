import { useEffect, useState } from "react";
import axios from "axios";
import { updateUsers } from "./slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Test } from "./test";

// ways to manage data in React
// - local state
// - State managed in Context
// - Global state (Redux, Mobx)
// - Server state/cache

function App() {
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    console.log("state", state);
    return state.users.users;
  });

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      // setUsers(response.data);
      dispatch(updateUsers(response.data));
    });
  }, []);

  return (
    <div>
      <Test />
      Users!
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default App;

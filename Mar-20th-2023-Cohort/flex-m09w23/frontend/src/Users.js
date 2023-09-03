import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/users").then((res) => {
      console.log("data ----", res);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <div>
              User with id {user.id} has name {user.name}
            </div>
            <div>Friends are</div>
            <div>
              {user.friends.map((friend) => {
                return <div key={friend.id}>{friend.name}</div>;
              })}
            </div>
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Users;

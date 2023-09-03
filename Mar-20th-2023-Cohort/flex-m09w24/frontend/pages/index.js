import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Profile from "@/components/profile";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "@/redux/slices/userSlice";

// 1. local state
// 2. State managed by Context
// 3. Global state - redux
// 4. Server/cache state

// Nextjs
// - Routing
// - SEO
// - Optional Deployment pipeline
// - Optional backend

// Pages router
// pages
// app

export default function Home() {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  });

  console.log("user in redux", user);

  useEffect(() => {
    // axios.get("http://localhost:4002/users").then((res) => {
    //   setUsers(res.data);
    // });

    axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const onUserClick = (name) => {
    dispatch(changeUserName({ name }));
  };

  return (
    <div>
      <p>User in redux is {user.name}</p>
      {users.map((user) => {
        return (
          <div key={user.id} onClick={() => onUserClick(user.name)}>
            <div>
              User with id {user.id}
              {/* <Link href={`/users/${user.id}`}>{user.name}</Link> */}
              <Profile user={user} />
            </div>
            <div>Friends are</div>
            {/* <div>
              {user.friends.map((friend) => {
                return <div key={friend.id}>{friend.name}</div>;
              })}
            </div> */}
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

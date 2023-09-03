import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// flesh out the user page -
// talk about the optional nextjs backend
// introduce redux

export default function User() {
  const router = useRouter();

  const [user, setUser] = useState();

  const userId = router.query.id;
  const isRouterReady = router.isReady;

  useEffect(() => {
    if (isRouterReady) {
      // axios.get(`http://localhost:4002/users/${userId}`).then((res) => {
      //   setUser(res.data);
      // });

      axios.get(`/api/user?id=${userId}`).then((res) => {
        setUser(res.data);
      });
    }
  }, [userId, isRouterReady]);

  return (
    <div>
      {`Hey this is a user! ${userId}`}
      <div>user's name is {user?.name}</div>
    </div>
  );
}

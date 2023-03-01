import React from "react";
import { useSelector } from "react-redux";

export const FirstUser = () => {
  const firstUser = useSelector((state) => {
    return state.users.users[0];
  });

  return <div>FirstUser {firstUser?.name}</div>;
};

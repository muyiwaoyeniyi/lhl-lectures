import axios from "axios";
import React from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { Task } from "./Task";
import { useRequest } from "./useRequest";

export const Home = () => {
  const { data, loading, setData } = useRequest({
    url: "/api/v1/lists",
  });

  const onRemove = (id) => {
    axios
      .delete(`/api/v1/items/${id}`)
      .then(() => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      })
      .catch((err) => {
        console.log("err >>>>", err);
      });
  };

  return (
    <>
      <h3>TODO List</h3>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        data.map((task) => {
          return (
            <Task
              id={task.id}
              key={task.id}
              name={task.task}
              onRemove={onRemove}
              completed={task.done}
            />
          );
        })
      )}
    </>
  );
};

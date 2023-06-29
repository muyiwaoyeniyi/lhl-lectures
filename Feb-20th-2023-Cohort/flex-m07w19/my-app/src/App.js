import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";

import { Task } from "./Task";

// react-router

// Common gotchas
// immutability / updating state -
// useEffect, deps

// Simple Task list with load more (if time permits)

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // load more - page-based, cursor-based
  // infinite scroll
  // numbered pagination

  const getTasks = (lastTaskId) => {
    axios
      .get("/tasks", {
        params: {
          cursor: lastTaskId,
        },
      })
      .then((res) => {
        // NOPE: direct state mutation
        // res.data.forEach((item) => {
        //   tasks.push(item);
        // });
        // Proper state mutation
        setTimeout(() => {
          setTasks([...tasks, ...res.data]);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        toast("Something went wrong :( ... try again later");
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onRemove = (taskId) => {
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  const handleLoadMore = () => {
    const lastTaskId = tasks[tasks.length - 1].id;
    getTasks(lastTaskId);
  };

  return (
    <div className="App">
      {loading ? (
        <Skeleton count={10} width={200} />
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                task={task}
                index={index + 1}
                key={task.id}
                onRemove={onRemove}
                // tasks={tasks}
                // setTasks={setTasks}
              />
            );
          })}

          <button type="button" onClick={handleLoadMore}>
            Load More
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;

// const [selectedDa]

// forEach - doesn't return anything
// reduce - can return new array

// const appointmentsArray = state.days.find(
//   (selectedDay) => selectedDay.name === day
// );
// const interviewersData = [];
// appointmentsArray.interviewers.map((interviewerId) =>
//   interviewersData.push(state.interviewers[interviewerId])
// );

// const newArray = oldArray.map()

// .filter - will return a new array
// .map - will return a new array
// .slice
// .splice
// .concat / [...ary]
// some/every - will not return a new array, return booleans

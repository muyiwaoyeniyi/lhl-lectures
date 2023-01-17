import { useState } from "react";

import CreateTask from "./CreateTask";

import "./App.css";

const title = "Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Bake cake" },
    { id: 2, name: "Write a book" },
  ]);

  // const data = {
  //   name: 'sam',
  //   age: '20'
  // }

  // data.time = 'today'

  // { ...data, name: 'Sam1'}

  const onAddTask = (newTask) => {
    console.log("newTask", newTask);

    // tasks.push({ id: 3, name: newTask }); // not good
    // array spreading
    // setTasks([...tasks, { id: 3, name: newTask }]); // good
    const newData = tasks.concat({ id: 3, name: newTask });
    setTasks(newData);
  };

  return (
    <div className="App">
      <CreateTask onAddTask={onAddTask} />

      <b>{title}</b>
      {tasks.map((task) => {
        return <div>{task.name}</div>;
      })}
    </div>
  );
}

export default App;

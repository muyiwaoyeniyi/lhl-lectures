import { useState } from "react";

const CreateTask = ({ onAddTask }) => {
  //

  const [newTask, setNewTask] = useState("");

  const onTaskChange = (e) => {
    // console.log(e.target.value);
    setNewTask(e.target.value);
  };

  const onAdd = () => {
    onAddTask(newTask);
  };

  return (
    <div>
      <div>Create Task</div>
      <input name="task" value={newTask} onChange={onTaskChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default CreateTask;

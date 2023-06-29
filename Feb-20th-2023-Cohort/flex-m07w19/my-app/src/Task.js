import axios from "axios";
import { toast } from "react-toastify";

export const Task = ({ task, index, onRemove }) => {
  const handleRemove = () => {
    axios
      .delete(`/tasks/${task.id}`)
      .then((_res) => {
        onRemove(task.id);
        toast(`Remove task ${task.task}`);
      })
      .catch((_err) => {
        toast("Unable to remove the task :( ... try again later");
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        Task {index + 1} - {task.task}
      </div>
      <div style={{ paddingLeft: "15px" }} onClick={handleRemove}>
        Remove
      </div>
    </div>
  );
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAction } from "../store/Task";

export const TodoForm = () => {
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      const newTask = {
        id: Date.now(),
        content,
        priority, // Include priority in the task
        checked: false,
      };
      dispatch(taskAction.addTask(newTask)); // Dispatch addTask action
      setContent("");
      setPriority("Medium"); // Reset priority to default
    }
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={content}
            onChange={handleInputChange}
            placeholder="Add a new task"
          />
        </div>
        <div>
          <select
            className="priority-select"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { addTaskToFirebase } from "../firebase/firebaseFunctions";
import "./TaskForm.css";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = { title: task };
      const savedTask = await addTaskToFirebase(newTask);
      dispatch(addTask(savedTask));
      setTask("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

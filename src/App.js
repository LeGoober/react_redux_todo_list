import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TaskForm />
      <TaskList />
      <button className="add-task-btn">+</button>
    </div>
  );
}

export default App;

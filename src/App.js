import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskForm />
      <TaskList />
      {/* If you want a floating add button separate from the TaskForm,
          uncomment the line below. Otherwise, TaskForm handles task addition.
      <button className="add-task-btn">+</button> */}
    </div>
  );
}

export default App;

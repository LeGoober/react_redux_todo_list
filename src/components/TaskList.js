import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTasksFromFirebase, deleteTaskFromFirebase } from "../firebase/firebaseFunctions";
import { deleteTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromDB = await getTasksFromFirebase();
      setTasks(tasksFromDB);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTaskFromFirebase(id);
    dispatch(deleteTask(id));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    // Add complete functionality as needed.
    console.log("Complete task", id);
  };

  const handleEdit = (id) => {
    // Add edit functionality as needed.
    console.log("Edit task", id);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={handleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { deleteTaskFromFirebase, getTasksFromFirebase } from "../firebase/firebaseFunctions";

const TaskList = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);

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

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

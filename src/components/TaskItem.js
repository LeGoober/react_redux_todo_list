import React from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import "./TaskItem.css";

const TaskItem = ({ task, onComplete, onEdit, onDelete }) => {
  return (
    <div className="task-item">
      <span className="task-title">{task.title}</span>
      <button className="icon-button" onClick={() => onComplete(task.id)}>
        <FaCheckCircle />
      </button>
      <button className="icon-button" onClick={() => onEdit(task.id)}>
        <FaEdit />
      </button>
      <button className="icon-button" onClick={() => onDelete(task.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;

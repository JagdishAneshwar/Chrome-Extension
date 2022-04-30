import React from "react";
import "./Todo.css";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <li>
        <a href={todo.desc} target="_blank">
          {todo.title}
        </a>
        <button
          className="btn btn-danger btn-sm float-end"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

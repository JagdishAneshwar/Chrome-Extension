import React from "react";
import { Todo } from "./Todo";
import Addtodo from "./Addtodo";
import "./Todos.css";

export default function Todos(props) {
  return (
    <div className="container p-3">
      <h3 className="title my-3 text-center">Save Your Links</h3>
      <Addtodo addTodo={props.addTodo} />
      <ul>
        {props.todos.length === 0
          ? "No Todos to display"
          : props.todos.map((todo) => {
              return (
                <Todo todo={todo} key={todo.no} onDelete={props.onDelete} />
              );
            })}
      </ul>
    </div>
  );
}

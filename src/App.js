import { useState, useEffect } from "react";
import "./App.css";
import Todos from "./Mycomponent/Todos";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let no;
    if (todos.length === 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].no + 1;
    }
    const mytodos = {
      no: no,
      desc: desc,
      title: title,
    };

    setTodo([...todos, mytodos]);
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Todos todos={todos} onDelete={onDelete} addTodo={addTodo} />
    </>
  );
}

export default App;

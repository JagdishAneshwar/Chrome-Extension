import React, { useState } from "react";
import "./Addtodo.css";

export default function (props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      // alert("Title or Description cannot be blank");
    }
    if (title || desc) {
      props.addTodo(title, desc);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Link
          </label>
          <input
            type="text"
            value={desc}
            className="form-control form-control-sm"
            id="link"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="submit btn btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

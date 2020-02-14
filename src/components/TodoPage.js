import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { addTodo } from "../actions/actions";
import { connect } from "react-redux";

let TodoPage = ({ dispatch }) => {
  const [todoText, setTodoText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(todoText));
  }
  function handleChange(event) {
    setTodoText(event.target.value);
  }
  return (
    <div>
      <AddTodo hanldeSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

TodoPage = connect()(TodoPage);

export default TodoPage;

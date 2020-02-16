import React from "react";

const TodoItem = ({ onclick, text, completed }) => (
  <h4
    onClick={onclick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </h4>
);
export default TodoItem;

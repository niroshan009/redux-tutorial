import React from "react";

const TodoItem = ({ text, completed, onClick }) => (
  <h4
    onClick={onClick(0)}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </h4>
);
export default TodoItem;

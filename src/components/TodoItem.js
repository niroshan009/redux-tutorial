import React from "react";

function TodoItem(props) {
  return (
    <h4
      onClick={props.onClick}
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
    >
      {props.text}
    </h4>
  );
}
export default TodoItem;

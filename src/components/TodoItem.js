import React from "react";

function TodoItem(props) {
  return (
    <div align="left">
      <input
        name="isCompleted"
        type="checkbox"
        checked={props.completed}
        onChange={props.onClick}
      />
      <label
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
      >
        {props.text}
      </label>
      <br />
    </div>
  );
}
export default TodoItem;

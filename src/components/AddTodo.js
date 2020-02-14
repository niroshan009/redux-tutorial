import React, { useState } from "react";

function AddTodo(props) {
  return (
    <div>
      <input
        type="text"
        id="txtTodo"
        label="Todo"
        onChange={props.handleChange}
      />
      <input type="submit" value="add" onClick={props.hanldeSubmit} />
    </div>
  );
}

export default AddTodo;

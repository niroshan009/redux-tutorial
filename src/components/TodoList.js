import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
const TodoList = ({ todos }) => (
  <li>
    {todos.map(todo => (
      <TodoItem key={todo.text} text={todo.text} />
    ))}
  </li>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);

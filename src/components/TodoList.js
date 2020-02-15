import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <TodoItem key={todo.text} text={todo.text} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);

import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem key={index} text={todo.text} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todo
});

export default connect(mapStateToProps)(TodoList);

import React from "react";
import { toggleTodo } from "../actions/actions";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        text={todo.text}
        completed={todo.completed}
        onclick={() => toggleTodo(index)}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todo
});

const mapDispatchToProps = dispatch => ({
  toogleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

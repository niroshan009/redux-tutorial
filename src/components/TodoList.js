import React from "react";
import { toggleTodo } from "../actions/actions";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        text={todo.text}
        completed={todo.completed}
        onClick={() => {
          console.log("-----");
          toggleTodo(0);
        }}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todo
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

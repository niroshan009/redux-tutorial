import React from "react";
import { toggleTodo } from "../actions/actions";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
function TodoList(props) {
  return (
    <div>
      {console.log(props)}
      {props.todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onClick={() => props.toggleTodo(index)}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todo
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

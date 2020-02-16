import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";
import { combineReducers } from "redux";

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          text: action.text
        }
      ];
    case TOGGLE_TODO:
      console.log("===========");
      return state.todo.map((todoItem, index) =>
        action.id === index
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todo
});
export default todoApp;

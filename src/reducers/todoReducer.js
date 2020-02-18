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
      return state.map((todo, index) => {
        if (index === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todo
});
export default todoApp;

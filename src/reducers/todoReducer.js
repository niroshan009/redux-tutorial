import { ADD_TODO } from "../actions/actions";
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
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todo
});
export default todoApp;

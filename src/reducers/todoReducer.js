import { ADD_TODO } from "../actions/actions";

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: 1,
          completed: false,
          text: action.text
        }
      ];
    default:
      return state;
  }
}

export default todo;

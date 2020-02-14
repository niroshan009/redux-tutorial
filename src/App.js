import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import TodoPage from "./components/TodoPage";
import { Provider } from "react-redux";
import reducers from "./reducers/todoReducer";
import { addTodo } from "./actions/actions";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;

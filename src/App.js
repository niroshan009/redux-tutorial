import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/todoReducer";
import { addTodo } from "./actions/actions";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log(store.getState());
// Dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store d"));

// Stop listening to state updates
unsubscribe();

function App() {
  return <div className="App"></div>;
}

export default App;

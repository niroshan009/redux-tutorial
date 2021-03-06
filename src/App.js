import React from "react";
import "./App.css";
import { createStore } from "redux";
import TodoPage from "./components/TodoPage";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import reducers from "./reducers/todoReducer";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPage />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

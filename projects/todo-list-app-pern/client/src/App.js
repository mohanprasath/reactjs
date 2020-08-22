import React, { Fragment } from "react";
import ListTodos from "./components/ListTodos";
import "./App.css";

// components
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;

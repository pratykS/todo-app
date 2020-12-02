import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const AppComponent = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </header>
    </div>
  );
};

export const App = AppComponent;

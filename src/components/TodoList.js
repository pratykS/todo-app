import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../store/selectors";

const TodoList = () => {
  const allTodos = useSelector(getTodos);
  const todos = allTodos;

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />;
          })
        : "Well, It seems like there is no todos today !"}
    </ul>
  );
};

export default TodoList;

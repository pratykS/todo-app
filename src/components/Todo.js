import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions";

const Todo = (props) => {
  const { todo } = props;

  const dispatch = useDispatch();

  return (
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;

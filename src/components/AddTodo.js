import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

const AddTodo = (props) => {
  const [input, setInput] = useState(undefined);
  const dispatch = useDispatch();
  return (
    <div>
      <input onBlur={(e) => setInput(e.target.value)} placeholder="Add Task" />
      <button onClick={() => dispatch(addTodo(input))}>Add</button>
    </div>
  );
};

export default AddTodo;

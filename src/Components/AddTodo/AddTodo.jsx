import React, { useContext, useState } from "react";
import "./AddTodo.css";
import { Link, useNavigate } from "react-router-dom";
import { todoContext } from "../../Context/TodoContextProveider";
import TodoList from "../TodoList/TodoList";

const AddTodo = () => {
  const [inpValue, setInpValue] = useState("");

  const { addTodo, getTodosData } = useContext(todoContext);

  const navigate = useNavigate();

  function handleClick() {
    let newObj = {
      task: inpValue,
      status: false,
    };
    // console.log(newObj);
    addTodo(newObj);
    getTodosData();
    setInpValue("");
  }
  return (
    <div className="addTodo">
      <h1>AddTodo</h1>
      <input
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        type="text"
      />
      <button
        className="btn"
        onClick={() => {
          handleClick();
          navigate("/list");
        }}
      >
        Add
      </button>
      <TodoList />
    </div>
  );
};

export default AddTodo;

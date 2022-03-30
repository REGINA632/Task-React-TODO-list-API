import React, { useContext, useEffect, useState } from "react";
import "./TodoList.css";
import { Link, useNavigate } from "react-router-dom";
import { todoContext } from "../../Context/TodoContextProveider";

const TodoList = () => {
  const { todos, getTodosData, changeStatus, deleteTask, editTodo } =
    useContext(todoContext);
  useEffect(() => {
    getTodosData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="todoList">
      <h1>TodoList</h1>
      {/* <Link to="/add">Add</Link>
      <Link to="/">Home</Link> */}
      <ul>
        {todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input
              onChange={() => changeStatus(item.id)}
              type="checkbox"
              checked={item.status}
              name=""
              id=""
            />
            {item.task}
            <button className="btn" onClick={() => deleteTask(item.id)}>
              Delete
            </button>
            <Link to="/edit">
              <button className="btn" onClick={() => editTodo(item.id)}>
                Edit
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn btn-1" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default TodoList;

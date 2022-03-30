import React, { createContext, useReducer } from "react";
import axios from "axios";

const API = "http://localhost:8000/todos";

export const todoContext = createContext();

const INIT_STATE = {
  todos: [],
  taskToEdit: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS_DATA":
      return { ...state, todos: action.payload };
    case "EDIT_TODO":
      return { ...state, taskToEdit: action.payload };
    default:
      return state;
  }
}

const TodoContextProveider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // async function getTodos() {
  //   try {
  //     let { data } = await axios(API);
  //     console.log(data);
  //     dispatch({ type: "GET_TODOS", payload: data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // value={{ todos: state.todos, getTodos }}

  const getTodosData = async () => {
    let { data } = await axios("http://localhost:8000/todos");
    dispatch({ type: "GET_TODOS_DATA", payload: data });
  };

  const addTodo = (newTask) => {
    // console.log(newTask);
    axios.post("http://localhost:8000/todos", newTask);

    getTodosData();
  };

  const changeStatus = async (id) => {
    let { data } = await axios(`http://localhost:8000/todos/${id}`);

    await axios.patch(`http://localhost:8000/todos/${id}`, {
      status: !data.status,
    });
    getTodosData();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    getTodosData();
  };

  const editTodo = async (id) => {
    let { data } = await axios(`http://localhost:8000/todos/${id}`);
    dispatch({
      type: "EDIT_TODO",
      payload: data,
    });
  };

  const saveTask = async (newTask) => {
    axios.patch(`http://localhost:8000/todos/${newTask.id}`, newTask);
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        taskToEdit: state.taskToEdit,
        addTodo,
        getTodosData,
        changeStatus,
        deleteTask,
        editTodo,
        saveTask,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProveider;

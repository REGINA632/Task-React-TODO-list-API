import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./Components/AddTodo/AddTodo";
import MainLayout from "./layouts/MainLayout";
import TodoList from "./Components/TodoList/TodoList";
import Home from "./Components/Home/Home";
import EditTodo from "./Components/EditTodo/EditTodo";
import Error from "./Components/Error";

const Routs = () => {
  return (
    <Routes>
      {/* <Route element={<MainLayout />}> */}
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit" element={<EditTodo />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routs;

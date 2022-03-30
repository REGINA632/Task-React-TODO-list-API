import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  return (
    <div className="home">
      <img
        width="200px"
        src="https://plano.todo-cloud.com/images/todo-cloud-landing-page-logo@2x.png"
        alt=""
      />
      <h1>Get it all right with Todo Cloud</h1>
      <div className="comp">
        <div>
          <NavLink to="/add">
            <h3>Add new task</h3>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptates consectetur aliquam. Quidem facere temporibus
            reprehenderit.
          </p>
          <img
            width="350px"
            src="https://foiz.ru/uz_files/121627/Shiba_bllankBG.gif"
            alt=""
          />
        </div>
        <div>
          <NavLink to="/list">
            <h3>View todo list</h3>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            harum saepe magni labore eos, veniam omnis et esse, corrupti enim
            exercitationem.
          </p>
          <img
            width="350px"
            src="https://static.tildacdn.com/tild3962-6239-4965-b233-643162363164/giphy_-_2020-10-27T0.gif"
            alt=""
          />
        </div>
        <div>
          <NavLink to="/list">
            <h3>Edit the todo list</h3>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            cumque reiciendis earum cupiditate quisquam velit consequuntur quia
            obcaecati.
          </p>
          <img
            width="430px"
            src="https://acegif.com/wp-content/gif/unicorn-68.gif"
            alt=""
          />
        </div>
      </div>
      {/* <Link to="/add">Add</Link>
      <Link to="/list">List</Link> */}
      {/* <AddTodo />
      <TodoList /> */}
    </div>
  );
};

export default Home;

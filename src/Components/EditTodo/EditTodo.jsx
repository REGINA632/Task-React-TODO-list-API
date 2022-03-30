import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../Context/TodoContextProveider";
import { useNavigate } from "react-router-dom";
import "./EditTodo.css";

const EditTodo = () => {
  const { taskToEdit, saveTask, getTodosData } = useContext(todoContext);
  const [newEditItem, setNewEditItem] = useState(taskToEdit);
  const navigate = useNavigate();
  useEffect(() => {
    setNewEditItem(taskToEdit);
  }, [taskToEdit]);

  function handleEditInp(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    };
    setNewEditItem(newTask);
    getTodosData();
  }

  return (
    <div className="editTodo">
      <h1>Edit list</h1>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInp}
            value={newEditItem.task}
            type="text"
          />
          <button
            className="btn"
            onClick={() => {
              saveTask(newEditItem);
              navigate("/list");
            }}
          >
            Save
          </button>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default EditTodo;

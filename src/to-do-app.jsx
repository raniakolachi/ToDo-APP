import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todoapp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteHandler = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column text-center imge object-fit-cover w-100 ">
      <form onSubmit={formHandler} className="mb-3">
    <div className="bg-info-subtle p-5 rounded-2">
        <h2 className="pb-4">TO DO APP</h2>
    <div
          className="input-group"
          style={{ width: "250px", margin: "0 auto" }}
        >
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
    
        </div>
    </div>
      
      </form>

      {tasks.length > 0 && (
        <div className="mt-3" style={{ width: "250px" }}>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center my-2"
            >
              <h4 className="m-0">{task}</h4>
              <button
                onClick={() => deleteHandler(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
            
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Todoapp;

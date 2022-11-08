import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //desestructuro el props
  const [newTaskName, setNewTaskName] = useState(""); //inicializo para que no me tire alerta

  const handleSubmit = (e) => {
    e.preventDefault(); //cancela el evento por default
    createNewTask(newTaskName); //Ejecuto la funcion que le pase como parametro

    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="Ingrese una tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control form-control-sm"
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save task</button>
      </div>
    </form>
  );
};

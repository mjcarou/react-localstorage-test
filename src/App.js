import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (taskName === "") {
      alert("Please enter a task name");
      return;
    }

    if (!tasksItems.find((task) => task.name === taskName)) {
      //me retorna un objeto y pregunto si me devuelve undifined
      setTasksItems([...tasksItems, { name: taskName, done: false }]); //hago una copia del arreglo y despues agrego la nueva tarea como objeto
    } else {
      alert("El elemento " + taskName + " ya existe.");
    }
  };

  const toggleTask = (task) => {
    //Actualizo el arreglo de tareas con el done
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done)); //quito las tareas que ya estan echas del arreglo
    setShowCompleted(false); //desactivo el checked
  };

  useEffect(() => {
    //cargo lo que esta en el localStorage
    let data = localStorage.getItem("tasks");

    if (data) {
      //si hay datos lo convierto al formato de jscript
      setTasksItems(JSON.parse(data)); //lo cargo en el estado
    }
  }, []); //al dejar vacio el arreglo se ejecuta cuando la aplicacion carga

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems)); //stringify lo guarda en el localstorage con formato json
  }, [tasksItems]); //coloco en el arreglo el dato que voy a vigilar si cambia

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted} //visualizo en el checked
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;

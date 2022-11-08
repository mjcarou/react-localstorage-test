import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  //le paso dos propiedades

  const taskTableRow = (doneValue) => {
    //aplico filtro
    return tasks
      .filter(task => task.done === doneValue)
      .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} /> //le voy pasando al componente final toggleTask
    ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRow(showCompleted)
        }
      </tbody>
    </table>
  );
};

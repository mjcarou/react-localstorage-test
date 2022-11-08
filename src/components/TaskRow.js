export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)} //le paso la tarea que estoy intentando cambiar el estado
        />
      </td>
    </tr>
  );
};

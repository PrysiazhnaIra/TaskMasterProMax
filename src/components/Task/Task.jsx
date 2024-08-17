import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import PropTypes from "prop-types";

export default function Task({ task }) {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.container}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        {" "}
        Delete
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired, // або PropTypes.number, якщо id - це число
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

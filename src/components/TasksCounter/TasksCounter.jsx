import css from "./TasksCounter.module.css";
import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";

export default function TaskCounter() {
  // Отримуємо масив завдань із стану Redux
  const count = useSelector(selectTaskCount);

  return (
    <div className={css.counterBlock}>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
}

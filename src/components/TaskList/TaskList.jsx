import css from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";

export default function TaskList() {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

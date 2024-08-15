import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Header.module.css";
import TaskList from "../TaskList/TaskList";

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home page</NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          <TaskList />
        </NavLink>
      )}
    </nav>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./Header.module.css";
import { logoutThunk } from "../../redux/auth/operation";

export default function Header() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header className={css.headerBlock}>
      <h2 className={css.title}>AuthTaskMaster</h2>
      <h3 className={css.text}>{user.name}</h3>
      <ul className={css.navLinkBlock}>
        <li>
          <NavLink className={css.navLinkItem} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={css.navLinkItem} to="/tasks">
            Tasks
          </NavLink>
        </li>

        {!isLoggedIn && (
          <ul className={css.navLinkBlock}>
            <li>
              <NavLink className={css.navLinkItem} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLinkItem} to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <li>
            <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
              Exit
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}

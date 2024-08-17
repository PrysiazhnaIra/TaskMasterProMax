import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import Form from "../../components/Form/Form";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import TaskList from "../../components/TaskList/TaskList";
import TaskCounter from "../../components/TasksCounter/TasksCounter";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchTasks } from "../../redux/operations";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Завантажуємо завдання тільки якщо користувач авторизований
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchTasks());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h1 className="title">Wish List</h1>
      <p className="text">Task & Travel & Goals & Getaways</p>
      <Form />
      <StatusFilter />
      <TaskCounter />
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList />

      <p className="footer">Vite + React + Redux project - Ira Prysiazhna</p>
    </div>
  );
}

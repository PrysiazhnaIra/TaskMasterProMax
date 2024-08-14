import "./App.css";
import "modern-normalize";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import TaskCounter from "./components/TasksCounter/TasksCounter";
import StatusFilter from "./components/StatusFilter/StatusFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";
import { Layout } from "./components/Layout/Layout";

function App() {
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#90EE90";
  });

  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // // Отримуємо частини стану
  // const { items, isLoading, error } = useSelector(getTasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <h1 className="title">A country I need to visit</h1>
      <Form />
      <StatusFilter />
      <TaskCounter />
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList />
      <p className="footer">Vite + React + Redux project - Ira Prysiazhna</p>
      {/* {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
    </Layout>
  );
}

export default App;

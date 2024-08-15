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
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Tasks from "./pages/Tasks/Tasks";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "LavenderBlush";
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
    <>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <h1 className="title">Wish List</h1>
      <p className="text">Task & Travel & Goals & Getaways</p>
      <Form />
      <StatusFilter />
      <TaskCounter />
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList /> */}

      {/* <p className="footer">Vite + React + Redux project - Ira Prysiazhna</p> */}
    </>
  );
}

export default App;

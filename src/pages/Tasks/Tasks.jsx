import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import Form from "../../components/Form/Form";
import StatusFilter from "../../components/StatusFilter/StatusFilter";
import TaskList from "../../components/TaskList/TaskList";
import TaskCounter from "../../components/TasksCounter/TasksCounter";
import { selectIsLoading } from "../../redux/selectors";

export default function Tasks() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <h1 className="title">Wish List</h1>
      <p className="text">Task & Travel & Goals & Getaways</p>
      <Form />
      <StatusFilter />
      <TaskCounter />
      <Filter />
      {/* {isLoading && !error && <p>Request in progress...</p>} */}
      <TaskList />

      <p className="footer">Vite + React + Redux project - Ira Prysiazhna</p>
    </div>
  );
}

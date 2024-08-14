import css from "./Form.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

export default function Form() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Викликаємо генератор екшену
    // та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання

    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Please, enter your country..."
      />
      <button type="submit" className={css.btn}>
        Add
      </button>
    </form>
  );
}

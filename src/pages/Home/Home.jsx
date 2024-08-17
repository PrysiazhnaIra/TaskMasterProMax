import css from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <p className={css.text}>
        This is a personal to-do list application designed to help you
        efficiently manage your daily tasks. There you can easily add, delete,
        filter, and search for tasks using an intuitive interface. To enhance
        your user experience, the application also allows you to customize the
        background, enabling you to choose a design that is most pleasing and
        motivating for you 🤗
      </p>
    </div>
  );
}

import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import css from "./Login.module.css";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit" className={css.btn}>
            Login
          </button>
          <p>
            You don't have an account? <Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

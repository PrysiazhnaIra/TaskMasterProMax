import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import css from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operation";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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

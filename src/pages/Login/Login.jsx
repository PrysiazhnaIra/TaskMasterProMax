import { Formik, Form, Field } from "formik";
import { Link, Navigate } from "react-router-dom";
import css from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operation";
// import * as Yup from "yup";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { ErrorMessage } from "formik";

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };

  //   const validationSchema = Yup.object({
  //     email: Yup.string().email("Invalid email format").required("Required"),
  //     password: Yup.string()
  //       .min(6, "Password must be at least 6 characters")
  //       .required("Required"),
  //   });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className={css.error} />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
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

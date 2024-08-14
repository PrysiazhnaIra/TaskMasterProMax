import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import classnames from "classnames";



const activeColor = ({ isActive }) => {
  return classnames(css.navLink, {
    [css.active]: isActive,
  });
};


const Navigation = ({ children }) => {
  return (
    <>
      <header className={css.head}>
        <div className={css.container}>
          <NavLink className={activeColor} to="/">
            Home
          </NavLink>
          <NavLink className={activeColor} to="/movies">
            Movies
          </NavLink>
        </div>
      </header>
      <main className={css.content}>{children}</main>
    </>
  );
};

export default Navigation;

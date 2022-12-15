import { NavLink } from "react-router-dom";
import classes from "../../organims/Header/header.module.scss";

export function LinksHeader({ show }) {
  return (
    <div
      className={classes.header__links}
      style={{
        top: show ? "5rem" : "-100vh",
      }}
    >
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          sobre
        </NavLink>
      </div>
    </div>
  );
}

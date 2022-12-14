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
        <a>home</a>
        <a>sobre</a>
      </div>
    </div>
  );
}

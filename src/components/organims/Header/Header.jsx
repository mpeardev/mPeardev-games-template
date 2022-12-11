import classes from "./header.module.scss";
import { Content } from "../..";

export function Header({ breakpoint }) {
  return (
    <header className={classes.header}>
      <Content>
        <div className={classes.header__container}>
          <div className={classes.header__logo}>
            {breakpoint === "xxl" && (
              <img src="/logo/logo-dark.png" alt="logo" />
            )}
            {breakpoint === "lg" && (
              <img src="/logo/logo-notebook-dark.png" alt="logo" />
            )}
            {breakpoint === "sm" && (
              <img
                src="/icon/200x200/icon-dark.png"
                alt="logo"
                style={{ width: "3.8rem" }}
              />
            )}
          </div>
          <ul className={classes.header__links}>
            <li>Home</li>
            <li>Sobre</li>
          </ul>
        </div>
      </Content>
    </header>
  );
}

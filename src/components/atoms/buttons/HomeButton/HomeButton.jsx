import classes from "./home-button.module.scss";

export function HomeButton({ name }) {
  return <button className={classes.button}>{name}</button>;
}

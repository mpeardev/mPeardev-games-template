import classes from "./default-button.module.scss";

export function DefaultButton({ name }) {
  return <button className={classes.button}>{name}</button>;
}

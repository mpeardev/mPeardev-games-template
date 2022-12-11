import classes from "./defaut-gradient.module.scss";

export function DefaultGradient({ children }) {
  return <div className={classes.gradient}>{children}</div>;
}

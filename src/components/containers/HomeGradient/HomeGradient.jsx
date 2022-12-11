import classes from "./home-gradient.module.scss";

export function HomeGradient({ children }) {
  return <div className={classes.gradient}>{children}</div>;
}

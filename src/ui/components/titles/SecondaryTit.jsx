import classes from "./titles.module.scss";

export function SecondaryTit({ title = "title" }) {
  return (
    <div className={classes.title}>
      <h4>{title}</h4>
    </div>
  );
}

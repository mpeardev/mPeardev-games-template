import { applyButtonSize, style } from "../../../utils/applyButtonSize";
import classes from "./buttons.module.scss";

export function SecondaryButton({ name, size }) {
  applyButtonSize(size);

  return (
    <button className={`${classes.button} ${classes.secondary}`} style={style}>
      {name}
    </button>
  );
}

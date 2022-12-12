import classes from "./buttons.module.scss";
import { applyButtonSize, style } from "../../../utils/applyButtonSize";

export function PrimaryButton({ name, size }) {
  applyButtonSize(size);

  return (
    <button className={`${classes.button} ${classes.primary}`} style={style}>
      {name}
    </button>
  );
}

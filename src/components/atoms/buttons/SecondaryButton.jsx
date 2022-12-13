import { applyButtonSize, style } from "../../../utils/applyButtonSize";
import classes from "./buttons.module.scss";

export function SecondaryButton({ name, size, onClick = () => false }) {
  applyButtonSize(size);

  return (
    <button
      className={`${classes.button} ${classes.secondary}`}
      style={style}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

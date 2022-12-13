import classes from "./buttons.module.scss";
import { applyButtonSize, style } from "../../../utils/applyButtonSize";

export function PrimaryButton({ name, size, onClick = () => false }) {
  applyButtonSize(size);

  return (
    <button
      className={`${classes.button} ${classes.primary}`}
      style={style}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

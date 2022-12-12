import { buttonSize } from "../config/buttonSize";

export let style = "";

export const applyButtonSize = (size) => {
  style = size;

  switch (size) {
    case "sm":
      style = buttonSize.sm;
      break;
    case "lg":
      style = buttonSize.lg;
      break;
    case "xl":
      style = buttonSize.xl;
      break;
    default:
      style = buttonSize.lg;
  }
};

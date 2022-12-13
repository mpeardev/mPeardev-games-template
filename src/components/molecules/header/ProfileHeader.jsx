import classes from "../../organims/Header/header.module.scss";
import { PrimaryButton } from "../..";

export function ProfileHeader({ breakpoint }) {
  return (
    <div className={classes.header__profile}>
      <div>
        <PrimaryButton name="ingresa" size={breakpoint <= 640 ? "sm" : "lg"} />
      </div>
    </div>
  );
}

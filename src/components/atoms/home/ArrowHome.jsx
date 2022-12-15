import classes from "../../organims/Home/home.module.scss";
import colors from "../../organims/Home/home.module.scss";
import { BiDownArrow } from "../icons";

export function ArrowHome() {
  const click = () => {
    window.scrollTo({
      top: 830,
      left: 0,
    });
  };

  return (
    <div className={classes.home__arrow} onClick={click}>
      <div>
        <p>explorar juegos</p>
        <BiDownArrow color={colors.text} size="2.5rem" />
      </div>
    </div>
  );
}

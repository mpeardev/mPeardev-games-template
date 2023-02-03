import classes from "../home.module.scss";
import colors from "../home.module.scss";
import { BiDownArrow } from "/src/ui/icons";

export function Arrow() {
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

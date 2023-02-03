import { useContext } from "react";
import classes from "../header.module.scss";
import BreakpointContext from "/src/state/breakpoint/BreakpointContext";
import { AiOutlineMenu } from "/src/ui/icons";

export function MenuIcon({ show, setShow }) {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <div
      className={classes.header__menuicon}
      style={{ display: breakpoint <= 640 ? "inline-block" : "none" }}
      onClick={() => setShow(!show)}
    >
      <div>
        <AiOutlineMenu size="1.5rem" />
      </div>
    </div>
  );
}

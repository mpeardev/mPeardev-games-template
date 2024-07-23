import { useContext } from "react";
import { Link } from "react-router-dom";
import BreakpointContext from "/src/state/breakpoint/BreakpointContext";

export function Logo() {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <div>
      <Link to="/">
        {breakpoint <= 640 && (
          <img
            src="/img/icon/200x200/icon-dark.png"
            alt="logo"
            style={{ width: "3rem" }}
          />
        )}
        {breakpoint >= 641 && (
          <img
            src="/img/logo/logo-dark.png"
            alt="logo"
            style={{ width: "10rem" }}
          />
        )}
      </Link>
    </div>
  );
}

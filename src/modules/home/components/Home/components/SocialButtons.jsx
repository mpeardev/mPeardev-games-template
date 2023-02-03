import { useContext } from "react";
import classes from "../home.module.scss";
import { SecondaryBtn } from "/src/ui/components";
import BreakpointContext from "/src/state/breakpoint/BreakpointContext";

export function SocialButtonsHome() {
  const { breakpoint } = useContext(BreakpointContext);

  return (
    <div className={classes.home__contentSocial}>
      <p>Contacto</p>
      <div className={classes.home__contentButtons}>
        <a
          href="https://www.linkedin.com/in/mirkoperamas/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SecondaryBtn
            name={"LinkedIn"}
            size={breakpoint <= 640 ? "sm" : "lg"}
          />
        </a>
        <a
          href="https://github.com/mirkoperamas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SecondaryBtn
            name={"GitHub"}
            size={breakpoint <= 640 ? "sm" : "lg"}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=51956000371&text=Hola%20Mirko!%20,%20quiero%20contactarme%20contigo%20para%20..."
          target="_blank"
          rel="noreferrer noopener"
        >
          <SecondaryBtn
            name={"WhatsApp"}
            size={breakpoint <= 640 ? "sm" : "lg"}
          />
        </a>
      </div>
    </div>
  );
}

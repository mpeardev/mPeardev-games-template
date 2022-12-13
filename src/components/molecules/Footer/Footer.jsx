import classes from "./footer.module.scss";
import { Content } from "../..";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Content>
        <div className={classes.footer__top}>
          <img src="/logo/logo-dark.png" alt="logo" />
          <div className={classes.footer__networks}>
            <div>
              <BsLinkedin />
            </div>
            <div>
              <BsGithub />
            </div>
            <div>
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </Content>
      <hr />
      <Content>
        <p>
          &copy;{new Date().getFullYear()} Todos los derechos reservados |
          mPeardev
        </p>
      </Content>
    </div>
  );
}

import classes from "../login.module.scss";
import { PrimaryBtn, PrimaryInp } from "/src/ui/components";
import { BiLeftArrow } from "/src/ui/icons";

export function SignUp({ setState, closeLoginModal, openComingModal }) {
  return (
    <div className={classes.login}>
      <PrimaryInp name={"correo electronico"} required />
      <PrimaryInp name={"contraseña"} />
      <PrimaryInp name={"repetir contraseña"} />
      <div className={classes.login__buttons}>
        <PrimaryBtn
          name={"Registrarse"}
          size={"sm"}
          onClick={() => {
            closeLoginModal();
            openComingModal();
          }}
        />
      </div>
      <div
        className={`${classes.login__action} ${classes.login__back}`}
        onClick={() => {
          setState(false);
        }}
      >
        <BiLeftArrow />
        <p>Regresar</p>
      </div>
    </div>
  );
}

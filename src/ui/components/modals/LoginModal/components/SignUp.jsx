import classes from "../login.module.scss";
import { PrimaryButton, PrimaryInput } from "/src/ui/components";
import { BiLeftArrow } from "/src/ui/icons";

export function SignUp({ setState, closeLoginModal, openComingModal }) {
  return (
    <div className={classes.login}>
      <PrimaryInput name={"correo electronico"} required />
      <PrimaryInput name={"contraseña"} />
      <PrimaryInput name={"repetir contraseña"} />
      <div className={classes.login__buttons}>
        <PrimaryButton
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

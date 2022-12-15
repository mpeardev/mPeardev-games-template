import classes from "./login.module.scss";
import { PrimaryButton, PrimaryInput } from "../../../components";
import { BiLeftArrow } from "../../atoms/icons";

export function SignUp({ setState }) {
  return (
    <div className={classes.login}>
      <PrimaryInput name={"correo electronico"} required />
      <PrimaryInput name={"contraseña"} />
      <PrimaryInput name={"repetir contraseña"} />
      <div className={classes.login__buttons}>
        <PrimaryButton
          name={"Registrarse"}
          size={"sm"}
          onClick={() => setState(false)}
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

import classes from "./login.module.scss";
import {
  PrimaryButton,
  PrimaryInput,
  TertiaryButton,
} from "../../../components";
import { FcGoogle } from "../../atoms/icons";

export function LogIn({ setAccount, setState, closeLoginModal }) {
  return (
    <div className={classes.login}>
      <PrimaryInput
        name={"correo electronico"}
        required
        // error={"message error"}
      />
      <PrimaryInput name={"contraseña"} />
      <div className={classes.login__buttons}>
        <PrimaryButton
          name={"Ingresar"}
          size={"sm"}
          onClick={() => {
            setAccount(true);
            closeLoginModal();
          }}
        />
        <TertiaryButton
          name={"Ingresar con Google"}
          size={"sm"}
          onClick={() => {
            setAccount(true);
            closeLoginModal();
          }}
        >
          <FcGoogle size="1rem" />
        </TertiaryButton>
      </div>
      <div className={classes.login__action}>
        <p>
          ¿No tienes una cuenta?{" "}
          <a
            onClick={() => {
              setState(true);
            }}
          >
            Registrate
          </a>
        </p>
      </div>
    </div>
  );
}

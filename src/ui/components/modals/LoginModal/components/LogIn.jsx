import classes from "../login.module.scss";
import { PrimaryBtn, PrimaryInp, TertiaryBtn } from "/src/ui/components";
import { FcGoogle } from "/src/ui/icons";

export function LogIn({
  setAccount,
  setState,
  closeLoginModal,
  openComingModal,
}) {
  return (
    <div className={classes.login}>
      <PrimaryInp
        name={"correo electronico"}
        required
        // error={"message error"}
      />
      <PrimaryInp name={"contraseña"} />
      <div className={classes.login__buttons}>
        <PrimaryBtn
          name={"Ingresar"}
          size={"sm"}
          onClick={() => {
            closeLoginModal();
            openComingModal();
          }}
        />
        <TertiaryBtn
          name={"Ingresar con Google"}
          size={"sm"}
          onClick={() => {
            closeLoginModal();
            openComingModal();
          }}
        >
          <FcGoogle size="1rem" />
        </TertiaryBtn>
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

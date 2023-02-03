import { useState } from "react";
import { LogIn, SignUp } from "./components";
import { Default } from "../containers/Default";

export function LoginModal({
  isOpenLoginModal,
  closeLoginModal,
  setAccount,
  openComingModal,
}) {
  const [state, setState] = useState();
  return (
    <Default
      title={!state ? "iniciar sesión" : state && "regístrate"}
      isOpenModal={isOpenLoginModal}
      closeModal={closeLoginModal}
      size="lg"
    >
      {!state && (
        <LogIn
          setAccount={setAccount}
          setState={setState}
          closeLoginModal={closeLoginModal}
          openComingModal={openComingModal}
        />
      )}
      {state && (
        <SignUp
          setState={setState}
          closeLoginModal={closeLoginModal}
          openComingModal={openComingModal}
        />
      )}
    </Default>
  );
}

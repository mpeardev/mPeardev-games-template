import { useState } from "react";
import { DefaultModal, LogIn, SignUp } from "../../../components";

export function LoginModal({
  isOpenLoginModal,
  closeLoginModal,
  setAccount,
  openComingModal,
}) {
  const [state, setState] = useState();
  return (
    <DefaultModal
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
    </DefaultModal>
  );
}

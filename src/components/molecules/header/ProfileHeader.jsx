import { useState } from "react";
import classes from "../../organims/Header/header.module.scss";
import { LoginModal, PrimaryButton, SessionProfile } from "../../../components";
import { useModal } from "../../../hooks/useModal";

export function ProfileHeader({ breakpoint }) {
  const [account, setAccount] = useState();
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  return (
    <div className={classes.header__profile}>
      <div>
        {!account && (
          <PrimaryButton
            name="Ingresa"
            size={breakpoint <= 640 ? "sm" : "lg"}
            onClick={openLoginModal}
          />
        )}
        {account && (
          <SessionProfile
            breakpoint={breakpoint}
            account={account}
            setAccount={setAccount}
            onClick={() => setAccount(!account)}
          />
        )}
        {isOpenLoginModal && (
          <LoginModal
            isOpenLoginModal={isOpenLoginModal}
            closeLoginModal={closeLoginModal}
            setAccount={setAccount}
          />
        )}
      </div>
    </div>
  );
}

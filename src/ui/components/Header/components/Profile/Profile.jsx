import { useState } from "react";
import classes from "../../header.module.scss";
import { ComingModal, LoginModal, PrimaryButton } from "/src/ui/components";
import { SessionProfile } from "..";
import { useModal } from "../../../../../hooks/useModal";
import { useContext } from "react";
import BreakpointContext from "/src/state/breakpoint/BreakpointContext";

export function Profile() {
  const { breakpoint } = useContext(BreakpointContext);

  const [account, setAccount] = useState();
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();
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
            openComingModal={openComingModal}
            setAccount={setAccount}
          />
        )}
        {isOpenComingModal && (
          <ComingModal
            isOpenComingModal={isOpenComingModal}
            closeComingModal={closeComingModal}
          />
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import classes from "../../organims/Header/header.module.scss";
import { PrimaryButton, SessionProfile } from "../..";

export function ProfileHeader({ breakpoint }) {
  const [account, setAccount] = useState();
  return (
    <div className={classes.header__profile}>
      <div>
        {!account && (
          <PrimaryButton
            name="ingresa"
            size={breakpoint <= 640 ? "sm" : "lg"}
            onClick={() => setAccount(!account)}
          />
        )}
        {account && (
          <SessionProfile
            breakpoint={breakpoint}
            account={account}
            setAccount={setAccount}
          />
        )}
      </div>
    </div>
  );
}

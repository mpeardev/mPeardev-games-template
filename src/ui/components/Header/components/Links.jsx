import { NavLink } from "react-router-dom";
import classes from "../header.module.scss";
import { ComingModal } from "/src/ui/components/modals";
import { useModal } from "../../../../hooks/useModal";

export function Links({ show }) {
  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();
  return (
    <>
      <div
        className={classes.header__links}
        style={{
          top: show ? "5rem" : "-100vh",
        }}
      >
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            home
          </NavLink>
          <a onClick={openComingModal}>sobre</a>
        </div>
      </div>
      {isOpenComingModal && (
        <ComingModal
          isOpenComingModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </>
  );
}

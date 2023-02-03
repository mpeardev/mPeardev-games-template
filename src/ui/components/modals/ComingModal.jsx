import { Default } from "./containers/Default";

export function ComingModal({ isOpenComingModal, closeComingModal }) {
  return (
    <Default isOpenModal={isOpenComingModal} closeModal={closeComingModal}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Proximamente</h1>
      </div>
    </Default>
  );
}

import classes from "./modals.module.scss";

export function LoginModal() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        background: "#fff",
        position: "relative",
      }}
    >
      <div className={classes.modal}>
        <div className={classes.modal__container}>
          <h1>Login Modal</h1>
        </div>
      </div>
    </section>
  );
}

import classes from "./footer.module.scss";

export function Footer() {
  return (
    <div className={classes.footer}>
      <p>
        &copy;{new Date().getFullYear()} Todos los derechos reservados |
        mPeardev
      </p>
    </div>
  );
}

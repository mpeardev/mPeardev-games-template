import classes from "../../../header.module.scss";

export function SessionProfile({ account, setAccount }) {
  return (
    <div
      className={classes.header__session}
      onClick={() => setAccount(!account)}
    >
      <div className={classes.header__sessionMain}>
        <h6>Mirko Peramas Benites</h6>
        <p>mirkoperamas@gmail.com</p>
      </div>
      <div className={classes.header__sessionImg}>
        <img src="/profile.png" href="profile-image" />
      </div>
    </div>
  );
}

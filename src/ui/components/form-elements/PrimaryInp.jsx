import classes from "./form-elements.module.scss";

export function PrimaryInp({
  name = "",
  type = "text",
  placeholder = "",
  required = false,
  error = "",
}) {
  return (
    <div className={classes.input}>
      <div>
        <h4>{name}</h4>
        {required && <span>(requerido)</span>}
      </div>
      <div className={classes.input__field}>
        <input type={type} placeholder={placeholder} />
        <p>{error}</p>
      </div>
    </div>
  );
}

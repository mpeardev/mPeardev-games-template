import Select from "react-select";
import classes from "./form-elements.module.scss";

export function PrimarySel({
  name = "",
  required = false,
  options = [],
  error = "",
}) {
  const customStyles = {
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "6px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#fff",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#3db3a2",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#3db3a2",
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "OpenSans-Light",
    }),
    control: (base) => ({
      ...base,
      fontFamily: "OpenSans-Regular",
      fontSize: 14,
      height: 12,
    }),
  };
  return (
    <div className={classes.select}>
      <div>
        <h4>{name}</h4>
        {required && <span>(requerido)</span>}
      </div>
      <div className={classes.select__field}>
        <Select
          options={options}
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#e1e1e1",
              primary50: "#bf002a20",
              primary: "#bf002a",
            },
          })}
        />
        <p>{error}</p>
      </div>
    </div>
  );
}

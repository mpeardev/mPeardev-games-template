import classes from "../games.module.scss";

export function TableGame({ instructions, mode }) {
  return (
    <div className={classes.games__table}>
      {instructions.map(({ instruction, number }) => {
        return (
          <div key={number}>
            <h5>#{number}</h5>
            <p>{instruction}</p>
          </div>
        );
      })}

      <div
        className={classes.games__tableMode}
        style={{
          gridTemplateColumns:
            mode === "multijugador" ? "repeat(2, 1fr)" : "1fr",
        }}
      >
        <h5>Modo de juego</h5>
        <div>
          <img src="/solo.png" alt="solo" />
          <p>solo</p>
        </div>
        {mode === "multijugador" && (
          <div>
            <img src="/multijugador.png" alt="multijugador" />
            <p>multijugador</p>
          </div>
        )}
      </div>
    </div>
  );
}

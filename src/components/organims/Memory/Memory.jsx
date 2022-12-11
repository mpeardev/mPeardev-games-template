import {
  PageContainer,
  DefaultGradient,
  Content,
  Title,
  SecondaryTitle,
  Subtitle,
  DefaultButton,
} from "../..";
import classes from "./memory.module.scss";

export function Memory() {
  return (
    <section className={classes.memory}>
      <PageContainer>
        <div className={classes.memory__image}>
          <DefaultGradient />
        </div>
        <div className={classes.memory__content}>
          <Content>
            <div className={classes.memory__text}>
              <div>
                <div className={classes.memory__textTitle}>
                  <SecondaryTitle title={"juego de mesa"} />
                  <Title title={"memoria"} />
                </div>
                <div className={classes.memory__textDescription}>
                  <div>
                    <Subtitle subtitle={"descripcion"} />
                    <p>
                      Memoria es un juego de mesa cuyo objetivo es encontrar los
                      pares con la misma figura. Pon a prueba tu memoria
                      desafiándote en este juego!
                    </p>
                  </div>
                  <div>
                    <Subtitle subtitle={"instrucciones"} />
                    <div className={classes.memory__textTable}>
                      <div>
                        <h5>#1</h5>
                        <p>
                          Elige entre jugar solo con un score de movimientos o
                          multijugador (2 jugadores).
                        </p>
                      </div>
                      <div>
                        <h5>#2</h5>
                        <p>
                          Empezar una nueva ronda es tan sencillo como darle
                          click a Nuevo Juego.
                        </p>
                      </div>
                      <div>
                        <h5>#3</h5>
                        <p>
                          Puedes escoger entre 3 niveles de dificultad (fácil,
                          medio, difícil).
                        </p>
                      </div>
                      <div>
                        <h5>#4</h5>
                        <p>
                          Cuando juegas solo el objetivo es obtener el menor
                          número de movimientos, mientras que en el modo
                          multijugador gana quien mayor número de tarjetas
                          tiene.
                        </p>
                      </div>
                      <div>
                        <h5>Tipo de juego</h5>
                        <div>
                          <img src="/solo.png" alt="solo" />
                          <p>solo</p>
                        </div>
                        <div>
                          <img src="/multijugador.png" alt="multijugador" />
                          <p>multijugador</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.memory__textButton}>
                    <DefaultButton name={"jugar memoria"} />
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </PageContainer>
    </section>
  );
}

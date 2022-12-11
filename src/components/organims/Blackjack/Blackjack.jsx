import {
  PageContainer,
  DefaultGradient,
  Content,
  Title,
  SecondaryTitle,
  Subtitle,
  DefaultButton,
} from "../..";
import classes from "./blackjack.module.scss";

export function Blackjack() {
  return (
    <section className={classes.blackjack}>
      <PageContainer>
        <div className={classes.blackjack__image}>
          <DefaultGradient />
        </div>
        <div className={classes.blackjack__content}>
          <Content>
            <div className={classes.blackjack__text}>
              <div>
                <div className={classes.blackjack__textTitle}>
                  <SecondaryTitle title={"cartas"} />
                  <Title title={"blackjack"} />
                </div>
                <div className={classes.blackjack__textDescription}>
                  <div>
                    <Subtitle subtitle={"descripcion"} />
                    <p>
                      Blackjack o veintiuno, juego de cartas simple cuyo
                      objetivo es sumar un mayor valor próximo a 21. Ingresa
                      dando click al boton y prueba tu suerte!
                    </p>
                  </div>
                  <div>
                    <Subtitle subtitle={"instrucciones"} />
                    <div className={classes.blackjack__textTable}>
                      <div>
                        <h5>#1</h5>
                        <p>
                          Elige entre jugar solo contra la maquina o
                          multijugador (hasta 3 jugadores).
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
                          Click en Pedir Carta para solicitar una carta a tu
                          mano de cartas. Click en Detener para plantarte y
                          obtener una puntuación.
                        </p>
                      </div>
                      <div>
                        <h5>#4</h5>
                        <p>
                          Puedes darle a Detener siempre y cuando no hayas
                          sobrepasado el marcador de 21 para probar suerte,
                          perderás automáticamente en caso tu mano sea mayor a
                          21.
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
                  <div className={classes.blackjack__textButton}>
                    <DefaultButton name={"jugar blackjack"} />
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

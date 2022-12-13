import games from "/public/json/games.json";
import classes from "./games-view.module.scss";
import {
  PageContainer,
  LinearGradient,
  RadialGradient,
  Content,
  Title,
  SecondaryTitle,
  Subtitle,
  PrimaryButton,
  TableGame,
} from "../..";

export function GamesView({ breakpoint }) {
  return (
    <>
      {games.map(
        ({
          id,
          name,
          category,
          description,
          instructions,
          mode,
          image,
          imagePosition,
        }) => {
          return (
            <section className={classes.games} key={id}>
              <PageContainer>
                <div
                  className={classes.games__image}
                  style={{
                    backgroundImage: `url(${image})`,
                    left: imagePosition === "left" ? 0 : "auto",
                    right: imagePosition === "right" ? 0 : "auto",
                  }}
                >
                  <LinearGradient />
                  <RadialGradient />
                </div>
                <div className={classes.games__content}>
                  <Content>
                    <div
                      className={classes.games__text}
                      style={{
                        justifyContent:
                          imagePosition === "left"
                            ? "flex-end"
                            : imagePosition === "right"
                            ? "flex-start"
                            : "auto",
                      }}
                    >
                      <div>
                        <div className={classes.games__textTitle}>
                          <SecondaryTitle title={category} />
                          <Title title={name} />
                        </div>
                        <div className={classes.games__textDescription}>
                          <div>
                            <Subtitle subtitle={"descripcion"} />
                            <p>{description}</p>
                          </div>
                          <div>
                            <Subtitle subtitle={"instrucciones"} />
                            <TableGame
                              instructions={instructions}
                              mode={mode}
                            />
                          </div>
                          <div className={classes.games__textButton}>
                            <PrimaryButton
                              name={`jugar ${name}`}
                              size={
                                breakpoint <= 640
                                  ? "sm"
                                  : breakpoint >= 1280
                                  ? "xl"
                                  : "md"
                              }
                            />
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
      )}
    </>
  );
}

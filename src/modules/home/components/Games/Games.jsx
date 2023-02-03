import { useContext } from "react";
import games from "/public/json/games.json";
import classes from "./games.module.scss";
import {
  Content,
  PageContainer,
  Title,
  SecondaryTit,
  Subtitle,
  PrimaryBtn,
  ComingModal,
} from "/src/ui/components";
import { LinearGradient, RadialGradient } from "../containers";
import { Table } from "./components";
import { useModal } from "/src/hooks/useModal";
import BreakpointContext from "/src/state/breakpoint/BreakpointContext";

export function Games() {
  const { breakpoint } = useContext(BreakpointContext);

  const [isOpenComingModal, openComingModal, closeComingModal] = useModal();

  return (
    <>
      {games.map(
        ({
          id,
          name,
          category,
          description,
          instructions,
          multiplayer,
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
                          <SecondaryTit title={category} />
                          <Title title={name} />
                        </div>
                        <div className={classes.games__textDescription}>
                          <div>
                            <Subtitle subtitle={"descripcion"} />
                            <p>{description}</p>
                          </div>
                          <div>
                            <Subtitle subtitle={"instrucciones"} />
                            <Table
                              instructions={instructions}
                              multiplayer={multiplayer}
                            />
                          </div>
                          <div className={classes.games__textButton}>
                            <PrimaryBtn
                              name={`jugar ${name}`}
                              size={
                                breakpoint <= 640
                                  ? "sm"
                                  : breakpoint >= 1280
                                  ? "xl"
                                  : "md"
                              }
                              onClick={openComingModal}
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
      {isOpenComingModal && (
        <ComingModal
          isOpenModal={isOpenComingModal}
          closeComingModal={closeComingModal}
        />
      )}
    </>
  );
}

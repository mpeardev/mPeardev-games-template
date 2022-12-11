import classes from "./home.module.scss";
import colors from "./home.module.scss";
import {
  Content,
  HomeButton,
  HomeGradient,
  PageContainer,
  Title,
  SecondaryTitle,
} from "../..";
import { BiDownArrow } from "react-icons/bi";

export function Home() {
  return (
    <section className={classes.home}>
      <PageContainer background={"/home-bg02.jpg"}>
        <HomeGradient>
          <div className={classes.home__content}>
            <Content>
              <div className={classes.home__contentTitle}>
                <Title title={"juegos simples"} size={"90px"} />
                <SecondaryTitle
                  title={"explora los juegos relizados con javascript"}
                />
              </div>
              <div className={classes.home__contentSocial}>
                <p>Contacto</p>
                <div>
                  <HomeButton name={"linkedIn"} />
                  <HomeButton name={"gitHub"} />
                  <HomeButton name={"whatsApp"} />
                </div>
              </div>
            </Content>
          </div>
          <div className={classes.home__arrow}>
            <div>
              <p>explorar juegos</p>
              <BiDownArrow color={colors.text} size="2.5rem" />
            </div>
          </div>
        </HomeGradient>
      </PageContainer>
    </section>
  );
}

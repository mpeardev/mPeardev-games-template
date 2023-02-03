import {
  Content,
  PageContainer,
  Title,
  SecondaryTit,
} from "/src/ui/components";
import { LinearGradient } from "../containers";
import { SocialButtonsHome, Arrow } from "./components";
import classes from "./home.module.scss";

export function Home() {
  return (
    <section className={classes.home}>
      <PageContainer background={"/home-bg.jpg"}>
        <div className={classes.home__content}>
          <Content>
            <div className={classes.home__contentTitle}>
              <Title title={"juegos simples"} size={"90px"} />
              <SecondaryTit
                title={"explora los juegos relizados con javascript"}
              />
            </div>
            <SocialButtonsHome />
          </Content>
        </div>
        <Arrow />
        <LinearGradient />
      </PageContainer>
    </section>
  );
}

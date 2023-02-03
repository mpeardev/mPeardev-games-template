import {
  Content,
  PageContainer,
  Title,
  SecondaryTitle,
} from "/src/ui/components";
import { LinearGradient } from "../containers";
import { SocialButtonsHome, ArrowHome } from "./components";
import classes from "./home.module.scss";

export function Home() {
  return (
    <section className={classes.home}>
      <PageContainer background={"/home-bg.jpg"}>
        <div className={classes.home__content}>
          <Content>
            <div className={classes.home__contentTitle}>
              <Title title={"juegos simples"} size={"90px"} />
              <SecondaryTitle
                title={"explora los juegos relizados con javascript"}
              />
            </div>
            <SocialButtonsHome />
          </Content>
        </div>
        <ArrowHome />
        <LinearGradient />
      </PageContainer>
    </section>
  );
}

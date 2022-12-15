import classes from "./home.module.scss";
import {
  Content,
  SocialButtonsHome,
  LinearGradient,
  PageContainer,
  Title,
  SecondaryTitle,
  ArrowHome,
} from "../../../components";

export function Home({ breakpoint }) {
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
            <SocialButtonsHome breakpoint={breakpoint} />
          </Content>
        </div>
        <ArrowHome />
        <LinearGradient />
      </PageContainer>
    </section>
  );
}

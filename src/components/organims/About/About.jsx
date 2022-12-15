import { PageContainer } from "../../../components";
import classes from "./about.module.scss";

export function About() {
  return (
    <section className={classes.about}>
      <PageContainer>
        <h1>About Page</h1>
      </PageContainer>
    </section>
  );
}

import { Header, Footer } from "./ui/components";
import { AppRouter } from "./routers/AppRouter";

export function GamesApp() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

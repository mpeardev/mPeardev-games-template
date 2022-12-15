import { useState, useEffect } from "react";
import { breakpointObserver } from "./config/breakpoint/breakpointObserver";
import { breakpoints } from "./config/breakpoint/breakpoints";
import { Header, HomePage, Footer } from "./components";
import { AppRouter } from "./routers/AppRouter";

export function GamesApp() {
  const [breakpoint, isBreakpoint] = useState();

  useEffect(() => {
    breakpointObserver(breakpoints, isBreakpoint);
  }, [breakpoint]);
  return (
    <>
      <Header breakpoint={breakpoint} />
      <AppRouter />
      <Footer />
    </>
  );
}

import { useState, useEffect } from "react";
import { breakpointObserver } from "./config/breakpoint/breakpointObserver";
import { breakpoints } from "./config/breakpoint/breakpoints";
import { Header, HomePage, Footer } from "./components";

export function App() {
  const [breakpoint, isBreakpoint] = useState();

  useEffect(() => {
    breakpointObserver(breakpoints, isBreakpoint);
  }, [breakpoint]);
  return (
    <>
      <Header breakpoint={breakpoint} />
      <HomePage breakpoint={breakpoint} />
      <Footer />
    </>
  );
}

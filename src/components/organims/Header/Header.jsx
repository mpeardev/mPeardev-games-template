import classes from "./header.module.scss";
import colors from "./header.module.scss";
import { Content, PrimaryButton } from "../..";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export function Header({ breakpoint }) {
  const [show, setShow] = useState();
  const [fixedHeader, setFixedHeader] = useState();
  const [hidenHeader, setHidenHeader] = useState();

  let scrollInitialPosition = window.scrollY;

  useEffect(() => {
    // To Show Header
    window.addEventListener("scroll", () => {
      let scroll = scrollInitialPosition;

      scroll = window.scrollY;
      if (scroll >= 80) {
        setFixedHeader(true);
      } else if (scroll < 80) {
        setFixedHeader(false);
      }
    });

    // To Hide Header
    window.onscroll = () => {
      if (document.body.getBoundingClientRect().top > scrollInitialPosition) {
        setHidenHeader(true);
      } else if (
        document.body.getBoundingClientRect().top <= scrollInitialPosition
      ) {
        setHidenHeader(false);
      }
      scrollInitialPosition = document.body.getBoundingClientRect().top;
    };
  }, []);

  useEffect(() => {
    if (scrollInitialPosition >= 80 && breakpoint <= 640) {
      setFixedHeader(true);
    }
  }, []);

  useEffect(() => {
    if (breakpoint > 640) {
      setShow(false);
    }
  }, [breakpoint]);

  return (
    <header
      className={classes.header}
      style={{
        background:
          fixedHeader && !show
            ? colors.headerBgGradient
            : show && breakpoint
            ? colors.headerBg
            : "transparent",
        boxShadow: fixedHeader
          ? "0px -10px 25px 0px rgba(0, 0, 0, 0.75)"
          : "none",
        backdropFilter: fixedHeader ? "blur(4px)" : "none",
        position: fixedHeader || show ? "fixed" : "absolute",
        top: fixedHeader && hidenHeader ? "-10%" : "0",
      }}
    >
      <Content>
        <div className={classes.header__container}>
          <div>
            {breakpoint <= 640 && (
              <img
                src="/icon/200x200/icon-dark.png"
                alt="logo"
                style={{ width: "3rem" }}
              />
            )}
            {breakpoint <= 1024 && breakpoint > 640 && (
              <img
                src="/logo/logo-notebook-dark.png"
                alt="logo"
                style={{ width: "7rem" }}
              />
            )}
            {breakpoint >= 1280 && (
              <img
                src="/logo/logo-dark.png"
                alt="logo"
                style={{ width: "10rem" }}
              />
            )}
          </div>
          <div
            className={classes.header__links}
            style={{
              top: show ? "5rem" : "-100vh",
            }}
          >
            <div>
              <a>Home</a>
              <a>Sobre</a>
            </div>
          </div>
          <div className={classes.header__profile}>
            <div>
              <PrimaryButton
                name="ingresa"
                size={breakpoint <= 640 ? "sm" : "lg"}
              />
            </div>
          </div>
          <div
            className={classes.header__menuicon}
            style={{ display: breakpoint <= 640 ? "inline-block" : "none" }}
            onClick={() => setShow(!show)}
          >
            <div>
              <AiOutlineMenu size="1.5rem" />
            </div>
          </div>
        </div>
      </Content>
    </header>
  );
}

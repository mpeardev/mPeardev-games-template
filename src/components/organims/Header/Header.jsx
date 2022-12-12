import classes from "./header.module.scss";
import colors from "./header.module.scss";
import { Content, PrimaryButton } from "../..";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export function Header({ breakpoint }) {
  const [show, setShow] = useState();
  const [fixedScroll, setFixedScroll] = useState();

  let scrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
    let scroll = scrollPosition;

    scroll = window.scrollY;
    if (scroll >= 80) {
      setFixedScroll(true);
    }
    if (scroll < 80) {
      setFixedScroll(false);
    }
  });

  useEffect(() => {
    if (scrollPosition >= 80) {
      setFixedScroll(true);
    }
  }, []);

  return (
    <header
      className={classes.header}
      style={{
        background:
          fixedScroll && !show
            ? colors.headerBgGradient
            : show
            ? colors.headerBg
            : "transparent",
        boxShadow: fixedScroll
          ? "0px -10px 20px 0px rgba(0, 0, 0, 0.75)"
          : "none",
        backdropFilter: fixedScroll ? "blur(4px)" : "none",
        position: fixedScroll ? "fixed" : "absolute",
      }}
    >
      <Content>
        <div
          className={classes.header__container}
          style={{ height: fixedScroll && breakpoint > 640 && "5rem" }}
        >
          <div>
            {breakpoint <= 640 && (
              <img
                src="/icon/200x200/icon-dark.png"
                alt="logo"
                style={{ width: "3.8rem" }}
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
              top: show ? "7rem" : "-100vh",
            }}
          >
            <a>Home</a>
            <a>Sobre</a>
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

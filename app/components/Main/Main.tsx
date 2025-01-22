import styles from "./Main.module.css";
import React, { useRef, useState } from "react";
import classNames from "classnames";
import DevConst from "./developeConst/DevConst";
import Company from "./Company/Company";
import AboutUs from "../AboutUs/AboutUs";
import Nav from "./Navbar/Nav";
import useObserver from "@/hooks/useObserver";
import scrollToVerticalTarget from "@/utils/scrollToVerticalTarget";
import { Style } from "node:util";
import changeThemeColor from "@/utils/changeThemeColor";

const Main = () => {
  const aboutUsRefs = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  //обсервер функция для вертикального прокручивания стандартного
  const [scrollVerticalRefs, setScrollVerticalRefs] = useObserver(
    (entries) =>
      scrollToVerticalTarget(entries, {
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      }),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    },
  );

  //функция для вертикального прокручивания на дублирущий блок компании на оси y
  const scrollToVerticalCompanyTarget = (
    entries: IntersectionObserverEntry[],
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        companyRef.current &&
          companyRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      }
    });
  };
  //обсервер функция для вертикального проеручивания на дублирущий блок компании на оси y
  const [scrollVerticalCompanyRefs, setScrollVerticalCompanyRef] = useObserver(
    scrollToVerticalCompanyTarget,
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    },
  );

  //функция для вертикального прокручивания на дублирущий блок девелопмент на оси y
  const scrollToVerticalDevTarget = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
        devRef.current &&
          devRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
      }
    });
  };
  //обсервер функция для вертикального проеручивания на дублирущий блок девелопмент на оси y
  const [scrollVerticalDevRefs, setScrollVerticalDevRefs] = useObserver(
    scrollToVerticalDevTarget,
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    },
  );
  // функция для стрелки в право
  const scrollToDevConst = () => {
    devRef.current &&
      devRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    window.scrollBy({
      behavior: "smooth",
      top: 50,
    });
  };

  // обсерверы для изменнеия цвета темы навигационного меню
  const [blackThemeRefs, setBlackThemeRefs] = useObserver(
    (entries) => changeThemeColor(entries, navRef, styles.black, styles.white),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    },
  );

  const [whiteThemeRefs, setWhiteThemeRefs] = useObserver(
    (entries) => changeThemeColor(entries, navRef, styles.white, styles.black),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    },
  );
  // useInactiveTimeout(scrollToDevConst, 6000);

  return (
    <>
      <div
        ref={navRef}
        className="fixed left-[16px] top-[16px] z-20 transition-all hd:left-[20px] hd:top-[20px]"
      >
        <Nav />
      </div>
      <div className="relative z-10 h-[100svh] w-[100vw] shrink-0 hd:h-mainHeight-hd hd:w-fit">
        <div className="hidden h-full hd:block hd:w-100vw-scroll">
          <div
            ref={setScrollVerticalCompanyRef}
            className="hidden h-[50%] w-full bg-orange-500 hd:block"
          ></div>
          <div
            ref={setScrollVerticalDevRefs}
            className="hidden h-[50%] w-full bg-blue-500 hd:block"
          ></div>
        </div>
        <div
          ref={setScrollVerticalRefs}
          className="fixed left-[0] top-[0] h-100svh w-100vw overflow-hidden hd:w-100vw-scroll"
        >
          <div
            className={classNames(
              styles.main,
              "flex h-full w-full overflow-x-auto overflow-y-hidden",
            )}
          >
            <section ref={setWhiteThemeRefs}>
              <div
                ref={companyRef}
                className={classNames(
                  styles.container,
                  "h-100svh w-100vw shrink-0 text-white hd:h-full hd:w-100vw-scroll",
                )}
              >
                <Company
                  setScrollVerticalRefs={setScrollVerticalRefs}
                  scrollToDevConst={scrollToDevConst}
                />
              </div>
            </section>
            <section className="h-full w-full" ref={setScrollVerticalRefs}>
              <div className="h-full w-full" ref={setWhiteThemeRefs}>
                <div
                  ref={devRef}
                  className="flex h-full w-100vw shrink-0 flex-wrap gap-0 overflow-y-auto md:flex-nowrap hd:w-devConst-hd"
                >
                  <DevConst setScrollVerticalRefs={setScrollVerticalRefs} />
                </div>
              </div>
            </section>
            <section
              ref={aboutUsRefs}
              className={classNames(
                styles.aboutUsLoad,
                "relative z-10 block w-100vw shrink-0 overflow-hidden overflow-y-auto hd:hidden hd:w-100vw-scroll",
              )}
            >
              <AboutUs
                setWhiteThemeRefs={setWhiteThemeRefs}
                setBlackThemeRefs={setBlackThemeRefs}
                setScrollVerticalRefs={setScrollVerticalRefs}
              />
            </section>
          </div>
        </div>
      </div>
      <section
        ref={aboutUsRefs}
        className={classNames(
          styles.aboutUsLoad,
          "hidden relative z-10 w-100vw hd:block hd:w-100vw-scroll",
        )}
      >
        <AboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
        />
      </section>
    </>
  );
};

export default Main;

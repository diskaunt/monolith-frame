"use client";
import styles from "./Main.module.css";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import DevConst from "./developeConst/DevConst";
import Company from "./Company/Company";
import AboutUs from "../AboutUs/AboutUs";
import useObserver from "@/hooks/useObserver";
import scrollToVerticalTarget from "@/utils/scrollToVerticalTarget";
import changeThemeColor from "@/utils/changeThemeColor";
import Preloader from "../Preloader/Preloader";
import Nav from "../Navbar/Nav";
import { ProjectType } from "@/data-access/projects";
import { getLocalStorageLoaded } from "@/data-access/loaded";

const Main = ({
  // loaded,
  projects,
}: {
  // loaded: boolean;
  projects: ProjectType[];
}) => {
  const aboutUsRefs = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [options, setOptions] = useState({
    root: null,
    rootMargin: "0px",
    threshold: [0.1],
  });

  //обсервер функция для вертикального прокручивания стандартного
  const [scrollVerticalRefs, setScrollVerticalRefs] = useObserver(
    (entries) => scrollToVerticalTarget(entries, null),
    options,
  );

  //обсервер функция для вертикального проеручивания на дублирущий блок компании на оси y
  const [scrollVerticalCompanyRefs, setScrollVerticalCompanyRef] = useObserver(
    (entries) => scrollToVerticalTarget(entries, companyRef),
    options,
  );

  //обсервер функция для вертикального проеручивания на дублирущий блок девелопмент на оси y
  const [scrollVerticalDevRefs, setScrollVerticalDevRefs] = useObserver(
    (entries) => scrollToVerticalTarget(entries, devRef),
    options,
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
      top: window.innerHeight,
    });
  };

  // обсерверы для изменнеия цвета темы навигационного меню
  const [blackThemeRefs, setBlackThemeRefs] = useObserver(
    (entries) =>
      changeThemeColor(entries, navRef, "black-theme", "white-theme"),
    options,
  );

  const [whiteThemeRefs, setWhiteThemeRefs] = useObserver(
    (entries) =>
      changeThemeColor(entries, navRef, "white-theme", "black-theme"),
    options,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // влияет на отображение прелоадера, не отображает если страница уже загружалась и локал сторейдж есть запись об этом
      setLoaded(getLocalStorageLoaded());

      // изменяет опции при скольки процентах срабатывает обсервер в зависимости от пользовательской велечины экрана
      window.innerWidth > 1368
        ? setOptions({
            ...options,
          })
        : setOptions({
            ...options,
            threshold: [0.25],
          });
    }
  }, []);

  return !loaded ? (
    <div>
      <Preloader setLoaded={setLoaded} />
    </div>
  ) : (
    <div className="relative">
      <div
        className="fixed left-[16px] top-[16px] z-20 hd:left-[20px] hd:top-[20px]"
        ref={navRef}
      >
        <Nav projects={projects} />
      </div>
      <div className="relative z-10 h-[100svh] w-[100vw] shrink-0 hd:h-mainHeight-hd hd:w-fit">
        <div className="hidden h-full hd:block hd:w-100vw-scroll">
          <div
            ref={setScrollVerticalCompanyRef}
            className="hidden h-[50%] w-full hd:block"
          ></div>
          <div
            ref={setScrollVerticalDevRefs}
            className="hidden h-[50%] w-full hd:block"
          >
            <div ref={setWhiteThemeRefs}></div>
          </div>
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
              {/* <div className="h-full w-full" ref={setWhiteThemeRefs}> */}
              <div
                ref={devRef}
                className="flex h-full w-100vw shrink-0 flex-wrap gap-0 overflow-y-auto md:flex-nowrap hd:w-devConst-hd"
              >
                <DevConst setScrollVerticalRefs={setScrollVerticalRefs} />
              </div>
              {/* </div> */}
            </section>
            <section
              ref={aboutUsRefs}
              className={classNames(
                styles.aboutUsLoad,
                "relative z-10 block w-100vw shrink-0 overflow-y-auto overflow-x-hidden hd:hidden hd:w-100vw-scroll",
              )}
            >
              <AboutUs
                setWhiteThemeRefs={setWhiteThemeRefs}
                setBlackThemeRefs={setBlackThemeRefs}
                setScrollVerticalRefs={setScrollVerticalRefs}
                options={options}
              />
            </section>
          </div>
        </div>
      </div>
      <section
        ref={aboutUsRefs}
        className={classNames(
          styles.aboutUsLoad,
          "relative z-10 hidden w-100vw hd:block hd:w-100vw-scroll",
        )}
      >
        <AboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
          options={options}
        />
      </section>
    </div>
  );
};

export default Main;

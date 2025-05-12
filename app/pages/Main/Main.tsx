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
import Project from "../Projects/Project/Project";
import Projects from "../Projects/Projects";
import useGsapObserver from "@/hooks/useGsapObserver";

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

  const [scrollVerticalRefs, setScrollVerticalRefs] = useGsapObserver();

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
    }
  }, []);

  return !loaded ? (
    // прелоадер
    <div>
      <Preloader setLoaded={setLoaded} />
    </div>
  ) : (
    <div className="relative">
      {/* меню навигации */}
      <div
        className="fixed left-[16px] top-[16px] z-20 hd:left-[20px] hd:top-[20px]"
        ref={navRef}
      >
        <Nav projects={projects} />
      </div>
      <div className="relative z-10 h-100svh w-100vw shrink-0 hd:w-fit">
        {/* Основной контейнер для скролла */}
        <div
          // ref={setScrollVerticalRefs}
          className="left-[0] top-[0] h-100svh w-100vw overflow-hidden hd:w-100vw-scroll"
        >
          {/* Горизонтальный скролл-контейнер */}
          <div
            className={classNames(
              styles.main,
              "flex h-full w-full overflow-x-hidden overflow-hidden",
            )}
          >
            {/* Секция "Company" */}
            <section ref={setWhiteThemeRefs}>
              <div
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

            {/* Секция "DevConst" */}
            <section className="h-full w-full" ref={setScrollVerticalRefs}>
              <div
                ref={devRef}
                className="flex h-full w-100vw shrink-0 flex-wrap gap-0 overflow-y-auto md:flex-nowrap hd:w-devConst-hd"
              >
                <DevConst setScrollVerticalRefs={setScrollVerticalRefs} />
              </div>
            </section>

            {/* Секция "Project" с КМ Ривер парк (мобильная версия) */}

            <section
              ref={setScrollVerticalRefs}
              className={classNames(
                "relative z-10 block w-100vw shrink-0 overflow-y-auto overflow-x-hidden hd:hidden hd:w-100vw-scroll",
              )}
            >
              <Project
                project={
                  projects.find((project) => project.id === "KMRiverPark") ||
                  projects[5]
                }
              />
            </section>

            {/* Секция "Projects" (мобильная версия) */}

            <section
              ref={setScrollVerticalRefs}
              className={classNames(
                "relative z-10 block w-100vw shrink-0 overflow-y-auto overflow-x-hidden hd:hidden hd:w-100vw-scroll",
              )}
            >
              <Projects projects={projects} />
            </section>

            {/* Секция "AboutUs" (мобильная версия) */}
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

      {/* Секция "AboutUs" (desktop версия) */}
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

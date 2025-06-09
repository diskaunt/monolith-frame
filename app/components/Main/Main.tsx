'use client';
import styles from './Main.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import DevConst from './developeConst/DevConst';
import Company from './Company/Company';
import useObserver from '@/hooks/useObserver';
import changeThemeColor from '@/utils/changeThemeColor';
import Preloader from '../Preloader/Preloader';
import Nav from '../Navbar/Nav';
import { ProjectType } from '@/data-access/projects';
import { getLocalStorageLoaded } from '@/data-access/loaded';
import useGsapObserver from '@/hooks/useGsapObserver';
import deviceDetector from '@/utils/deviceDetector';

const Projects = React.lazy(() => import('../Projects/Projects'));
const Project = React.lazy(() => import('../Projects/Project/Project'));
const AboutUs = React.lazy(() => import('../AboutUs/AboutUs'));

type MainProps = {
  projects: ProjectType[];
};

const Main = ({ projects }: MainProps) => {
  const aboutUsRefs = useRef<HTMLDivElement>(null),
    navRef = useRef<HTMLDivElement>(null),
    [loaded, setLoaded] = useState(false),
    [gotoSection, setScrollVerticalRefs] = useGsapObserver(),
    [isMobileClient, setIsMobileClient] = useState(false),
    // функция для стрелки в право
    scrollToDevConst = useCallback(() => {
      gotoSection(1, -1);
    }, [gotoSection]),
    // обсерверы для изменнеия цвета темы навигационного меню
    [blackThemeRefs, setBlackThemeRefs] = useObserver((entries) =>
      changeThemeColor(entries, navRef, 'black-theme', 'white-theme'),
    ),
    [whiteThemeRefs, setWhiteThemeRefs] = useObserver((entries) =>
      changeThemeColor(entries, navRef, 'white-theme', 'black-theme'),
    );

  useEffect(() => {
    setLoaded(getLocalStorageLoaded());
    setIsMobileClient(deviceDetector());
  }, []);

  const isClient = typeof window !== 'undefined';
  const shouldSetScrollRefs = isMobileClient && isClient && window.innerWidth < 768;

  return !loaded ? (
    // прелоадер

    <div>
      <Preloader setLoaded={setLoaded} />
    </div>
  ) : (
    <div className="relative h-100svh overflow-y-hidden">
      {/* меню навигации */}

      <div className="fixed left-[16px] top-[16px] z-20 md:left-[20px] md:top-[20px]" ref={navRef}>
        <Nav projects={projects} />
      </div>
      <div className="relative z-10 h-100svh w-100vw shrink-0 hd:w-fit">
        {/* Основной контейнер для скролла */}

        <div className="left-[0] top-[0] h-100svh w-100vw overflow-hidden hd:w-100vw-scroll">
          {/* Горизонтальный скролл-контейнер */}

          <div
            className={classNames(
              styles.main,
              'flex h-full w-full overflow-hidden',
            )}
          >
            {/* Секция "Company" */}

            <section ref={setWhiteThemeRefs}>
              <div
                className={classNames(
                  styles.container,
                  'h-100svh w-100vw shrink-0 text-white hd:h-full hd:w-100vw-scroll',
                )}
              >
                <Company
                  setScrollVerticalRefs={setScrollVerticalRefs}
                  scrollToDevConst={scrollToDevConst}
                />
              </div>
            </section>

            {/* Секция "DevConst" */}

            <section
              className="h-full w-full"
              ref={shouldSetScrollRefs ? null : setScrollVerticalRefs}
            >
              <div className="flex h-full w-100vw shrink-0 flex-wrap gap-0 overflow-y-hidden md:flex-nowrap hd:w-devConst-hd">
                <DevConst
                  setScrollVerticalRefs={setScrollVerticalRefs}
                  isMobileClient={isMobileClient}
                />
              </div>
            </section>

            {/* Секция "Project" с КМ Ривер парк (мобильная версия) */}

            <section
              ref={setScrollVerticalRefs}
              className={classNames(
                'relative z-10 block w-100vw shrink-0 overflow-hidden hd:hidden hd:w-100vw-scroll',
              )}
            >
              <Project
                project={projects.find((project) => project.id === 'KMRiverPark') || projects[5]}
              />
            </section>

            {/* Секция "Projects" (мобильная версия) */}

            <section
              className={classNames(
                'relative z-10 block w-100vw shrink-0 overflow-hidden hd:hidden hd:w-100vw-scroll',
              )}
            >
              <Projects
                projects={projects}
                setScrollVerticalRefs={setScrollVerticalRefs}
                isMobileClient={isMobileClient}
              />
            </section>

            {/* Секция "AboutUs" (мобильная версия) */}

            <section
              ref={aboutUsRefs}
              className={classNames(
                styles.aboutUsLoad,
                'relative z-10 block w-100vw shrink-0 hd:hidden',
              )}
            >
              <AboutUs
                setWhiteThemeRefs={setWhiteThemeRefs}
                setBlackThemeRefs={setBlackThemeRefs}
                setScrollVerticalRefs={setScrollVerticalRefs}
                gotoSection={gotoSection}
                isMobileClient={isMobileClient}
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
          'relative z-10 hidden w-100vw hd:block hd:w-100vw-scroll',
        )}
      >
        <AboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
          gotoSection={gotoSection}
          isMobileClient={isMobileClient}
        />
      </section>
    </div>
  );
};

export default Main;

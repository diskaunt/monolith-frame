'use client';
import styles from './main.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import DevConst from './developeConst/DevConst';
import Company from './company/Company';
import Preloader from '../preloader/Preloader';
import { ProjectType } from '@/data-access/projects';
import { getLocalStorageLoaded } from '@/data-access/loaded';
import useGsapObserver from '@/hooks/useGsapObserver';
import deviceDetector from '@/utils/deviceDetector';

const Projects = React.lazy(() => import('../projects/Projects'));
const Project = React.lazy(() => import('../projects/project/Project'));
const AboutUs = React.lazy(() => import('../aboutUs/AboutUs'));

type MainProps = {
  projects: ProjectType[];
};

const Main = ({ projects }: MainProps) => {
  const navRef = useRef<HTMLDivElement>(null),
    [loaded, setLoaded] = useState(false),
    [gotoSection, setScrollVerticalRefs] = useGsapObserver(),
    [isMobileClient, setIsMobileClient] = useState(false);

  // функция для стрелки в право
  const scrollToDevConst = useCallback(() => {
    gotoSection(1, -1);
  }, [gotoSection]);

  useEffect(() => {
    setLoaded(getLocalStorageLoaded());
    setIsMobileClient(deviceDetector());
  }, []);

  const isClient = typeof window !== 'undefined';
  const shouldSetScrollRefs = isMobileClient && isClient && window.innerWidth < 768;

  return (
    <>
      {/* блок который я забыл зачем сделал ;( */}
      <div
        className={classNames(
          'fixed left-0 top-0 -z-10 h-100svh w-100vw min-w-[375px] overflow-hidden',
        )}
      >
        <div className={classNames(styles.container, 'h-full w-full bg-blue-500')}></div>
      </div>
      {!loaded ? (
        // прелоадер
        <div>
          <Preloader setLoaded={setLoaded} />
        </div>
      ) : (
        <main className="relative h-100svh w-max overflow-y-hidden">
          
          <div className="relative z-10 h-100svh w-100vw min-w-[375px] shrink-0 hd:w-fit">
            {/* Основной контейнер для скролла */}

            <div className="left-[0] top-[0] h-100svh w-100vw min-w-[375px] overflow-hidden hd:w-100vw-scroll">
              {/* Горизонтальный скролл-контейнер */}

              <div className={classNames('flex h-100svh w-100vw min-w-[375px] overflow-hidden')}>
                {/* Секция "Company" */}

                <section ref={null}>
                  <div
                    className={classNames(
                      // styles.container,
                      'h-100svh w-100vw min-w-[375px] shrink-0 text-white hd:h-full hd:w-100vw-scroll',
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
                  <div className="flex h-full w-100vw min-w-[375px] shrink-0 flex-wrap gap-0 overflow-y-hidden md:flex-nowrap hd:w-devConst-hd">
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
                    'relative z-10 block w-100vw min-w-[375px] shrink-0 overflow-hidden hd:hidden hd:w-100vw-scroll',
                  )}
                >
                  <Project
                    project={
                      projects.find((project) => project.id === 'KMRiverPark') || projects[5]
                    }
                  />
                </section>

                {/* Секция "Projects" (мобильная версия) */}

                <section
                  className={classNames(
                    'relative z-10 block w-100vw min-w-[375px] shrink-0 overflow-hidden bg-white hd:hidden hd:w-100vw-scroll',
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
                  className={classNames(
                    styles.aboutUsLoad,
                    'relative z-10 block w-100vw shrink-0 hd:hidden',
                  )}
                >
                  <AboutUs
                    setWhiteThemeRefs={() => null}
                    setBlackThemeRefs={() => null}
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
            className={classNames(
              styles.aboutUsLoad,
              'relative z-10 hidden w-100vw hd:block hd:w-100vw-scroll',
            )}
          >
            <AboutUs
              setWhiteThemeRefs={() => null}
              setBlackThemeRefs={() => null}
              setScrollVerticalRefs={setScrollVerticalRefs}
              gotoSection={gotoSection}
              isMobileClient={isMobileClient}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Main;

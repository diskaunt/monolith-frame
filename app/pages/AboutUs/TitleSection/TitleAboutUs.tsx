import classNames from "classnames";
import React, { useRef } from "react";
import ArrowComplex from "../componentsSvg/ArrowComplex";
import styles from "./TitltAboutUs.module.css";
import AboutUsStart from "../componentsSvg/AboutUsStart";
import AboutUsMid from "../componentsSvg/AboutUsMid";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";
import SecTitle from "@/components/SecTitle";
import Image from "next/image";
import myImageLoader from "@/utils/myImageLoader";

const TitleAboutUs = ({
  setScrollVerticalRefs,
  setBlackThemeRefs,
  setWhiteThemeRefs,
}: {
  setScrollVerticalRefs?: (node: HTMLDivElement | null) => void;
  setBlackThemeRefs?: (node: HTMLDivElement | null) => void;
  setWhiteThemeRefs?: (node: HTMLDivElement | null) => void;
}) => {
  const snowMountTopRef = useRef<HTMLDivElement>(null);
  const whiteTowerRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLDivElement>(null);

  // Анимация загрузки заголовков и описаний
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
  );
  // Анимация загрузки башни и вершин гор на основной секции
  const [divLoadRefs2, setDivLoadRef2] = useObserver(
    (entryes) => {
      entryes.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          whiteTowerRef.current?.classList.add(styles.active);
          snowMountTopRef.current?.classList.add(styles.active);
        }
      });
    },
    {
      root: secRef.current,
      rootMargin: "0px",
      threshold: [0.3],
    },
  );
  // Анимация загрузки башни и вершин гор на секции с многоэтажкой
  const [divLoadRefs3, setDivLoadRef3] = useObserver(
    (entryes) => {
      entryes.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          whiteTowerRef.current?.classList.add(styles.loadEnd);
          snowMountTopRef.current?.classList.add(styles.loadEnd);
        }
      });
    },
    {
      root: secRef.current,
      rootMargin: "0px",
      threshold: [0.3],
    },
  );

  return (
    <>
      <div className="relative">
        {/* Основная секция, нету в моб версии */}
        <div
          ref={setScrollVerticalRefs}
          className="hidden w-100vw-scroll bg-blue-500 hd:block hd:h-100svh"
        >
          <div className="h-fit w-full bg-white">
            <div
              ref={setBlackThemeRefs}
              className={classNames(
                "z-10 mx-auto flex h-[60svh] w-full max-w-[1920px] flex-wrap gap-x-[206px] overflow-hidden px-[20px] py-[33px]",
              )}
            >
              <div ref={setDivLoadRef} className="invisible mt-[120px]">
                <SecTitle
                  titleLoad={styles.titleLoad}
                  arrowLoad={styles.arrowLoad}
                  color="black"
                >
                  о компании
                </SecTitle>
              </div>
              <div
                ref={setDivLoadRef}
                className={classNames(
                  styles.descrLoad,
                  "invisible w-[589px] self-end",
                )}
              >
                <p className="font-inter text-[28px] leading-[35px] tracking-veryTight">
                  Наша история – летопись непрерывного роста масштабов
                  реализуемых проектов, расширения направлений профессиональной
                  деятельности и географии возведённых объектов.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Верхние вершины гор */}
        <div className="top-[100svh] mt-auto h-[22%] w-full hd:sticky hd:mb-0 hd:h-[30%]">
          <div
            ref={snowMountTopRef}
            className={classNames(
              styles.snowMountLoad,
              "absolute -bottom-4 left-0 h-[160px] w-full translate-y-[7svh] overflow-hidden hd:h-[20svh]",
            )}
          >
            <AboutUsStart />
          </div>
        </div>

        {/* Основная секция с текстом*/}
        <div
          ref={setScrollVerticalRefs}
          className="flex h-[100svh] w-full flex-col bg-blue-500"
        >
          <div
            ref={setWhiteThemeRefs}
            className="relative z-0 mx-auto w-full max-w-[375px] text-white hd:h-[70%] hd:max-w-[1920px]"
          >
            <div
              ref={setDivLoadRef2}
              className="flex w-full flex-wrap gap-x-[30px] hd:gap-x-[34px]"
            >
              <div
                className={classNames(
                  "ml-[25px] mt-[112px] hd:ml-[15%] hd:mt-[10%]",
                )}
              >
                <div
                  ref={setDivLoadRef}
                  className="invisible inline-block overflow-hidden"
                >
                  <p
                    className={classNames(
                      styles.titleLoad,
                      "text-[90px] font-bold uppercase leading-[76px] tracking-wide hd:text-[200px] hd:leading-[180px]",
                    )}
                  >
                    нам
                  </p>
                </div>
              </div>
              <div
                ref={setDivLoadRef}
                className={classNames(
                  styles.descrLoad,
                  "invisible order-5 ml-[5%] mt-[18px] max-w-[226px] hd:order-none hd:ml-0 hd:mt-[10%] hd:max-w-[342px] hd:pt-[26px]",
                )}
              >
                <div>
                  <p className="hd:tracking-veryTigth font-inter text-[15px] font-medium leading-[20px] tracking-tight2 hd:text-[19px] hd:leading-[26px]">
                    Принимаем участие в&nbsp;строительстве масштабных объектов
                    города, области, Приволжского федерального округа,
                    Московской области и&nbsp;Владимирской области.
                  </p>
                </div>
              </div>
              <div className="mt-[16px] flex w-full flex-wrap justify-center gap-y-[6px] hd:ml-[7%] hd:mt-0 hd:gap-x-[18%]">
                <div className={classNames("mr-[20%] hd:mr-0")}>
                  <div
                    ref={setDivLoadRef}
                    className="invisible inline-block overflow-hidden"
                  >
                    <p
                      className={classNames(
                        styles.titleLoad,
                        "text-[90px] font-bold uppercase leading-[76px] tracking-wide hd:text-[200px] hd:leading-[180px]",
                      )}
                    >
                      по&nbsp;силу
                    </p>
                  </div>
                </div>
                <div className={classNames("ml-[30%] hd:ml-0")}>
                  <div
                    ref={setDivLoadRef}
                    className="invisible inline-block overflow-hidden"
                  >
                    <p
                      className={classNames(
                        styles.titleLoad,
                        "text-[90px] font-bold uppercase leading-[76px] tracking-wide hd:text-[200px] hd:leading-[180px]",
                      )}
                    >
                      любой
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  "ml-[5%] mt-[0px] hd:ml-[46.5%] hd:mt-[6px]",
                )}
              >
                <div
                  ref={setDivLoadRef}
                  className="invisible inline-block overflow-hidden"
                >
                  <p
                    className={classNames(
                      styles.titleLoad,
                      "text-[90px] font-bold uppercase leading-[76px] tracking-wide hd:text-[200px] hd:leading-[180px]",
                    )}
                  >
                    проект
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* небоскреб */}
      <div className={classNames("relative bottom-[585px] top-[0px] z-10")}>
        <div
          ref={whiteTowerRef}
          className={classNames(
            styles.whiteTowerLoad,
            "absolute top-[-200px] z-10 w-full opacity-0 hd:top-[-11svw]",
          )}
        >
          <Image
            className="mx-auto w-[256px] sm:w-[40%] hd:h-[114.5svh] hd:w-[41%]"
            src={myImageLoader("/images/whiteTower.png")}
            alt="whiteTower"
            width={779}
            height={1550}
          />
        </div>
      </div>
      {/* Задний фон небоскреба */}
      <div
        ref={setScrollVerticalRefs}
        className="relative top-[-28px] h-[475px] w-full overflow-hidden hd:top-0 hd:h-[120.9svh]"
      >
        <div ref={setDivLoadRef3} className="h-full w-full">
          <div ref={setWhiteThemeRefs} className="relative min-h-[558px] w-full h-full hd:min-h-[1209px]">
            <Image
              className="object-cover object-top hd:h-full"
              src={myImageLoader("/images/whiteTowerPhoto.jpg")}
              alt="whiteTower"
              fill
            />
          </div>
        </div>
      </div>
      {/* Нижние вершины гор */}
      <div
        className="absolute -bottom-1 left-0 z-10 h-[142px] w-full overflow-hidden fill-white hd:h-[20svh] hd:w-full"
      >
        <AboutUsMid />
      </div>
    </>
  );
};

export default TitleAboutUs;

import Department from "@/commons/Department";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import styles from "./FooterAboutUs.module.css";
import PikSvg from "./componentsSvg/PikSvg";
import SamoletPlusSvg from "./componentsSvg/SamoletPlusSvg";
import InGradSvg from "./componentsSvg/InGradSvg";
import Marque from "@/commons/Marque";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";
import HorizontalBar from "@/commons/HorizontalBar";
import VerticalBar from "@/commons/VerticalBar";
import ArrowUpSvg from "./componentsSvg/ArrowUpSvg";

const FooterAboutUs = ({
  setScrollVerticalRefs,
  setBlackThemeRefs,
  setWhiteThemeRefs,
}: {
  setScrollVerticalRefs: (node: HTMLDivElement) => void;
  setBlackThemeRefs: (node: HTMLDivElement) => void;
  setWhiteThemeRefs: (node: HTMLDivElement) => void;
}) => {
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.3],
    },
  );

  const handleMouseOver = () => {
    hoverRef.current?.classList.add(styles.hover);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Награды */}
      <div
        ref={setScrollVerticalRefs}
        className="min-h-mobile hd:min-h-desktop h-100svh w-full px-[16px] shrink-0 overflow-hidden bg-gray-100 pb-[40px] pt-[83px] md:w-2/4 md:pb-[6svh] hd:pt-[4.3svh]"
      >
        <div ref={hoverRef} className={classNames("relative h-full")}>
          <button
            ref={setDivLoadRef}
            onClick={handleClick}
            className={classNames(
              styles.arrow,
              "absolute left-5 top-[48%] hidden hd:block",
            )}
          >
            <ArrowUpSvg />
          </button>
          <div
            ref={setBlackThemeRefs}
            className={classNames(
              "mx-auto flex h-full w-full max-w-[375px] flex-col items-center hd:max-w-[665px]",
            )}
          >
            <div ref={setDivLoadRef} className="invisible w-fit hd:mt-[8svh]">
              <Department styles={styles} fill="black">
                награды
              </Department>
            </div>
            <div
              ref={setDivLoadRef}
              className="invisible relative w-fit text-center hd:mt-[5.8svh]"
            >
              <div className="mb-2 h-[56px] overflow-hidden hd:h-[83px]">
                <div
                  className={classNames(
                    styles.loadTitleDescr,
                    styles.hover,
                  )}
                >
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    архитектурное
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    безупречный
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    лучшее продвижение
                  </p>
                </div>
              </div>
              <div className="h-[56px] overflow-hidden hd:h-[83px]">
                <div
                  className={classNames(
                    styles.loadTitleDescr,
                    styles.hover,
                  )}
                >
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    решение
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    контракт
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    проекта
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={setDivLoadRef}
              onMouseOver={handleMouseOver}
              className={classNames(
                "invisible relative mb-[1svh] mt-[36px] flex h-[130px] overflow-hidden hd:mt-[8.5svh] hd:h-[265px]",
              )}
            >
              <div
                className={classNames(
                  styles.loadTitleNumDescr,
                  styles.hover,
                  "ml-[40px] h-fit hd:ml-[60px]",
                )}
              >
                <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[265px]">
                  2
                </p>
                <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[265px]">
                  1
                </p>
              </div>
              <div
                className={classNames(
                  styles.loadTitle,
                  "mb-[28px] ml-[-10px] self-end hd:mb-[55px] hd:ml-[-20px]",
                )}
              >
                <p className="font-midium hd:tracking-very-tight font-inter text-[17px] leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px]">
                  место
                </p>
              </div>
            </div>
            <div ref={setDivLoadRef} className="invisible mt-auto flex w-full">
              <div className="w-full">
                <HorizontalBar styles={styles.loadHorizontalBar} />
                <div className="flex h-[77px] justify-between">
                  <div
                    className={classNames(
                      styles.loadTableCell,
                      "pt-[3px] hd:pt-[8px]",
                    )}
                  >
                    <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                      комплекс
                    </p>
                  </div>
                  <div className="mt-auto h-[34px] overflow-hidden hd:pb-[12px] hd:pr-[5px]">
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        styles.hover,
                        "flex flex-col gap-[12px]",
                      )}
                    >
                      <p className="ml-auto w-fit font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        КМ Прайм
                      </p>
                      <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        КМ Анкудиновский Парк
                      </p>
                    </div>
                  </div>
                </div>
                <HorizontalBar styles={styles.loadHorizontalBar} />
                <div className="flex h-[70px] hd:h-[77px]">
                  <div className="flex w-[62%] justify-between hd:w-[59%]">
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        "pt-[3px] hd:pt-[8px]",
                      )}
                    >
                      <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                        конкурс
                      </p>
                    </div>
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        "content-end pb-[5px] pr-[12px] hd:pb-[10px] hd:pr-[14px]",
                      )}
                    >
                      <p className="text-end font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        Добросовестный застройщик
                      </p>
                    </div>
                  </div>
                  <VerticalBar styles={styles.loadVertikalBar} />
                  <div className="flex grow justify-between">
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        "pl-[12px] pt-[3px] hd:pl-[18px] hd:pt-[8px]",
                      )}
                    >
                      <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                        год
                      </p>
                    </div>
                    <div className="mt-auto h-[27px] content-end overflow-hidden pb-[5px] pr-[2px] hd:h-[32px] hd:pb-[10px]">
                      <div
                        className={classNames(
                          styles.loadTableCell,
                          styles.hover,
                          "flex flex-col gap-[12px]",
                        )}
                      >
                        <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                          2014г
                        </p>
                        <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                          2017г
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <HorizontalBar styles={styles.loadHorizontalBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Партнеры */}
      <div
        ref={setScrollVerticalRefs}
        className="min-h-mobile hd:min-h-desktop h-100svh w-full shrink-0 overflow-hidden bg-blue-500 pb-[40px] pt-[83px] text-white md:w-2/4 md:pb-[5.5svh] hd:pt-[4.3svh]"
      >
        <div ref={setWhiteThemeRefs} className="flex h-full w-full flex-col">
          <div className="mx-auto flex w-full max-w-[375px] flex-col items-center hd:max-w-[665px]">
            <div ref={setDivLoadRef} className="invisible w-fit hd:mt-[8svh]">
              <Department styles={styles} fill="white">
                партнеры
              </Department>
            </div>
            <div
              ref={setDivLoadRef}
              className="invisible w-fit text-center hd:mt-[5.8svh]"
            >
              <div className="overflow-hidden">
                <div className={classNames(styles.loadTitleDescr,)}>
                  <p className="mb-2 font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                    мы&nbsp;ценим наших
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className={classNames(styles.loadTitleDescr,)}>
                  <p className="font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                    партнеров
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={setDivLoadRef}
              className="invisible mt-[58px] flex justify-center overflow-hidden hd:mt-[11svh]"
            >
              <div className="ml-[55px] hd:ml-[80px]">
                <p
                  className={classNames(
                    styles.shadow,
                    styles.loadTitleDescr,
                    "text-[119px] font-bold leading-[130px] tracking-wide text-blue-500 hd:text-[300px] hd:leading-[265px]",
                  )}
                >
                  50+
                </p>
              </div>
              <div
                className={classNames(
                  styles.loadTitle,
                  "mb-[30px] ml-[-25px] self-end hd:mb-[55px] hd:ml-[-55px]",
                )}
              >
                <p className="font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                  партнеров
                </p>
              </div>
            </div>
          </div>
          <div className="mt-auto w-full self-start px-[15px] hd:px-[30px]">
            <Marque styles={styles}>
              <div className="flex w-[33%] shrink-0 items-center pt-[5px]">
                <PikSvg />
              </div>
              <div className="flex w-[33%] shrink-0 items-center pt-[7px]">
                <SamoletPlusSvg />
              </div>
              <div className="flex w-[33%] shrink-0 items-center">
                <InGradSvg />
              </div>
            </Marque>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAboutUs;

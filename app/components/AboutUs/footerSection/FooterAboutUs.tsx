import Department from "@/commons/Department";
import classNames from "classnames";
import React from "react";
import styles from "./FooterAboutUs.module.css";
import PikSvg from "./componentsSvg/PikSvg";
import SamoletPlusSvg from "./componentsSvg/SamoletPlusSvg";
import InGradSvg from "./componentsSvg/InGradSvg";
import Marque from "@/commons/Marque";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";

const FooterAboutUs = ({
  setScrollVerticalRefs,
  setBlackThemeRefs,
  setWhiteThemeRefs,
}: {
  setScrollVerticalRefs: (node: HTMLDivElement) => void;
  setBlackThemeRefs: (node: HTMLDivElement) => void;
  setWhiteThemeRefs: (node: HTMLDivElement) => void;
}) => {
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.3],
    },
  );
  return (
    <>
      {/* Награды */}
      <div
        ref={setScrollVerticalRefs}
        className="h-100svh w-full shrink-0 overflow-hidden bg-gray-100 pb-[40px] pt-[83px] hd:w-2/4 hd:pb-[6svh] hd:pt-[4.3svh]"
      >
        <div
          ref={setBlackThemeRefs}
          className="mx-auto flex h-full w-full max-w-[375px] flex-col items-center hd:max-w-[665px]"
        >
          <div ref={setDivLoadRef} className="invisible w-fit hd:mt-[8svh]">
            <Department styles={styles} fill="black">
              награды
            </Department>
          </div>
          <div
            ref={setDivLoadRef}
            className="invisible w-fit overflow-hidden text-center hd:mt-[5.8svh]"
          >
            <div className={classNames(styles.loadTitleDescr)}>
              <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                архитектурное
                <br /> решение
              </p>
            </div>
          </div>
          <div
            ref={setDivLoadRef}
            className="invisible mt-[36px] flex justify-center overflow-hidden hd:mt-[8.5svh]"
          >
            <div
              className={classNames(styles.loadTitle, "ml-[40px] hd:ml-[60px]")}
            >
              <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[265px]">
                2
              </p>
            </div>
            <div
              className={classNames(
                styles.loadTitleDescr,
                "mb-[28px] ml-[-10px] self-end hd:mb-[55px] hd:ml-[-20px]",
              )}
            >
              <p className="font-midium hd:tracking-very-tight font-inter text-[17px] leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px]">
                место
              </p>
            </div>
          </div>
          <div className="mt-auto flex w-full">
            <div className="w-full border-y border-black">
              <div className="flex h-[70px] justify-between border-b border-black hd:h-[80px]">
                <div className="pt-[3px] hd:pt-[8px]">
                  <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                    комплекс
                  </p>
                </div>
                <div className="content-end pb-[5px] hd:pb-[12px] hd:pr-[5px]">
                  <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                    КМ Прайм
                  </p>
                </div>
              </div>
              <div className="flex h-[70px] hd:h-[80px]">
                <div className="flex w-[62%] justify-between border-r border-black hd:w-[59%]">
                  <div className="pt-[3px] hd:pt-[8px]">
                    <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                      конкурс
                    </p>
                  </div>
                  <div className="content-end pb-[5px] pr-[12px] hd:pb-[10px] hd:pr-[14px]">
                    <p className="text-end font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                      Добросовестный застройщик
                    </p>
                  </div>
                </div>
                <div className="flex grow justify-between">
                  <div className="pl-[12px] pt-[3px] hd:pl-[18px] hd:pt-[8px]">
                    <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                      год
                    </p>
                  </div>
                  <div className="content-end pb-[5px] pr-[2px] hd:pb-[10px]">
                    <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                      2014г
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Партнеры */}
      <div
        ref={setScrollVerticalRefs}
        className="h-100svh w-full shrink-0 overflow-hidden bg-blue-500 pb-[40px] pt-[83px] text-white hd:w-2/4 hd:pb-[5.5svh] hd:pt-[4.3svh]"
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
              className="invisible w-fit overflow-hidden text-center hd:mt-[5.8svh]"
            >
              <div className={classNames(styles.loadTitleDescr)}>
                <p className="font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                  мы&nbsp;ценим наших
                  <br />
                  партнеров
                </p>
              </div>
            </div>
            <div
              ref={setDivLoadRef}
              className="invisible mt-[58px] flex justify-center hd:mt-[11svh]"
            >
              <div className="ml-[55px] hd:ml-[80px]">
                <p
                  className={classNames(
                    styles.shadow,
                    styles.loadTitle,
                    "text-[119px] font-bold leading-[130px] tracking-wide text-blue-500 hd:text-[300px] hd:leading-[265px]",
                  )}
                >
                  50+
                </p>
              </div>
              <div
                className={classNames(
                  styles.loadTitleDescr,
                  "mb-[30px] ml-[-25px] self-end hd:mb-[55px] hd:ml-[-55px]",
                )}
              >
                <p className="font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                  партнеров
                </p>
              </div>
            </div>
          </div>
          <div className="mt-auto w-full self-start">
            <Marque styles={styles}>
              <div className="mr-[13.5%] flex w-[12.5%] shrink-0 items-center pt-[5px]">
                <PikSvg />
              </div>
              <div className="mr-[15%] flex w-[13%] shrink-0 items-center pt-[7px]">
                <SamoletPlusSvg />
              </div>
              <div className="mr-[14%] flex w-[12%] shrink-0 items-center">
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

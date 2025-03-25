import React, { useRef } from "react";
import AboutUsRoadMap from "../componentsSvg/AboutUsRoadMap";
import AboutUsMid from "../componentsSvg/AboutUsMid";
import AboutUsAchvmts from "./AboutUsAchvmts";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";
import styles from "./MidleAboutUs.module.css";
import classNames from "classnames";
import Image from "next/image";
import myImageLoader from "@/utils/myImageLoader";

const MidleAboutUs = ({
  setScrollVerticalRefs,
  setScrollVerticalEndRefs,
  therehold,
}: {
  setScrollVerticalRefs: (node: HTMLDivElement | null) => void;
  setScrollVerticalStartRefs: (node: HTMLDivElement | null) => void;
  setScrollVerticalEndRefs: (node: HTMLDivElement | null) => void;
  therehold: number;
}) => {
  const expRef = useRef<HTMLDivElement | null>(null);
  const scrollToExpFirstTarget = (entryes: IntersectionObserverEntry[]) => {
    entryes.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  const scrollToExpSecondTarget = (entryes: IntersectionObserverEntry[]) => {
    entryes.forEach((entry) => {
      if (entry.isIntersecting) {
        expRef.current &&
          expRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    });
  };

  const [expFirstRefs, setExpFirstRefs] = useObserver(scrollToExpFirstTarget, {
    root: null,
    rootMargin: "0px",
    threshold: [therehold],
  });

  const [expSecondRefs, setExpSecondRefs] = useObserver(
    scrollToExpSecondTarget,
    {
      root: null,
      rootMargin: "0px",
      threshold: [therehold],
    },
  );

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
      <div className="w-full bg-white">
        <div className="m-auto w-full max-w-[375px] hd:max-w-[1558px]">
          <div className="absolute left-0 top-[485px] z-0 h-full w-full overflow-hidden hd:top-[63svh]">
            <div className="m-auto flex h-[228svh] w-[375px] justify-start hd:h-[278svh] hd:w-[1558px] hd:justify-center hd:pl-[3%]">
              <AboutUsRoadMap />
            </div>
          </div>
          {/* с этим wrapom удобнее работать с версткой, иначе свг выше */}
          <div className="relative w-full">
            <div
              ref={setExpFirstRefs}
              className="flex flex-col gap-x-[72px] gap-y-[70px] hd:h-[62svh] hd:min-h-[620px] hd:max-w-[100vw] hd:flex-row hd:flex-nowrap hd:pt-[18svh]"
            >
              <div
                ref={setDivLoadRef}
                className="invisible ml-[5%] flex h-fit overflow-hidden hd:ml-[6.5%]"
              >
                <AboutUsAchvmts styles={styles} number={20}>
                  <p
                    className={classNames(
                      "max-w-[179px] hd:ml-[-40px] hd:max-w-[359px]",
                    )}
                  >
                    лет успешной работы в&nbsp;строительной отрасли
                  </p>
                </AboutUsAchvmts>
              </div>
              <div className="mr-[5%] self-end hd:ml-0 hd:mt-[12px]">
                <div
                  ref={setDivLoadRef}
                  className="invisible flex h-[222px] w-[235px] overflow-hidden hd:h-[370px] hd:w-[393px]"
                >
                  <div
                    className={classNames(
                      styles.loadImage,
                      "w-[155px] shrink-0 hd:min-w-[258px]",
                    )}
                  >
                    <Image
                      className="w-full object-cover hd:object-none"
                      src={myImageLoader("/images/experience1.jpg")}
                      alt="crane"
                      width={259}
                      height={320}
                    />
                  </div>
                  <div
                    className={classNames(
                      styles.loadImage,
                      "ml-[-30%] w-[155px] shrink-0 self-end hd:h-[190px] hd:min-w-[258px]",
                    )}
                  >
                    <Image
                      className="w-full object-cover hd:object-none"
                      src={myImageLoader("/images/experience2.jpg")}
                      alt="workers"
                      width={259}
                      height={190}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Опыт */}
            <div className="h-[25px] w-full hd:h-[7svh] hd:min-h-[70px]"></div>
            <div
              ref={expRef}
              className="ml-auto mr-[6%] w-fit overflow-hidden hd:mr-[23%]"
            >
              <div ref={setDivLoadRef} className="invisible">
                <div className={classNames(styles.loadRoadPoints)}>
                  <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:h-[13svh] hd:text-[90px]">
                    опыт
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[100px] w-full hd:h-[25svh] hd:min-h-[250px]"></div>
            <div ref={setExpSecondRefs} className="w-full">
              <div
                ref={setDivLoadRef}
                className="invisible flex flex-col gap-x-[300px] gap-y-[45px] pl-[5%] pt-[12px] hd:h-[67.5svh] hd:min-h-[675px] hd:max-w-[100vw] hd:flex-row hd:pb-[21svh] hd:pl-[7%]"
              >
                <div
                  className={classNames(
                    styles.loadImage,
                    "z-10 w-[185px] hd:w-fit",
                  )}
                >
                  <Image
                    className="w-full object-cover hd:object-none"
                    src={myImageLoader("/images/swing.jpg")}
                    alt="swing"
                    width={363}
                    height={240}
                  />
                </div>
                <div
                  className={classNames(
                    "ml-[105px] flex overflow-hidden hd:ml-auto hd:mr-[148px] hd:self-end",
                  )}
                >
                  <AboutUsAchvmts styles={styles} number={5}>
                    <p className="max-w-[195px] hd:ml-[-20px] hd:max-w-[359px]">
                      крупнейших заводов построено по&nbsp;генподряду
                    </p>
                  </AboutUsAchvmts>
                </div>
              </div>
            </div>
            <div ref={setDivLoadRef} className="invisible w-full">
              <div
                ref={setScrollVerticalRefs}
                className="mt-[13svh] flex h-100svh min-h-mobile w-full flex-col hd:mt-0 hd:min-h-desktop"
              >
                {/* Скорость */}
                <div
                  className={classNames(
                    "ml-[5%] mt-[12svh] w-fit overflow-hidden hd:ml-[7%] hd:mt-[10svh] hd:h-[13svh]",
                  )}
                >
                  <div className={classNames(styles.loadRoadPoints)}>
                    <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:text-[90px]">
                      скорость
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] flex flex-col-reverse pl-[5%] pr-[5%] hd:mt-auto hd:max-w-[100vw] hd:flex-row hd:pb-[10svh] hd:pl-[7%] hd:pr-[100px]">
                  <div className="mt-[-37px] flex flex-col gap-y-[55px] hd:mt-0 hd:gap-y-[70px]">
                    <div className="flex overflow-hidden">
                      <div
                        className={classNames(
                          styles.loadNumber,
                          "text-[160px] font-bold uppercase leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[260px]",
                        )}
                      >
                        <p className="block hd:hidden">10 925</p>
                        <p className="hidden hd:block">10&nbsp;925</p>
                      </div>
                      <div
                        className={classNames(
                          styles.loadNumberDescr,
                          "mb-[10px] ml-[-20px] max-w-[195px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[55px] hd:ml-[-35px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight",
                        )}
                      >
                        <p>новоселов живут в&nbsp;построенных домах</p>
                      </div>
                    </div>
                    <div className="flex overflow-hidden">
                      <div
                        className={classNames(
                          styles.loadNumber,
                          "text-[160px] font-bold uppercase leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[260px]",
                        )}
                      >
                        <p>24</p>
                      </div>
                      <div
                        className={classNames(
                          styles.loadNumberDescr,
                          "mb-[10px] ml-[-15px] max-w-[169px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[48px] hd:ml-[-40px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight",
                        )}
                      >
                        <p>жилых дома построено раньше сроков</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      styles.loadImage,
                      "z-10 ml-auto w-[168px] hd:mr-[5%] hd:mt-[105px] hd:w-[362px]",
                    )}
                  >
                    <Image
                      src={myImageLoader("/images/playground.jpg")}
                      alt="playground"
                      width={363}
                      height={240}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-[3svh] w-full hd:mt-[1svh]"
              ref={setScrollVerticalRefs}
            >
              {/* Качество */}
              <div
                ref={setDivLoadRef}
                className={classNames(
                  "invisible flex h-100svh w-full flex-col justify-between hd:min-h-desktop",
                )}
              >
                <div className="flex flex-row-reverse flex-wrap">
                  <div className="ml-auto mr-[9%] mt-[20svh] h-fit w-fit overflow-hidden hd:mr-[15.5%] hd:mt-[18svh]">
                    <div className={classNames(styles.loadRoadPoints)}>
                      <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:h-[13svh] hd:text-[90px]">
                        качество
                      </p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      styles.loadImage,
                      "z-10 ml-[5%] mt-[10svh] w-[137px] hd:ml-[34%] hd:mt-[3svh] hd:w-[296px]",
                    )}
                  >
                    <Image
                      src={myImageLoader("/images/aboutUsBuild.jpg")}
                      alt="build"
                      width={296}
                      height={386}
                    />
                  </div>
                </div>
                {/* Надежность */}
                <div className="mb-[10svh] flex flex-wrap">
                  <div
                    className={classNames(
                      "ml-[55px] mt-[12svh] h-fit w-fit overflow-hidden hd:ml-[9%] hd:mt-[23svh]",
                    )}
                  >
                    <div className={classNames(styles.loadRoadPoints)}>
                      <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:h-[13svh] hd:text-[90px]">
                        надежность
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto mr-[3%] hd:mr-[11%] hd:mt-[7svh]">
                    <div className="flex overflow-hidden">
                      <AboutUsAchvmts styles={styles} number={4}>
                        <p className="max-w-[169px] hd:ml-[-27px] hd:max-w-[359px]">
                          социальных проекта. Детские сады и&nbsp;школы
                        </p>
                      </AboutUsAchvmts>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidleAboutUs;

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
  options,
}: {
  setScrollVerticalRefs?: (node: HTMLDivElement | null) => void;
  options: {};
}) => {
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    options,
  );

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="relative m-auto w-full max-w-[375px] hd:max-w-[1558px]">
        {/* дорожная карта компании */}
        <div className="absolute left-[-7%] top-[566px] z-0 hd:left-[2%] hd:top-[638px] fhd:left-0">
          <div className="flex w-[375px] justify-center hd:w-[1558px] fhd:pl-[4%]">
            <AboutUsRoadMap />
          </div>
        </div>
        {/* с этим wrapom удобнее работать с версткой, иначе свг выше */}
        <div className="relative w-full">
          {/* опыт работы компании  */}
          <div
            ref={setScrollVerticalRefs}
            className="pb:[15px] flex flex-col gap-x-[78px] gap-y-[60px] pt-[82px] hd:max-w-[100vw] hd:flex-row hd:flex-nowrap hd:pb-[70px] hd:pt-[180px]"
          >
            <div
              ref={setDivLoadRef}
              className="invisible ml-[15px] flex h-fit overflow-hidden hd:ml-[6.5%]"
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
            <div className="mr-[20px] self-end hd:ml-0 hd:mt-[75px]">
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

          {/* опыт */}
          <div
            ref={setScrollVerticalRefs}
            className="flex flex-col gap-y-[100px] hd:gap-y-[240px]"
          >
            <div className="mr-auto mt-[28px] ml-[265px] w-fit overflow-hidden hd:ml-[1050px] hd:pt-[25px]">
              <div ref={setDivLoadRef} className="invisible">
                <div className={classNames(styles.loadRoadPoints)}>
                  <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:text-[90px]">
                    опыт
                  </p>
                </div>
              </div>
            </div>

            {/* количество построенных кпрупных проектов */}
            <div
              ref={setDivLoadRef}
              className="invisible flex flex-col gap-x-[300px] gap-y-[45px] pb-[155px] ml-[5%] pt-[12px] hd:h-[675px] hd:max-w-[100vw] hd:flex-row hd:pb-[210px] hd:ml-[7%]"
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
                  "ml-[108px] flex overflow-hidden hd:ml-auto hd:mr-[148px] hd:self-end",
                )}
              >
                <AboutUsAchvmts styles={styles} number={5}>
                  <p className="max-w-[195px] hd:ml-[-20px] hd:max-w-[359px]">
                    крупнейших заводов построено&nbsp;по генподряду
                  </p>
                </AboutUsAchvmts>
              </div>
            </div>
          </div>

          {/* блок скорости */}
          <div ref={setDivLoadRef} className="invisible w-full">
            <div
              ref={setScrollVerticalRefs}
              className="flex w-full flex-col hd:gap-y-[110px]"
            >
              {/* Скорость */}
              <div
                className={classNames(
                  "ml-[3%] mt-[98px] w-fit overflow-hidden hd:ml-[7%] hd:mt-[100px]",
                )}
              >
                <div className={classNames(styles.loadRoadPoints)}>
                  <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:text-[90px]">
                    скорость
                  </p>
                </div>
              </div>
              <div className="mt-[30px] flex flex-col-reverse ml-[5%] mr-[5%] hd:mt-auto hd:max-w-[100vw] hd:flex-row hd:ml-[7%] hd:mr-[100px]">
                <div className="mt-[-37px] flex flex-col gap-y-[55px] hd:mt-0">
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
                        "mb-[10px] ml-[-20px] max-w-[195px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[60px] hd:ml-[-35px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight",
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
                        "mb-[10px] ml-[-15px] max-w-[169px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[60px] hd:ml-[-40px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight",
                      )}
                    >
                      <p>жилых дома построено раньше сроков</p>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    styles.loadImage,
                    "z-10 ml-auto w-[168px] hd:mr-[5%] hd:mt-[120px] hd:w-[362px]",
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

          {/* блок надежности и качества компании и проектов  */}
          <div
            className="pt-[25px] h-100svh w-full hd:pt-[100px]"
            ref={setScrollVerticalRefs}
          >
            <div
              ref={setDivLoadRef}
              className={classNames(
                "invisible flex w-full flex-col justify-between",
              )}
            >
              {/* Качество */}
              <div className="flex flex-row-reverse flex-wrap">
                <div className="ml-auto mr-[9%] mt-[130px] h-fit w-fit overflow-hidden hd:mr-[5%] hd:mt-[180px] fhd:mr-[15.5%]">
                  <div className={classNames(styles.loadRoadPoints)}>
                    <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:text-[90px]">
                      качество
                    </p>
                  </div>
                </div>
                <div
                  className={classNames(
                    styles.loadImage,
                    "z-10 ml-[5%] mt-[80px] w-[137px] hd:ml-[34%] hd:mt-[25px] hd:w-[296px]",
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
              <div className="mb-[80px] flex flex-wrap">
                <div
                  className={classNames(
                    "ml-[60px] mt-[90px] h-fit w-fit overflow-hidden hd:ml-[9%] hd:mt-[230px]",
                  )}
                >
                  <div className={classNames(styles.loadRoadPoints)}>
                    <p className="text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:h-[130px] hd:text-[90px]">
                      надежность
                    </p>
                  </div>
                </div>
                <div className="ml-auto mr-[3%] hd:mr-[165px] hd:mt-[65px]">
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
  );
};

export default MidleAboutUs;

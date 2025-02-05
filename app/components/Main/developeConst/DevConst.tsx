import React from "react";
import DevLineSvg from "./componentsSvg/DevLineSvg";
import classNames from "classnames";
import styles from "./DevConst.module.css";
import DevBuildSvg from "./componentsSvg/DevBuildSvg";
import ConstLineSvg from "./componentsSvg/ConstLineSvg";
import Department from "@/commons/Department";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";

const DevConst = ({
  setScrollVerticalRefs,
}: {
  setScrollVerticalRefs: (el: HTMLDivElement | null) => void;
}) => {
  const options = { root: null, rootMargin: "0px", threshold: [0.3] };

  const [divRefArr, setDivRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    options,
  );
  const [pRefArr, setPRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    options,
  );
  const [imageRefArr, setImageRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    options,
  );

  return (
    <>
      {/* developement */}
      <div className="h-100svh w-full hd:h-full" ref={setScrollVerticalRefs}>
        <div
          ref={setDivRef}
          className={classNames(
            styles.dev,
            "flex h-full w-full min-w-[375px] flex-col items-center overflow-hidden bg-orange-500 pt-[16.1svh] text-white md:pt-[13.1svh]",
          )}
        >
          <div
            ref={setDivRef}
            className={classNames(
              styles.loadTextDev,
              "invisible mb-[4px] hd:mb-[3px]",
            )}
          >
            <Department fill="white" depName="девелопмент" />
          </div>
          <div className="box-content max-w-[346px] px-[14px] text-center text-[55px] font-bold uppercase leading-[56px] tracking-wide fhd:max-w-[577px] fhd:text-[90px] fhd:leading-[87px]">
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleDev, "invisible")}
              >
                для тех,&nbsp;
              </p>
            </div>
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleDev, "invisible")}
              >
                кто ищет&nbsp;
              </p>
            </div>
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleDev, "invisible")}
              >
                новый дом&nbsp;
              </p>
            </div>
          </div>
          <div className="relative w-full shrink px-[70px] pb-[20px] pt-[42px] fhd:py-[50px]">
            <div className="relative z-10 m-auto w-4/12 min-w-[236px] overflow-hidden hd:w-2/4 hd:max-w-[330px]">
              <img
                ref={setImageRef}
                className={classNames(
                  styles.loadImageDev,
                  "invisible relative z-10 w-full object-cover",
                )}
                src="./images/developmentBuild.jpg"
                alt="building"
              />
              <div
                ref={setDivRef}
                className={classNames(
                  styles.devBuildSvgHover,
                  "invisible absolute left-0 top-0 w-full stroke-white stroke-[3px] md:stroke-[6px]",
                )}
              >
                <DevBuildSvg />
              </div>
            </div>
            <div
              ref={setDivRef}
              className={classNames(
                styles.svgLoadDev,
                "invisible absolute right-0 top-0 w-full md:justify-center md:flex",
              )}
            >
              <div
                className={classNames(
                  "w-[187%] -translate-y-3 translate-x-[-62px] rotate-[.23deg] stroke-white stroke-[3px] md:translate-x-0 md:translate-y-0 md:rotate-[-2.58deg] md:stroke-[6px] md:min-w-[106%]",
                )}
              >
                <DevLineSvg />
              </div>
            </div>
          </div>
          <div className="relative box-content max-w-[280px] px-[14px] py-[20px] text-center font-inter text-[15px] leading-[20px] tracking-tight hd:max-w-[450px] hd:text-[18px] hd:leading-[23px] hd:tracking-tighter">
            <p
              ref={setPRef}
              className={classNames(styles.loadTextDev, "invisible")}
            >
              Более 10&nbsp;925 счастливых жителей приобрели квартиры&nbsp;в,
              построенных нами, домами.
            </p>
          </div>
        </div>
      </div>

      {/* constraction */}

      <div className="h-100svh w-full hd:h-full" ref={setScrollVerticalRefs}>
        <div
          ref={setDivRef}
          className="flex h-full w-full min-w-[375px] flex-col items-center overflow-hidden bg-blue-500 pt-[16.1svh] text-white md:pt-[13.1svh]"
        >
          <div
            ref={setDivRef}
            className={classNames(
              styles.loadTextConst,
              "invisible mb-[4px] hd:mb-[3px]",
            )}
          >
            <Department fill="white" depName="строительство" />
          </div>
          <div className="box-content max-w-[346px] px-[14px] text-center text-[55px] font-bold uppercase leading-[56px] tracking-wide fhd:max-w-[577px] fhd:text-[90px] fhd:leading-[87px]">
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleConst, "invisible")}
              >
                для тех,&nbsp;
              </p>
            </div>
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleConst, "invisible")}
              >
                кто ищет&nbsp;
              </p>
            </div>
            <div className="inline-block overflow-hidden">
              <p
                ref={setPRef}
                className={classNames(styles.loadTitleConst, "invisible")}
              >
                экспертов
              </p>
            </div>
          </div>
          <div className="relative w-full shrink px-[70px] pb-[20px] pt-[42px] fhd:py-[50px]">
            <div className="relative z-10 m-auto w-4/12 min-w-[236px] overflow-hidden hd:w-2/4 hd:max-w-[330px]">
              <img
                ref={setImageRef}
                className={classNames(
                  styles.loadImageConst,
                  "w-full object-cover",
                )}
                src="./images/constructionBuilders.jpg"
                alt="builders work"
              />
            </div>
            <div
              ref={setDivRef}
              className={classNames(
                styles.svgLoadConst,
                "invisible absolute left-0 top-0 w-full",
              )}
            >
              <div
                className={classNames(
                  "w-[194%] translate-x-[-125px] translate-y-[-32px] rotate-[0deg] stroke-white stroke-[3px] md:w-[112%] md:translate-x-[0] md:translate-y-[0] md:rotate-[99.5deg] md:stroke-[6px]",
                )}
              >
                <ConstLineSvg />
              </div>
            </div>
          </div>
          <div className="relative box-content max-w-[280px] px-[14px] py-[20px] text-center font-inter text-[15px] leading-[20px] tracking-tight hd:max-w-[450px] hd:text-[18px] hd:leading-[23px] hd:tracking-tighter">
            <p
              ref={setPRef}
              className={classNames(styles.loadTextConst, "invisible")}
            >
              Принимаем участие в&nbsp;строительстве масштабных объектов города,
              области, Приволжского федерального округа, Московской области
              и&nbsp;Владимирской области.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevConst;

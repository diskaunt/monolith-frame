import Department from "@/commons/Department";
import classNames from "classnames";
import React from "react";
import styles from "./FooterAboutUs.module.css";
import PikSvg from "./componentsSvg/PikSvg";
import SamoletPlusSvg from "./componentsSvg/SamoletPlusSvg";
import InGradSvg from "./componentsSvg/InGradSvg";

const FooterAboutUs = ({
  setScrollVerticalRefs,
  setBlackThemeRefs,
  setWhiteThemeRefs,
}: {
  setScrollVerticalRefs: (node: HTMLDivElement) => void;
  setBlackThemeRefs: (node: HTMLDivElement) => void;
  setWhiteThemeRefs: (node: HTMLDivElement) => void;
}) => {
  return (
    <>
      {/* Награды */}
      <div
        ref={setScrollVerticalRefs}
        className="h-100svh w-full bg-gray-100 px-[15px] pb-[40px] pt-[83px] hd:px-[30px] hd:pb-[60px] hd:pt-[43px]"
      >
        <div
          ref={setBlackThemeRefs}
          className="mx-auto flex h-full w-full max-w-[375px] flex-col items-center hd:max-w-[665px]"
        >
          <div className="w-fit hd:mt-[80px]">
            <Department fill="black" depName="награды" />
          </div>
          <div className="w-fit text-center hd:mt-[58px]">
            <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
              архитектурное
              <br /> решение
            </p>
          </div>
          <div className="mt-[36px] flex justify-center hd:mt-[39px]">
            <div className="ml-[40px] hd:ml-[72px]">
              <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[330px]">
                2
              </p>
            </div>
            <div className="mb-[28px] ml-[-10px] self-end hd:mb-[85px] hd:ml-[-20px]">
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
        className="h-100svh w-full bg-blue-500 px-[15px] pb-[40px] pt-[83px] text-white hd:px-[30px] hd:pb-[55px] hd:pt-[43px]"
      >
        <div ref={setWhiteThemeRefs} className="flex h-full w-full flex-col">
          <div className="mx-auto flex w-full max-w-[375px] flex-col items-center hd:max-w-[665px]">
            <div className="w-fit hd:mt-[80px]">
              <Department fill="white" depName="партнеры" />
            </div>
            <div className="w-fit text-center hd:mt-[58px]">
              <p className="font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                мы&nbsp;ценим наших
                <br />
                партнеров
              </p>
            </div>
            <div className="mt-[58px] flex justify-center hd:mt-[61px]">
              <div className="ml-[55px] hd:ml-[80px]">
                <p
                  className={classNames(
                    styles.shadow,
                    "text-[119px] font-bold leading-[130px] tracking-wide text-blue-500 hd:text-[300px] hd:leading-[330px]",
                  )}
                >
                  50+
                </p>
              </div>
              <div className="mb-[30px] ml-[-25px] self-end hd:mb-[85px] hd:ml-[-55px]">
                <p className="font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                  партнеров
                </p>
              </div>
            </div>
          </div>
          <div className="mt-auto flex w-full items-center self-start overflow-hidden">
            <div className="w-[12.5%] shrink-0">
              <PikSvg />
            </div>
            <div className="ml-[13.5%] w-[13%] shrink-0">
              <SamoletPlusSvg />
            </div>
            <div className="ml-[15%] w-[12%] shrink-0">
              <InGradSvg />
            </div>
            <div className="ml-[14%] w-[12.5%] shrink-0">
              <PikSvg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAboutUs;

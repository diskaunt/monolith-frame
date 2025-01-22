import React, { useRef } from "react";
import AboutUsRoadMap from "../componentsSvg/AboutUsRoadMap";
import AboutUsMid from "../componentsSvg/AboutUsMid";
import AboutUsAchvmts from "./AboutUsAchvmts";
import useObserver from "@/hooks/useObserver";

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

  return (
    <>
      <div className="m-auto w-full overflow-hidden bg-white">
        <div className="relative m-auto w-full max-w-[375px] hd:w-[1558px] hd:max-w-[1558px]">
          <div className="absolute left-[-30px] top-[485px] z-0 w-full translate-x-[-50%] hd:left-[52%] hd:top-[63svh] hd:max-w-[1558px]">
            <AboutUsRoadMap />
          </div>
          <div
            ref={setExpFirstRefs}
            className="flex flex-col gap-x-[72px] gap-y-[70px] hd:max-w-[100vw] hd:flex-row hd:flex-nowrap hd:pt-[24svh]"
          >
            <div className="ml-[5%] flex h-fit hd:ml-[6.5%]">
              <AboutUsAchvmts number={20}>
                <p className="max-w-[179px] hd:ml-[-40px] hd:max-w-[359px]">
                  лет успешной работы в&nbsp;строительной отрасли
                </p>
              </AboutUsAchvmts>
            </div>
            <div className="mr-[5%] self-end hd:ml-0 hd:mt-[12px]">
              <div className="flex h-[222px] w-[235px] overflow-hidden hd:h-[370px] hd:w-[393px]">
                <div className="w-[155px] shrink-0 hd:min-w-[258px]">
                  <img
                    className="w-full object-cover hd:object-none"
                    src="/images/experience1.jpg"
                    alt="crane"
                  />
                </div>
                <div className="relative left-[-30%] top-[0] w-[155px] shrink-0 self-end hd:h-[190px] hd:min-w-[258px]">
                  <img
                    className="w-full object-cover hd:object-none"
                    src="/images/experience2.jpg"
                    alt="workers"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Опыт */}
          <div
            ref={expRef}
            className="relative right-[6%] top-[25px] ml-auto w-fit text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:right-[23%] hd:top-[75px] hd:pt-[20px] hd:text-[90px]"
          >
            <p>опыт</p>
          </div>
          <div
            ref={setExpSecondRefs}
            className="mt-[100px] flex flex-col gap-x-[300px] gap-y-[45px] pl-[5%] pt-[40px] hd:mt-[290px] hd:max-w-[100vw] hd:flex-row hd:pb-[210px] hd:pl-[7%]"
          >
            <div className="relative z-10 w-[185px] hd:w-fit">
              <img
                className="w-full object-cover hd:object-none"
                src="/images/swing.jpg"
                alt="swing"
              />
            </div>
            <div className="ml-[105px] flex hd:ml-auto hd:mr-[148px] hd:mt-[85px]">
              <AboutUsAchvmts number={5}>
                <p className="max-w-[195px] hd:ml-[-20px] hd:max-w-[359px]">
                  крупнейших заводов построено по&nbsp;генподряду
                </p>
              </AboutUsAchvmts>
            </div>
          </div>
          <div ref={setScrollVerticalRefs}>
            {/* Скорость */}
            <div className="relative left-[5%] top-[200px] w-fit text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:left-[7%] hd:top-[160px] hd:text-[90px]">
              <p>скорость</p>
            </div>
            <div className="mt-[230px] flex flex-col-reverse pl-[5%] pr-[5%] hd:mt-0 hd:max-w-[100vw] hd:flex-row hd:pb-[85px] hd:pl-[7%] hd:pr-[100px] hd:pt-[285px]">
              <div className="mt-[-37px] flex flex-col gap-y-[55px] hd:mt-0 hd:gap-y-[70px]">
                <div className="flex">
                  <div className="text-[160px] font-bold uppercase leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[240px]">
                    <p className="block hd:hidden">10 925</p>
                    <p className="hidden hd:block">10&nbsp;925</p>
                  </div>
                  <div className="mb-[10px] ml-[-20px] max-w-[195px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[55px] hd:ml-[-35px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                    <p>новоселов живут в&nbsp;построенных домах</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-[160px] font-bold uppercase leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[240px]">
                    <p>24</p>
                  </div>
                  <div className="mb-[10px] ml-[-15px] max-w-[169px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tight hd:mb-[48px] hd:ml-[-40px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                    <p>жилых дома построено раньше сроков</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 ml-auto w-[168px] hd:mr-[5%] hd:mt-[105px] hd:w-[362px]">
                <img src="/images/playground.jpg" alt="playground" />
              </div>
            </div>
          </div>
          {/* Качество */}
          <div className="" ref={setScrollVerticalEndRefs}>
            <div className="relative top-[225px] ml-auto mr-[9%] w-fit text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:top-[265px] hd:mr-[15.5%] hd:text-[90px]">
              <p>качество</p>
            </div>
            <div className="relative z-10 ml-[5%] mt-[-10px] w-[137px] hd:ml-[34%] hd:mt-[-15px] hd:w-[296px]">
              <img src="/images/aboutUsBuild.jpg" alt="build" />
            </div>
            <div className="mr-[5%] mt-[275px] flex justify-end hd:mr-[10.5%] hd:mt-[130px]">
              <AboutUsAchvmts number={4}>
                <p className="max-w-[169px] hd:ml-[-27px] hd:max-w-[359px]">
                  социальных проекта. Детские сады и&nbsp;школы
                </p>
              </AboutUsAchvmts>
            </div>
            {/* Надежность */}
            <div className="relative left-[55px] top-[-255px] w-fit text-[55px] font-bold uppercase leading-[130px] tracking-wide hd:left-[9%] hd:top-[-200px] hd:text-[90px]">
              <p>надежность</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidleAboutUs;

import React, { useEffect, useState } from "react";
import TitleAboutUs from "./TitleSection/TitleAboutUs";
import MidleAboutUs from "./MidleSection/MidleAboutUs";
import FooterAboutUs from "./footerSection/FooterAboutUs";
import useObserver from "@/hooks/useObserver";
import scrollToVerticalTarget from "@/utils/scrollToVerticalTarget";

const AboutUs = ({
  setWhiteThemeRefs,
  setScrollVerticalRefs,
  setBlackThemeRefs,
}: {
  setWhiteThemeRefs: (node: HTMLDivElement | null) => void;
  setScrollVerticalRefs: (node: HTMLDivElement | null) => void;
  setBlackThemeRefs: (node: HTMLDivElement | null) => void;
}) => {
  const [therehold, setTherehold] = useState<number>(0.01);

  //обсервер функция для вертикального прокручивания стандартного к старту
  const [scrollVerticalStartRefs, setScrollVerticalStartRefs] = useObserver(
    (entries) =>
      scrollToVerticalTarget(entries, null, { behavior: "smooth", block: "start", inline: "start" }),
    {
      root: null,
      rootMargin: "0px",
      threshold: [therehold],
    },
  );
  //обсервер функция для вертикального прокручивания стандартного к концу
  const [scrollVerticalEndRefs, setScrollVerticalEndRefs] = useObserver(
    (entries) =>
      scrollToVerticalTarget(entries, null, { behavior: "smooth", block: "end", inline: "end" }),
    {
      root: null,
      rootMargin: "0px",
      threshold: [therehold],
    },
  );
  return (
    <div
      ref={setScrollVerticalRefs}
      className="max-w-100vw hd:max-w-100vw-scroll relative w-full min-w-[375px] bg-white"
    >
      {/* о нас, заглавие блока*/}
      <div className="relative z-10">
        <TitleAboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
          setScrollVerticalStartRefs={setScrollVerticalStartRefs}
        />
      </div>
      {/* развернутая дорожная карта блока */}
      <div
        ref={setBlackThemeRefs}
        className="max-w-100vw hd:max-w-100vw-scroll relative z-10 mt-[-35px] w-full min-w-[375px] hd:mt-0"
      >
        <MidleAboutUs
          setScrollVerticalRefs={setScrollVerticalRefs}
          setScrollVerticalStartRefs={setScrollVerticalStartRefs}
          setScrollVerticalEndRefs={setScrollVerticalEndRefs}
          therehold={therehold}
        />
      </div>
      {/* награды и партнеры блока */}
      <div ref={setBlackThemeRefs} className="relative z-10 w-100vw md:flex hd:mt-0 hd:w-100vw-scroll">
        <FooterAboutUs
          setBlackThemeRefs={setBlackThemeRefs}
          setWhiteThemeRefs={setWhiteThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
        />
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import TitleAboutUs from "./TitleSection/TitleAboutUs";
import MidleAboutUs from "./MidleSection/MidleAboutUs";
import FooterAboutUs from "./footerSection/FooterAboutUs";

const AboutUs = ({
	setScrollVerticalRefs,
  setWhiteThemeRefs,
  setBlackThemeRefs,
	gotoSection,
	isMobileClient,
}: {
	setScrollVerticalRefs: (node: HTMLDivElement | null) => void;
  setWhiteThemeRefs: (node: HTMLDivElement | null) => void;
  setBlackThemeRefs: (node: HTMLDivElement | null) => void;
	gotoSection: (index: number, direction: number) => void;
	isMobileClient: boolean;
}) => {
  return (
    <div className="max-w-100vw hd:max-w-100vw-scroll relative w-full min-w-[375px] bg-white">
      {/* о нас, заглавие блока*/}
      <div className="relative z-10">
        <TitleAboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
        />
      </div>
      {/* развернутая дорожная карта блока */}
      <div
        ref={setBlackThemeRefs}
        className="max-w-100vw hd:max-w-100vw-scroll relative z-10 mt-[-35px] w-full min-w-[375px] hd:mt-0"
      >
        <MidleAboutUs
          setScrollVerticalRefs={setScrollVerticalRefs}
        />
      </div>
      {/* награды и партнеры блока */}
      <div
        ref={setBlackThemeRefs}
        className="relative z-10 w-100vw hd:mt-0 hd:w-100vw-scroll"
      >
        <div ref={isMobileClient && window.innerWidth < 768 ? null : setScrollVerticalRefs} className="h-full w-full md:flex">
          <FooterAboutUs
            setBlackThemeRefs={setBlackThemeRefs}
            setWhiteThemeRefs={setWhiteThemeRefs}
            setScrollVerticalRefs={setScrollVerticalRefs}
						gotoSection={gotoSection}
						isMobileClient={isMobileClient}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

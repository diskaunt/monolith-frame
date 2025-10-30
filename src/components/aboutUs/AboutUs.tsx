import React from 'react';
import TitleAboutUs from './titleSection/TitleAboutUs';
import MidleAboutUs from './midleSection/MidleAboutUs';
import FooterAboutUs from './footerSection/FooterAboutUs';

type AboutUsProps = {
  setScrollVerticalRefs: (node: HTMLDivElement | null) => void;
  setWhiteThemeRefs: (node: HTMLDivElement | null) => void;
  setBlackThemeRefs: (node: HTMLDivElement | null) => void;
  gotoSection: (index: number, direction: number) => void;
  isMobileClient: boolean;
};

const AboutUs = ({
  setScrollVerticalRefs,
  setWhiteThemeRefs,
  setBlackThemeRefs,
  gotoSection,
  isMobileClient,
}: AboutUsProps) => {
  return (
    <section className="relative w-full min-w-[375px] bg-white">
      {/* о нас, заглавие блока*/}
      <div className="z-10 w-full">
        <TitleAboutUs
          setWhiteThemeRefs={setWhiteThemeRefs}
          setBlackThemeRefs={setBlackThemeRefs}
          setScrollVerticalRefs={setScrollVerticalRefs}
        />
      </div>
      {/* развернутая дорожная карта блока */}
      <div
        ref={setBlackThemeRefs}
        className="relative z-10 mt-[-35px] w-full min-w-[375px] hd:mt-0"
      >
        <MidleAboutUs setScrollVerticalRefs={setScrollVerticalRefs} />
      </div>
      {/* награды и партнеры блока */}
      <footer ref={setBlackThemeRefs} className="relative z-10 w-full hd:mt-0 hd:w-full">
        <div
          ref={isMobileClient && window.innerWidth < 768 ? null : setScrollVerticalRefs}
          className="h-full w-full md:flex"
        >
          <FooterAboutUs
            setBlackThemeRefs={setBlackThemeRefs}
            setWhiteThemeRefs={setWhiteThemeRefs}
            setScrollVerticalRefs={setScrollVerticalRefs}
            gotoSection={gotoSection}
            isMobileClient={isMobileClient}
          />
        </div>
      </footer>
    </section>
  );
};

export default AboutUs;

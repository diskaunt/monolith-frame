import React from 'react';
import TitleAboutUs from './TitleSection/TitleAboutUs';
import MidleAboutUs from './MidleSection/MidleAboutUs';
import Department from '@/commons/Department';
import FooterAboutUs from './footerSection/FooterAboutUs';

const AboutUs = () => {
  return (
    <div className='bg-white min-w-[375px] w-full max-w-[100vw] hd:overflow-hidden'>
      {/* о нас, заглавие блока*/}
      <div className='relative z-10'>
        <TitleAboutUs />
      </div>
      {/* развернутая дорожная карта блока */}
      <div className='relative min-w-[375px] w-full mt-[-35px] max-w-[100vw] hd:mt-0 z-10'>
        <MidleAboutUs />
      </div>
      {/* награды и партнеры блока */}
      <div className='relative w-[100vw] mt-[-22px] z-10 md:flex hd:mt-[84px]'>
				<FooterAboutUs />
			</div>
    </div>
  );
};

export default AboutUs;

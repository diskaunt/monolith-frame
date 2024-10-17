import React from 'react';
import MenuSvg from './MenuSvg';
import MgLogoSvg from './MfLogoSvg';
import NavSvg from './NavSvg';
import ArrowNavSvg from './ArrowNavSvg';

const Nav = () => {
  return (
    <div className='flex h-[60px] max-w-[707px] w-[100%] gap-[6px] overflow-hidden'>
      <div className='flex w-[60px] items-center justify-center border border-white'>
        <MenuSvg />
      </div>
      <div className='flex grow border border-white leading-[25px] text-[24px]'>
        <div className='flex max-w-[247px] w-[100%] justify-center items-center border-r border-white'>
          <MgLogoSvg />
        </div>
        <div className='flex max-w-[156px] w-[100%] justify-center items-center border-r border-white space-x-[3px]'>
          <span className=''>девелопмент</span>
          <span>
            <ArrowNavSvg />
          </span>
        </div>
        <div className='flex max-w-[169px] w-[100%] justify-center items-center border-r border-white space-x-[3px]'>
          <span>строительство</span>
          <span>
            <ArrowNavSvg />
          </span>
        </div>
        <div className='flex grow justify-center items-center'>
          <NavSvg />
        </div>
      </div>
    </div>
  );
};

export default Nav;

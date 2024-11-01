'use client';
import React, { useEffect, useRef, useState } from 'react';
import MenuSvg from './Svg/MenuSvg';
import MgLogoSvg from './Svg/MgLogoSvg';
import NavSvg from './Svg/NavSvg';
import ArrowNavSvg from './Svg/ArrowNavSvg';
import MgLogoSmSvg from './Svg/MgLogoSmSvg';
import NavSmSvg from './Svg/NavSmSvg';
import DevelopmentMenu from './DevelopmentMenu';
import classNames from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import styles from './Nav.module.css';
import ConstructionMenu from './ConstructionMenu';

const Nav = () => {
  const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, setDevOpened, setConstOpened);

  return (
    <div className='fixed flex sm:h-[60px] h-[50px] max-w-[707px] w-[100%] min-w-[343px] z-10'>
      <div
        className={classNames(
          styles.slideUpMenuBorder,
          'invisible w-0 md:visible md:flex md:w-[60px] items-center justify-center border border-white md:px-[15px]'
        )}
      >
        <MenuSvg className={classNames(styles.slideUpMenuSvg)} />
      </div>
      <div
        ref={menuRef}
        className={classNames(
          styles.borderAnimate,
          'relative flex grow border border-white sm:leading-[25px] sm:text-[24px] text-[16px] leading-[25px] tracking-wide md:ml-[6px] '
        )}
      >
        <div
          className={classNames(
            'flex grow sm:max-w-[247px] w-[100%] justify-center items-center border-white sm:pl-[20px] px-[15px] max-w-[79px]'
          )}
        >
          <MgLogoSvg className='hidden sm:block' />
          <MgLogoSmSvg className='sm:hidden' />
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div
          onClick={() => setDevOpened(!devOpened)}
          className='flex grow justify-center items-center border-white space-x-[3px] sm:max-w-[158px] sm:pl-[20px] pl-[17px] pr-[14px] hover:bg-white hover:text-black cursor-pointer fill-white hover:fill-black uppercase'
        >
          <span className=''>девелопмент</span>
          <span className='h-[0.7em] w-[6.67px] sm:w-[10px]'>
            <ArrowNavSvg />
          </span>
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div
          onClick={() => setConstOpened(!constOpened)}
          className='flex grow justify-center items-center border-white space-x-[3px] sm:max-w-[171px] sm:pl-[20px] pl-[16px] pr-[13px] hover:bg-white hover:text-black cursor-pointer fill-white hover:fill-black uppercase'
        >
          <span>строительство</span>
          <span className='h-[0.7em] w-[6.67px] sm:w-[10px]'>
            <ArrowNavSvg />
          </span>
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div className='flex mx-auto w-[50px] sm:w-[60px] justify-center items-center px-[18px] sm:px-[20px] stroke-white'>
          <NavSvg className='hidden sm:block' />
          <NavSmSvg className='sm:hidden' />
        </div>
      </div>
      <div>
        <DevelopmentMenu devOpened={devOpened} />
        <ConstructionMenu constOpened={constOpened} />
      </div>
    </div>
  );
};

export default Nav;

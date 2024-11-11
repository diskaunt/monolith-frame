'use client';
import React, { useEffect, useRef, useState } from 'react';
import MenuSvg from './conponentsSvg/MenuSvg';
import MgLogoSvg from './conponentsSvg/MgLogoSvg';
import NavSvg from './conponentsSvg/NavSvg';
import ArrowNavSvg from './conponentsSvg/ArrowNavSvg';
import MgLogoSmSvg from './conponentsSvg/MgLogoSmSvg';
import NavSmSvg from './conponentsSvg/NavSmSvg';
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
    <div className='fixed flex w-nav h-[50px] max-w-[707px] sm:w-nav-sm min-w-[343px] sm:h-[60px] z-10'>
      <div
        className={classNames(
          styles.slideUpMenuBorder,
          'invisible w-0 md:visible items-center justify-center border-white md:flex md:w-[60px] md:px-[15px] md:border'
        )}
      >
        <MenuSvg className={classNames(styles.slideUpMenuSvg)} />
      </div>
      <div
        ref={menuRef}
        className={classNames(
          styles.borderAnimate,
          'relative flex grow border border-white text-[16px] leading-[25px] tracking-wide sm:leading-[25px] sm:text-[24px] md:ml-[6px] '
        )}
      >
        <div
          className={classNames(
            'flex grow w-[100%] justify-center items-center border-white px-[15px] max-w-[79px] sm:max-w-[247px]'
          )}
        >
          <MgLogoSvg className='hidden sm:block' />
          <MgLogoSmSvg className='sm:hidden' />
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div
          onClick={() => setDevOpened(!devOpened)}
          className='flex grow justify-center items-center border-white space-x-[3px] px-[14px] hover:bg-white hover:text-black cursor-pointer fill-white sm:max-w-[154px] sm:px-[22px] hover:fill-black uppercase'
        >
          <span className=''>девелопмент</span>
          <span className='h-[0.7em] w-[6.67px] sm:w-[10px]'>
            <ArrowNavSvg />
          </span>
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div
          onClick={() => setConstOpened(!constOpened)}
          className='flex grow justify-center items-center border-white space-x-[3px] px-[16px] hover:bg-white hover:text-black cursor-pointer fill-white sm:max-w-[171px] sm:px-[20px] hover:fill-black uppercase'
        >
          <span>строительство</span>
          <span className='h-[0.7em] w-[6.67px] sm:w-[10px]'>
            <ArrowNavSvg />
          </span>
        </div>
        <div className={(styles.growAnimate, 'w-[1px] h-full bg-white')}></div>
        <div className='flex mx-auto w-[48px] justify-center items-center px-[16px] sm:w-[60px] sm:px-[20px] stroke-white'>
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

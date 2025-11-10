'use client';
import React, { use, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import styles from './nav.module.css';
import ConstructionMenu from './constructinMenu/ConstructionMenu';
import { ProjectType } from '@/data-access/projects';
import Icon from '../icon/Icon';
import Illustration from '../illustration/Illustration';
import { useParams } from 'next/navigation';
import DevelopmentMenu from './developmentMenu/DevelopmentMenu';

const Nav = ({ projects }: { projects?: ProjectType[] }) => {
  const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const params = useParams();

  const handleClickOutside = (value: boolean) => {
    setDevOpened(value);
    setConstOpened(value);
  };

  useClickOutside([navRef, menuRef], handleClickOutside);

  const onDevOpened = () => {
    setDevOpened(!devOpened);
  };

  const onConstOpened = () => {
    setConstOpened(!constOpened);
  };

  const isProjectPage = params.project ? true : false;

  return (
    <>
      <nav
        className={classNames(
          'baseTheme fixed left-[16px] top-[16px] z-20 border-inherit grayscale transition-all sm:left-[20px] sm:top-[20px]',
          isProjectPage ? '' : 'blackTheme',
        )}
      >
        <div
          className={classNames(
            'z-10 flex h-[50px] w-nav-mobile min-w-[343px] max-w-[707px] border-inherit sm:w-nav-desktop md:h-[60px]',
          )}
        >
          {/* Дизайнерская причуда */}
          <div
            className={classNames(
              styles.slideUpMenuBorder,
              'invisible w-0 items-center justify-center md:visible md:flex md:w-[60px] md:border md:border-inherit md:px-[15px]',
            )}
          >
            <Icon name="menu" className={classNames(styles.slideUpMenuSvg, 'blackTheme')} />
          </div>

          {/* Основное меню */}
          <div
            ref={navRef}
            className={classNames(
              styles.borderAnimate,
              'relative flex grow border border-inherit text-[16px] leading-[25px] tracking-wide md:ml-[6px] md:text-[24px] md:leading-[25px]',
            )}
          >
            {/* Логотип Monolith Frame */}
            <div
              className={classNames(
                'flex w-full max-w-[79px] grow items-center justify-center px-[15px] hd:max-w-[247px]',
              )}
            >
              <Illustration name="mgLogo" />
            </div>

            {/* Разделитель */}
            <div className={classNames(styles.growAnimate, 'h-full border-l border-inherit')}></div>

            {/* Кнопка "Девелопмент" */}
            <div
              className={classNames(
                devOpened ? 'bg-white' : '',
                'relative grow px-[14px] hd:max-w-[154px] hd:px-[22px]',
              )}
            >
              <button
                onClick={onDevOpened}
                className={classNames(
                  'flex h-full w-full cursor-pointer items-center justify-center gap-x-[3px] uppercase',
                )}
              >
                <span className="">девелопмент</span>
                <span className="h-[0.7em] w-[6.67px] hd:w-[10px]">
                  <Icon name="arrowNav" />
                </span>
              </button>
            </div>

            {/* Разделитель */}
            <div className={classNames(styles.growAnimate, 'h-full border-l border-inherit')}></div>

            {/* Кнопка "Строительство" */}
            <div
              onClick={onConstOpened}
              className={classNames(
                constOpened ? 'bg-white' : '',
                'flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase hd:max-w-[171px] hd:px-[20px]',
              )}
            >
              <span>строительство</span>
              <span className="h-[0.7em] w-[6.67px] hd:w-[10px]">
                <Icon name="arrowNav" />
              </span>
            </div>

            {/* Разделитель */}
            <div className={classNames(styles.growAnimate, 'h-full border-l border-inherit')}></div>

            {/* Иконка навигации */}
            <div
              className={classNames(
                'mx-auto flex w-[48px] items-center justify-center px-[16px] hd:w-[60px] hd:px-[20px]',
              )}
            >
              <Icon name="nav" className="hidden hd:block" />
              <Icon name="navSm" className="hd:hidden" />
            </div>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={classNames(
          'invisible absolute left-[97px] top-[76px] z-20 me-[16px] mr-[16px] flex max-h-[80svh] flex-wrap transition-all duration-300 sm:left-[101px] sm:top-[76px] sm:mr-[20px] md:left-[167px] md:top-[86px] hd:left-[335px] hd:top-[20px] hd:flex-nowrap',
          constOpened || devOpened ? 'visible' : '',
          devOpened ? 'visible gap-[6px]' : 'gap-0 hd:top-[86px]',
        )}
      >
        <DevelopmentMenu devOpened={devOpened} />
        <ConstructionMenu projects={projects} constOpened={constOpened} />
      </div>
    </>
  );
};

export default Nav;

'use client';
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import styles from './nav.module.css';
import ConstructionMenu from './constructinMenu/ConstructionMenu';
import { ProjectType } from '@/data-access/projects';
import Icon from '../icon/Icon';
import Illustration from '../illustration/Illustration';
import { useParams } from 'next/navigation';

const Nav = ({ projects }: { projects?: ProjectType[] }) => {
  // const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const menuRef = useRef(null);
  const devMenuRef = useRef(null);
  const params = useParams();

  const handleClickOutside = (value: boolean) => {
    // setDevOpened(value);
    setConstOpened(value);
  };

  useClickOutside([menuRef, devMenuRef], handleClickOutside);

  const onDevOpened = () => {
    // setDevOpened(!devOpened);
    setConstOpened(!constOpened);
  };

  const isProjectPage = params.project ? true : false;

  return (
    <>
      <nav
        className={classNames(
          'border-inherit transition-all',
          'baseTheme',
          isProjectPage ? 'translate-x-[60px]' : 'blackTheme',
          'fixed left-[16px] top-[16px] z-20 md:left-[20px] md:top-[20px]',
					'grayscale',
        )}
      >
        <div
          className={classNames(
            'z-10 flex h-[50px] w-nav-mobile min-w-[343px] max-w-[707px] border-inherit md:h-[60px] md:w-nav-desktop',
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
            ref={menuRef}
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
            <div className={classNames('relative grow px-[14px] hd:max-w-[154px] hd:px-[22px]')}>
              <button
                onClick={onDevOpened}
                className="flex h-full w-full cursor-pointer items-center justify-center gap-x-[3px] uppercase"
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
              onClick={() => {}}
              className={classNames(
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
      <nav
        ref={devMenuRef}
        className={classNames(
          constOpened ? 'visible' : 'invisible',
          'absolute left-[95px] top-[70px] z-20 flex flex-wrap gap-[6px] sm:left-[86px] sm:top-[86px] hd:left-[333px] hd:flex-nowrap',
        )}
      >
        {/* <DevelopmentMenu devOpened={devOpened} /> */}
        <ConstructionMenu projects={projects} constOpened={constOpened} />
      </nav>
    </>
  );
};

export default Nav;

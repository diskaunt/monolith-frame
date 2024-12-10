import React, { Fragment, useEffect, useRef } from 'react';
import DevLineSvg from './componentsSvg/DevLineSvg';
import classNames from 'classnames';
import styles from './DevConst.module.css';
import DevBuildSvg from './componentsSvg/DevBuildSvg';
import ConstLineSvg from './componentsSvg/ConstLineSvg';
import Department from '@/commons/Department';

const DevConst = ({ scrollEnd }: { scrollEnd: boolean }) => {
  return (
    <>
      {/* developement */}
      <div
        className={classNames(
          styles.dev,
          'min-w-[375px] w-full h-full bg-orange-500 flex flex-col items-center pt-[13.1svh] text-white overflow-hidden'
        )}
      >
        <div className={classNames(styles.loadTextDev, 'mb-[4px] hd:mb-[3px]')}>
          <Department fill='white' depName='девелопмент' />
        </div>
        <div className='box-content max-w-[346px] uppercase text-[55px] leading-[56px] tracking-wide font-bold text-center px-[14px] fhd:max-w-[577px] fhd:text-[90px] fhd:leading-[87px]'>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleDev : '')}>
              для тех,&nbsp;
            </p>
          </div>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleDev : '')}>
              кто ищет&nbsp;
            </p>
          </div>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleDev : '')}>
              новый дом&nbsp;
            </p>
          </div>
        </div>
        <div className='relative shrink w-full px-[70px] pt-[42px] pb-[20px] fhd:py-[50px]'>
          <div className='relative w-fit overflow-hidden m-auto z-10'>
            <img
              className={classNames(
                scrollEnd ? styles.loadImageDev : '',
                'relative min-w-[236px] w-full max-w-[330px] h-[40svh] z-10'
              )}
              src='./images/developmentBuild.jpg'
              alt='building'
            />
            <div
              className={classNames(
                styles.devBuildSvgHover,
                'absolute top-0 left-0 w-full stroke-[3px] md:stroke-[6px] stroke-white'
              )}
            >
              <DevBuildSvg />
            </div>
          </div>
          <div
            className={classNames(
              scrollEnd ? styles.svgLoadDev : '',
              'absolute top-[0] right-0 w-[187%] rotate-[.23deg] translate-x-[262px] stroke-[3px] md:w-[924px] md:translate-x-[12px] md:translate-y-[0] md:rotate-[-2.58deg] md:stroke-[6px] stroke-white'
            )}
          >
            <DevLineSvg />
          </div>
        </div>
        <div className='relative box-content max-w-[280px] font-inter text-[15px] leading-[20px] tracking-tight text-center py-[20px] px-[14px] hd:max-w-[450px] hd:text-[18px] hd:leading-[23px] hd:tracking-tighter'>
          <p className={classNames(scrollEnd ? styles.loadTextDev : '')}>
            Более 10&nbsp;925 счастливых жителей приобрели квартиры&nbsp;в,
            построенных нами, домами.
          </p>
        </div>
      </div>
      {/* constraction */}
      <div className='min-w-[375px] w-full h-full bg-blue-500 flex flex-col items-center pt-[13.1svh] text-white overflow-hidden'>
        <div
          className={classNames(styles.loadTextConst, 'mb-[4px] hd:mb-[3px]')}
        >
            <Department fill='white' depName='строительство' />
        </div>
        <div className='box-content max-w-[346px] uppercase text-[55px] leading-[56px] tracking-wide font-bold text-center px-[14px] fhd:max-w-[577px] fhd:text-[90px] fhd:leading-[87px]'>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleConst : '')}>
              для тех,&nbsp;
            </p>
          </div>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleConst : '')}>
              кто ищет&nbsp;
            </p>
          </div>
          <div className='overflow-hidden inline-block'>
            <p className={classNames(scrollEnd ? styles.loadTitleConst : '')}>
              экспертов
            </p>
          </div>
        </div>
        <div className='relative shrink w-full px-[70px] pt-[42px] pb-[20px] fhd:py-[50px]'>
          <div className='relative w-fit overflow-hidden z-10 m-auto'>
            <img
              className={classNames(
                scrollEnd ? styles.loadImageConst : '',
                'min-w-[236px] w-full max-w-[330px] h-[40svh]'
              )}
              src='./images/constructionBuilders.jpg'
              alt='builders work'
            />
          </div>
          <div
            className={classNames(
              scrollEnd ? styles.svgLoadConst : '',
              'absolute top-0 left-0 w-[194%] translate-x-[-230px] translate-y-[1px] rotate-[48deg] stroke-[3px] md:w-[1006px] md:translate-x-[-63px] md:translate-y-[33px] md:rotate-[99.5deg] md:stroke-[6px] stroke-white'
            )}
          >
            <ConstLineSvg />
          </div>
        </div>
        <div className='relative box-content max-w-[280px] font-inter text-[15px] leading-[20px] tracking-tight text-center py-[20px] px-[14px] hd:max-w-[450px] hd:text-[18px] hd:leading-[23px] hd:tracking-tighter'>
          <p className={classNames(scrollEnd ? styles.loadTextConst : '')}>
            Принимаем участие в&nbsp;строительстве масштабных объектов города,
            области, Приволжского федерального округа, Московской области
            и&nbsp;Владимирской области.
          </p>
        </div>
      </div>
    </>
  );
};

export default DevConst;

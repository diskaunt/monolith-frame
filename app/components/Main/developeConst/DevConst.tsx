import React from 'react';
import DevLineSvg from './ComponentsSvg/DevLineSvg';
import classNames from 'classnames';
import styles from './DevConst.module.css';
import DevBuildSvg from './ComponentsSvg/DevBuildSvg';
import ConstLineSvg from './ComponentsSvg/ConstLineSvg';

const DevConst = ({ scrollEnd }: { scrollEnd: boolean }) => {
  return (
    <>
      {/* developement */}
      <div
        className={classNames(styles.dev,
          'min-w-[375px] h-full bg-orange-500 flex flex-col items-center pt-[131px] text-white overflow-hidden'
        )}
      >
        <div
          className={classNames(
            styles.loadTextDev,
            'flex items-center space-x-[6px] mb-[4px] hd:mb-[3px]'
          )}
        >
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect id='sqr' width='10' height='10' fill='white' />
          </svg>
          <p className='font-halvarBreit text-[12px] leading-[25px] tracking-tight uppercase hd:text-[14px]'>
            девелопмент
          </p>
        </div>
        <div className='box-content max-w-[346px] uppercase text-[55px] leading-[56px] tracking-wide font-bold text-center px-[14px] hd:max-w-[577px] hd:text-[90px] hd:leading-[87px]'>
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
        <div className='relative shrink w-full px-[70px] pt-[42px] hd:pt-[50px] pb-[20px] hd:pt-[50px] hd:pb-[50px]'>
          <div className='relative w-fit overflow-hidden m-auto z-10'>
            <img
              className={classNames(
                scrollEnd ? styles.loadImageDev : '',
                'relative min-w-[236px] w-full max-w-[330px] z-10'
              )}
              src='./images/developmentBuild.jpg'
              alt='building'
            />
            <div
              className={classNames(styles.devBuildSvgHover,
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
            Более 10 925 счастливых жителей приобрели квартиры в, построенных
            нами, домами.
          </p>
        </div>
      </div>
      {/* constraction */}
      <div className='min-w-[375px] h-full bg-blue-500 flex flex-col items-center pt-[131px] text-white overflow-hidden'>
        <div
          className={classNames(
            styles.loadTextConst,
            'flex items-center space-x-[6px] mb-[4px] hd:mb-[3px]'
          )}
        >
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect id='sqr' width='10' height='10' fill='white' />
          </svg>
          <p className='font-halvarBreit text-[12px] leading-[25px] tracking-tight uppercase hd:text-[14px]'>
            строительство
          </p>
        </div>
        <div className='box-content max-w-[346px] uppercase text-[55px] leading-[56px] tracking-wide font-bold text-center px-[14px] hd:max-w-[577px] hd:text-[90px] hd:leading-[87px]'>
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
              экспертов&nbsp;
            </p>
          </div>
        </div>
        <div className='relative shrink w-full px-[70px] pt-[42px] hd:pt-[50px] pb-[20px] hd:pt-[50px] hd:pb-[50px]'>
          <div className='relative w-fit overflow-hidden z-10 m-auto'>
            <img
              className={classNames(
                scrollEnd ? styles.loadImageConst : '',
                'min-w-[236px] w-full max-w-[330px]'
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
            Принимаем участие в строительстве масштабных объектов города,
            области, Приволжского федерального округа, Московской области <br />{' '}
            и Владимирской области.
          </p>
        </div>
      </div>
    </>
  );
};

export default DevConst;

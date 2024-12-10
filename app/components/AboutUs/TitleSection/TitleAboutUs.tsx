import classNames from 'classnames';
import React from 'react';
import ArrowComplex from '../componentsSvg/ArrowComplex';
import styles from './TitltAboutUs.module.css';
import AboutUsStart from '../componentsSvg/AboutUsStart';
import AboutUsMid from '../componentsSvg/AboutUsMid';

const TitleAboutUs = () => {
  return (
    <>
      {/* До анимации */}
      <div
        className={classNames(
          'absolute top-0 left-0 flex flex-wrap gap-x-[206px] h-[60svh] w-full px-[20px] py-[33px] bg-white z-10 overflow-hidden'
        )}
      >
        <div className='flex mt-[120px] text-[140px] leading-[90px] tracking-wide uppercase whitespace-nowrap space-x-[15px]'>
          <div>
            <h1 className={classNames(styles.titleLoad)}>о компании</h1>
          </div>
          <div
            className={classNames(
              styles.arrowLoad,
              'w-[80px] stroke-black flow-start'
            )}
          >
            <ArrowComplex />
          </div>
        </div>
        <div
          className={classNames(
            styles.descrLoad,
            'self-end font-inter w-[589px] text-[28px] leading-[35px] tracking-veryTight'
          )}
        >
          <p>
            Наша история – летопись непрерывного роста масштабов реализуемых
            проектов, расширения направлений профессиональной деятельности и
            географии возведённых объектов.
          </p>
        </div>
      </div>
      {/* После анимации*/}
      <div className='flex flex-col w-full h-[100svh] bg-blue-500'>
        <div className='relative flex flex-wrap max-w-[375px] w-full mx-auto text-white gap-x-[30px] hd:max-w-[1920px] hd:h-[70%] hd:gap-x-[34px] z-0'>
          <div className='mt-[125px] ml-[25px] text-[90px] leading-[56px] font-bold tracking-wide uppercase hd:ml-[15%] hd:mt-[10%] hd:leading-[180px] hd:text-[200px]'>
            <p>нам</p>
          </div>
          <div className='max-w-[226px] mt-[30px] ml-[5%] font-inter text-[15px] leading-[20px] tracking-tight2 font-medium order-5 hd:max-w-[342px] hd:order-none hd:ml-0 hd:text-[19px] hd:leading-[26px] hd:tracking-veryTigth hd:pt-[26px] hd:mt-[10%]'>
            <p>
              Принимаем участие в&nbsp;строительстве масштабных объектов города,
              области, Приволжского федерального округа, Московской области
              и&nbsp;Владимирской области.
            </p>
          </div>
          <div className='flex flex-wrap mt-[46px] w-full justify-center gap-y-[30px] hd:mt-0 hd:ml-[7%] hd:gap-x-[18%]'>
            <div className='mr-[20%] text-[90px] leading-[56px] font-bold tracking-wide uppercase hd:mr-0 hd:text-[200px] hd:leading-[180px]'>
              <p>по&nbsp;силу</p>
            </div>
            <div className='ml-[30%] text-[90px] leading-[56px] font-bold tracking-wide uppercase hd:ml-0 hd:text-[200px] hd:leading-[180px]'>
              <p>любой</p>
            </div>
          </div>
          <div className='mt-[25px] ml-[5%] text-[90px] leading-[56px] font-bold tracking-wide uppercase hd:mt-[6px] hd:ml-[46.5%] hd:text-[200px] hd:leading-[180px]'>
            <p>проект</p>
          </div>
        </div>
        {/* Svg вершин гор или снежных сугрробов */}
        <div className='relative w-full h-[22%] mt-auto hd:h-[30%] hd:mb-0'>
          <div
            className={classNames(
              styles.snowMountLoad,
              'absolute w-full h-[160px] overflow-hidden bottom-0 left-0 hd:h-[200px]'
            )}
          >
            <AboutUsStart />
          </div>
        </div>
      </div>
      <div className={classNames(styles.whiteTowerLoad, 'relative h-0')}>
        {/* Башня основная */}
        <div className='absolute w-[256px] left-2/4 top-[-220px] translate-x-[-50%] sm:w-[40%] hd:w-[41%] hd:top-[-37svh] z-10'>
          <img
            className='w-full'
            src='./images/whiteTower.png'
            alt='whiteTower'
          />
        </div>
      </div>
      {/* Башня задним фоном*/}
      <div className='relative top-[-42px] w-full hd:top-0'>
        <div className='w-full h-[475px] overflow-hidden hd:h-[1209px]'>
          <img
            className='min-h-[558px] object-cover object-top hd:min-h-[1209px]'
            src='/images/whiteTowerPhoto.jpg'
            alt='whiteTower'
          />
        </div>
      </div>
      <div className='absolute left-0 bottom-0 w-full h-[142px] fill-white overflow-hidden hd:w-full hd:h-[158px] z-10'>
        <AboutUsMid />
      </div>
    </>
  );
};

export default TitleAboutUs;

import styles from './Main.module.css';
import React, { useRef } from 'react';
import Nav from './Navigate/Nav';
import classNames from 'classnames';
import ArrowRight from './ArrowRight';
import ResComplex from './ResComplexCard/ResComplex';
import DevConst from './DevConst';

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    mainRef.current &&
      mainRef.current.scrollTo({
        left: mainRef.current.scrollWidth - mainRef.current.clientWidth,
        behavior: 'smooth',
      });
  };

  return (
    <section
      ref={mainRef}
      className={classNames(
        styles.main,
        'flex overflow-x snap-mandatory scroll-smooth snap-x'
      )}
    >
      <div
        className={classNames(
          styles.container,
          'flex shrink-0 flex-col justify-between box-border min-w-[100vw] h-[100svh] text-white sm:p-[20px] p-[16px] snap-start'
        )}
      >
        <div className='flex flex-wrap gap-x-[101px] gap-y-[37px]'>
          <div className='sm:h-[60px] h-[50px] max-w-[707px] w-[100%] min-w-[343px]'>
            <Nav />
          </div>
          <div className='space-y-[30px] grow mt-[-11px]'>
            <div className='text-[70px] leading-[60px] font-bold uppercase sm:leading-[120px] tracking-wide max-w-[330px] ml-[-1px] sm:max-w-[840px] sm:text-[140px] overflow-hidden'>
              <div className=''>
                <div className='overflow-hidden inline-block'>
                  <h1 className={styles.slideUpRotate}>компания</h1>
                </div>
                <div className='overflow-hidden inline-block'>
                  <h1 className={styles.slideUpRotate}>третьего</h1>
                </div>
                <br />
                <div className='overflow-hidden inline-block'>
                  <h1 className={styles.slideUpRotate}>тысячелетия</h1>
                </div>
              </div>
            </div>
            <div className='font-inter text-[15px] leading-[20px] sm:text-[18px] max-w-[276px] sm:max-w-[396px] tracking-tighter'>
              <p className={styles.slideUpOpacity}>
                Наш многолетний опыт и уникальные технологии гарантируют успех
                строительства в сотрудничестве с нашей компанией
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-end justify-between mx-[-16px] my-[-16px] sm:m-[0]'>
          <div className='w-full relative font-inter tracking-tighter max-w-[307px] max-h-[104px] sm:max-w-[370px] sm:max-h-[120px] group'>
            <ResComplex />
          </div>
          <div onClick={scrollToEnd} className='hidden sm:block'>
            <ArrowRight
              className={classNames(styles.slideRightOpacity, 'cursor-pointer')}
            />
          </div>
        </div>
      </div>
      <div className='min-w-[88vw] h-[100svh] columns-2 gap-0 snap-start'>
        <DevConst />
      </div>
    </section>
  );
};

export default Main;

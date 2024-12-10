import React, { RefObject, useEffect, useRef, useState } from 'react';
import ArrowComplex from './ArrowComplex';
import Link from 'next/link';
import styles from './RCCard.module.css';
import classNames from 'classnames';
import useMouseOver from '@/hooks/useMouseOver';

const RCCard = () => {
  const resRef = useRef(null);
  const [resOvered, setResOver] = useState(false);
  useMouseOver(resRef, setResOver, 300);
  return (
    <>
      <div
        ref={resRef}
        className={classNames(styles.loadRight, 'relative group z-20')}
      >
        <div className='flex'>
          <div className='shrink-0'>
            <img
              className='w-[110px] h-[104px] sm:h-[120px]'
              src='/images/newLK-1.jpg'
              alt='Новый Жк'
            />
          </div>
          <div className='flex flex-wrap flex-col grow bg-orange-500 justify-between max-w-[260px]'>
            <div className='flex mx-[10px] mt-[3px] gap-x-[16px] text-[10px] sm:mx-[14px] sm:mt-[11px] sm:gap-x-[23px] sm:text-[12px] font-semibold uppercase leading-[23px] opacity-60'>
              <p className={styles['slide-up-opacity']}>20.12.22</p>
              <p className={styles['slide-up-opacity']}>#новое</p>
            </div>
            <div className='mx-[10px] my-[10px] text-[18px] sm:mx-[11px] sm:mb-[14px] sm:text-[20px] leading-[18px] font-medium'>
              <p className={styles['slide-up']}>
                Новый ЖК
                <br /> готов к сдаче
              </p>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            resOvered ? styles.loadRightArrow : styles.unloadArrow,
            'absolute h-full top-[0] left-complex-x'
          )}
        >
          <div className='h-full flex stroke-white bg-orange-500 p-[6px] w-[42px] sm:w-[72px] cursor-pointer'>
            <Link href={'/'}></Link>
            <ArrowComplex
              className={classNames(
                resOvered
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-[20%] opacity-0',
                'transition-all duration-300'
              )}
            />
          </div>
        </div>
      </div>
      {/* pop-up block */}
      <div
        className={classNames(
          resOvered ? 'translate-y-[-25px] visible' : 'invisible',
          'absolute group flex top-0 left-0 w-full  z-10 scale-90 transition-all duration-300 easy-in-out hover:scale-100 hover:translate-y-[-103%] hover:visible'
        )}
      >
        <div className='shrink-0'>
          <img
            className='w-[110px] h-[104px] sm:h-[120px] object-cover'
            src='/images/KMRiverPark.jpg'
            alt='Жилой комплекс Речной парк'
          />
        </div>
        <div className='flex overflow-hidden flex-wrap flex-col grow bg-sky-950 justify-between max-w-[260px]'>
          <div className='flex mx-[10px] mt-[3px] gap-x-[16px] text-[10px] sm:mx-[14px] sm:mt-[11px] sm:gap-x-[23px] sm:text-[12px] font-semibold uppercase leading-[23px] opacity-60'>
            <p className={classNames(styles['slide-up-opacity'])}>07.12.22</p>
            <p className={classNames(styles['slide-up-opacity'])}>#новое</p>
          </div>
          <div className='w-full px-[10px] py-[10px] text-[18px] sm:mx-[11px] sm:mb-[14px] sm:text-[20px] leading-[18px] font-medium'>
            <p className={classNames(styles['slide-up'], styles.cutoffText ,'w-full')}>
              В ЖК Речной парк начались первые продажи апартаментов
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RCCard;

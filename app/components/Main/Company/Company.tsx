import React, { RefObject } from 'react';
import Nav from '../Navbar/Nav';
import styles from './Company.module.css';
import RCCard from '../RCCard/RCCard';
import ArrowRight from './ArrowRight';
import classNames from 'classnames';

const Company = ({ scrollToDevConst }: { scrollToDevConst: () => void }) => {
  return (
    <>
      <div className='flex flex-wrap gap-x-[101px] gap-y-[37px]'>
        <div className='h-[50px] sm:h-[60px] max-w-[707px] w-full min-w-[343px]'></div>
        <div className='space-y-[30px] grow mt-[-11px]'>
          <div className=' overflow-hidden pr-[117px]'>
            <div className='text-[70px] leading-[60px] font-bold uppercase sm:leading-[120px] tracking-wide max-w-[400px] ml-[-1px] sm:max-w-[900px] sm:text-[140px]'>
              <div className='overflow-hidden inline-block'>
                <h1 className={styles.slideUpRotate}>компания&nbsp;</h1>
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
              Наш многолетний опыт и&nbsp;уникальные технологии гарантируют
              успех строительства в&nbsp;сотрудничестве с&nbsp;нашей компанией
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-between mx-[-16px] my-[-16px] sm:m-[0]'>
        <div className='w-full relative font-inter tracking-tighter max-w-[307px] max-h-[104px] sm:max-w-[370px] sm:max-h-[120px] group'>
          <RCCard />
        </div>
        <div onClick={scrollToDevConst} className='invisible sm:visible'>
          <ArrowRight
            className={classNames(styles.slideRightOpacity, 'cursor-pointer')}
          />
        </div>
      </div>
    </>
  );
};

export default Company;

import Department from '@/commons/Department';
import classNames from 'classnames';
import React from 'react';
import styles from './FooterAboutUs.module.css';
import PikSvg from './componentsSvg/PikSvg';
import SamoletPlusSvg from './componentsSvg/SamoletPlusSvg';
import InGradSvg from './componentsSvg/InGradSvg';

const FooterAboutUs = () => {
  return (
    <>
      {/* Награды */}
      <div className='w-full bg-gray-100 h-[100svh] px-[15px] pt-[83px] pb-[40px] hd:pt-[43px] hd:pb-[60px] hd:px-[30px]'>
        <div className='flex flex-col items-center w-full max-w-[375px] h-full mx-auto hd:max-w-[665px]'>
          <div className='w-fit'>
            <Department fill='black' depName='награды' />
          </div>
          <div className='w-fit text-center hd:mt-[58px]'>
            <p className='font-drucSyr font-bold text-[55px] leading-[56px] tracking-wide uppercase hd:text-[90px] hd:leading-[83px]'>
              архитектурное
              <br /> решение
            </p>
          </div>
          <div className='flex justify-center mt-[36px] hd:mt-[53px]'>
            <div className='ml-[40px] hd:ml-[72px]'>
              <p className='text-orange-500 font-bold text-[120px] leading-[130px] tracking-wide hd:text-[300px] hd:leading-[330px]'>
                2
              </p>
            </div>
            <div className='self-end mb-[28px] ml-[-10px] hd:mb-[85px] hd:ml-[-20px]'>
              <p className='font-inter font-midium text-[17px] leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-very-tight'>
                место
              </p>
            </div>
          </div>
          <div className='flex w-full mt-auto'>
            <div className='w-full border-black border-y'>
              <div className='flex justify-between h-[70px] border-black border-b hd:h-[80px]'>
                <div className='pt-[3px] hd:pt-[8px]'>
                  <p className='font-inter font-semibold text-[10px] leading-[23px] tracking-tighter uppercase'>
                    комплекс
                  </p>
                </div>
                <div className='content-end pb-[5px] hd:pb-[12px] hd:pr-[5px]'>
                  <p className='font-inter font-medium text-[15px] leading-[22px] tracking-veryTight hd:text-[18px]'>
                    КМ Прайм
                  </p>
                </div>
              </div>
              <div className='flex h-[70px] hd:h-[80px]'>
                <div className='flex justify-between w-[62%] border-black border-r hd:w-[59%]'>
                  <div className='pt-[3px] hd:pt-[8px]'>
                    <p className='font-inter font-semibold text-[10px] leading-[23px] tracking-tighter uppercase'>
                      конкурс
                    </p>
                  </div>
                  <div className='content-end pr-[12px] pb-[5px] hd:pb-[10px] hd:pr-[14px]'>
                    <p className='font-inter font-medium text-end text-[15px] leading-[22px] tracking-veryTight hd:text-[18px]'>
                      Добросовестный застройщик
                    </p>
                  </div>
                </div>
                <div className='flex justify-between grow'>
                  <div className='pt-[3px] pl-[12px] hd:pt-[8px] hd:pl-[18px]'>
                    <p className='font-inter font-semibold text-[10px] leading-[23px] tracking-tighter uppercase'>
                      год
                    </p>
                  </div>
                  <div className='content-end pb-[5px] pr-[2px] hd:pb-[10px]'>
                    <p className='font-inter font-medium text-[15px] leading-[22px] tracking-veryTight hd:text-[18px]'>
                      2014г
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Партнеры */}
      <div className='flex flex-col w-full bg-blue-500 h-[100svh] text-white pt-[83px] px-[15px] pb-[40px] hd:pt-[43px] hd:px-[30px] hd:pb-[55px]'>
        <div className='flex flex-col w-full max-w-[375px] mx-auto items-center hd:max-w-[665px] '>
          <div className='w-fit'>
            <Department fill='white' depName='партнеры' />
          </div>
          <div className='w-fit text-center hd:mt-[58px]'>
            <p className='font-drucSyr font-bold text-[42px] leading-[46px] tracking-wide uppercase hd:text-[70px] hd:leading-[70px]'>
              мы&nbsp;ценим наших
              <br />
              партнеров
            </p>
          </div>
          <div className='flex justify-center mt-[58px] hd:mt-[80px]'>
            <div className='ml-[55px] hd:ml-[80px]'>
              <p
                className={classNames(
                  styles.shadow,
                  'text-blue-500 font-bold text-[119px] leading-[130px] tracking-wide hd:text-[300px] hd:leading-[330px]'
                )}
              >
                50+
              </p>
            </div>
            <div className='self-end mb-[30px] ml-[-25px] hd:mb-[85px] hd:ml-[-55px]'>
              <p className='font-inter font-medium text-[17px] leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight'>
                партнеров
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center self-start w-full mt-auto overflow-hidden'>
          <div className='shrink-0 w-[12.5%]'>
            <PikSvg />
          </div>
          <div className='shrink-0 w-[13%] ml-[13.5%]'>
            <SamoletPlusSvg />
          </div>
          <div className='shrink-0 w-[12%] ml-[15%]'>
            <InGradSvg />
          </div>
          <div className='shrink-0 w-[12.5%] ml-[14%]'>
            <PikSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAboutUs;

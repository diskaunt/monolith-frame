import React from 'react';
import AboutUsRoadMap from '../componentsSvg/AboutUsRoadMap';
import AboutUsMid from '../componentsSvg/AboutUsMid';
import AboutUsAchvmts from './AboutUsAchvmts';

const MidleAboutUs = () => {
  return (
    <>
      <div className='w-full m-auto bg-white overflow-hidden hd:pt-[60px]'>
        <div className='relative w-full max-w-[375px] m-auto hd:w-[1558px] hd:max-w-[1558px]'>
          {/* Опыт */}
          <div className='flex flex-col gap-x-[72px] gap-y-[70px] hd:flex-row hd:flex-nowrap hd:max-w-[100vw]'>
            <div className='flex ml-[5%] h-fit hd:ml-[6.5%]'>
              <AboutUsAchvmts number={20}>
                <p className='max-w-[179px] hd:max-w-[359px] hd:ml-[-40px]'>
                  лет успешной работы в&nbsp;строительной отрасли
                </p>
              </AboutUsAchvmts>
            </div>
            <div className='self-end mr-[5%] hd:mt-[12px] hd:ml-0'>
              <div className='flex w-[235px] h-[222px] hd:w-[393px] overflow-hidden hd:h-[370px]'>
                <div className='shrink-0 w-[155px] hd:min-w-[258px]'>
                  <img
                    className='w-full object-cover hd:object-none'
                    src='/images/experience1.jpg'
                    alt='crane'
                  />
                </div>
                <div className='shrink-0 relative top-[0] left-[-30%] self-end w-[155px] hd:min-w-[258px] hd:h-[190px]'>
                  <img
                    className='w-full object-cover hd:object-none'
                    src='/images/experience2.jpg'
                    alt='workers'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-fit top-[25px] right-[6%] ml-auto font-bold leading-[130px] text-[55px] tracking-wide uppercase hd:top-[95px] hd:right-[23%] hd:text-[90px]'>
            <p>опыт</p>
          </div>
          {/* Скорость */}
          <div className='flex flex-col mt-[140px] pl-[5%] gap-y-[45px] gap-x-[300px] hd:max-w-[100vw] hd:pl-[7%] hd:flex-row hd:mt-[350px]'>
            <div className='relative w-[185px] hd:w-fit z-10'>
              <img
                className='w-full object-cover hd:object-none'
                src='/images/swing.jpg'
                alt='swing'
              />
            </div>
            <div className='flex ml-[105px] hd:mt-[85px] hd:ml-auto hd:mr-[148px]'>
              <AboutUsAchvmts number={5}>
                <p className='max-w-[195px] hd:max-w-[359px] hd:ml-[-20px]'>
                  крупнейших заводов построено по&nbsp;генподряду
                </p>
              </AboutUsAchvmts>
            </div>
          </div>
          <div className='relative top-[200px] left-[5%] w-fit font-bold leading-[130px] text-[55px] tracking-wide uppercase hd:top-[375px] hd:left-[7%] hd:text-[90px]'>
            <p>скорость</p>
          </div>
          {/* Качество */}
          <div className='flex flex-col-reverse mt-[230px] pr-[5%] pl-[5%] hd:flex-row hd:max-w-[100vw] hd:mt-[500px] hd:pl-[7%] hd:pr-[100px]'>
            <div className='flex flex-col gap-y-[55px] mt-[-37px] hd:mt-0 hd:gap-y-[120px]'>
              <div className='flex'>
                <div
                  className='font-bold text-orange-500 text-[160px] leading-[130px] hd:text-[300px] hd:leading-[240px]
							tracking-wide uppercase'
                >
                  <p className='hd:hidden block'>10 925</p>
                  <p className='hidden hd:block'>10&nbsp;925</p>
                </div>
                <div className='max-w-[195px] ml-[-20px] mb-[10px] self-end font-inter font-medium text-[17px] leading-[18px] tracking-tight hd:max-w-[359px] hd:ml-[-35px] hd:mb-[55px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight'>
                  <p>новоселов живут в&nbsp;построенных домах</p>
                </div>
              </div>
              <div className='flex'>
                <div
                  className='font-bold text-orange-500 text-[160px] leading-[130px] hd:text-[300px] hd:leading-[140px]
							tracking-wide uppercase'
                >
                  <p>24</p>
                </div>
                <div className='max-w-[169px] ml-[-15px] mb-[10px] self-end font-inter font-medium text-[17px] leading-[18px] tracking-tight hd:max-w-[359px] hd:ml-[-40px] hd:mb-0 hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight'>
                  <p>жилых дома построено раньше сроков</p>
                </div>
              </div>
            </div>
            <div className='relative w-[168px] ml-auto hd:w-[362px] hd:mt-[105px] hd:mr-[5%] z-10'>
              <img src='/images/playground.jpg' alt='playground' />
            </div>
          </div>
          <div className='relative w-fit ml-auto top-[225px] mr-[9%] font-bold leading-[130px] text-[55px] tracking-wide uppercase hd:top-[340px] hd:mr-[15.5%] hd:text-[90px]'>
            <p>качество</p>
          </div>
          {/* Надежность */}
          <div className='relative w-[137px] ml-[5%] mt-[-10px] hd:w-[296px] hd:mt-[50px] hd:ml-[34%] z-10'>
            <img src='/images/aboutUsBuild.jpg' alt='build' />
          </div>
          <div className='flex mt-[275px] mr-[5%] justify-end hd:mt-[135px] hd:mr-[10.5%]'>
            <AboutUsAchvmts number={4}>
              <p className='max-w-[169px] hd:max-w-[359px] hd:ml-[-27px]'>
                социальных проекта. Детские сады и&nbsp;школы
              </p>
            </AboutUsAchvmts>
          </div>
          <div className='relative top-[-255px] left-[55px] w-fit font-bold leading-[130px] text-[55px] tracking-wide uppercase hd:top-[-200px] hd:left-[9%] hd:text-[90px]'>
            <p>надежность</p>
          </div>
          <div className='absolute top-[485px] left-[-30px] w-full translate-x-[-50%] hd:top-[395px] hd:left-[52%] hd:max-w-[1558px]'>
            <AboutUsRoadMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default MidleAboutUs;

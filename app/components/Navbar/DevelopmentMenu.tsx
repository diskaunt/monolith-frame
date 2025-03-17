import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const DevelopmentMenu = ({ devOpened }: { devOpened: boolean }) => {
  const burgerDev = [
    'девелопмент',
    'ипотека',
    'коммерческая недвижимость',
    'управляющая компания',
    'ход строительства',
  ];

  return (
    <>
      {/* menu development */}
      <div
        className={classNames(
          devOpened ? 'visible z-10 ' : 'invisible -z-10 delay-300',
          'trasition-all'
        )}
      >
        <div
          className={classNames(
            devOpened
              ? 'translate-y-[0] opacity-100'
              : 'translate-y-[-100%] opacity-0',
            'uppercase bg-white text-black sm:w-[458px] hd:w-[394px] h-[410px] py-[31px] px-[23px] text-[34px] leading-[25px] tracking-normal space-y-[30px] transition-all duration-300'
          )}
        >
          {burgerDev.map((item, i) => {
            return (
              <div key={i} className='relative'>
                <Link
                  className={classNames(
                    'hoverMenuNav',
                    'hover:ml-[13px] hover:border-b-2 hover:border-black'
                  )}
                  href={'/'}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DevelopmentMenu;

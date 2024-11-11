import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const ConstructionMenu = ({ constOpened }: { constOpened: boolean }) => {
  const burgerCons = [
    'КМ Тимирязевский',
    'КМ Анкудиновский Парк',
    'КМ Ривер Парк',
    'КМ Residence Prime',
    'КМ Tower Plaza',
  ];

  return (
    <>
      <div
        className={classNames(
          constOpened ? 'visible z-10' : 'invisible -z-10 delay-300',
          'absolute top-[0] left-[100%] ml-[6px] overflow-hidden trasition-all'
        )}
      >
        <div
          className={classNames(
            constOpened
              ? 'translate-x-[0] translate-y-[0] opacity-100'
              : 'translate-x-[-100%] translate-y-[-100%] opacity-0',
            'flex flex-wrap justify-between h-min-[476px] ] bg-white text-black w-menuDev fhd:max-w-[1167px] hd:max-w-[675px] p-[10px] min-w-[360px] gap-[10px] transition-all duration-300'
          )}
        >
          <div className='grow flex flex-col justify-between'>
            <div className='font-inter font-medium p-[10px] text-[20px] leading-[22px] tracking-tighter space-y-[18px]'>
              {burgerCons.map((item, i) => {
                return (
                  <div key={i} className='relative'>
                    <Link
                      className={classNames(
                        'hoverMenuNav',
                        'hover:ml-[13px] hover:border-b hover:border-black'
                      )}
                      href={'/'}
                    >
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='flex justify-between text-[34px] leading-[25px] p-[10px] uppercase min-w-[300px]'>
              <div>
                <Link
                  className='hover:border-b-2 hover:border-black'
                  href={'/'}
                >
                  все проекты
                </Link>
              </div>
              <div>
                <Link
                  className='hover:border-b-2 hover:border-black'
                  href={'/'}
                >
                  квартиры
                </Link>
              </div>
            </div>
          </div>
          <div className='pt-[2px]'>
            <img
              className='object-cover w-full'
              src='./images/MenuResidencePrime.jpg'
              alt='КМ Residence Prime'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionMenu;

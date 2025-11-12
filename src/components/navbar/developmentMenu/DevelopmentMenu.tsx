import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const DevelopmentMenu = React.memo(({ devOpened }: { devOpened: boolean }) => {
  const menuItems = [
    'девелопмент',
    'ипотека',
    'коммерческая недвижимость',
    'управляющая компания',
    'ход строительства',
  ];

  return (
    <div
      className={classNames(
        'h-max w-menuDev-mobile overflow-hidden bg-white shadow-lg transition-all duration-300 hd:h-[410px] hd:w-menuDev-project',
        devOpened
          ? 'visible z-10 max-h-[410px] max-w-[392px] hd:translate-y-[66px]'
          : 'invisible -z-10 max-h-0 max-w-0',
      )}
    >
      <ul
        className={classNames(
          devOpened ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
          'mx-[15px] my-[22px] space-y-[20px] transition-all duration-300 md:mx-[23px] md:my-[31px] md:space-y-[30px]',
        )}
      >
        {menuItems.map((item, i) => (
          <li key={item} className="relative">
            <Link
              className={classNames(
                'hoverMenuNav',
                'text-[22px] uppercase leading-[25px] tracking-normal text-black hover:ml-[13px] hover:border-b-2 hover:border-black md:text-[34px]',
              )}
              href={'/'}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DevelopmentMenu;

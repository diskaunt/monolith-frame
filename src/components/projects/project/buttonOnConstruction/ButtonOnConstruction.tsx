'use client';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ButtonOnConstruction = ({ textColor = 'white' }: { textColor?: 'white' | 'black' }) => {
  const pathName = usePathname(),
    router = useRouter(),
    [scrollBarWidth, setScrollBarWidth] = useState(0);

  useEffect(() => {
    // Проверяем, есть ли вертикальный скролл на документе
    const hasVerticalScroll =
      document.documentElement.scrollHeight > document.documentElement.clientHeight;
    if (hasVerticalScroll) {
      // Вычисляем ширину скроллбара
      const sbWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.classList.add('scrollBarGutterStable');
      setScrollBarWidth(sbWidth);
    }
    // Функция очистки
    return () => {
      document.documentElement.classList.remove('scrollBarGutterStable');
    };
  }, []);

  return (
    pathName && (
      <div
        className={classNames(
          pathName !== '/projects' ? 'border-white' : 'border-black',
          'fixed right-0 top-0 z-30 flex h-100svh border-l',
          // Если scrollBarWidth равен 0 (скролла нет), отступ справа 15px, иначе 0
          // scrollBarWidth === 0 ? "right-[15px]" : "right-0",
        )}
      >
        <button
          onClick={() => router.push('/construction')}
          className={classNames(
            pathName !== '/projects' ? 'text-white' : 'text-black',
            'vertical-text-top',
            'flex items-center self-center py-[16px] pl-[10px] pr-[8px] uppercase sm:py-[20px] sm:pl-[14.06px] sm:pr-[12px]',
          )}
        >
          <p
            className={classNames(
              pathName !== '/projects' ? 'text-white' : 'text-black',
              'leadig-[16px] font-drucSyr text-[20px] uppercase tracking-normal sm:text-[30px] sm:leading-[25px]',
            )}
          >
            строительство
          </p>
        </button>
      </div>
    )
  );
};

export default ButtonOnConstruction;

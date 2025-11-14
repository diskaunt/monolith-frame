import Department from '@/components/department/Department';
import classNames from 'classnames';
import React, { useRef } from 'react';
import styles from './footerAboutUs.module.css';
import Marque from '@/components/marque/Marque';
import useObserver from '@/hooks/useObserver';
import addActiveClassname from '@/utils/addActiveStyles';
import HorizontalBar from '@/components/common/HorizontalBar';
import VerticalBar from '@/components/common/VerticalBar';
import { debouceFn } from '@/utils/debounceFn';
import Icon from '@/components/icon/Icon';
import Illustration from '@/components/illustration/Illustration';

type FooterAboutUsProps = {
  setScrollVerticalRefs: (node: HTMLDivElement) => void;
  setBlackThemeRefs: (node: HTMLDivElement) => void;
  setWhiteThemeRefs: (node: HTMLDivElement) => void;
  gotoSection: (index: number, direction: number) => void;
  isMobileClient: boolean;
};

const FooterAboutUs: React.FC<FooterAboutUsProps> = ({
  setScrollVerticalRefs,
  setBlackThemeRefs,
  setWhiteThemeRefs,
  gotoSection,
  isMobileClient,
}) => {
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const awardsRef = useRef<HTMLDivElement | null>(null);

  // Обсервер навешивает на элемент класс при его появлении для анимации появления
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    {
      root: null,
      rootMargin: '0px',
      threshold: [0.3],
    },
  );

  // функция для добавления анимации при наведении мыши
  const handleMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (hoverRef.current && hoverRef.current.contains(target))
      awardsRef.current && awardsRef.current.classList.add(styles.hover);
  };

  const debHandler = debouceFn(handleMouseOver, 1000);

  // функция возвращения к началу страницы
  const handleClick = () => gotoSection(0, -1);

  return (
    <>
      {/* Награды */}
      <div
        onMouseOver={debHandler}
        ref={isMobileClient && window.innerWidth < 768 ? setScrollVerticalRefs : null}
        className="h-100svh min-h-mobile w-full shrink-0 overflow-hidden bg-gray-100 px-[16px] pb-[40px] pt-[83px] md:w-2/4 md:pb-[6svh] hd:min-h-desktop hd:pt-[4.3svh]"
      >
        <div ref={awardsRef} className={classNames('relative h-full')}>
          {/* стрелка возвращения к началу страницы */}
          <button
            ref={setDivLoadRef}
            onClick={handleClick}
            className={classNames(
              styles.arrow,
              'absolute bottom-[39%] left-[-2%] hidden p-5 hd:block',
            )}
          >
            <Icon name="arrowUp" />
          </button>
          <div
            // ref={setBlackThemeRefs}
            className={classNames(
              'mx-auto flex h-full w-full max-w-[375px] flex-col items-center hd:max-w-[665px]',
            )}
          >
            <div ref={setDivLoadRef} className="invisible w-fit hd:mt-[8svh]">
              <Department styles={styles} fill="black">
                награды
              </Department>
            </div>
            <div
              ref={setDivLoadRef}
              className="invisible relative w-fit text-center hd:mt-[5.8svh]"
            >
              <div className="mb-2 h-[56px] overflow-hidden hd:h-[83px]">
                <div className={classNames(styles.loadTitleDescr, styles.hover)}>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    архитектурное
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    безупречный
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    лучшее продвижение
                  </p>
                </div>
              </div>
              <div className="h-[56px] overflow-hidden hd:h-[83px]">
                <div className={classNames(styles.loadTitleDescr, styles.hover)}>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    решение
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    контракт
                  </p>
                  <p className="font-drucSyr text-[55px] font-bold uppercase leading-[56px] tracking-wide hd:text-[90px] hd:leading-[83px]">
                    проекта
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full grow items-center justify-center">
              <div
                ref={hoverRef}
                className={classNames(
                  'invisible mb-[1svh] mt-[36px] h-[130px] hd:mt-[-30px] hd:h-[265px]',
                )}
              >
                <div ref={setDivLoadRef} className="relative flex h-full w-full overflow-hidden">
                  <div
                    className={classNames(
                      styles.loadTitleNumDescr,
                      styles.hover,
                      'ml-[40px] h-fit hd:ml-[60px]',
                    )}
                  >
                    <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[265px]">
                      2
                    </p>
                    <p className="text-[120px] font-bold leading-[130px] tracking-wide text-orange-500 hd:text-[300px] hd:leading-[265px]">
                      1
                    </p>
                  </div>
                  <div
                    className={classNames(
                      styles.loadTitle,
                      'mb-[28px] ml-[-10px] self-end hd:mb-[55px] hd:ml-[-20px]',
                    )}
                  >
                    <p className="font-midium hd:tracking-very-tight font-inter text-[17px] leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px]">
                      место
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={setDivLoadRef} className="invisible mt-auto flex w-full">
              <div className="w-full">
                <HorizontalBar styles={styles.loadHorizontalBar} />
                <div className="flex h-[77px] justify-between">
                  <div className={classNames(styles.loadTableCell, 'pt-[3px] hd:pt-[8px]')}>
                    <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                      комплекс
                    </p>
                  </div>
                  <div className="mt-auto h-[34px] overflow-hidden hd:pb-[12px] hd:pr-[5px]">
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        styles.hover,
                        'flex flex-col gap-[12px]',
                      )}
                    >
                      <p className="ml-auto w-fit font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        КМ Прайм
                      </p>
                      <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        КМ Анкудиновский Парк
                      </p>
                    </div>
                  </div>
                </div>
                <HorizontalBar styles={styles.loadHorizontalBar} />
                <div className="flex h-[70px] hd:h-[77px]">
                  <div className="flex w-[62%] justify-between hd:w-[59%]">
                    <div className={classNames(styles.loadTableCell, 'pt-[3px] hd:pt-[8px]')}>
                      <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                        конкурс
                      </p>
                    </div>
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        'content-end pb-[5px] pr-[12px] hd:pb-[10px] hd:pr-[14px]',
                      )}
                    >
                      <p className="text-end font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                        Добросовестный застройщик
                      </p>
                    </div>
                  </div>
                  <VerticalBar styles={styles.loadVertikalBar} />
                  <div className="flex grow justify-between">
                    <div
                      className={classNames(
                        styles.loadTableCell,
                        'pl-[12px] pt-[3px] hd:pl-[18px] hd:pt-[8px]',
                      )}
                    >
                      <p className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter">
                        год
                      </p>
                    </div>
                    <div className="mt-auto h-[27px] content-end overflow-hidden pb-[5px] pr-[2px] hd:h-[32px] hd:pb-[10px]">
                      <div
                        className={classNames(
                          styles.loadTableCell,
                          styles.hover,
                          'flex flex-col gap-[12px]',
                        )}
                      >
                        <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                          2014г
                        </p>
                        <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px]">
                          2017г
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <HorizontalBar styles={styles.loadHorizontalBar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Партнеры */}
      <div
        ref={isMobileClient && window.innerWidth < 768 ? setScrollVerticalRefs : null}
        className="h-100svh min-h-mobile w-full shrink-0 overflow-hidden bg-blue-500 pb-[40px] pt-[83px] text-white md:w-2/4 md:pb-[5.5svh] hd:min-h-desktop hd:pt-[4.3svh]"
      >
        <div
          ref={isMobileClient && window.innerWidth < 768 ? setWhiteThemeRefs : null}
          className="flex h-full w-full flex-col"
        >
          <div className="mx-auto flex w-full max-w-[375px] grow flex-col items-center hd:max-w-[665px]">
            <div ref={setDivLoadRef} className="invisible w-fit hd:mt-[8svh]">
              <Department styles={styles} fill="white">
                партнеры
              </Department>
            </div>
            <div ref={setDivLoadRef} className="invisible w-fit text-center hd:mt-[5.8svh]">
              <div className="overflow-hidden">
                <div className={classNames(styles.loadTitleDescr)}>
                  <p className="mb-2 font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                    мы&nbsp;ценим наших
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className={classNames(styles.loadTitleDescr)}>
                  <p className="font-drucSyr text-[42px] font-bold uppercase leading-[46px] tracking-wide hd:text-[70px] hd:leading-[70px]">
                    партнеров
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full grow items-center justify-center">
              <div
                ref={setDivLoadRef}
                className="invisible mt-[58px] flex justify-center overflow-hidden hd:mt-[-120px]"
              >
                <div className="ml-[55px] hd:ml-[80px]">
                  <p
                    className={classNames(
                      styles.shadow,
                      styles.loadTitleDescr,
                      'text-[119px] font-bold leading-[130px] tracking-wide text-blue-500 hd:text-[300px] hd:leading-[265px]',
                    )}
                  >
                    50+
                  </p>
                </div>
                <div
                  className={classNames(
                    styles.loadTitle,
                    'mb-[30px] ml-[-25px] self-end hd:mb-[55px] hd:ml-[-55px]',
                  )}
                >
                  <p className="font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
                    партнеров
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* бегущая строка */}
          <div className="mt-auto w-full self-start px-[15px] hd:px-[30px]">
            <Marque styles={styles}>
              <div className="flex w-[33%] shrink-0 items-center pt-[5px]">
                <Illustration name="pik" />
              </div>
              <div className="flex w-[33%] shrink-0 items-center pt-[7px]">
                <Illustration name="samoletPlus" />
              </div>
              <div className="flex w-[33%] shrink-0 items-center">
                <Illustration name="inGrad" />
              </div>
            </Marque>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAboutUs;

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import filterDub from '@/utils/filterDub';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const useGsapObserver = () => {
  const refArr = useRef<(HTMLElement | null)[]>([]),
    currentIndex = useRef<number>(-1),
    animating = useRef<boolean>(false);

  const setRef = useCallback((el: HTMLElement | null) => {
    if (!el || el.offsetHeight <= 0) return; // Если элемента нет или он скрыт, просто выходим

    const parentWidth = el.parentElement?.offsetWidth ?? 0;

    if (el.offsetWidth !== Math.ceil(parentWidth / 2)) {
      refArr.current = filterDub([...refArr.current, el]);
    }
  }, []);

  const gotoSection = (index: number, direction: number) => {
    // если индекс меньше 0, или больше длинны массива, то возвращаем его в конец или начало
    const clamp = gsap.utils.clamp(0, refArr.current.length - 1);
    const correctedIndex = clamp(index);
    // проверяем больше ли текущий индеекс чем 0
    animating.current = true;
    if (currentIndex.current >= 0) {
      refArr.current[correctedIndex] &&
        refArr.current[correctedIndex].scrollIntoView({
          behavior: 'smooth',
          block: direction === 1 ? 'start' : 'start',
          inline: 'nearest',
        });
      console.log(correctedIndex);
    }
    // изменяем наш индекс на текущий
    currentIndex.current = correctedIndex;
  };

  useGSAP(() => {
    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () =>
        !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp: () =>
        !animating.current && gotoSection(currentIndex.current + 1, 1),
      onRight: () =>
        !animating.current && gotoSection(currentIndex.current - 1, -1),
      onLeft: () =>
        !animating.current && gotoSection(currentIndex.current + 1, 1),
      // добавленно для мобильной версии, чтобы за раз не прокручивалось больше 1 элемента
      onStop: () => {
        animating.current = false;
      },
      tolerance: 50,
      preventDefault: true,
    });
  });

  useEffect(() => {
    gotoSection(0, 1);
  }, []);

  return [gotoSection, setRef] as const;
};

export default useGsapObserver;

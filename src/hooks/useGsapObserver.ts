import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import filterDub from '@/utils/filterDub';
import deviceDetector from '@/utils/deviceDetector';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const useGsapObserver = () => {
  const refArr = useRef<(HTMLElement | null)[]>([]),
    currentIndex = useRef<number>(-1),
    animating = useRef<boolean>(false),
    isMobileClient = useRef<boolean>(false);

  const setRef = useCallback((el: HTMLElement | null) => {
    if (el && el.offsetHeight === 0) return;
    refArr.current = filterDub([...refArr.current, el]);
    // console.log(refArr.current);
  }, []);

  const gotoSection = (index: number, direction: number) => {
    // ограничиваем индекс
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
      // console.log(correctedIndex);
    }
    // изменяем наш индекс на текущий
    currentIndex.current = correctedIndex;
  };

  useGSAP(() => {
    Observer.create({
      type: isMobileClient.current ? 'wheel,touch,pointer' : 'wheel',
      wheelSpeed: -1,
      onDown: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onUp: () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      onRight: () => !animating.current && gotoSection(currentIndex.current - 1, -1),
      onLeft: () => !animating.current && gotoSection(currentIndex.current + 1, 1),
      // добавленно для мобильной версии, чтобы за раз не прокручивалось больше 1 элемента
      onStop: () => {
        animating.current = false;
      },
      tolerance: 50,
      preventDefault: true,
    });
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gotoSection(0, 1);
    isMobileClient.current = deviceDetector();
  }, []);

  return [gotoSection, setRef] as const;
};

export default useGsapObserver;

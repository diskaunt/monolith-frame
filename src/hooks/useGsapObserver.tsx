import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const useGsapObserver = () => {
  const refArr = useRef<(HTMLElement | null)[]>([]),
    currentIndex = useRef<number>(-1),
    animating = useRef<boolean>(false);

  // Очищаем массив дом-элементов от дубликатов
  const setRef = useCallback((el: HTMLElement | null) => {
    // если элемент существует и его высота больше 0, и ширина элемента не равна ширине родителя, то добавляем его в массив
    if (
      el &&
      el.offsetHeight > 0 &&
      el.parentElement &&
      el.offsetWidth !== Math.ceil(el.parentElement.offsetWidth / 2)
    ) {
      refArr.current.push(el);
    }
    let arr = new Set(refArr.current);
    refArr.current = Array.from(arr);
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
      console.log(refArr.current[correctedIndex]);
      console.log(refArr.current);
    }
    // изменяем наш индекс на текущий
    currentIndex.current = correctedIndex;
    animating.current = false;
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
      tolerance: 50,
      preventDefault: true,
    });
  });

  useEffect(() => {
    gotoSection(0, 1);
  }, [currentIndex.current]);

  return [refArr, setRef] as const;
};

export default useGsapObserver;

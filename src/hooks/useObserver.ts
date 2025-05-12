import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const useObserver = (
  fn: (atr: any) => void,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: [0.25],
  }
) => {
  const refArr = useRef<(HTMLElement | null)[]>([]),
    observer = useRef<IntersectionObserver | null>(null);
  // currentIndex = useRef<number>(-1);

  // Очищаем массив дом-элементов от дубликатов
  const setRef = useCallback(
    (el: HTMLElement | null) => {
      refArr.current.push(el);
      let arr = new Set(refArr.current);
      refArr.current = Array.from(arr);
    },
    [refArr.current]
  );

  useEffect(() => {
    const refArrElems = refArr.current;
    // Очищаем предыдущий наблюдатель
    if (observer.current) {
      refArrElems.forEach((el) => {
        if (el) observer.current?.unobserve(el);
      });
      observer.current.disconnect();
    }
    // Создаем новый наблюдатель
    observer.current = new IntersectionObserver(fn, options);
    // Подписываемся на наблюдение за элементами
    refArrElems.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    // Чистим наблюдатель при размонтировании
    return () => {
      if (observer.current) {
        refArrElems.forEach((el) => {
          if (el) observer.current?.unobserve(el);
        });
        observer.current.disconnect();
      }
    };
  }, [fn, refArr, options]);

  return [refArr, setRef] as const;
};

export default useObserver;

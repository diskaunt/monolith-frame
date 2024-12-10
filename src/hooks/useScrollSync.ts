import { useEffect, useRef } from 'react';

const useScrollSync = (
  options: IntersectionObserverInit,
  // scrollEl: HTMLElement | null,
  // mainEl: HTMLElement | null
) => {
  const scrollRef = useRef<HTMLElement | null>(null);

  const throttleFn = (fn: (args: Event) => void, ms: number) => {
    let lastFunc: any;
    let lastRun: number;
    return function (...args: [Event]) {
      if (!lastRun) {
        fn(...args);
        lastRun = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRun >= ms) {
            fn(...args);
            lastRun = Date.now();
          }
        }, ms - (Date.now() - lastRun));
      }
    };
  };

  const onWheel = (event: Event) => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      const scrollLeft = window.scrollY;
      event.preventDefault();
      scrollEl.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
      console.log('scrollY:', window.scrollY);
      console.log('scrollX:', scrollEl.scrollLeft);
    }
  };

  const ThrottleScroll = throttleFn(onWheel, 200);

  const syncScrollEl = (entryes: IntersectionObserverEntry[]) => {
    entryes.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', ThrottleScroll);
      } else {
        window.removeEventListener('scroll', ThrottleScroll);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(syncScrollEl, options);
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      observer.observe(scrollEl);
    }
    return () => {
      if (scrollEl) {
        observer.unobserve(scrollEl);
        scrollEl.scrollTo({
          left: scrollEl.clientWidth,
          behavior: 'smooth',
        });
        window.scrollTo({
          top: scrollEl.clientWidth,
          behavior: 'smooth',
        });
      }
    };
  }, [options, scrollRef]);

  return scrollRef;
};
export default useScrollSync;

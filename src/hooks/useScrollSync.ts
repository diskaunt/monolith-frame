import { throttleFn } from '@/utils/throttleFn';
import { useEffect, useRef, useState } from 'react';

const useScrollSync = (options: IntersectionObserverInit) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const onWheel = (event: Event) => {
    event.preventDefault();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      let top = window.scrollY;

			scrollEl.scrollTo({
				left: top,
				behavior: "smooth",
			})
    }
  };

  const ThrottleScroll = throttleFn(onWheel, 300);

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
      }
    };
  }, [options, scrollRef]);

  return scrollRef;
};
export default useScrollSync;

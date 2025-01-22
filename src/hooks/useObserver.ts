import { useCallback, useEffect, useRef, useState } from 'react';

const useObserver = (
  fn: (atr: any) => void,
  options: IntersectionObserverInit
) => {
  const refArr = useRef<(HTMLElement | null)[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
	const [isActive, setActive] = useState<boolean>(false);

  const setRef = useCallback((el: HTMLElement | null) => {
    refArr.current.push(el);
    let arr = new Set(refArr.current);
    refArr.current = Array.from(arr);
  }, []);

  useEffect(() => {
		const observerElem = refArr.current;
    // Очищаем предыдущий наблюдатель
    if (observer.current) {
      observerElem.forEach((el) => {
        if (el) observer.current?.unobserve(el);
      });
      observer.current.disconnect();
    }
		// Создаем новый наблюдатель
		observer.current = new IntersectionObserver(fn, options);
		// Подписываемся на наблюдение за элементами
    observerElem.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    }
	);
	// Чистим наблюдатель при размонтировании
	return () => { if (observer.current) { refArr.current.forEach((el) => { if (el) observer.current?.unobserve(el); }); observer.current.disconnect(); }
}
  }, [fn, refArr, options]);

  return [refArr, setRef] as const;
};

export default useObserver;

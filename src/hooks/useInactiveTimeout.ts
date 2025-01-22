import { debouceFn } from '@/utils/debounceFn';
import { useEffect, useRef } from 'react';

const useInactiveTimeout = (fn: () => void, ms: number = 4000) => {
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    const handleActivity =  debouceFn(fn, ms);
    hasRunRef.current = true;

    const events = ['mousemove', 'keydown', 'scroll', 'click'];

    events.forEach((event) => {
      document.addEventListener(event, handleActivity);
    });

    // Устанавливаем таймер при первой загрузке страницы
    handleActivity();

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [fn, ms]);
};

export default useInactiveTimeout;

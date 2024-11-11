import { useEffect, useRef } from 'react';

const useInactiveTimeout = (fn: () => void, ms: number = 4000) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;

    const handleActivity = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        if (!hasRunRef.current) {
          fn();
          hasRunRef.current = true;
        }
      }, ms);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];

    events.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    // Устанавливаем таймер при первой загрузке страницы
    handleActivity();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [fn, ms]);
};

export default useInactiveTimeout;

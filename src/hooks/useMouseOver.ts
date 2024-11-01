import { RefObject, useEffect } from 'react';

const useMouseOver = (
  resRef: RefObject<HTMLElement>,
  setIsOver: (value: boolean) => void,
  ms: number
) => {
  const handleOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (resRef.current && !resRef.current.contains(target)) {
      setIsOver(false);
    } else {
      setIsOver(true);
    }
  };

  const debaunce = (fn: (e: MouseEvent) => void, ms: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: [MouseEvent]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), ms);
    };
  };

  const debHandleOver = debaunce(handleOver, ms);

  useEffect(() => {
    document.addEventListener('mouseover', debHandleOver);
    return () => {
      document.removeEventListener('mouseover', debHandleOver);
    };
  }, [resRef, setIsOver, ms]);
};

export default useMouseOver;

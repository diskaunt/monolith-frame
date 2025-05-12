import { debouceFn } from '@/utils/debounceFn';
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

  const debHandleOver = debouceFn(handleOver, ms);

  useEffect(() => {
    document.addEventListener('mouseover', debHandleOver);
    return () => {
      document.removeEventListener('mouseover', debHandleOver);
    };
  }, [resRef, setIsOver, ms]);
};

export default useMouseOver;

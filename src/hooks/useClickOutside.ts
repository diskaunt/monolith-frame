import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = (
  menu: RefObject<HTMLElement>[],
  setDevOpened: (value: boolean) => void,
  setConstOpened: (value: boolean) => void
) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
			// const current = menu.current as HTMLDivElement
      // if (current && !current.contains(target))
			if (menu.every((ref) => ref.current && !ref.current.contains(target)))
			{
        setDevOpened(false);
        setConstOpened(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [menu, setDevOpened, setConstOpened]);
};

export default useClickOutside;

import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = (
  menu: RefObject<HTMLElement>[],
  fn: (value: boolean) => void,
) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
			// const current = menu.current as HTMLDivElement
      // if (current && !current.contains(target))
			if (menu.every((ref) => ref.current && !ref.current.contains(target)))
			{
        fn(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [menu, fn]);
};

export default useClickOutside;

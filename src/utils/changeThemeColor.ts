import { revalidatePath } from 'next/cache';
import changeTheme from './changeTheme';

const changeThemeColor = (
  entries: IntersectionObserverEntry[],
  divRef: React.RefObject<HTMLDivElement>,
  addClass: string,
  removeClass?: string,
  // theme: 'dark' | 'light'
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.clientWidth < window.innerWidth / 2) return;
      removeClass && divRef.current?.classList.remove(removeClass);
      divRef.current?.classList.add(addClass);
      // changeTheme(theme);
    }
  });
};
export default changeThemeColor;

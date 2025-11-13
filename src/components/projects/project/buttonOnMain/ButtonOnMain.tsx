'use client';
import Icon from '@/components/icon/Icon';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

const ButtonOnMain = ({ textColor = 'white' }: { textColor?: 'white' | 'black' }) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    pathName && (
      <div
        className={classNames(
          pathName !== '/projects' ? 'border-white' : 'border-black',
          'fixed left-0 top-0 z-30 flex h-100svh border-r',
        )}
      >
        <button
          onClick={() => router.replace('/')}
          className={classNames(
            pathName !== '/projects' ? 'text-white' : 'text-black',
            'vertical-text-bottom',
            'flex items-center self-center py-[16px] pl-[10px] pr-[8px] uppercase sm:py-[20px] sm:pl-[14.06px] sm:pr-[12px]',
          )}
        >
          <p
            className={classNames(
              pathName !== '/projects' ? 'text-white' : 'text-black',
              'leadig-[16px] font-drucSyr text-[20px] uppercase tracking-normal sm:text-[30px] sm:leading-[25px]',
            )}
          >
            на главную
          </p>
          <Icon
            name="cross"
            className={classNames(
              'h-[24px] w-[24px] sm:h-[34px] sm:w-[34px]',
              pathName !== '/projects' ? 'stroke-white' : 'stroke-black',
            )}
          />
        </button>
      </div>
    )
  );
};

export default ButtonOnMain;

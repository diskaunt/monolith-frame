import classNames from 'classnames';
import React from 'react';

function Marque({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: { [key: string]: string };
}) {
  return (
    <div
      className={classNames(
        styles.marque,
        'px-[15px] flex hd:px-[30px] flex-nowrap w-[200%]'
      )}
    >
      <div className={classNames('flex flex-nowrap w-[50%] overflow-hidden')}>
        {[...Array(2)].map((_, i) => children)}
      </div>
      <div
        aria-hidden='true'
        className={classNames('flex flex-nowrap w-[50%] overflow-hidden')}
      >
        {[...Array(2)].map((_, i) => children)}
      </div>
    </div>
  );
}

export default Marque;

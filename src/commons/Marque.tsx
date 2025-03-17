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
    <div className={classNames(styles.marque, ' flex flex-nowrap w-[240%]')}>
      <div className={classNames('flex flex-nowrap shrink-0 w-[33%] overflow-hidden')}>
        {/* {[...Array(3)].map((_, i) => children)} */}
        {children}
      </div>
      <div
        aria-hidden='true'
        className={classNames('flex flex-nowrap w-[33%] overflow-hidden')}
      >
        {/* {[...Array(3)].map((_, i) => children)} */}
        {children}
      </div>
      <div
        aria-hidden='true'
        className={classNames('flex flex-nowrap w-[33%] overflow-hidden')}
      >
        {/* {[...Array(3)].map((_, i) => children)} */}
        {children}
      </div>
    </div>
  );
}

export default Marque;

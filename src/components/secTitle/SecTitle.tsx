import classNames from 'classnames';
import React from 'react';
import Icon from '../icon/Icon';

type SecTitleProps = {
  titleLoad?: string;
  arrowLoad?: string;
  children: React.ReactNode;
  color: 'white' | 'black';
};

const SecTitle = ({ titleLoad, arrowLoad, children, color }: SecTitleProps) => {
  return (
    <div className="flex space-x-[10px] whitespace-nowrap text-[70px] uppercase leading-[60px] tracking-wide hd:space-x-[20px] hd:text-[140px] hd:leading-[140px]">
      <div className={classNames('inline-block h-fit overflow-hidden')}>
        <h1 className={classNames(titleLoad, color === 'white' ? 'text-white' : 'text-black')}>
          {children}
        </h1>
      </div>
      <div
        className={classNames(
          arrowLoad,
          'mt-[8px] flex h-[30px] w-[60px] stroke-black hd:mt-[30px] hd:h-[40px] hd:w-[80px]',
          'stroke-' + color,
        )}
      >
        <Icon name="arrowComplex" />
      </div>
    </div>
  );
};

export default SecTitle;

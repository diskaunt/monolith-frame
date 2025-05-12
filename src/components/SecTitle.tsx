import classNames from 'classnames';
import React from 'react';

const SecTitle = ({
  titleLoad,
  arrowLoad,
  children,
  color,
}: {
  titleLoad?: string;
  arrowLoad?: string;
  children: React.ReactNode;
  color: 'white' | 'black';
}) => {
  return (
    <div className='flex space-x-[15px] whitespace-nowrap text-[140px] uppercase leading-[140px] tracking-wide'>
      <div className={classNames('inline-block h-fit overflow-hidden')}>
        <h1
          className={classNames(
            titleLoad,
            color === 'white' ? 'text-white' : 'text-black'
          )}
        >
          {children}
        </h1>
      </div>
      <div
        className={classNames(
          arrowLoad,
          'flex mt-[30px] h-[40px] w-[80px] stroke-black',
          color === 'white' ? 'stroke-white' : 'stroke-black'
        )}
      >
        <svg
          // width={84}
          // height={42}
          viewBox='0 0 84 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group 40'>
            <path
              id='Vector 26'
              d='M21.6284 1.00651L1.99902 20.8593L21.6284 41L62.3696 40.9934L81.999 20.8528L62.3696 1L21.6284 1.00651Z'
              strokeWidth={1.5}
            />
            <path
              id='Vector 16'
              d='M41.1928 13.1045L50.6443 21.6896M50.6443 21.6896L41.1928 30.0701M50.6443 21.6896H33.6787'
              strokeWidth={1.5}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SecTitle;

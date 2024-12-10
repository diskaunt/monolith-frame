import React from 'react';

const Department = ({ fill, depName }: { fill: string; depName: string }) => {
  return (
    <>
      <div className='flex items-center space-x-[6px]'>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect id='sqr' width='10' height='10' fill={fill} />
        </svg>
        <p className='font-halvarBreit text-[12px] leading-[25px] tracking-tight uppercase hd:text-[14px] hd:text-[14px]'>
          {depName}
        </p>
      </div>
    </>
  );
};

export default Department;

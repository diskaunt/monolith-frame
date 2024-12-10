import React, { ReactNode } from 'react';

const AboutUsAchvmts = ({
  children,
  number,
}: {
  children: ReactNode;
  number: number;
}) => {
  return (
    <>
      <div
        className='font-bold text-orange-500
							tracking-wide uppercase text-[160px] leading-[125px] hd:text-[500px] hd:leading-[300px]'
      >
        <p>{number}</p>
      </div>
      <div className='ml-[-20px] mb-[5px] self-end font-inter font-medium text-[17px] leading-[18px] tracking-tighter hd:max-w-[359px] hd:mb-0 hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight'>
        {children}
      </div>
    </>
  );
};

export default AboutUsAchvmts;

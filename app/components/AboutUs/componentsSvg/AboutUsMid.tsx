import React, { SVGProps } from 'react';

const AboutUsMid = (props: SVGProps<SVGSVGElement>) => (
  <>
    <div className='hidden w-full hd:block'>
      <svg
        // width={1920}
        // height={2028}
        viewBox='0 0 1920 2028'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M1504 1991L1744 1886.5L2331.5 1622L2421 50.0007L1446.5 65.5001L895.5 50.0007L564 -5.49999L-39.0008 65.5L-628.564 929.117L-39.0007 1965.5L197.998 2027.5L798.499 1965.5L1504 1991Z'
          fill='white'
        />
      </svg>
    </div>
    <div className='block w-full hd:hidden'>
      <svg
        // width={375}
        // height={820}
        viewBox='0 0 375 820'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M502.803 804.519L599.468 762.43L836.097 655.896L872.145 22.7371L479.643 28.9798L257.715 22.7371L124.196 0.382919L-118.676 28.9798L-356.136 376.821L-118.676 794.249L-23.2192 819.222L218.646 794.249L502.803 804.519Z'
          fill='white'
        />
      </svg>
    </div>
  </>
);

export default AboutUsMid;

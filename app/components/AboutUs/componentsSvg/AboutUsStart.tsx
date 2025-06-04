import React, { SVGProps } from 'react';

const AboutUsStart = (props: SVGProps<SVGSVGElement>) => (
  <>
    <div className='hidden w-full hd:block'>
      <svg
        // width={1920}
        // height={203}
        viewBox='0 0 1920 503'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M380.5 -5.1462e-06L75.6281 138.088L-172 288.001L-536.236 1373.51L1317.5 1458L2324.67 425.372L1811.5 41L1486.5 20.5L937.501 138.088L380.5 -5.1462e-06Z'
          fill='white'
        />
      </svg>
    </div>
    <div className='block w-full hd:hidden'>
      <svg
        // width={375}
        // height={783}
        viewBox='0 0 375 783'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M-74.4558 80.4729L-206.559 165.822L-311.236 252.692L-405.136 782.486L462.274 693.024L858.655 143.158L593.463 0.153766L440.992 13.1955L194.005 105.97L-74.4558 80.4729Z'
          fill='white'
        />
      </svg>
    </div>
  </>
);

export default AboutUsStart;

import * as React from 'react';
import { SVGProps } from 'react';
const MenuSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox='0 0 30 30'
    // fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='menuSvg'>
      <rect
        id='Rectangle-22'
        x={8}
        y={13}
        width={20.5}
        height={12.5}
				fill='none'
        // stroke='white'
        strokeWidth={1.5}
      >
        <animate
          attributeName='y'
          values='13; 7.5; 7; 7.5; 13; 15.5; 16; 15.5; 13;'
          dur='2s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-1' x={22} y={6} width={4} height={4}  className=''>
        <animate
          attributeName='y'
          values='6; 8.5; 9; 8.5; 6; 1.5; 1; 1.5; 6;'
          dur='2s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-2' x={6} y={6} width={5} height={5} >
        <animate
          attributeName='x'
          values='6; 1.5; 1; 1.5; 6; 8.5; 9; 8.5; 6;'
          dur='2s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-3' x={1} y={6} width={5} height={10} >
        <animate
          attributeName='y'
          values='6; 12.5; 13; 12.5; 6; 1.5; 1; 1.5; 6;'
          dur='2s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
    </g>
  </svg>
);
export default MenuSvg;

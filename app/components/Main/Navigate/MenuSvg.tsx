import * as React from 'react';
import { SVGProps } from 'react';
const MenuSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='menuSvg'>
      <rect
        id='Rectangle 22'
        x={8}
        y={13}
        width={20.5}
        height={12.5}
        stroke='white'
        strokeWidth={1.5}
      >
        <animate
          attributeName='y'
          values='13; 7; 13; 16; 13; '
          dur='1.5s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-1' x={22} y={6} width={4} height={4} fill='white'>
        <animate
          attributeName='y'
          values='6; 9; 6; 1; 6;'
          dur='1.5s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-2' x={6} y={6} width={5} height={5} fill='white'>
        <animate
          attributeName='x'
          values='6; 1; 6; 9; 6;'
          dur='1.5s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
      <rect id='angle-3' x={1} y={6} width={5} height={10} fill='white'>
        <animate
          attributeName='y'
          values='6; 13; 6; 1; 6;'
          dur='1.5s'
          begin='0'
          repeatCount='indefinite'
        />
      </rect>
    </g>
  </svg>
);
export default MenuSvg;

import * as React from 'react';
import { SVGProps } from 'react';
const NavSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={18}
    viewBox='0 0 20 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='Group 25'>
      <g id='Group 29'>
        <g id='Group 45'>
          <path id='Vector 21' d='M0 5L20 5' stroke='white' strokeWidth={1.5} />
          <path id='Vector 23' d='M0 1L20 1' stroke='white' strokeWidth={1.5} />
          <path
            id='Vector 22'
            d='M0 13L20 13'
            stroke='white'
            strokeWidth={10}
          />
        </g>
      </g>
    </g>
  </svg>
);
export default NavSvg;

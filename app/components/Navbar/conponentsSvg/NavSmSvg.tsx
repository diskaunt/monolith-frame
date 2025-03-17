import React, { SVGProps } from 'react';

const NavSmSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={15}
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 4.63647L14 4.63647'  />
    <path d='M0 1L14 1'  />
    <path d='M0 11L14 11'  strokeWidth={7} />
  </svg>
);

export default NavSmSvg;

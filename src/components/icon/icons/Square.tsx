import { SVGProps } from 'react';

const Square = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" {...props}>
    <path d="M0 0h10v10H0z" />
  </svg>
);

export default Square;

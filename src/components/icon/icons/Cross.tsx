import React, { SVGProps } from 'react';

const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 34 34"
	// width={34}
	// height={34}
	fill="none" {...props}>
    <path d="m8.485 25.456 16.97-16.97M25.456 25.456 8.485 8.486" />
  </svg>
);

export default Cross;

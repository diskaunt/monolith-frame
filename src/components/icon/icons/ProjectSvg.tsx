import React, { SVGProps } from 'react';

const ProjectSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={19}
    viewBox="0 0 33 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 1L31.4515 9.58506L22 17.9656" stroke="white" strokeWidth={1.5} />
    <path d="M11.4517 1L2.00021 9.58506L11.4517 17.9656" stroke="white" strokeWidth={1.5} />
  </svg>
);
export default ProjectSvg;

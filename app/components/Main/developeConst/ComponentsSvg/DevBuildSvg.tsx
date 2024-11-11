import React, { SVGProps } from 'react';

const DevBuildSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      // width={332}
      // height={398}
      viewBox='0 0 332 398'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='construction'>
        <line
          id='Line1'
          x1={50}
          y1={398}
          x2={50}
          y2={103}
          // stroke='white'
          // strokeWidth={6}
        />
        <line
          id='Line2'
          x1={136}
          y1={396.034}
          x2={133}
          y2={130.034}
          // stroke='white'
          // strokeWidth={6}
        />
        <line
          id='Line3'
          x1={230}
          y1={396.009}
          x2={231}
          y2={1.99237}
          // stroke='white'
          // strokeWidth={6}
        />
        <path
          id='Vector'
          d='M3.99958 398V162L50.6133 103.182L132.968 133.161L231.591 2.21191L328 27.08V2396'
          // stroke='white'
          // strokeWidth={6}
        />
      </g>
    </svg>
  );
};

export default DevBuildSvg;

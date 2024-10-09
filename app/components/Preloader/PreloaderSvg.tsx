import React, { Fragment, SVGProps } from 'react';
import { preloaderSvgData } from './preloaderSvgData';

const PreloaderSvg = ({
  className,
  preserveAspectRatio,
}: {
  className: string;
  preserveAspectRatio: string;
}) => (
  <svg
    width='100%'
    height='100%'
    viewBox='0 0 1920 1000'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    preserveAspectRatio={preserveAspectRatio}
  >
    <g id='vektor'>
      {preloaderSvgData.map((data, i) => {
        let maskId = `mask-${i + 1}`;
        let vektorId = `vektor-${i + 1}`;
        let clipPathUrl = `url(#${maskId})`;
        let begin = +data.animate.begin.replace(/[a-zA-Z]+/g, '') + 0.7;
        if (i !== 1) {
          begin = begin - 0.3;
        }
        return (
          <Fragment key={data.id}>
            <defs>
              <clipPath id={maskId}>
                <path d={data.d} />
              </clipPath>
            </defs>
            <rect
              id={vektorId}
              width={+data.width + 2}
              height={+data.height + 2}
              x={+data.x - 1}
              y={+data.y - 1}
              fill={data.fill}
              clipPath={clipPathUrl}
            >
              <animate
                attributeName={data.animate.attribute || 'width'}
                from={data.animate.from}
                to={data.animate.to}
                dur={data.animate.dur}
                begin={begin}
                fill={data.animate.fill}
              />
            </rect>
            <path
              id={vektorId}
              d={data.d}
              stroke='white'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </Fragment>
        );
      })}
    </g>
  </svg>
);

export default PreloaderSvg;

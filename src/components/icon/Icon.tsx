import React, { SVGProps } from 'react';
import ArrowComplex from './icons/ArrowComplex';
import ArrowNavSvg from './icons/ArrowNavSvg';
import ArrowUpSvg from './icons/ArrowUpSvg';
import ConstLineSvg from './icons/ConstLineSvg';
import DevLineSvg from './icons/DevLineSvg';
import MenuSvg from './icons/MenuSvg';
import NavSmSvg from './icons/NavSmSvg';
import NavSvg from './icons/NavSvg';
import ArrowRight from './icons/ArrowRight';


const icons = {
  arrowComplex: ArrowComplex,
  arrowNav: ArrowNavSvg,
  arrowUp: ArrowUpSvg,
  constLine: ConstLineSvg,
  devLine: DevLineSvg,
  menu: MenuSvg,
  navSm: NavSmSvg,
  nav: NavSvg,
	arrowRight: ArrowRight,
};

type IconName = keyof typeof icons;

const Icon: React.FC<{ name: IconName; className?: string }> = ({ name, className = '' }) => {
  const IconComponent = icons[name];
  return <>{<IconComponent className={className} />}</>;
};

export default Icon;

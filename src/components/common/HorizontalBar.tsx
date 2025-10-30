import classNames from 'classnames';
import React from 'react';

const HorizontalBar = ({ styles }: { styles?: string }) => {
  return <div className={classNames(styles, 'w-full h-[2px] bg-black')}></div>;
};

export default HorizontalBar;

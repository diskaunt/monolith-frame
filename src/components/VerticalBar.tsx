import classNames from 'classnames';
import React from 'react';

const VerticalBar = ({ styles }: { styles?: string }) => {
  return <div className={classNames(styles, 'w-[2px] h-full bg-black')}></div>;
};

export default VerticalBar;

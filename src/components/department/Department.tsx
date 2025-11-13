import classNames from 'classnames';
import React, { ReactNode } from 'react';
import Icon from '../icon/Icon';

export type DepartmentProps = {
  fill: string;
  children: ReactNode;
  styles?: { [key: string]: string };
};

const Department = ({ fill, children, styles }: DepartmentProps) => {
  return (
    <>
      <div className={classNames(styles?.loadTitle, 'flex items-center space-x-[6px]')}>
        <Icon name="square" className={classNames('h-[10px] w-[10px]', 'fill-' + fill)} />
        <p className="font-halvarBreit text-[12px] uppercase leading-[25px] tracking-tight hd:text-[14px]">
          {children}
        </p>
      </div>
    </>
  );
};

export default Department;

import classNames from "classnames";
import React, { ReactNode } from "react";

const AboutUsAchvmts = ({
  children,
  number,
  styles,
}: {
  children: ReactNode;
  number: number;
  styles?: { [key: string]: string } | null;
}) => {
  return (
    <>
      <div className={classNames(styles?.loadNumber, "text-[160px] font-bold uppercase leading-[137px] tracking-wide text-orange-500 hd:text-[500px] hd:leading-[430px]")}>
        <p>{number}</p>
      </div>
      <div className={classNames(styles?.loadNumberDescr, "mb-[14px] ml-[-20px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:mb-[65px] hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight")}>
        {children}
      </div>
    </>
  );
};

export default AboutUsAchvmts;

import React, { ReactNode } from "react";

const AboutUsAchvmts = ({
  children,
  number,
}: {
  children: ReactNode;
  number: number;
}) => {
  return (
    <>
      <div className="text-[160px] font-bold uppercase leading-[125px] tracking-wide text-orange-500 hd:text-[500px] hd:leading-[300px]">
        <p>{number}</p>
      </div>
      <div className="mb-[5px] ml-[-20px] self-end font-inter text-[17px] font-medium leading-[18px] tracking-tighter hd:mb-0 hd:max-w-[359px] hd:text-[28px] hd:leading-[31px] hd:tracking-veryTight">
        {children}
      </div>
    </>
  );
};

export default AboutUsAchvmts;

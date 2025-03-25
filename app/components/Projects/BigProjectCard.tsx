import Image from "next/image";
import React from "react";

const BigProjectCard = ({
  projectName,
  src,
}: {
  projectName: string;
  src: string;
}) => {
  return (
    <div className="relative h-[870px] max-w-[1010px]">
      <Image
        className="h-full w-full object-cover object-center"
        src={src}
        alt={projectName}
        width={1010}
        height={870}
      />
      <p className="absolute bottom-[17px] left-[17px] font-drucSyr text-[90px] font-bold uppercase leading-[87px] tracking-wide text-white">
        {projectName}
      </p>
    </div>
  );
};

export default BigProjectCard;

import Image from "next/image";
import React from "react";

const MidlProjectCard = ({
  projectName,
  src,
}: {
  projectName: string;
  src: string;
}) => {
  return (
    <div className="flex h-[379px] max-w-[638px] flex-col">
      <div className="h-[350px] w-full">
        <Image
          className="h-full w-full object-cover"
          src={src}
          alt={projectName}
					width={638}
					height={350}
        />
      </div>
      <div className="mt-auto">
        <p className="font-inter text-[20px] leading-[22px] tracking-veryTight">
          {projectName}
        </p>
      </div>
    </div>
  );
};

export default MidlProjectCard;

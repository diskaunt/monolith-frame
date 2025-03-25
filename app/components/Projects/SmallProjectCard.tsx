import myImageLoader from "@/utils/myImageLoader";
import Image from "next/image";
import React from "react";

const SmallProjectCard = ({
  projectName,
  src,
}: {
  projectName: string;
  src: string;
}) => {
  return (
    <div className="flex h-[204px] max-w-[260px] flex-col">
      <div className="h-[173px] w-full">
        <Image
          className="h-full w-full object-cover"
          src={myImageLoader(src)}
          alt={projectName}
          width={260}
          height={173}
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

export default SmallProjectCard;

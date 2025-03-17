import React from "react";

const SmallProjectCard = ({
  projectName,
  src,
}: {
  projectName: string;
  src: string;
}) => {
  return (
    <div className="flex max-w-[260px] h-[204px] flex-col">
      <div className="w-full h-[173px]">
        <img className="w-full h-full object-cover" src={src} alt={projectName} />
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

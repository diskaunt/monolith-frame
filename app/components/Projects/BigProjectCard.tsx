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
      <img className="w-full h-full object-cover object-center" src={src} alt={projectName} />
      <p className="absolute bottom-[17px] left-[17px] font-drucSyr text-[90px] font-bold uppercase leading-[87px] tracking-wide text-white">
        {projectName}
      </p>
    </div>
  );
};

export default BigProjectCard;

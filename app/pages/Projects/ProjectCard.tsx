import myImageLoader from "@/utils/myImageLoader";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const ProjectCard = ({
  projectName,
  src,
  size = "small",
  styles,
}: {
  projectName: string;
  src: string;
  size: "small" | "big" | "medium";
  styles?: { [key: string]: string };
}) => {
  switch (size) {
    case "big":
      return (
        <div className="relative flex h-[870px] max-w-[1010px] overflow-hidden">
          <Image
            className={classNames(
              styles?.loadImage,
              "h-full w-full object-cover object-center",
            )}
            src={myImageLoader(src)}
            alt={projectName}
            width={1010}
            height={870}
          />
          <p className="absolute bottom-[17px] left-[17px] font-drucSyr text-[90px] font-bold uppercase leading-[87px] tracking-wide text-white">
            {projectName}
          </p>
        </div>
      );
    case "medium":
      return (
        <div className="flex h-[379px] max-w-[638px] flex-col">
          <div className="h-[350px] w-full overflow-hidden">
            <Image
              className={classNames(
                styles?.loadImage,
                "h-full w-full object-cover",
              )}
              src={myImageLoader(src)}
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
    case "small":
      return (
        <div className="flex h-[204px] max-w-[260px] flex-col">
          <div className="h-[173px] w-full overflow-hidden">
            <Image
              className={classNames(
                styles?.loadImage,
                "h-full w-full object-cover",
              )}
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
  }
};

export default ProjectCard;

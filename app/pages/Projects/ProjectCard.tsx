import myImageLoader from '@/utils/myImageLoader';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
  projectName: string;
  src: string;
  size: 'small' | 'big' | 'medium';
  styles?: { [key: string]: string };
};

const ProjectCard = ({ projectName, src, size = 'small', styles }: ProjectCardProps) => {
  switch (size) {
    case 'big':
      return (
        <div className="relative flex h-[296px] w-[343px] overflow-hidden hd:h-[870px] hd:max-w-[1010px]">
          <Image
            className={classNames(styles?.loadImage, 'h-full w-full object-cover object-center')}
            src={myImageLoader(src)}
            alt={projectName}
            width={1010}
            height={870}
          />
          <p className="absolute bottom-[12px] left-[10px] font-drucSyr text-[55px] font-bold uppercase leading-[44px] tracking-wide text-white hd:bottom-[17px] hd:left-[17px] hd:text-[90px] hd:leading-[87px]">
            {projectName}
          </p>
        </div>
      );
    case 'medium':
      return (
        <div className="flex flex-col hd:h-[198px] hd:max-w-[299px]">
          <div className="h-[168px] w-full overflow-hidden">
            <Image
              className={classNames(styles?.loadImage, 'h-full w-full object-cover')}
              src={myImageLoader(src)}
              alt={projectName}
              width={638}
              height={350}
            />
          </div>
          <div className="mt-auto">
            <p className="font-inter text-[15px] font-bold leading-[22px] tracking-veryTight hd:text-[20px] hd:font-medium">
              {projectName}
            </p>
          </div>
        </div>
      );
    case 'small':
      return (
        <div className="flex h-[142px] max-w-[167px] flex-col hd:h-[204px] hd:max-w-[260px]">
          <div className="h-[112px] w-full overflow-hidden hd:h-[173px]">
            <Image
              className={classNames(styles?.loadImage, 'h-full w-full object-cover')}
              src={myImageLoader(src)}
              alt={projectName}
              width={260}
              height={173}
            />
          </div>
          <div className="mt-auto">
            <p className="font-inter text-[15px] font-bold leading-[22px] tracking-veryTight hd:text-[20px] hd:font-medium">
              {projectName}
            </p>
          </div>
        </div>
      );
  }
};

export default ProjectCard;

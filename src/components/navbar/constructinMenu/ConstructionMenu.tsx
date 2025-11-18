import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { ProjectType } from '@/data-access/projects';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import myImageLoader from '@/utils/myImageLoader';

type ConstructionMenuType = {
  projects: ProjectType[];
  constOpened: boolean;
};

const ConstructionMenu = React.memo(({ projects, constOpened }: ConstructionMenuType) => {
  const [KMImage, setKMImage] = useState<string>('/images/KMResidencePrime.jpg');
  const pathName = usePathname();

  return (
    <div
      className={classNames(
        constOpened ? 'visible z-10 shadow-lg transition-shadow delay-150' : 'invisible -z-10',
        'flex max-h-[410px] max-w-[360px] overflow-hidden bg-white sm:w-max md:max-h-[476px] hd:w-menuDev-project hd:max-w-[1167px]',
      )}
    >
      <div
        className={classNames(
          'flex h-full grow flex-nowrap justify-between text-black transition-all duration-300',
          constOpened
            ? 'translate-x-[0] translate-y-[0] opacity-100'
            : 'translate-x-[-100%] translate-y-[-100%] opacity-0',
        )}
      >
        {/* Список проектов */}
        <div className="m-[20px] mr-[20px] flex min-w-[222.5px] shrink-0 grow flex-col justify-between sm:min-w-[247.5px] sm:max-w-[462px]">
          <ul className="mb-[30px] space-y-[18px] font-inter text-[15px] font-medium leading-[18px] tracking-tighter md:mb-[129px] md:text-[20px] md:leading-[22px]">
            {projects
              .filter((project) => project.nav)
              .map((project) => (
                <li
                  onMouseOver={() => setKMImage(project.src)}
                  key={project.id}
                  className="relative"
                >
                  <Link
                    className={classNames(
                      'hoverMenuNav',
                      'hover:ml-[13px] hover:border-b hover:border-black',
                    )}
                    href={'/projects/' + project.id}
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
          </ul>
          {/* Ссылки "Все проекты" и "Квартиры" */}
          <div className="flex flex-nowrap justify-between text-[22px] uppercase leading-[25px] md:text-[34px]">
            <div>
              <Link className="hover:border-b-2 hover:border-black" href={'/projects'}>
                все проекты
              </Link>
            </div>
            <div>
              <Link className="hover:border-b-2 hover:border-black" href={'/'}>
                квартиры
              </Link>
            </div>
          </div>
        </div>
        {/* Изображение проекта */}
        <div className="m-[10px] ml-0 mt-[12px] hidden h-full grow overflow-hidden hd:block hd:h-[454px] fhd:w-[655px]">
          <Image
            className="h-full w-full object-cover object-center"
            width={655}
            height={454}
            src={myImageLoader(KMImage)}
            alt={'projectImage'}
          />
        </div>
      </div>
    </div>
  );
});

export default ConstructionMenu;

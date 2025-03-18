import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { ProjectType } from "@/data-access/projects";
import { usePathname } from "next/navigation";

const ConstructionMenu = ({
  projects,
  constOpened,
}: {
  projects?: ProjectType[];
  constOpened: boolean;
}) => {
  const [KMImage, setKMImage] = useState<string>(
    "/images/KMResidencePrime.jpg",
  );

  const pathName = usePathname();
  const projectPath = pathName.split("/").some((p) => p === "projects");

  return (
    <>
      <div
        className={classNames(
          constOpened ? "visible z-10" : "invisible -z-10 delay-300",
          "trasition-all grow w-full overflow-hidden hd:mt-[-66px]",
        )}
      >
        <div
          className={classNames(
            constOpened
              ? "translate-x-[0] translate-y-[0] opacity-100"
              : "translate-x-[-100%] translate-y-[-100%] opacity-0",
							projectPath ? "hd:w-menuDevProject" : "hd:w-menuDev" ,
            "flex w-full min-w-[360px] flex-nowrap justify-between gap-[10px] bg-white p-[10px] text-black transition-all duration-300 hd:h-[476px] fhd:max-w-[1150px]",
          )}
        >
          <div className="flex grow flex-col justify-between">
            <div className="space-y-[18px] p-[10px] font-inter text-[20px] font-medium leading-[22px] tracking-tighter">
              {projects?.map((project, i) => {
                if (project.nav)
                  return (
                    <div
                      onMouseOver={() => setKMImage(project.src)}
                      key={project.id}
                      className="relative"
                    >
                      <Link
                        className={classNames(
                          "hoverMenuNav",
                          "hover:ml-[13px] hover:border-b hover:border-black",
                        )}
                        href={"/projects/" + project.id}
                      >
                        {project.name}
                      </Link>
                    </div>
                  );
              })}
            </div>
            <div className="flex min-w-[300px] flex-nowrap justify-between p-[10px] text-[34px] uppercase leading-[25px]">
              <div>
                <Link
                  className="hover:border-b-2 hover:border-black"
                  href={"/projects"}
                >
                  все проекты
                </Link>
              </div>
              <div>
                <Link
                  className="hover:border-b-2 hover:border-black"
                  href={"/"}
                >
                  квартиры
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden h-full w-[655px] overflow-hidden pt-[2px] hd:block">
            <img
              className="h-full w-full object-cover"
              src={KMImage}
              alt={KMImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionMenu;

"use client";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Department from "@/components/common/Department";
import Card from "./card/Card";
import { ProjectType } from "@/data-access/projects";
import myImageLoader from "@/utils/myImageLoader";

type ProjectProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectProps) => {
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgImageRef.current) {
      bgImageRef.current.style.backgroundImage = `url(${myImageLoader(
        project.src,
      )})`;
    }
  }, [project.src]);

  return (
    <div
      ref={bgImageRef}
      className={classNames(
        "h-100svh w-full overflow-hidden bg-blue-500 bg-cover bg-center bg-no-repeat",
      )}
    >
      <div className="flex h-full w-full hd:px-[60px]">
        <div className="grow">
          <div className="flex h-full w-full flex-col justify-between p-[16px] pt-[90px] hd:flex-row hd:items-end hd:px-[20px] hd:py-[22px]">
            {/* Информация о проекте */}
            <div className="mb-[6px] text-white">
              <Department fill="white">{project.name}</Department>
              <div className="hd:w-[700px]">
                <p className="text-[60px] font-bold uppercase leading-[57px] tracking-wide">
                  {project.descr}
                </p>
              </div>
            </div>

            {/* Карточка проекта */}
            <article className="flex flex-col hd:items-end">
              <button className="mb-[6px] flex h-[60px] w-[100px] items-center justify-center border border-white">
                <svg
                  width="33"
                  height="19"
                  viewBox="0 0 33 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 1L31.4515 9.58506L22 17.9656"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.4517 1L2.00021 9.58506L11.4517 17.9656"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <Card
                adress={project.card?.adress}
                price={project.card?.price}
                DueDate={project.card?.DueDate}
                information={project.card?.information}
              />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

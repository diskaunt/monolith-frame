"use client";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Department from "@/commons/Department";
import Card from "./Card";
import { ProjectType } from "@/data-access/projects";
import myImageLoader from "@/utils/myImageLoader";

const Project = ({ project }: { project: ProjectType }) => {
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgImageRef.current) {
      bgImageRef.current.style.backgroundImage = `url(${myImageLoader(
        project.src
      )})`;
    }
  }, [project.src]);

  return (
    <div
      ref={bgImageRef}
      className={classNames(
        "h-100svh w-full bg-blue-500 overflow-hidden bg-cover bg-center bg-no-repeat"
      )}
    >
      <div className="flex h-full w-full px-[60px]">
        <div className="grow">
          <div className="flex h-full w-full items-end justify-between px-[20px] py-[22px]">
            {/* Информация о проекте */}
            <div className="mb-[6px] text-white">
              <Department fill="white">{project.name}</Department>
              <div className="w-[700px]">
                <p className="text-[120px] font-bold uppercase leading-[106px] tracking-wide">
                  {project.descr}
                </p>
              </div>
            </div>

            {/* Карточка проекта */}
            <div className="flex flex-col items-end">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
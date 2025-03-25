"use client";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Department from "@/commons/Department";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { ProjectType } from "@/data-access/projects";
import myImageLoader from "@/utils/myImageLoader";

const Project = ({ project }: { project: ProjectType }) => {
  const bgImageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    bgImageRef.current &&
      (bgImageRef.current.style.backgroundImage = `url(${myImageLoader(project.src)})`);
  }, []);

  return (
    <div
      ref={bgImageRef}
      className={classNames(
        "h-100svh w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-blue-500",
      )}
    >
      <div className="flex h-full w-full px-[60px]">
        <div className="grow">
          <div className="flex h-full w-full items-end justify-between px-[20px] py-[22px]">
            <div className="mb-[6px] text-white">
              <div className="">
                <Department fill="white">{project.name}</Department>
              </div>
              <div className="w-[700px]">
                <p className="text-[120px] font-bold uppercase leading-[106px] tracking-wide">
                  {project.descr}
                </p>
              </div>
            </div>
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

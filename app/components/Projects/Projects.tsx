"use client";
import { ProjectType } from "@/data-access/projects";
import React, { useRef, useState } from "react";
import SecTitle from "@/commons/SecTitle";
import classNames from "classnames";
import MidlProjectCard from "./MidlProjectCard";
import BigProjectCard from "./BigProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import Modal from "@/commons/Modal";
import Card from "./Project/Card";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const projectFind = (projectId: string) => {
    setProject(() => projects.find((p) => p.id === projectId) || null);
    modalRef.current && modalRef.current.showModal();
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="relative flex min-h-[100svh] w-full">
      <Modal id={project?.id} modalRef={modalRef}>
        {project && (
          <Card
            adress={project.card?.adress}
            price={project.card?.price}
            DueDate={project.card?.DueDate}
            information={project.card?.information}
          />
        )}
      </Modal>
      <div className="absolute left-0 top-0 z-10 flex h-[60svh] w-full gap-x-[206px] bg-orange-500 px-[80px]">
        <div className="mt-[120px]">
          <SecTitle color={"white"}>проекты</SecTitle>
        </div>
        <div className={classNames("mb-[38px] w-[589px] self-end")}>
          <p className="font-inter text-[28px] leading-[35px] tracking-veryTight text-white">
            Реализуем проекты строительства и&nbsp;реконструкции промышленных
            предприятий под ключ&nbsp;&mdash; от&nbsp;разработки концепции
            до&nbsp;сдачи объекта в&nbsp;эксплуатацию.
          </p>
        </div>
      </div>
      <div className="mb-[68px] w-full px-[80px]">
        <div className="relative mb-[100px] h-[203svh]">
          <div className="sticky top-[150px] z-0">
            <div className="flex w-full justify-center gap-[20px]">
              <div className="shrink-2 flex flex-col justify-between">
                <button onClick={() => projectFind("KMAnkudievskyPark")}>
                  <MidlProjectCard
                    projectName={"КМ Анкудиновский Парк"}
                    src={"/images/KMAnkudievskyPark.jpg"}
                  />
                </button>
                <div className="flex h-[365px] justify-between gap-[20px]">
                  <div className="self-end">
                    <button onClick={() => projectFind("KMResidencePrime")}>
                      <SmallProjectCard
                        projectName="КМ Residence Prime"
                        src="/images/KMResidencePrime.jpg"
                      />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => projectFind("KMFlagman")}>
                      <SmallProjectCard
                        projectName="КМ Флагман"
                        src="/images/KMFlagman.jpg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => projectFind("KMRiverPark")}>
                <BigProjectCard
                  projectName="км ривер парк"
                  src="/images/ProjectsKMRiverPark.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <button onClick={() => projectFind("KMTowerPlaza")}>
            <BigProjectCard
              projectName="km tower plaza"
              src="/images/KMTowerPlaza.jpg"
            />
          </button>
          <div className="flex flex-col-reverse justify-between">
            <button onClick={() => projectFind("KMPrime")}>
              <MidlProjectCard
                projectName={"КМ Прайм"}
                src={"/images/KMPrime.jpg"}
              />
            </button>
            <div className="flex h-[365px] justify-between gap-[20px]">
              <div className="self-end">
                <button onClick={() => projectFind("KMMolodezhny")}>
                  <SmallProjectCard
                    projectName="КМ Молодежный"
                    src="/images/KMMolodezhny.jpg"
                  />
                </button>
              </div>
              <div>
                <button onClick={() => projectFind("KMTimiryazevsky")}>
                  <SmallProjectCard
                    projectName="КМ Тимирязевский"
                    src="/images/KMTimiryazevsky.jpg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

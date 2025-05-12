"use client";
import { ProjectType } from "@/data-access/projects";
import React, { useRef, useState } from "react";
import SecTitle from "@/components/SecTitle";
import classNames from "classnames";
import ProjectCard from "./ProjectCard";
import Modal from "@/components/Modal";
import Card from "./Project/Card";
import styles from "./Projects.module.css";
import useObserver from "@/hooks/useObserver";
import addActiveClassname from "@/utils/addActiveStyles";

const Projects = ({ projects = [] }: { projects: ProjectType[] }) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // Обработчик открытия модального окна
  const handleProjectOpen = (projectId: string) => {
    setProject(() => projects.find((p) => p.id === projectId) || null);
    modalRef.current && modalRef.current.showModal();
    document.body.style.overflow = "hidden";
  };

  // Observer для анимации элементов при загрузке
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.3],
    },
  );

  return (
    <div className="relative flex min-h-[100svh] w-full">
      {/* Модальное окно */}
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

      {/* Заголоковок и описание секции */}
      <div className="absolute left-0 top-0 z-10 flex h-[60svh] w-full gap-x-[206px] bg-orange-500 px-[80px]">
        <div className="mt-[120px] inline overflow-hidden">
          <div ref={setDivLoadRef} className="invisible mt-[120px]">
            <SecTitle
              titleLoad={styles.titleLoad}
              arrowLoad={styles.arrowLoad}
              color={"white"}
            >
              проекты
            </SecTitle>
          </div>
        </div>
        <div className="mb-[38px] w-[589px] self-end overflow-hidden">
          <div
            ref={setDivLoadRef}
            className={classNames(styles.descrLoad, "invisible")}
          >
            <p className="font-inter text-[28px] leading-[35px] tracking-veryTight text-white">
              Реализуем проекты строительства и&nbsp;реконструкции промышленных
              предприятий под ключ&nbsp;&mdash; от&nbsp;разработки концепции
              до&nbsp;сдачи объекта в&nbsp;эксплуатацию.
            </p>
          </div>
        </div>
      </div>

      {/* Карточки проектов */}
      <div className="mb-[68px] w-full px-[80px]">
        <div className="relative mb-[100px] h-[203svh]">
          <div className="sticky top-[150px] z-0">
            <div className="flex w-full justify-center gap-[20px]">
              <div className="shrink-2 flex flex-col justify-between">
                <button className="invisible"
                  ref={setDivLoadRef}
                  onClick={() => handleProjectOpen("KMAnkudievskyPark")}
                >
                  <ProjectCard
                    projectName={"КМ Анкудиновский Парк"}
                    src={"/images/KMAnkudievskyPark.jpg"}
                    size={"medium"}
                    styles={styles}
                  />
                </button>
                <div className="flex h-[365px] justify-between gap-[20px]">
                  <div ref={setDivLoadRef} className="self-end invisible">
                    <button
                      onClick={() => handleProjectOpen("KMResidencePrime")}
                    >
                      <ProjectCard
                        projectName="КМ Residence Prime"
                        src="/images/KMResidencePrime.jpg"
                        size={"small"}
                        styles={styles}
                      />
                    </button>
                  </div>
                  <div className="invisible" ref={setDivLoadRef}>
                    <button
                      ref={setDivLoadRef}
                      className="invisible"
                      onClick={() => handleProjectOpen("KMFlagman")}
                    >
                      <ProjectCard
                        projectName="КМ Флагман"
                        src="/images/KMFlagman.jpg"
                        size="small"
                        styles={styles}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <button
                ref={setDivLoadRef}
                className="invisible"
                onClick={() => handleProjectOpen("KMRiverPark")}
              >
                <ProjectCard
                  projectName="км ривер парк"
                  src="/images/ProjectsKMRiverPark.jpg"
                  size="big"
                  styles={styles}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <button
            ref={setDivLoadRef}
            className="invisible"
            onClick={() => handleProjectOpen("KMTowerPlaza")}
          >
            <ProjectCard
              projectName="km tower plaza"
              src="/images/KMTowerPlaza.jpg"
              size={"big"}
              styles={styles}
            />
          </button>
          <div className="flex flex-col-reverse justify-between">
            <button
              ref={setDivLoadRef}
              className="invisible"
              onClick={() => handleProjectOpen("KMPrime")}
            >
              <ProjectCard
                projectName={"КМ Прайм"}
                src={"/images/KMPrime.jpg"}
                size={"medium"}
                styles={styles}
              />
            </button>
            <div className="flex h-[365px] justify-between gap-[20px]">
              <div ref={setDivLoadRef} className="invisible self-end">
                <button onClick={() => handleProjectOpen("KMMolodezhny")}>
                  <ProjectCard
                    projectName="КМ Молодежный"
                    src="/images/KMMolodezhny.jpg"
                    size="small"
                    styles={styles}
                  />
                </button>
              </div>
              <div className="invisible" ref={setDivLoadRef}>
                <button onClick={() => handleProjectOpen("KMTimiryazevsky")}>
                  <ProjectCard
                    projectName="КМ Тимирязевский"
                    src="/images/KMTimiryazevsky.jpg"
                    size="small"
                    styles={styles}
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

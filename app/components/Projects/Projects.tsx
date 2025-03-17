"use client";
import { ProjectType } from "@/data-access/projects";
import React, { useEffect, useState } from "react";
import SecTitle from "@/commons/SecTitle";
import classNames from "classnames";
import MidlProjectCard from "./MidlProjectCard";
import BigProjectCard from "./BigProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import Modal from "@/commons/Modal";
import Card from "./Project/Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  const pathParams = useSearchParams();
  const [project, setProject] = useState<ProjectType | null>(null);
  useEffect(() => {
    if (pathParams.has("id")) {
      let data = projects.find((item) => item.id === pathParams.get("id"));
      data && setProject(data);
    }
  }, [pathParams]);
  return (
    <div className="relative flex min-h-[100svh] w-full">
      {pathParams.get("id") && (
        <Modal>
          <Card
            adress={project?.card?.adress}
            price={project?.card?.price}
            DueDate={project?.card?.DueDate}
            information={project?.card?.information}
          />
        </Modal>
      )}
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
                <Link
                  href={"/projects/?id=KMAnkudievskyPark"}
                  as={"/projects/KMAnkudievskyPark"}
                >
                  <MidlProjectCard
                    projectName={"КМ Анкудиновский Парк"}
                    src={"/images/KMAnkudievskyPark.jpg"}
                  />
                </Link>
                <div className="flex h-[365px] justify-between gap-[20px]">
                  <div className="self-end">
                    <Link
                      href={"/projects/?id=KMResidencePrime"}
                      // as={"/projects/KMResidencePrime"}
                    >
                      <SmallProjectCard
                        projectName="КМ Residence Prime"
                        src="/images/KMResidencePrime.jpg"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/projects/?id=KMFlagman"}
                      as={"/projects/KMFlagman"}
                    >
                      <SmallProjectCard
                        projectName="КМ Флагман"
                        src="/images/KMFlagman.jpg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href={"/projects/?id=KMRiverPark"}
                as={"/projects/KMRiverPark"}
              >
                <BigProjectCard
                  projectName="км ривер парк"
                  src="/images/ProjectsKMRiverPark.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <Link
            href={"/projects/?id=KMTowerPlaza"}
            as={"/projects/KMTowerPlaza"}
          >
            <BigProjectCard
              projectName="km tower plaza"
              src="/images/KMTowerPlaza.jpg"
            />
          </Link>
          <div className="flex flex-col-reverse justify-between">
            <Link href={"/projects/?id=KMPrime"} as={"/projects/KMPrime"}>
              <MidlProjectCard
                projectName={"КМ Прайм"}
                src={"/images/KMPrime.jpg"}
              />
            </Link>
            <div className="flex h-[365px] justify-between gap-[20px]">
              <div className="self-end">
                <Link
                  href={"/projects/?id=KMMolodezhny"}
                  // as={"/projects/KMMolodezhny"}
                >
                  <SmallProjectCard
                    projectName="КМ Молодежный"
                    src="/images/KMMolodezhny.jpg"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href={"/projects/?id=KMTimiryazevsky"}
                  // as={"/projects/KMTimiryazevsky"}
                >
                  <SmallProjectCard
                    projectName="КМ Тимирязевский"
                    src="/images/KMTimiryazevsky.jpg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

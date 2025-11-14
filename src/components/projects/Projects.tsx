'use client';
import { ProjectType } from '@/data-access/projects';
import React, { useState, useEffect } from 'react';
import SecTitle from '@/components/secTitle/SecTitle';
import classNames from 'classnames';
import ProjectCard from './projectCard/ProjectCard';
import Modal from '@/components/modal/Modal';
import Card from './project/card/Card';
import styles from './projects.module.css';
import useObserver from '@/hooks/useObserver';
import addActiveClassname from '@/utils/addActiveStyles';
import { createPortal } from 'react-dom';
import useCloseModal from '@/hooks/useCloseModal';
import useGsapObserver from '@/hooks/useGsapObserver';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type ProjectsProps = {
  projects: ProjectType[];
  setScrollVerticalRefs?: (el: HTMLElement | null) => void;
  isMobileClient?: boolean;
};

const Projects: React.FC<ProjectsProps> = ({
  projects = [],
  setScrollVerticalRefs,
  isMobileClient = false,
}) => {
  const [project, setProject] = useState<ProjectType | null>(null),
    [isMounted, setIsMounted] = useState(false),
    [goToSection, setScrollRefs] = setScrollVerticalRefs ? [null, null] : useGsapObserver();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Обработчик открытия модального окна
  const handleModalOpen = (projectId: string) => {
    setProject(() => projects.find((p) => p.id === projectId) || null);
    modalRef.current?.showModal();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };
  //открывает проект по клику на стрелку
  const handleProjectOpen = (router: AppRouterInstance, id: string) => {
    router.push(`/projects/${id}`);
    document.body.style.overflow = 'auto';
  };

  // Observer для анимации элементов при загрузке
  const [divLoadRefs, setDivLoadRef] = useObserver(
    (entryes) => addActiveClassname(entryes, styles),
    {
      root: null,
      rootMargin: '0px',
      threshold: [0.3],
    },
  );

  const modalRef = useCloseModal(isMounted);

  const isClient = typeof window !== 'undefined';
  const shouldSetScrollRefs = isMobileClient || (isClient && window.innerWidth < 1368);

  return (
    // Модальное окно
    <div className="relative h-[100svh] w-full overflow-y-hidden">
      {isMounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <Modal id={project?.id} modalRef={modalRef} handleProjectOpen={handleProjectOpen}>
            {project && (
              <Card
                adress={project.card?.adress}
                price={project.card?.price}
                DueDate={project.card?.DueDate}
                information={project.card?.information}
              />
            )}
          </Modal>,
          document.body,
        )}

      {/* Заголоковок и описание секции */}
      <div className="absolute left-0 top-0 z-10 h-[60svh] w-full bg-orange-500">
        <div className="mx-auto flex h-full max-w-[375px] flex-col p-[16px] pt-[86px] hd:mb-[38px] hd:max-w-[1760px] hd:flex-row hd:gap-x-[206px] hd:px-[80px] hd:pt-[151px]">
          <div className="inline overflow-hidden">
            <div ref={setDivLoadRef} className="invisible">
              <SecTitle titleLoad={styles.titleLoad} arrowLoad={styles.arrowLoad} color={'white'}>
                проекты
              </SecTitle>
            </div>
          </div>
          <div className="w-[299px] grow content-end overflow-hidden hd:w-[589px]">
            <div ref={setDivLoadRef} className={classNames(styles.descrLoad, 'invisible')}>
              <p className="font-inter text-[18px] leading-[24px] tracking-veryTight text-white hd:text-[28px] hd:leading-[35px]">
                Реализуем проекты строительства и&nbsp;реконструкции промышленных предприятий под
                ключ&nbsp;&mdash; от&nbsp;разработки концепции до&nbsp;сдачи объекта
                в&nbsp;эксплуатацию.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Карточки проектов */}
      <div className="relative w-full pb-[40px] hd:pb-[68px]">
        <div
          ref={shouldSetScrollRefs ? setScrollVerticalRefs : setScrollRefs}
          className="mb-[8px] h-[179svh] w-full hd:mb-[100px] hd:h-[203svh]"
        >
          {/* первый блок карточек */}
          <div className="sticky top-[88px] z-0 w-full hd:top-[150px]">
            <div className="mx-auto flex max-w-[375px] flex-col justify-center gap-[26px] px-[16px] hd:max-w-[1760px] hd:flex-row hd:gap-[20px] hd:px-[80px]">
              <div className="shrink-2 flex flex-col justify-between gap-[26px] hd:gap-0">
                <button
                  className="invisible"
                  ref={setDivLoadRef}
                  onClick={() => handleModalOpen('KMAnkudievskyPark')}
                >
                  <ProjectCard
                    projectName={'КМ Анкудиновский Парк'}
                    src={'/images/KMAnkudievskyPark.jpg'}
                    size={'medium'}
                    styles={styles}
                  />
                </button>
                <div className="flex h-[310px] justify-between gap-0 hd:h-[365px] hd:gap-[20px]">
                  <div ref={setDivLoadRef} className="invisible self-end">
                    <button onClick={() => handleModalOpen('KMResidencePrime')}>
                      <ProjectCard
                        projectName="КМ Residence Prime"
                        src="/images/KMResidencePrime.jpg"
                        size={'small'}
                        styles={styles}
                      />
                    </button>
                  </div>
                  <div className="invisible" ref={setDivLoadRef}>
                    <button
                      ref={setDivLoadRef}
                      className="invisible"
                      onClick={() => handleModalOpen('KMFlagman')}
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
              <div>
                <button
                  ref={setDivLoadRef}
                  className="invisible"
                  onClick={() => handleModalOpen('KMRiverPark')}
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
        </div>
        <div
          ref={shouldSetScrollRefs ? setScrollVerticalRefs : setScrollRefs}
          className="absolute top-[60svh] h-[1px] w-full"
        ></div>
        {/* второй блок карточек */}
        <div ref={shouldSetScrollRefs ? setScrollVerticalRefs : setScrollRefs} className="w-full">
          <div className="mx-auto flex max-w-[375px] flex-col justify-center gap-[26px] px-[16px] pt-[90px] hd:max-w-[1760px] hd:flex-row hd:gap-[20px] hd:px-[80px]">
            <div>
              <button
                ref={setDivLoadRef}
                className="invisible"
                onClick={() => handleModalOpen('KMTowerPlaza')}
              >
                <ProjectCard
                  projectName="km tower plaza"
                  src="/images/KMTowerPlaza.jpg"
                  size={'big'}
                  styles={styles}
                />
              </button>
            </div>
            <div className="flex flex-col-reverse justify-between gap-[26px] hd:gap-0">
              <div className="self-end">
                <button
                  ref={setDivLoadRef}
                  className="invisible"
                  onClick={() => handleModalOpen('KMPrime')}
                >
                  <ProjectCard
                    projectName={'КМ Прайм'}
                    src={'/images/KMPrime.jpg'}
                    size={'medium'}
                    styles={styles}
                  />
                </button>
              </div>
              <div className="flex h-[310px] justify-between gap-0 hd:h-[365px] hd:gap-[20px]">
                <div ref={setDivLoadRef} className="invisible self-end">
                  <button onClick={() => handleModalOpen('KMMolodezhny')}>
                    <ProjectCard
                      projectName="КМ Молодежный"
                      src="/images/KMMolodezhny.jpg"
                      size="small"
                      styles={styles}
                    />
                  </button>
                </div>
                <div className="invisible" ref={setDivLoadRef}>
                  <button onClick={() => handleModalOpen('KMTimiryazevsky')}>
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
    </div>
  );
};

export default Projects;

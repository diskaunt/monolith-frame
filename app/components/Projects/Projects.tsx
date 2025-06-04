'use client';
import { ProjectType } from '@/data-access/projects';
import React, { useRef, useState, useEffect } from 'react';
import SecTitle from '@/components/SecTitle';
import classNames from 'classnames';
import ProjectCard from './ProjectCard';
import Modal from '@/components/Modal';
import Card from './Project/Card';
import styles from './Projects.module.css';
import useObserver from '@/hooks/useObserver';
import addActiveClassname from '@/utils/addActiveStyles';
import { createPortal } from 'react-dom';
import useCloseModal from '@/hooks/useCloseModal';

type ProjectsProps = {
  projects: ProjectType[];
  setScrollVerticalRefs?: (el: HTMLElement | null) => void;
  isMobileClient?: boolean;
};

const Projects = ({ projects = [], setScrollVerticalRefs, isMobileClient = false }: ProjectsProps) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Обработчик открытия модального окна
  const handleProjectOpen = (projectId: string) => {
    setProject(() => projects.find((p) => p.id === projectId) || null);
    modalRef.current?.showModal();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  // Observer для анимации элементов при загрузке
  const [divLoadRefs, setDivLoadRef] = useObserver((entryes) => addActiveClassname(entryes, styles), {
    root: null,
    rootMargin: '0px',
    threshold: [0.3],
  });

  useCloseModal(modalRef);

  const isClient = typeof window !== 'undefined';
  const shouldSetScrollRefs = isMobileClient && isClient && window.innerWidth < 768;

  return (
    <div className="relative flex min-h-[100svh] w-full">
      {/* Модальное окно */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <Modal id={project?.id} modalRef={modalRef}>
          {project && (
            <Card
              adress={project.card?.adress}
              price={project.card?.price}
              DueDate={project.card?.DueDate}
              information={project.card?.information}
            />
          )}
        </Modal>,
        document.body
      )}

      {/* Заголоковок и описание секции */}
      <div className="absolute left-0 top-0 z-10 flex h-[60svh] w-full flex-col bg-orange-500 p-[16px] pt-[86px] hd:mb-[38px] hd:flex-row hd:gap-x-[206px] hd:px-[80px] hd:pt-[151px]">
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

      {/* Карточки проектов */}
      <div className="w-full pb-[40px] hd:pb-[68px]">
        <div className="relative mb-[8px] h-[179svh] hd:mb-[100px] hd:h-[203svh]">
          {/* первый блок карточек */}
          <div
            ref={shouldSetScrollRefs ? setScrollVerticalRefs : null}
            className="sticky top-[88px] z-0 px-[16px] hd:top-[150px] hd:px-[80px]"
          >
            <div className="flex w-full flex-col justify-center gap-[20px] hd:flex-row">
              <div className="shrink-2 flex flex-col justify-between gap-[26px] hd:gap-0">
                <button
                  className="invisible"
                  ref={setDivLoadRef}
                  onClick={() => handleProjectOpen('KMAnkudievskyPark')}
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
                    <button onClick={() => handleProjectOpen('KMResidencePrime')}>
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
                      onClick={() => handleProjectOpen('KMFlagman')}
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
                onClick={() => handleProjectOpen('KMRiverPark')}
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
        {/* второй блок карточек */}
        <div
          ref={shouldSetScrollRefs ? setScrollVerticalRefs : null}
          className="flex flex-col justify-center gap-[26px] px-[16px] hd:flex-row hd:gap-[20px] hd:px-[80px]"
        >
          <button
            ref={setDivLoadRef}
            className="invisible"
            onClick={() => handleProjectOpen('KMTowerPlaza')}
          >
            <ProjectCard
              projectName="km tower plaza"
              src="/images/KMTowerPlaza.jpg"
              size={'big'}
              styles={styles}
            />
          </button>
          <div className="flex flex-col-reverse justify-between gap-[26px] hd:gap-0">
            <button
              ref={setDivLoadRef}
              className="invisible"
              onClick={() => handleProjectOpen('KMPrime')}
            >
              <ProjectCard
                projectName={'КМ Прайм'}
                src={'/images/KMPrime.jpg'}
                size={'medium'}
                styles={styles}
              />
            </button>
            <div className="flex h-[310px] justify-between gap-0 hd:h-[365px] hd:gap-[20px]">
              <div ref={setDivLoadRef} className="invisible self-end">
                <button onClick={() => handleProjectOpen('KMMolodezhny')}>
                  <ProjectCard
                    projectName="КМ Молодежный"
                    src="/images/KMMolodezhny.jpg"
                    size="small"
                    styles={styles}
                  />
                </button>
              </div>
              <div className="invisible" ref={setDivLoadRef}>
                <button onClick={() => handleProjectOpen('KMTimiryazevsky')}>
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

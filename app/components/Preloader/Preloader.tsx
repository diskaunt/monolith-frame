'use client';

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import PreloaderSvg from './PreloaderSvg';

const Preloader = ({
  loadLevel,
  setloadLevel,
}: {
  loadLevel: string;
  setloadLevel: (value: string) => void;
}) => {
  useEffect(() => {
    const progeress = setTimeout(() => {
      let newLoadLevel = loadLevel + 28;
      +newLoadLevel >= 99 ? (newLoadLevel = '99') : newLoadLevel;
      setloadLevel(String(newLoadLevel).padStart(2, '0').slice(-2));
    }, 800);

    return () => clearTimeout(progeress);
  }, [loadLevel]);
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <PreloaderSvg
          preserveAspectRatio='xMidYMid slice'
          className={styles.preloaderSvg}
        />
      </div>
      <div className={styles.back} />
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          LOADING -
          <span className={styles.loadLevel}>
            <span className={styles.loadLevFirst}>{loadLevel[0]}</span>
            <span className={styles.loadLevSecond}>{loadLevel[1]}</span>
          </span>
          %
        </div>
      </div>
    </div>
  );
};

export default Preloader;

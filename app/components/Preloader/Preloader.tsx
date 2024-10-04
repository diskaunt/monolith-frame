'use client';

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import PreloaderSvg from './PreloaderSvg';

const Preloader = ( {loadLevel, setloadLevel}: { loadLevel: number; setloadLevel: (value: number)=> void } ) => {
  useEffect(() => {
    const progeress = setTimeout(() => {
      let newLoadLevel = loadLevel + 28;
      newLoadLevel >= 100 ? (newLoadLevel = 100) : newLoadLevel;
      setloadLevel(newLoadLevel);
    }, 1000);

    // return clearTimeout(progeress);
  }, [loadLevel]);
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <PreloaderSvg />
      </div>
      <div className={styles.loader}>LOADING - {loadLevel}%</div>
    </div>
  );
};

export default Preloader;

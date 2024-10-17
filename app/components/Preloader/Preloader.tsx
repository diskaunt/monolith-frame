'use clients';
import React, { use, useEffect, useId, useState } from 'react';
import styles from './Preloader.module.css';
import PreloaderSvg from './PreloaderSvg';
import classNames from 'classnames';

const Preloader = () => {
  let [animationEnded, setAnimationEnd] = useState(false);
  const levels = ['00', '28', '45', '87', '99'];

  const renderLoadLevels = levels.reverse().map((lvl, i) => (
    <div key={i}>
      <span className={styles.loadLvlFirst}>
        <span>{lvl[0]}</span>
      </span>
      <span className={styles.loadLvlSecond}>
        <span>{lvl[1]}</span>
      </span>
    </div>
  ));
  return (
    <div className={classNames(styles.container,
		{ hidden: animationEnded }
		)}>
      <div className={styles.svg}>
        <PreloaderSvg
          setAnimationEnd={setAnimationEnd}
          preserveAspectRatio='xMidYMid slice'
          className={styles.preloaderSvg}
        />
      </div>
      <div className={styles.back} />
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          загрузка -<span className={styles.loadLevel}>{renderLoadLevels}</span>
          %
        </div>
      </div>
    </div>
  );
};

export default Preloader;

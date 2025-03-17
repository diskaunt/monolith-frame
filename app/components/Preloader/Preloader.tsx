"use clients";
import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";
import PreloaderSvg from "./PreloaderSvg";
import classNames from "classnames";

const Preloader = () => {
  const levels = ["00", "28", "45", "87", "99"];

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
    <div
      className={classNames(
        styles.container,
        "bg-[url(/images/section-1.jpg)] bg-cover bg-center bg-no-repeat",
      )}
    >
      <div className={styles.svg}>
        <PreloaderSvg
          preserveAspectRatio="xMidYMid slice"
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

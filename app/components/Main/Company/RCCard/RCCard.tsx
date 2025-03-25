import React, { RefObject, useEffect, useRef, useState } from "react";
import ArrowComplex from "./ArrowComplex";
import Link from "next/link";
import styles from "./RCCard.module.css";
import classNames from "classnames";
import useMouseOver from "@/hooks/useMouseOver";
import Image from "next/image";

const RCCard = () => {
  const resRef = useRef(null);
  const [resOvered, setResOver] = useState(false);
  useMouseOver(resRef, setResOver, 300);
  return (
    <>
      <div
        ref={resRef}
        className={classNames(styles.loadRight, "group relative z-20")}
      >
        <div className="flex">
          <div className="shrink-0">
            <Image
              className="h-[104px] w-[110px] sm:h-[120px]"
              src="/images/newLK-1.jpg"
              alt="Новый Жк"
              width={110}
              height={120}
            />
          </div>
          <div className="flex max-w-[260px] grow flex-col flex-wrap justify-between bg-orange-500">
            <div className="mx-[10px] mt-[3px] flex gap-x-[16px] text-[10px] font-semibold uppercase leading-[23px] opacity-60 sm:mx-[14px] sm:mt-[11px] sm:gap-x-[23px] sm:text-[12px]">
              <p className={styles["slide-up-opacity"]}>20.12.22</p>
              <p className={styles["slide-up-opacity"]}>#новое</p>
            </div>
            <div className="mx-[10px] my-[10px] text-[18px] font-medium leading-[18px] sm:mx-[11px] sm:mb-[14px] sm:text-[20px]">
              <p className={styles["slide-up"]}>
                Новый ЖК
                <br /> готов к сдаче
              </p>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            resOvered ? styles.loadRightArrow : styles.unloadArrow,
            "absolute left-complex-x top-[0] h-full",
          )}
        >
          <div className="flex h-full w-[42px] cursor-pointer bg-orange-500 stroke-white p-[6px] sm:w-[72px]">
            <Link href={"/"}></Link>
            <ArrowComplex
              className={classNames(
                resOvered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[20%] opacity-0",
                "transition-all duration-300",
              )}
            />
          </div>
        </div>
      </div>
      {/* pop-up block */}
      <div
        className={classNames(
          resOvered ? "visible translate-y-[-25px]" : "invisible",
          "easy-in-out group absolute left-0 top-0 z-10 flex w-full scale-90 transition-all duration-300 hover:visible hover:translate-y-[-103%] hover:scale-100",
        )}
      >
        <div className="shrink-0">
          <Image
            className="h-[104px] w-[110px] object-cover sm:h-[120px]"
            src="/images/KMRiverPark.jpg"
            alt="Жилой комплекс Речной парк"
            width={110}
            height={120}
          />
        </div>
        <div className="flex max-w-[260px] grow flex-col flex-wrap justify-between overflow-hidden bg-sky-950">
          <div className="mx-[10px] mt-[3px] flex gap-x-[16px] text-[10px] font-semibold uppercase leading-[23px] opacity-60 sm:mx-[14px] sm:mt-[11px] sm:gap-x-[23px] sm:text-[12px]">
            <p className={classNames(styles["slide-up-opacity"])}>07.12.22</p>
            <p className={classNames(styles["slide-up-opacity"])}>#новое</p>
          </div>
          <div className="w-full px-[10px] py-[10px] text-[18px] font-medium leading-[18px] sm:mx-[11px] sm:mb-[14px] sm:text-[20px]">
            <p
              className={classNames(
                styles["slide-up"],
                styles.cutoffText,
                "w-full",
              )}
            >
              В ЖК Речной парк начались первые продажи апартаментов
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RCCard;

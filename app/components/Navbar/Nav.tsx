"use client";
import React, { use, useRef, useState } from "react";
import MenuSvg from "./conponentsSvg/MenuSvg";
import MgLogoSvg from "./conponentsSvg/MgLogoSvg";
import NavSvg from "./conponentsSvg/NavSvg";
import ArrowNavSvg from "./conponentsSvg/ArrowNavSvg";
import NavSmSvg from "./conponentsSvg/NavSmSvg";
import DevelopmentMenu from "./DevelopmentMenu";
import classNames from "classnames";
import useClickOutside from "@/hooks/useClickOutside";
import styles from "./Nav.module.css";
import ConstructionMenu from "./ConstructionMenu";
import { ProjectType } from "@/data-access/projects";
import { useRouter } from "next/compat/router";

const Nav = ({ projects }: { projects?: ProjectType[] }) => {
  const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const menuRef = useRef(null);
  const devMenuRef = useRef(null);

  const handleClickOutside = (value: boolean) => {
    setDevOpened(value);
    setConstOpened(value);
  };

  useClickOutside([menuRef, devMenuRef], handleClickOutside);

  const onDevOpened = () => {
    setDevOpened(!devOpened);
    setConstOpened(!constOpened);
  };

  return (
    <div className={classNames("border-inherit transition-all")}>
      <div
        className={classNames(
          "z-10 flex h-[50px] w-nav-mobile min-w-[343px] max-w-[707px] border-inherit hd:h-[60px] hd:w-nav-desktop",
        )}
      >
        {/* Дизайнерская причуда */}
        <div
          className={classNames(
            styles.slideUpMenuBorder,
            "invisible w-0 items-center justify-center hd:visible hd:flex hd:w-[60px] hd:border hd:border-inherit hd:px-[15px]",
          )}
        >
          <MenuSvg className={classNames(styles.slideUpMenuSvg)} />
        </div>

        {/* Основное меню */}
        <div
          ref={menuRef}
          className={classNames(
            styles.borderAnimate,
            "relative flex grow border border-inherit text-[16px] leading-[25px] tracking-wide hd:ml-[6px] hd:text-[24px] hd:leading-[25px]",
          )}
        >
          {/* Логотип Monolith Frame */}
          <div
            className={classNames(
              "flex w-full max-w-[79px] grow items-center justify-center px-[15px] hd:max-w-[247px]",
            )}
          >
            <MgLogoSvg />
          </div>

          {/* Разделитель */}
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>

          {/* Кнопка "Девелопмент" */}
          <div
            className={classNames(
              "relative grow px-[14px] hd:max-w-[154px] hd:px-[22px]",
            )}
          >
            <button
              onClick={onDevOpened}
              className="flex h-full w-full cursor-pointer items-center justify-center gap-x-[3px] uppercase"
            >
              <span className="">девелопмент</span>
              <span className="h-[0.7em] w-[6.67px] hd:w-[10px]">
                <ArrowNavSvg />
              </span>
            </button>
            <div
              ref={devMenuRef}
              className={classNames(
                constOpened ? "visible" : "invisible",
                "absolute left-0 top-[55px] flex flex-wrap gap-[6px] hd:top-[66px] hd:flex-nowrap",
              )}
            >
              <DevelopmentMenu devOpened={devOpened} />
              <ConstructionMenu projects={projects} constOpened={constOpened} />
            </div>
          </div>

          {/* Разделитель */}
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>

          {/* Кнопка "Строительство" */}
          <div
            onClick={() => {}}
            className={classNames(
              "flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase hd:max-w-[171px] hd:px-[20px]",
            )}
          >
            <span>строительство</span>
            <span className="h-[0.7em] w-[6.67px] hd:w-[10px]">
              <ArrowNavSvg />
            </span>
          </div>

          {/* Разделитель */}
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>

          {/* Иконка навигации */}
          <div
            className={classNames(
              "mx-auto flex w-[48px] items-center justify-center px-[16px] hd:w-[60px] hd:px-[20px]",
            )}
          >
            <NavSvg className="hidden hd:block" />
            <NavSmSvg className="hd:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

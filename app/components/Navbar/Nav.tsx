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

const Nav = ({
  projects,
  theme = "light",
}: {
  projects?: ProjectType[];
  theme?: "dark" | "light";
}) => {
  const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const menuRef = useRef(null);
  const devMenuRef = useRef(null);


	const handleClickOutside	= (value: boolean) => {
		setDevOpened(value)
		setConstOpened(value)
	}
	
	useClickOutside([menuRef, devMenuRef], handleClickOutside);

  const onDevOpened = () => {
    setDevOpened(!devOpened);
    setConstOpened(!constOpened);
  };
	const router = useRouter()

  return (
    <div
      className={classNames(
        // theme === "light" ? "white-theme" : "black-theme",
        "border-inherit transition-all",
      )}
    >
      <div
        className={classNames(
          "z-10 flex h-[50px] w-nav-mobile min-w-[343px] max-w-[707px] border-inherit sm:h-[60px] sm:w-nav-desktop",
        )}
      >
        <div
          className={classNames(
            styles.slideUpMenuBorder,
            "invisible w-0 items-center justify-center hd:visible hd:flex hd:w-[60px] hd:border hd:border-inherit hd:px-[15px]",
          )}
        >
          <MenuSvg className={classNames(styles.slideUpMenuSvg)} />
        </div>
        <div
          ref={menuRef}
          className={classNames(
            styles.borderAnimate,
            "relative flex grow border border-inherit text-[16px] leading-[25px] tracking-wide sm:text-[24px] sm:leading-[25px] hd:ml-[6px]",
          )}
        >
          <div
            className={classNames(
              "flex w-full max-w-[79px] grow items-center justify-center px-[15px] sm:max-w-[247px]",
            )}
          >
            <MgLogoSvg />
          </div>
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>
          <div
            className={classNames(
              "relative grow px-[14px] sm:max-w-[154px] sm:px-[22px]",
            )}
          >
            <button
              onClick={onDevOpened}
              className="flex h-full w-full cursor-pointer items-center justify-center gap-x-[3px] uppercase"
            >
              <span className="">девелопмент</span>
              <span className="h-[0.7em] w-[6.67px] sm:w-[10px]">
                <ArrowNavSvg />
              </span>
            </button>
            <div
              ref={devMenuRef}
              className={classNames(
                constOpened ? "visible" : "invisible",
                "absolute left-0 top-[55px] flex w-[458px] flex-wrap gap-[6px] sm:top-[66px] hd:w-[auto] hd:flex-nowrap",
              )}
            >
              <DevelopmentMenu devOpened={devOpened} />
              <ConstructionMenu projects={projects} constOpened={constOpened} />
            </div>
          </div>
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>
          <div
            // onClick={() => setConstOpened(!constOpened)}
            className={classNames(
              "flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase sm:max-w-[171px] sm:px-[20px]",
            )}
          >
            <span>строительство</span>
            <span className="h-[0.7em] w-[6.67px] sm:w-[10px]">
              <ArrowNavSvg />
            </span>
          </div>
          <div
            className={classNames(
              styles.growAnimate,
              "h-full border-l border-inherit",
            )}
          ></div>
          <div
            className={classNames(
              "mx-auto flex w-[48px] items-center justify-center px-[16px] sm:w-[60px] sm:px-[20px]",
            )}
          >
            <NavSvg className="hidden sm:block" />
            <NavSmSvg className="sm:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

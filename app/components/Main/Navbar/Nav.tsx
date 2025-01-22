"use client";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
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

const Nav = () => {
  const [devOpened, setDevOpened] = useState<boolean>(false);
  const [constOpened, setConstOpened] = useState<boolean>(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, setDevOpened, setConstOpened);

  return (
    <div
      className={classNames(
        "z-10 flex h-[50px] w-nav min-w-[343px] max-w-[707px] border-inherit sm:h-[60px] sm:w-nav-sm",
        //"text-black" : "text-white",
      )}
    >
      <div
        className={classNames(
          styles.slideUpMenuBorder,
          "invisible w-0 items-center justify-center md:visible md:flex md:w-[60px] md:border md:border-inherit md:px-[15px]",
          //   ? "border-black fill-black stroke-black"
          //   : "border-white fill-white stroke-white",
        )}
      >
        <MenuSvg className={classNames(styles.slideUpMenuSvg)} />
      </div>
      <div
        ref={menuRef}
        className={classNames(
          styles.borderAnimate,
          "relative flex grow border border-inherit text-[16px] leading-[25px] tracking-wide sm:text-[24px] sm:leading-[25px] md:ml-[6px]",
          //"border-black" : "border-white",
        )}
      >
        <div
          className={classNames(
            "flex w-full max-w-[79px] grow items-center justify-center px-[15px] sm:max-w-[247px]",
            //   ? "border-black fill-black stroke-black"
            //   : "border-white fill-white stroke-white",
          )}
        >
          <MgLogoSvg />
        </div>
        <div
          className={classNames(
            styles.growAnimate,
            "h-full border-l border-inherit",
            //"bg-black" : "bg-white",
          )}
        ></div>
        <div
          onClick={() => setDevOpened(!devOpened)}
          className={classNames(
            "flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase sm:max-w-[154px] sm:px-[22px]",
            //   ? "border-black fill-black hover:bg-black hover:fill-white hover:text-white"
            //   : "border-white fill-white hover:bg-white hover:fill-black hover:text-black",
          )}
        >
          <span className="">девелопмент</span>
          <span className="h-[0.7em] w-[6.67px] sm:w-[10px]">
            <ArrowNavSvg />
          </span>
        </div>
        <div
          className={classNames(
            styles.growAnimate,
            "h-full border-l border-inherit",
            //"bg-black" : "bg-white",
          )}
        ></div>
        <div
          onClick={() => setConstOpened(!constOpened)}
          className={classNames(
            "flex grow cursor-pointer items-center justify-center space-x-[3px] px-[14px] uppercase sm:max-w-[171px] sm:px-[20px]",
            //   ? "border-black fill-black hover:bg-black hover:fill-white hover:text-white"
            //   : "border-white fill-white hover:bg-white hover:fill-black hover:text-black",
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
            //"bg-black" : "bg-white",
          )}
        ></div>
        <div
          className={classNames(
            "mx-auto flex w-[48px] items-center justify-center px-[16px] sm:w-[60px] sm:px-[20px]",
            //"stroke-black" : "stroke-white",
          )}
        >
          <NavSvg className="hidden sm:block" />
          <NavSmSvg className="sm:hidden" />
        </div>
      </div>
      <div>
        <DevelopmentMenu devOpened={devOpened} />
        <ConstructionMenu constOpened={constOpened} />
      </div>
    </div>
  );
};

export default Nav;

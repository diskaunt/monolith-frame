import classNames from "classnames";
import Link from "next/link";
import React from "react";

const DevelopmentMenu = ({ devOpened }: { devOpened: boolean }) => {
  const menuItems = [
    "девелопмент",
    "ипотека",
    "коммерческая недвижимость",
    "управляющая компания",
    "ход строительства",
  ];

  return (
    <>
      <div
        className={classNames(
          devOpened ? "visible z-10" : "invisible -z-10 delay-300",
          "trasition-all",
        )}
      >
        <div
          className={classNames(
            devOpened
              ? "translate-y-[0] opacity-100"
              : "translate-y-[-100%] opacity-0",
            "h-[410px] space-y-[30px] bg-white px-[23px] py-[31px] text-[34px] uppercase leading-[25px] tracking-normal text-black transition-all duration-300 sm:w-[458px] hd:w-[394px]",
          )}
        >
          {menuItems.map((item, i) => (
            <div key={i} className="relative">
              <Link
                className={classNames(
                  "hoverMenuNav",
                  "hover:ml-[13px] hover:border-b-2 hover:border-black",
                )}
                href={"/"}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DevelopmentMenu;

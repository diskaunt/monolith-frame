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
    <div
      className={classNames(
        devOpened ? "visible z-10" : "invisible -z-10 delay-300",
        "transition-all shadow-lg",
      )}
    >
      <div
        className={classNames(
          devOpened
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0",
          "w-menuDev-mobile max-w-[394px] space-y-[30px] bg-white px-[23px] py-[31px] transition-all duration-300 sm:h-[410px] hd:w-[394px]",
        )}
      >
        {menuItems.map((item, i) => (
          <div key={item} className="relative">
            <Link
              className={classNames(
                "hoverMenuNav",
                "text-[34px] uppercase leading-[25px] tracking-normal text-black hover:ml-[13px] hover:border-b-2 hover:border-black",
              )}
              href={"/"}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentMenu;

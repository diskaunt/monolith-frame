"use client";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ButtonOnConstruction = ({
  textColor = "white",
}: {
  textColor?: "white" | "black";
}) => {
  const path = usePathname();
  const router = useRouter();
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  useEffect(() => {
      // Проверяем, есть ли вертикальный скролл на документе
      const hasVerticalScroll =
        document.documentElement.scrollHeight >
        document.documentElement.clientHeight;
      if (hasVerticalScroll) {
        // Вычисляем ширину скроллбара
        const sbWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.classList.add("scrollBarGutterStable");
        setScrollBarWidth(sbWidth);
      }
      // Функция очистки
      return () => {
        document.documentElement.classList.remove("scrollBarGutterStable");
      };
  }, []);

  return (
    path && (
      <div
        className={classNames(
          path !== "/projects" ? "border-white" : "border-black",
          "fixed right-0 top-0 z-30 flex h-100svh border-l",
          // Если scrollBarWidth равен 0 (скролла нет), отступ справа 15px, иначе 0
          // scrollBarWidth === 0 ? "right-[15px]" : "right-0",
        )}
      >
        <button
          onClick={() => router.push("/construction")}
          className={classNames(
            path !== "/projects" ? "text-white" : "text-black",
            "vertical-text-top",
            "flex w-[60px] items-center self-center uppercase",
          )}
        >
          <p
            className={classNames(
              path !== "/projects" ? "text-white" : "text-black",
              "font-drucSyr text-[30px] uppercase leading-[25px] tracking-normal",
            )}
          >
            строительство
          </p>
        </button>
      </div>
    )
  );
};

export default ButtonOnConstruction;

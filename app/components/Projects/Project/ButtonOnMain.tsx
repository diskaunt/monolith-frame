"use client";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ButtonOnMain = ({
  textColor = "white",
}: {
  textColor?: "white" | "black";
}) => {
  const path = usePathname();
  const router = useRouter();
  return (
    path && (
      <div
        className={classNames(
          path !== "/projects" ? "border-white" : "border-black",
          "fixed left-0 z-30 flex h-100svh border-r",
        )}
      >
        <button
          onClick={() => router.replace("/")}
          className={classNames(
            path !== "/projects" ? "text-white" : "text-black",
            "vertical-text-bottom",
            "flex w-[60px] items-center self-center uppercase",
          )}
        >
          <p
            className={classNames(
              path !== "/projects" ? "text-white" : "text-black",
              "font-drucSyr text-[30px] uppercase leading-[25px] tracking-normal",
            )}
          >
            на главную
          </p>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.48535 25.4561L25.4559 8.48549"
              stroke={path !== "/projects" ? "white" : "black"}
              strokeWidth="1.5"
            />
            <path
              d="M25.4556 25.4561L8.485 8.48549"
              stroke={path !== "/projects" ? "white" : "black"}
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default ButtonOnMain;

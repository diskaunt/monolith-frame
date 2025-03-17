"use client";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ButtonOnConstruction = ({
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
          "fixed right-0 z-30 flex h-100svh border-l",
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

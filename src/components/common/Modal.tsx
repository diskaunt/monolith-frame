import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ArrowRight from "./ArrowRight";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Modal = React.memo(function Modal({
  id = "",
  modalRef,
  children,
  handleProjectOpen,
}: {
  id?: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
  handleProjectOpen: (router: AppRouterInstance, id:string) => void;
}) {
  const router = useRouter();

  // Закрытие модального окна при клике на фон и нажатии клавише Escape

  return (
    <dialog ref={modalRef} className="bg-inherit">
      <div className="flex items-center z-50 gap-[215px]">
        <div>{children}</div>
        <div className="hidden md:block">
          <button
            onClick={()=>handleProjectOpen(router, id)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
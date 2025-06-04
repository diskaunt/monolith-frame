import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ArrowRight from "./ArrowRight";

const Modal = React.memo(function Modal({
  id = "",
  modalRef,
  children,
}: {
  id?: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
}) {
  const router = useRouter();

	//открывает проект по клику на стрелку
	const handleClick = () => {
		router.push(`/projects/${id}`);
		document.body.style.overflow = "auto";
	};

  // Закрытие модального окна при клике на фон и нажатии клавише Escape

  return (
    <dialog ref={modalRef} className="bg-inherit">
      <div className="flex items-center z-50 gap-[215px]">
        <div>{children}</div>
        <div className="hidden md:block">
          <button
            onClick={handleClick}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
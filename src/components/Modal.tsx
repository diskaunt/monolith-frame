import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ArrowRight from "./ArrowRight";

const Modal = ({
  id = "",
  modalRef,
  children,
}: {
  id?: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  // Закрытие модального окна при клике на фон
  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      modalRef.current?.close();
      document.body.style.overflow = "auto";
    }
  };

  // Закрытие модального окна при нажатии клавиши Escape
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      modalRef.current?.close();
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.addEventListener("click", handleBackdropClick);
      modalElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener("click", handleBackdropClick);
        modalElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [modalRef]);

  return (
    <dialog ref={modalRef} className="bg-inherit">
      <div className="flex items-center z-50 gap-[215px]">
        <div>{children}</div>
        <div>
          <button
            onClick={() => {
              router.push(`/projects/${id}`);
              document.body.style.overflow = "auto";
            }}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import ArrowRight from '../../app/components/Main/Company/ArrowRight';

const Modal = ({
  id = '',
  modalRef,
  children,
}: {
  id?: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const closeOnBackDropClick = (event: MouseEvent) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      modalRef.current && modalRef.current.close();
      document.body.style.overflow = 'auto';
    }
  };
  const closeOnKeyDownEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      document.body.style.overflow = 'auto';
    }
  };
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('click', closeOnBackDropClick);
      modalRef.current.addEventListener('keydown', closeOnKeyDownEsc);
    }
    () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('click', closeOnBackDropClick);
        modalRef.current.removeEventListener('keydown', closeOnKeyDownEsc);
      }
    };
  }, []);
  return (
    <>
      <dialog ref={modalRef} className='bg-inherit'>
        <div className='flex items-center z-50 gap-[215px]'>
          <div>{children}</div>
          <div>
            <button
              onClick={() => {
                router.push(`/projects/${id}`);
								document.body.style.overflow = 'auto';
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;

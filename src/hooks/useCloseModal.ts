import { ReactRef } from '@gsap/react';
import React, { ReactElement, useCallback, useEffect, useRef } from 'react';

const useCloseModal = (isMounted: boolean) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Escape') {
      modalRef.current?.close();
      document.body.style.overflow = 'auto';
    } else if (event.type === 'click' && event.target === event.currentTarget) {
      modalRef.current?.close();
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.addEventListener('click', handleCloseModal);
      modalElement.addEventListener('keydown', handleCloseModal);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('click', handleCloseModal);
        modalElement.removeEventListener('keydown', handleCloseModal);
      }
    };
  }, [isMounted]);

  return modalRef;
};
export default useCloseModal;

import { ReactRef } from '@gsap/react';
import React, { ReactElement, useEffect } from 'react';

const useCloseModal = (modalRef: ReactRef) => {
  const handleCloseModal = (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Escape') {
      modalRef.current?.close();
      document.body.style.overflow = 'auto';
    } else if (event.type === "click" && event.target === event.currentTarget) {
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
  }, [modalRef]);
};
export default useCloseModal;

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Modal = ({
  onClose = () => {},
  children,
}: {
  onClose?: () => void;
  children: React.ReactNode;
}) => {
  const router = useRouter();
	const searchParams = useSearchParams()
  return (
    <dialog open={true} className='flex fixed z-50 top-[50%] translate-y-[-50%]'>
      <button
        onClick={() => {
          router.push(`/projects/${searchParams.get('id')}`);
        }}
      >

      </button>
      <div>{children}</div>
    </dialog>
  );
};

export default Modal;

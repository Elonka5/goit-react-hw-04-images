import { useEffect } from 'react';
import { OverLay } from 'components/Overlay/Overlay';
import { createPortal } from 'react-dom';

const modal_root = document.getElementById('modal_root');

export const Modal = ({ closeModal, src, alt }) => {
  useEffect(() => {
    const handleEscape = evt => {
      if (evt.key === 'Escape') {
        closeModal({ src: '', alt: '' });
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleOverLay = evt => {
    if (evt.target === evt.currentTarget) {
    closeModal({ src: '', alt: '' });
    }
  };
  return (
    <>
      {createPortal(
        <OverLay onClick={handleOverLay}>
          <img src={src} alt={alt} />
        </OverLay>,
        modal_root
      )}
    </>
  );
};

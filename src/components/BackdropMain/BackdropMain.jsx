import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import s from './BackdropMain.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const BackdropModal = ({ children, closeModal }) => {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);
  const isMouseDownRef = useRef(false);

  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleMouseDown = useCallback(() => {
    isMouseDownRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
    } else {
      handleClose();
    }
  }, [handleClose]);

  const handleModalClick = useCallback(event => {
    event.stopPropagation();
  }, []);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  useEffect(() => {
    const handleMouseUpOutsideModal = () => {
      if (isMouseDownRef.current) {
        isMouseDownRef.current = false;
        handleClose();
      }
    };

    document.addEventListener('mouseup', handleMouseUpOutsideModal);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOutsideModal);
    };
  }, [handleClose]);

  return createPortal(
    <div className={s.backdrop} onMouseUp={handleMouseUp} ref={backdropRef}>
      <div
        className={s.modal}
        onClick={handleModalClick}
        onMouseDown={handleMouseDown}
        ref={modalRef}
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React, { useEffect, useCallback, useState } from 'react';
import { BackdropModal } from '../BackdropMain/BackdropMain';
import { selectorTheme } from 'redux/Auth/authSelectors';
import s from './Modal.module.scss';
import svg from 'assets/icons/sprite.svg';

export const Modal = ({ title, onClose, children }) => {
  const theme = useSelector(selectorTheme);
  const [, setThemeClass] = useState('');
  console.log();

  useEffect(() => {
    setThemeClass(s[theme]);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <BackdropModal closeModal={onClose}>
      <div className={`${s.modal} ${s[theme]}`}>
        <div className={`${s.modalHeader} ${s[theme]}`}>
          <h3 className={`${s.title} ${s[theme]}`}>{title}</h3>
          <div onClick={handleClose} className={`${s.close} ${s[theme]}`}>
            <svg width="18" height="18" className={`${s.closeSvg} ${s[theme]}`}>
              <use xlinkHref={`${svg}#icon-x-close`} />
            </svg>
          </div>
        </div>
        <div className={s.modalContent}>{children}</div>
      </div>
    </BackdropModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

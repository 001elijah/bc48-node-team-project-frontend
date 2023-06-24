import s from './HeaderDashBoard.module.scss';
import svg from '../../assets/icons/sprite.svg';
import { useState } from 'react';
import { ModalFilter } from '../ModalFilter/ModalFilter';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { BackdropModal } from '../BackdropMain/BackdropMain';

export const HeaderDashBoard = ({ title }) => {
  const theme = useSelector(selectorTheme);
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  // const [color, setColor] = useState('');
  return (
    <>
      <div className={clsx(s.HeaderDash, s[theme])}>
        {title && (
          <span className={clsx(s.HeaderTitle, s[theme])}>{title}</span>
        )}
        <button
          className={clsx(s.HeaderFilter, s[theme])}
          onClick={handleModalWindowOpen}
          type="button"
        >
          <svg className={s.Svg} width="16" height="16">
            <use href={`${svg}#icon-${'filter'}`} />
          </svg>
          Filter
        </button>
        {showModalWindow && (
          <BackdropModal closeModal={handleModalWindowClose}>
            <ModalFilter closeModal={handleModalWindowClose} />
          </BackdropModal>
        )}
      </div>
    </>
  );
};

HeaderDashBoard.propTypes = {
  title: PropTypes.string,
};

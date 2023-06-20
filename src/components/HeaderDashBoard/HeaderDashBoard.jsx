import s from './HeaderDashBoard.module.scss';
import svg from '../../assets/icons/sprite.svg';
import { useState } from 'react';
import {Modal} from '../Modal/Modal';
import {ModalFilter} from '../ModalFilter/ModalFilter';
import PropTypes from 'prop-types';
import {BackdropModal} from '../BackdropMain/BackdropMain'

export const HeaderDashBoard = ({title}) => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  const [color, setColor]=useState('')
  return (
    <>
      <div className={s.HeaderDash}>
        {title&&(<span className={s.HeaderTitle}>{title}</span>)}
        <button
          className={s.HeaderFilter}
          onClick={handleModalWindowOpen}
          type="button"
        >
          <svg className={s.Svg} width="16" height="16">
            <use href={`${svg}#icon-${'filter'}`} />
          </svg>Filter
        </button>
        {showModalWindow && (
          <BackdropModal closeModal={handleModalWindowClose}>
            <ModalFilter
              closeModal={handleModalWindowClose}
              color={setColor}
            />
          </BackdropModal>
        )}
      </div>
    </>
  );
};

HeaderDashBoard.propTypes = {
  title: PropTypes.string,
};

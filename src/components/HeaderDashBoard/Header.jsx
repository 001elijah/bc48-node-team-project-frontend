import s from './DashBoard.module.scss';
import svg from '../../assets/icons/sprite.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import {ModalFilter} from '../BoardFilter/ModalFilter'

export const HeaderDashBoard = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  return (
    <>
      <div className={s.HeaderDash}>
        <span className={s.HeaderTitle}>Title</span>
        <button
          className={s.HeaderFilter}
          onClick={handleModalWindowOpen}
          type="button"
        >
          <svg className={s.Svg} width="16" height="16">
            <use href={`${svg}#icon-${'filter'}`} />
          </svg>Filter
          {/* <span className={s.HeaderFilterTitle}>Filter</span> */}
        </button>
        {showModalWindow && (
          <Modal closeModal={handleModalWindowClose}>
            <ModalFilter
              closeModal={handleModalWindowClose}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

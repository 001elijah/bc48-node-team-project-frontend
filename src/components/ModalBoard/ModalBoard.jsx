// import { useState } from 'react';
import s from './ModalBoard.module.css';
import PropTypes from 'prop-types';

export const ModalBoard = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  children,
}) => {
  return (
    <div className={s.Modal}>
      <button
        className={s.closeButton}
        // onClick={}
      ></button>
      <h1 className={s.modalTitle}>{modalTitle}</h1>
      <input className={s.inputModal} value="" placeholder={inputTitle} />
      {children}
      <button className={s.buttonModal}>
        <svg className={s.iconButtonModal} width="28" height="28">
          <use href="./sprayt.svg#icon-icon-send"></use>
        </svg>
        {titleModalButton}
      </button>
    </div>
  );
};

// export const Product = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   );
// };

ModalBoard.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  // page: PropTypes.number.isRequired,
  // onLoadMore: PropTypes.func.isRequired,
};

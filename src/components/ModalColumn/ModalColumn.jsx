// import { useState } from 'react';
import { useState } from 'react';
import s from './ModalColumn.module.css';
import PropTypes from 'prop-types';

export const ModalColumn = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  children,
  onClick,
  handleToggleModal,
}) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onClick(value);
    setValue('');
  };

  return (
    <div className={s.Modal}>
      <button className={s.closeButton} onClick={handleToggleModal}>
        <svg className={s.iconButtonModal} width="28" height="28">
          <use href="../../assets/icons/sprite.svg#icon-star"></use>
        </svg>
      </button>
      <h4 className={s.modalTitle}>{modalTitle}</h4>
      <input
        className={s.inputModal}
        value={value}
        placeholder={inputTitle}
        onChange={e => setValue(e.target.value)}
      />
      {children}
      <button className={s.buttonModal} type="button" onClick={handleClick}>
        <svg className={s.iconButtonModal} width="28" height="28">
          <use href="../../assets/icons/sprite.svg#icon-star"></use>
        </svg>
        {titleModalButton}
      </button>
    </div>
  );
};

ModalColumn.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

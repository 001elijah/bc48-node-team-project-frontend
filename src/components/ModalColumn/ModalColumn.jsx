// import { useState } from 'react';
import { useState } from 'react';
import s from './ModalColumn.module.scss';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';

export const ModalColumn = ({
  inputTitle,
  titleModalButton,
  modalTitle,
  onClick,
  children,
  handleToggleModal,
}) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onClick(value);
    setValue('');
  };

  return (
    <Modal title={modalTitle} onClose={onClick}>
      <input
        className={s.inputModal}
        value={value}
        placeholder={inputTitle}
        onChange={e => setValue(e.target.value)}
      />
      {children}
      <button className={s.buttonModal} type="button" onClick={handleClick}>
        <span className={s.spanButton}>
          <svg className={s.iconButtonModal} width="14" height="14">
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </span>
        {titleModalButton}
      </button>
    </Modal>
  );
};

ModalColumn.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

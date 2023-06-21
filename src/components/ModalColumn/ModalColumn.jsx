// import { useState } from 'react';
import { useState } from 'react';
import s from './ModalColumn.module.scss';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';

export const ModalColumn = ({
  inputTitle,
  titleModalButton,
  modalTitle,
  onClick,
  children,
}) => {
  const [value, setValue] = useState('');
  const theme = useSelector(selectorTheme);

  const handleClick = () => {
    onClick(value);
    setValue('');
  };

  return (
    // <div className={`${s.modal} ${s[theme]}`}>
    <Modal title={modalTitle} onClose={onClick}>
      <input
        className={`${s.inputModal} ${s[theme]}`}
        value={value}
        placeholder={inputTitle}
        onChange={e => setValue(e.target.value)}
      />
      {children}
      <button
        className={`${s.buttonModal} ${s[theme]}`}
        type="button"
        onClick={handleClick}
      >
        <span className={`${s.spanButton} ${s[theme]}`}>
          <svg
            className={`${s.iconButtonModal} ${s[theme]}`}
            width="14"
            height="14"
          >
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
  children: PropTypes.array.isRequired,
};

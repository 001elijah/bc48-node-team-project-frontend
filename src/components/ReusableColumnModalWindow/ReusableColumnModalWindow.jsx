import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import sprite from '../../assets/icons/sprite.svg';
import s from './ReusableColumnModalWindow.module.scss';

export const ReusableColumnModalWindow = ({
  inputTitle,
  titleModalButton,
  modalTitle,
  onClick,
  children,
}) => {
  const [value, setValue] = useState('');
  const theme = useSelector(selectorTheme);

  const handleSubmit = () => {
    console.log(value)
    // dispatch(addNewColumn(value));
    setValue('');
  };

  return (
    <Modal title={modalTitle} onClose={onClick}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={value}
          placeholder={inputTitle}
          onChange={e => setValue(e.target.value)}
        />
        {children}
        <button
          className={`${s.buttonModal} ${s[theme]}`}
          type="submit"
        >
          <span className={`${s.iconButtonModalWrapper} ${s[theme]}`}>
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
      </form>
    </Modal>
  );
};

ReusableColumnModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

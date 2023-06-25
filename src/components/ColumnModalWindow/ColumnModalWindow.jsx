import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import sprite from '../../assets/icons/sprite.svg';
import s from './ColumnModalWindow.module.scss';
import {addColumn} from '../../redux/Columns/ColumnOperation'

export const ColumnModalWindow = ({
  inputTitle,
  titleModalButton,
  modalTitle,
  onClick,
  boardId
}) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const theme = useSelector(selectorTheme);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newColumn = {
      title:value,
      boardId
    };
    console.log(value);
    dispatch(addColumn(newColumn));
    setValue('');
    onClick()
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
        <button className={`${s.buttonModal} ${s[theme]}`} type="submit">
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

ColumnModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

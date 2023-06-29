import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import sprite from '../../assets/icons/sprite.svg';
import s from './ColumnModalWindow.module.scss';
import { addColumn, editColumn } from '../../redux/Columns/ColumnOperation';

import { getBoardById } from '../../redux/Boards/boardsOperations';

export const ColumnModalWindow = ({
  inputTitle = '',
  titleModalButton,
  modalTitle,
  onClick,
  boardId,
  columnId,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(inputTitle);
  const theme = useSelector(selectorTheme);
  const [isValid, setIsValid] = useState(false);
  const [errorCirillicaTitle, setErrorCirillicaTitle] = useState(false);
  const [errorTitleMaxLength, setErrorTitleMaxLength] = useState(false);

  // const updateBoard = ()=>{
  //   setTimeout(()=>{dispatch(getBoardById(boardId)),0 })
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    if (errorCirillicaTitle) return;
    if (value === '') {
      setIsValid(true);
      setTimeout(() => setIsValid(false), 2500);
    } else {
      if (modalTitle === 'Edit column') {
        const editColumnTitle = {
          title: value,
          columnId,
          boardId,
        };
        await dispatch(editColumn(editColumnTitle));
      } else {
        const newColumn = {
          title: value,
          boardId,
        };
        await dispatch(addColumn(newColumn));
      }
      setValue('');
      onClick();
      dispatch(getBoardById(boardId));
    }
  };

  const handleChange = e => {
    const cyrillicRegex = /^[^\u0400-\u04FF]+$/;

    if (e.target.value.length > 0 && !cyrillicRegex.test(e.target.value)) {
      setErrorCirillicaTitle(true);
      e.preventDefault();
    } else {
      setErrorCirillicaTitle(false);
    }

    if (e.target.value.length === 64) {
      setErrorTitleMaxLength(true);
    } else {
      setErrorTitleMaxLength(false);
    }

    setValue(e.target.value);
  };
  return (
    <Modal title={modalTitle} onClose={onClick}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={value}
          placeholder="Title"
          maxLength="64"
          onChange={handleChange}
        />
        {isValid && <p className={s.errorTitle}>required field</p>}
        {errorTitleMaxLength && (
          <p className={s.errorTitleMaxLength}>
            you have reached the symbols limit
          </p>
        )}
        {errorCirillicaTitle && !errorTitleMaxLength && (
          <p className={s.errorCirillicaTitle}>
            invalid characters (latin alphabet only)
          </p>
        )}
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
  inputTitle: PropTypes.string,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string,
};

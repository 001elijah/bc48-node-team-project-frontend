import s from './BoardItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';

export const BoardItem = ({ boardName, icon, theme, onClick, isCurrent }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsOpenEditModal(prev => !prev);
  };

  return (
    <>
      <li
        onClick={onClick}
        className={clsx(s.item, s[theme], isCurrent && s.current)}
      >
        <div className={s.projectNameWrapper}>
          <svg className={clsx(s.iconProject, s[theme])}>
            <use href={icon}></use>
          </svg>
          <span className={clsx(s.text, s[theme])}>{boardName}</span>
        </div>
        <ul className={clsx(s.iconList, s[theme])}>
          <li>
            <button
              type="button"
              className={s.actionButton}
              onClick={handleToggleModal}
            >
              <svg className={clsx(s.actionIcon, s[theme])}>
                <use href={`${sprite}#icon-pencil`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button type="button" className={s.actionButton}>
              <svg className={clsx(s.actionIcon, s[theme])}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </li>
      {isOpenEditModal && (
        <BoardModalWindow
          inputTitle={boardName}
          modalTitle={'Edit board'}
          titleModalButton={'Edit'}
          onClick={handleToggleModal}
        />
      )}
    </>
  );
};

BoardItem.propTypes = {
  boardName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

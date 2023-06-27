import s from './BoardItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';
import { NavLink } from 'react-router-dom';

export const BoardItem = ({
  boardName,
  icon,
  theme,
  onClick,
  isCurrent,
  id,
}) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  // const handlEditSubmit = e => {
  //   e.preventDefault();
  //   const dataBoard = {
  //     title: value,
  //     icon,
  //     background,
  //   };
  //   dispatch(editBoard({ dataBoard, id }));
  //   setValue('');
  //   onClick();
  // };

  const handleToggleModal = () => {
    setIsOpenEditModal(prev => !prev);
  };

  return (
    <>
      <li
        onClick={onClick}
        className={clsx(s.item, s[theme], isCurrent && s.current)}
      >
        <NavLink to={`/home/${id}`} className={s.link}>
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
        </NavLink>
      </li>
      {isOpenEditModal && (
        <BoardModalWindow
          inputTitle={boardName}
          modalTitle={'Edit board'}
          titleModalButton={'Edit'}
          onClick={handleToggleModal}
          id={id}
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
  id: PropTypes.string.isRequired,
};

import s from './BoardItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBoard } from 'redux/Boards/boardsOperations';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';
import { Modal } from '../Modal/Modal';
import { removeBoard } from 'redux/Boards/boardsOperations';

export const BoardItem = ({
  boardName,
  icon,
  theme,
  onClick,
  isCurrent,
  id,
}) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editSubmit = dataBoard => {
    dispatch(editBoard({ dataBoard, id }));
  };

  const handleToggleEditModal = () => {
    setIsOpenEditModal(prev => !prev);
  };

  const handleToggleRemoveModal = () => {
    setIsOpenRemoveModal(prev => !prev);
  };

  const handleRemoveBoard = id => {
    dispatch(removeBoard(id));
    handleToggleRemoveModal();
    navigate('/bc48-node-team-project-frontend/home');
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
                onClick={handleToggleEditModal}
              >
                <svg className={clsx(s.actionIcon, s[theme])}>
                  <use href={`${sprite}#icon-pencil`}></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={s.actionButton}
                onClick={handleToggleRemoveModal}
              >
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
          handleToggleModal={handleToggleEditModal}
          onSubmit={editSubmit}
        />
      )}
      {isOpenRemoveModal && (
        <Modal
          title={`Are you sure you want to delete board '${boardName}'?`}
          onClose={handleToggleRemoveModal}
        >
          <ul className={s.removeButtonList}>
            <li className={s.removeItem}>
              <button
                onClick={() => handleRemoveBoard(id)}
                type="button"
                className={clsx(s.removeButton, s.remove, s[theme])}
              >
                Delete
              </button>
            </li>
            <li className={s.removeItem}>
              <button
                onClick={handleToggleRemoveModal}
                type="button"
                className={clsx(s.removeButton, s.cancel, s[theme])}
              >
                Cancel
              </button>
            </li>
          </ul>
        </Modal>
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

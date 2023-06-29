import s from './BoardItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from 'assets/icons/sprite.svg';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  editBoard,
  removeBoard,
  getBoardById,
} from 'redux/Boards/boardsOperations';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';
import { Modal } from '../Modal/Modal';

export const BoardItem = ({
  id,
  boardName,
  icon,
  background = "default",
  theme,
  onClick,
  isCurrent,
}) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editSubmit = async dataBoard => {
        await dispatch(editBoard({ dataBoard, id }));
        dispatch(getBoardById(id));
  };

  const handleOpenEditModal = e => {
    e.stopPropagation();
    setIsOpenEditModal(true);

  };
  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };

  const handleOpenRemoveModal = e => {
    e.stopPropagation();
    setIsOpenRemoveModal(true);
  };
  const handleCloseRemoveModal = () => {
    setIsOpenRemoveModal(false);
  };

  const handleRemoveBoard = id => {
    dispatch(removeBoard(id));
    handleCloseRemoveModal();
    navigate('/bc48-node-team-project-frontend/home');
  };

  return (
    <>
      <li
        onClick={e => {
          e.stopPropagation();
          onClick(id);
        }}
        className={clsx(s.item, s[theme], isCurrent && s.current)}
      >
        <NavLink to={`/home/${id}`} className={s.link}>
          <div className={s.projectNameWrapper}>
            <svg className={clsx(s.iconProject, s[theme])}>
              <use href={icon}></use>
            </svg>
            <span className={clsx(s.text, s[theme])}>{boardName}</span>
          </div>
        </NavLink>
        <ul className={clsx(s.iconList, s[theme])}>
          <li>
            <button
              type="button"
              className={s.actionButton}
              onClick={handleOpenEditModal}
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
              onClick={handleOpenRemoveModal}
            >
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
          activeIcon={icon.slice(icon.indexOf('#') + 1, icon.length)}
          activeBackground={background}
          modalTitle={'Edit board'}
          titleModalButton={'Edit'}
          handleToggleModal={handleCloseEditModal}
          onSubmit={editSubmit}
        />
      )}
      {isOpenRemoveModal && (
        <Modal
          title={`Are you sure you want to delete board '${boardName}'?`}
          onClose={handleCloseRemoveModal}
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
                onClick={handleCloseRemoveModal}
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
  background: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

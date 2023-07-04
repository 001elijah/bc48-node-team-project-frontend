import { selectorTheme } from 'redux/Auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import React, { useState } from 'react';
import { HeaderDashBoard } from 'components/HeaderDashBoard/HeaderDashBoard';
import s from './Default.module.scss';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';

import { addNewBoard } from 'redux/Boards/boardsOperations';
export const DefaultDashBoard = () => {  
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);

  const handleAddBoard = async newBoard => {
    await dispatch(addNewBoard(newBoard));
  };
  return (
    <>
      <div className={clsx(s.backGround, s[theme])}>
        <HeaderDashBoard />

        <p className={clsx(s.defaultTitle, s[theme])}>
          Before starting your project, it is essential
          <span className={clsx(s.defaultLink, s[theme])} onClick={handleModalWindowOpen}> to create a board
          </span>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
      {showModalWindow && (
        <BoardModalWindow
          titleModalButton="Create"
          modalTitle="New board"
          handleToggleModal={handleModalWindowClose}
          onSubmit={handleAddBoard}
        />
      )}
    </>
  );
};

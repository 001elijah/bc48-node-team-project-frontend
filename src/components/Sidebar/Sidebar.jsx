import s from './Sidebar.module.scss';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo';
import { NewBoardButton } from '../NewBoardButton/NewBoardButton';
import { BoardList } from '../BoardList/BoardList';
import { HelpWindow } from '../HelpWindow/HelpWindow';
import { Logout } from '../Logout/Logout';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { selectBoards, currentBoard } from 'redux/Boards/boardsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';
import { useState } from 'react';
import { addNewBoard } from 'redux/Boards/boardsOperations';

export const Sidebar = () => {
  const boards = useSelector(selectBoards);
  const activeBoard = useSelector(currentBoard);
  const theme = useSelector(selectorTheme);
  const dispatch = useDispatch();

  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  if (!theme) return;

  const handleAddBoard = async newBoard => {
    await dispatch(addNewBoard(newBoard));
  };

  return (
    <div className={clsx(s.container, s[theme])}>
      <Logo theme={theme} />
      <p className={clsx(s.text, s[theme])}>My boards</p>
      <NewBoardButton theme={theme} onClick={handleModalWindowOpen} />
      <BoardList theme={theme} boards={boards} currentBoard={activeBoard} />

      <HelpWindow theme={theme} />
      <Logout theme={theme} />
      {showModalWindow && (
        <BoardModalWindow
        inputTitle=''
          titleModalButton="Create"
          modalTitle="New board"
          handleToggleModal={handleModalWindowClose}
          onSubmit={handleAddBoard}
          activeIcon=''
          activeBackground=''
        />
      )}
    </div>
  );
};

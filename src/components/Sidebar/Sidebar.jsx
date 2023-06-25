import s from './Sidebar.module.scss';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo';
import { NewBoardButton } from '../NewBoardButton/NewBoardButton';
import { BoardList } from '../BoardList/BoardList';
import { HelpWindow } from '../HelpWindow/HelpWindow';
import { Logout } from '../Logout/Logout';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { selectBoards } from 'redux/Boards/boardsSelectors';
import { useSelector } from 'react-redux';
import { BoardModalWindow } from '../BoardModalWindow/BoardModalWindow';
import { useState } from 'react';

export const Sidebar = () => {
  const boards = useSelector(selectBoards);
  const theme = useSelector(selectorTheme);
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  if (!theme) return;
  
  return (
    <div className={clsx(s.container, s[theme])}>
      <Logo theme={theme} />
      <p className={clsx(s.text, s[theme])}>My boards</p>
      <NewBoardButton theme={theme} onClick={handleModalWindowOpen} />
      <BoardList theme={theme} boards={boards} />
      <HelpWindow theme={theme} />
      <Logout theme={theme} />
        {showModalWindow && ( <BoardModalWindow
            inputTitle="Title"
            titleModalButton="Create"
            modalTitle="New board"
            onClick = {handleModalWindowClose}
          />
      )}
    </div>
  );
};

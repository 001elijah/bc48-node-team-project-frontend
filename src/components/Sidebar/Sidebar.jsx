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

import { useState } from 'react';
import { CalendarLight } from 'components/CalendarLight/CalendarLight';
import { CalendarDark } from 'components/CalendarDark/CalendarDark';
import { CardModalWindow } from 'components/CardModalWindow/CardModalWindow';
// import { BoardModalWindow } from 'components/BoardModalWindow/BoardModalWindow';

export const Sidebar = () => {
  const boards = useSelector(selectBoards);
  const theme = useSelector(selectorTheme);

  const [date, setDate] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);
  if (!theme) return;

  // const handleAddBoard = value => {
  //   console.log(`disacth add board ${value}`);
  // };

  const handleAddCard = value => {
    console.log(value);
  };

  return (
    <div className={clsx(s.container, s[theme])}>
      <Logo theme={theme} />
      <p className={clsx(s.text, s[theme])}>My boards</p>
      <NewBoardButton theme={theme} onClick={handleModalWindowOpen} />
      <BoardList theme={theme} boards={boards} />
      {/* {theme === 'dark' ? ( */}
      <CalendarDark onDate={setDate} />

      <HelpWindow theme={theme} />
      <Logout theme={theme} />
      {showModalWindow && (
        // <BoardModalWindow
        //   inputTitle="Title"
        //   titleModalButton="Create"
        //   modalTitle="New board"
        //   handleToggleModal={handleModalWindowClose}
        //   onSubmit={handleAddBoard}
        // />
        <CardModalWindow
          inputTitle="Title"
          titleModalButton="Create"
          modalTitle="New board"
          handleToggleModal={handleModalWindowClose}
          onSubmit={handleAddCard}
        />

        // <CalendarDark onDate={setDate} />
      )}
    </div>
  );
};

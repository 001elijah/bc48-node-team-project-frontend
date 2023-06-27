// import s from './MainBoard.module.scss';
import { Wrapper } from './MainBoard.styled';
import PropTypes from 'prop-types';
import { HeaderDashBoard } from '../HeaderDashBoard/HeaderDashBoard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/Boards/boardsSelectors';
import { selectorTheme } from 'redux/Auth/authSelectors';
// import clsx from 'clsx';
import { useState } from 'react';
import { ColumnModalWindow } from '../ColumnModalWindow/ColumnModalWindow';
// import {TaskCard} from '../../TaskCard/TaskCard'
// import {TasksColumnHeader} from '../TasksColumnHeader/TasksColumnHeader'

export const MainBoard = () => {
  const theme = useSelector(selectorTheme);
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);

  let curTheme = '';
  switch (theme) {
    case 'dark':
      curTheme = '#1F1F1F';
      break;
    case 'light':
      curTheme = '##F6F6F7';
      break;
    case 'colorful':
      curTheme = '#ECEDFD';
      break;
    default:
      curTheme = '#1F1F1F';
  }

  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  if (boards.length === 0) return;
  const getBoard = boards.find(board => board._id === boardName);
  const imgid = getBoard.background;
  const BASE_URL_IMG =
    'https://res.cloudinary.com/dblzpxfzb/image/upload/v1687449642/background/';
  return (
    <>
      <Wrapper
        /* div className={clsx(s.Wrapper, s[theme])} */
        imgurl={BASE_URL_IMG}
        imgid={imgid}
        colorbg={curTheme}
      >
        <HeaderDashBoard title={getBoard.title} />
        {/* {getBoard.columns.map(({title, id})=>{
            <TasksColumnHeader
              key={id}
              title={title}
              editColumn
              removeColumn
            />
          })} */}
        {/* <TaskCard/> */}
        <AddButton
          typeOfButton="Column"
          title="Add another column"
          onClick={handleModalWindowOpen}
        />
      </Wrapper>
      {showModalWindow && (
        <ColumnModalWindow
          inputTitle="Title"
          titleModalButton="Add"
          modalTitle="Add column"
          onClick={handleModalWindowClose}
          boardId={getBoard._id}
        />
      )}
    </>
  );
};

MainBoard.propTypes = {
  imgid: PropTypes.string,
};

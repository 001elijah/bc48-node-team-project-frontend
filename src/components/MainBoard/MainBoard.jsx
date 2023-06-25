// import s from './MainBoard.module.scss';
import { Wrapper } from './MainBoard.styled';
import PropTypes from 'prop-types';
import { HeaderDashBoard } from '../HeaderDashBoard/HeaderDashBoard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoards } from 'redux/Boards/boardsSelectors';
import { useState } from 'react';
import { ColumnModalWindow } from '../ColumnModalWindow/ColumnModalWindow';
// import {TaskCard} from '../../TaskCard/TaskCard'
// import {TasksColumnHeader} from '../TasksColumnHeader/TasksColumnHeader'

const BASE_URL_IMG =
  'https://res.cloudinary.com/dblzpxfzb/image/upload/v1687449642/background/';
// import { useParams } from 'react-router-dom';

export const MainBoard = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => setShowModalWindow(true);
  const handleModalWindowClose = () => setShowModalWindow(false);


  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  if (boards.length === 0) return;
  const getBoard = boards.find(board => board._id === boardName);

  // console.log(getBoard.columns);
  return (
    <>
      <Wrapper imgurl={BASE_URL_IMG}>
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

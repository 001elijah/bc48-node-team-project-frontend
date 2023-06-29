import { Wrapper, ColumnsList, ContentBoard,  } from './MainBoard.styled';
import PropTypes from 'prop-types';
import { HeaderDashBoard } from '../HeaderDashBoard/HeaderDashBoard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentBoard } from 'redux/Boards/boardsSelectors';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useEffect, useState } from 'react';
import { ColumnModalWindow } from '../ColumnModalWindow/ColumnModalWindow';
import { TasksColumnHeader } from '../TasksColumnHeader/TasksColumnHeader';
import { getBoardById } from '../../redux/Boards/boardsOperations';

export const MainBoard = () => {
  const dispatch = useDispatch();
  const { boardName } = useParams();

  useEffect(() => {
    dispatch(getBoardById(boardName));
  }, [boardName]);

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
      curTheme = '#F6F6F7';
      break;
    case 'colorful':
      curTheme = '#ECEDFD';
      break;
    default:
      curTheme = '#1F1F1F';
  }

  const board = useSelector(currentBoard);
  if (!board) return null;
  return (
    <>
      {/* <Wrapper isExpanded={typeof(board.background)==='object'? true:false} imgurl={board.background} colorbg={curTheme}> */}
      <Wrapper isExpanded={(!board.background)? false:true} imgurl={board.background} colorbg={curTheme}>
       
        <HeaderDashBoard title={board.title} />
        <ContentBoard>
          <ColumnsList>
            {board.columns.map(item => (
              <TasksColumnHeader
                key={item.id}
                title={item.title}
                id={item.id}
                boardId={board._id}
              />
            ))}
          </ColumnsList>
          <AddButton
            typeOfButton="Column"
            title="Add another column"
            onClick={handleModalWindowOpen}
          />
        </ContentBoard>
      </Wrapper>
      {showModalWindow && (
        <ColumnModalWindow
          titleModalButton="Add"
          modalTitle="Add column"
          onClick={handleModalWindowClose}
          boardId={board._id}
        />
      )}
    </>
  );
};

MainBoard.propTypes = {
  imgid: PropTypes.string,
};

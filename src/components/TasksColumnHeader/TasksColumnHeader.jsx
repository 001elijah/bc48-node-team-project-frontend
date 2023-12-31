// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';
import { ColumnModalWindow } from '../ColumnModalWindow/ColumnModalWindow';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from 'components/TaskControlButton/TaskControlButton';
import { removeColumn } from '../../redux/Columns/ColumnOperation';
import s from './TasksColumnHeader.module.scss';
import { useState } from 'react';

import { getBoardById } from '../../redux/Boards/boardsOperations';
import { TaskColumn } from '../TaskColumn/TaskColumn';

export const TasksColumnHeader = ({ title, id, boardId }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalWindowOpen = () => setIsModalOpen(true);
  const handleModalWindowClose = () => {
    setIsModalOpen(false);
  };

  const deleteColumn = async () => {
    const delData = {
      columnId: id,
      boardId,
    };
    await dispatch(removeColumn(delData));
    dispatch(getBoardById(boardId));
  };

  return (
    <li className={s.columnsList}>
      <div className={clsx(s.columnHeaderWrapper, s[theme])}>
        <h4 className={clsx(s.title, s[theme])}>{title}</h4>
        <ul className={s.buttonList}>
          <li key={shortid.generate()} className={s.item}>
            <TaskControlButton
              icon="#icon-pencil"
              onClick={handleModalWindowOpen}
            />
          </li>
          <li key={shortid.generate()} className={s.item}>
            <TaskControlButton icon="#icon-trash" onClick={deleteColumn} />
          </li>
        </ul>
      </div>
      <TaskColumn key={id} columnId={id} />
      {isModalOpen && (
        <ColumnModalWindow
          inputTitle={title}
          titleModalButton="Edit"
          modalTitle="Edit column"
          onClick={handleModalWindowClose}
          boardId={boardId}
          columnId={id}
        />
      )}
    </li>
  );
};

TasksColumnHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};

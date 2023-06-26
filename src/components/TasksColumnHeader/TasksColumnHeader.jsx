import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';
import { ColumnModalWindow } from '../ColumnModalWindow/ColumnModalWindow';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from 'components/TaskControlButton/TaskControlButton';
import { delColumn } from '../../redux/Columns/ColumnOperation';
import s from './TasksColumnHeader.module.scss';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { CardModalWindow } from '../CardModalWindow/CardModalWindow';

export const TasksColumnHeader = ({ title, id, boardId }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalWindowOpen = () => setIsModalOpen(true);
  const handleModalWindowClose = () => setIsModalOpen(false);

  const [ModalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const ModalWindowClose = () => setModalOpen(false);
  const theme = useSelector(selectorTheme);

  const openModalEditColumn = () => {
    setIsModalOpen(true);
  };

  const deleteColumn = () => {
    const delData = {
      columnId: id,
      boardId,
    };
    dispatch(delColumn(delData));
  };

  // const closeModalEditColumn = () => setIsModalOpen(false);
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
      <ul>
        <TaskCard />
      </ul>
      <AddButton
        title="Add another card"
        typeOfButton="Card"
        onClick={ModalWindowOpen}
      />
      {isModalOpen && (
        <ColumnModalWindow
          inputTitle={title}
          titleModalButton="Add"
          modalTitle="Edit column"
          onClick={handleModalWindowClose}
          boardId={boardId}
          columnId={id}
        />
      )}
      {ModalOpen && (
        <CardModalWindow
          modalTitle="Add card"
          inputTitle="Add card"
          titleModalButton="Add card"
          // onClick={ModalWindowClose}
          // handleToggleModal={ModalWindowClose}
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

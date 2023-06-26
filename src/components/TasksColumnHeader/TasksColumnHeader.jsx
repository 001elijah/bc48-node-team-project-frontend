import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';

import { selectorTheme } from 'redux/Auth/authSelectors';
import { removeColumn } from 'redux/Column/columnOperations';
import { TaskControlButton } from 'components/TaskControlButton/TaskControlButton';
import s from './TasksColumnHeader.module.scss';

export const TasksColumnHeader = ({ title, id }) => {
  const dispatch = useDispatch();

  const theme = useSelector(selectorTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalEditColumn = () => {
    setIsModalOpen(true);
  };

  const closeModalEditColumn = () => setIsModalOpen(false);
  return (
    <div className={clsx(s.columnHeaderWrapper, s[theme])}>
      <h4 className={clsx(s.title, s[theme])}>
        {title}
        Lorem, ipsum dolor.
      </h4>
      <ul className={s.buttonList}>
        <li key={shortid.generate()} className={s.item}>
          <TaskControlButton
            icon="#icon-pencil"
            onClick={() => {
              openModalEditColumn;
            }}
          />
        </li>
        <li key={shortid.generate()} className={s.item}>
          <TaskControlButton
            icon="#icon-trash"
            onClick={() => dispatch(removeColumn(id))}
          />
        </li>
      </ul>
      {/* {isModalOpen && <ModalEditColumn closeModal={closeModalEditColumn} />} */}
    </div>
  );
};

TasksColumnHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

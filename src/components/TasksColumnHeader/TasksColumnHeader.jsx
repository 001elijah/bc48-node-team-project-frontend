import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import clsx from 'clsx';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from 'components/TaskControlButton/TaskControlButton';
import s from './TasksColumnHeader.module.scss';

export const TasksColumnHeader = ({ title, editColumn, removeColumn }) => {
  const theme = useSelector(selectorTheme);
  return (
    <div className={clsx(s.columnHeaderWrapper, s[theme])}>
      <h4 className={clsx(s.title, s[theme])}>
        {title}
        Lorem, ipsum dolor.
      </h4>
      <ul className={s.buttonList}>
        <li key={shortid.generate()} className={s.item}>
          <TaskControlButton icon="#icon-pencil" onClick={editColumn} />
        </li>
        <li key={shortid.generate()} className={s.item}>
          <TaskControlButton icon="#icon-trash" onClick={removeColumn} />
        </li>
      </ul>
    </div>
  );
};

TasksColumnHeader.propTypes = {
  title: PropTypes.string.isRequired,
  editColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
};

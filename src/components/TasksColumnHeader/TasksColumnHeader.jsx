import PropTypes from 'prop-types';
import { TaskControlButton } from 'components/TaskControlButton/TaskControlButton';
import s from './ColumnHeader.module.scss';

export const TasksColumnHeader = ({ title, editColumn, removeColumn }) => {
  return (
    <div className={s.columnHeaderWrapper}>
      <h4 className={s.title}>
        {title}
        Lorem, ipsum dolor.
      </h4>
      <ul>
        <li className={s.buttonList}>
          <TaskControlButton icon="#icon-pencil" onClick={editColumn} />
        </li>
        <li>
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

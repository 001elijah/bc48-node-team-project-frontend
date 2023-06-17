import PropTypes from 'prop-types';
import ControlButton from 'components/ControlButton/ControlButton';
import s from './ColumnHeader.module.scss';

const ColumnHeader = ({ title, editColumn, removeColumn }) => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>
        {title}
        Lorem, ipsum dolor.
      </h4>
      <ul>
        <li className={s.buttonList}>
          <ControlButton icon="#icon-pencil" onClick={editColumn} />
        </li>
        <li>
          <ControlButton icon="#icon-trash" onClick={removeColumn} />
        </li>
      </ul>
    </div>
  );
};

ColumnHeader.propTypes = {
  title: PropTypes.string.isRequired,
  editColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
};

export default ColumnHeader;

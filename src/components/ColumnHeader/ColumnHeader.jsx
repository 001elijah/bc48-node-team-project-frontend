import ControlButton from 'components/ControlButton/ControlButton';
import s from './ColumnHeader.module.scss';

const ColumnHeader = () => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Lorem, ipsum dolor.</h4>
      <ul>
        <li className={s.buttonList}>
          <ControlButton icon="#icon-pencil" />
        </li>
        <li>
          <ControlButton icon="#icon-trash" />
        </li>
      </ul>
    </div>
  );
};

export default ColumnHeader;

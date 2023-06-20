import s from './ButtonAddColumn.module.scss';
import svg from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const AddButton = ({ title, typeOfButton }) => {
  const newClass = typeOfButton === 'Column' ? s.Column : s.Card;
  return (
    <>
      <div className={clsx(s.Button, newClass)}>
        <div className={clsx(s.BoxPlus, newClass)}>
          <svg width="16" height="16" className={s.Svg}>
            <use href={`${svg}#icon-${'plus'}`} />
          </svg>
        </div>
        <p className={clsx(s.TitleCard, newClass)}>{title}</p>
      </div>
    </>
  );
};

AddButton.propTypes = {
  title: PropTypes.string,
  typeOfButton: PropTypes.string,
};

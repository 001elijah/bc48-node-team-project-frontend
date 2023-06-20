import PropTypes from 'prop-types';
import clsx from 'clsx';
import s from './TaskControlButton.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const TaskControlButton = ({ icon, onClick, theme }) => {
  return (
    <button className={s.button} onClick={onClick} type="button">
      <svg className={clsx(s.icon, s[theme])}>
        <use href={sprite + icon}></use>
      </svg>
    </button>
  );
};

TaskControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

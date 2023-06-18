import PropTypes from 'prop-types';
import s from './TaskControlButton.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const TaskControlButton = ({ icon, onClick }) => {
  return (
    <button className={s.button} onClick={onClick} type="button">
      <svg className={s.icon}>
        <use href={sprite + icon}></use>
      </svg>
    </button>
  );
};

TaskControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

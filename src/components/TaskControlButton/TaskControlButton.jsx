import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectorTheme } from 'redux/Auth/authSelectors';
import s from './TaskControlButton.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const TaskControlButton = ({ icon, onClick }) => {
  const theme = useSelector(selectorTheme);
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
};

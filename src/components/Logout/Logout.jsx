import s from './Logout.module.scss';
import sprite from 'assets/icons/sprite.svg';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/Auth/authOperations';

export const Logout = ({ theme }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.buttonWrapper}>
      <button
        type="button"
        className={clsx(s.button, s[theme])}
        onClick={() => dispatch(logoutUser())}
      >
        <svg className={clsx(s.icon, s[theme])}>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        <span className={clsx(s.text, s[theme])}>Log out</span>
      </button>
    </div>
  );
};

Logout.propTypes = {
  theme: PropTypes.string.isRequired,
};

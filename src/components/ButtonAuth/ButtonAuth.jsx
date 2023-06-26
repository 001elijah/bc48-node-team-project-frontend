import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectorTheme } from 'redux/Auth/authSelectors';

import s from './ButtonAuth.module.scss';

export const ButtonAuth = ({ title }) => {
  const thema = useSelector(selectorTheme);
  return (
    <button type="submit" className={`${s.button} ${s[thema]}`}>
      {title}
    </button>
  );
};

ButtonAuth.propTypes = {
  title: PropTypes.string.isRequired,
};

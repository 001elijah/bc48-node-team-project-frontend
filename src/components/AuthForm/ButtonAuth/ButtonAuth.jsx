import PropTypes from 'prop-types';

import s from './ButtonAuth.module.scss';

export const ButtonAuth = ({ title }) => {
  return (
    <button type="submit" className={s.button}>
      {title}
    </button>
  );
};

ButtonAuth.propTypes = {
  title: PropTypes.string.isRequired,
};

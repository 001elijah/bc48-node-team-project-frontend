import s from './Logo.module.scss';
import sprite from '../../../assets/icons/sprite.svg';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Logo = ({ theme }) => {
  return (
    <a
      href="/bc48-node-team-project-frontend/home"
      className={clsx(s.link, s[theme])}
    >
      <svg className={s.icon}>
        <use href={`${sprite}#icon-logo-${theme}`}></use>
      </svg>
      Task Pro
    </a>
  );
};

Logo.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Logo;

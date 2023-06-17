import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import s from './ControlButton.module.scss';

const ControlButton = ({ icon, onClick }) => {
  return (
    <button className={s.button} onClick={onClick} type="button">
      <svg className={s.icon}>
        <use href={sprite + icon}></use>
      </svg>
    </button>
  );
};

ControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ControlButton;

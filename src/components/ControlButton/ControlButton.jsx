import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import s from './ControlButton.module.scss';

const ControlButton = ({ icon }) => {
  return (
    <button className={s.button}>
      <svg>
        <use href={sprite + icon}></use>
      </svg>
    </button>
  );
};

ControlButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default ControlButton;

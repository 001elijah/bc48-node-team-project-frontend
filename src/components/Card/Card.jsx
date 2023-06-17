import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import ControlButton from '../../components/ControlButton/ControlButton';
import s from './Card.module.scss';

const Card = ({
  title,
  description,
  priority = 'Without',
  deadline,
  changeColumn,
  editCard,
  removeCard,
}) => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>
        {title}
        Lorem, ipsum dolor.
      </h4>
      <p className={s.description}>
        {description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        laboriosam numquam vero totam quidem nostrum deserunt harum voluptate,
        quaerat illum.
      </p>
      <div>
        <h5 className={s.subtitle}>Priority</h5>
        <div>
          <div
            className={clsx(
              s.priorityBox,
              priority === 'Low' && s.bg_low,
              priority === 'Medium' && s.bg_medium,
              priority === 'High' && s.bg_high,
            )}
          ></div>
          <p className={s.text}>{priority}</p>
        </div>
      </div>
      <div>
        <h5 className={s.subtitle}>Deadline</h5>
        <p className={s.text}>
          {deadline}
          12/05/2023
        </p>
      </div>
      <ul className={s.buttonList}>
        <li>
          <svg className={s.icon}>
            <use href={sprite + '#icon-bell'}></use>
          </svg>
        </li>
        <li>
          <ControlButton icon="#icon-arrow" onClick={changeColumn} />
        </li>
        <li>
          <ControlButton icon="#icon-pencil" onClick={editCard} />
        </li>
        <li>
          <ControlButton icon="#icon-trash" onClick={removeCard} />
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  changeColumn: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default Card;

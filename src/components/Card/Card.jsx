import ControlButton from '../../components/ControlButton/ControlButton';
import s from './Card.module.scss';

const Card = () => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Lorem, ipsum dolor.</h4>
      <p className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        laboriosam numquam vero totam quidem nostrum deserunt harum voluptate,
        quaerat illum.
      </p>
      <div>
        <h5 className={s.subtitle}>Priority</h5>
        <div>
          <div className={s.priorityBox}></div>
          <p className={s.text}>Low</p>
        </div>
      </div>
      <div>
        <h5 className={s.subtitle}>Deadline</h5>
        <p className={s.text}>12/05/2023</p>
      </div>
      <ul className={s.buttonList}>
        <li>
          <ControlButton icon="#icon-bell" />
        </li>
        <li>
          <ControlButton icon="#icon-arrow" />
        </li>
        <li>
          <ControlButton icon="#icon-pencil" />
        </li>
        <li>
          <ControlButton icon="#icon-trash" />
        </li>
      </ul>
    </div>
  );
};

export default Card;

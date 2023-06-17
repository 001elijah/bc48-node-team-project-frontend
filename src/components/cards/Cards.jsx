import s from './Cards.module.scss';
import PropTypes from 'prop-types';
import { IconsBlock } from './IconsBlock';

export const Card = ({title, desc, status, deadline}) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.TextBlock}>
        <h3 className={s.CardTitle}>{title}</h3>
        <p className={s.CardDisc}>{desc}</p>
      </div>
      <div className={s.ModuleBlock}>
        <div className={s.InfoBlock}>
          <div className={s.PriorityBlock}>

            <p className={s.TitleBlock}>Priority</p>
            <p className={s.PriorityStatus}>{status}</p>
          </div>
          <div className={s.DeadlineBlock}>
            <p className={s.TitleBlock}>Deadline</p>
            <p className={s.DeadlineDate}>{deadline}</p>
          </div>
        </div>
        <IconsBlock />

      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  status: PropTypes.string,
  deadline: PropTypes.string,
};

import s from './Cards.module.scss';
import { IconsBlock } from './IconsBlock';

export const Card = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.TextBlock}>
        <h3 className={s.CardTitle}>The Watch Spot Design</h3>
        <p className={s.CardDisc}>
          Create a visually stunning and eye-catching watch dial design that
          embodies our brand's essence of sleek aesthetics and modern elegance.
          Your design should be unique, innovative, and reflective of the latest
          trends in watch design.
        </p>
      </div>
      <div className={s.ModuleBlock}>
        <div className={s.InfoBlock}>
          <div className={s.PriorityBlock}>
            <p className={s.TitleBlock}></p>
          </div>
          <div className={s.DeadlineBlock}></div>
        </div>
        <IconsBlock         />
      </div>
    </div>
  );
};

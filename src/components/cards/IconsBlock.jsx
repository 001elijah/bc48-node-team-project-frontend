import iconSvg from './icons';
import s  from './Cards.module.scss'




export const IconsBlock = () => {
  return (
    <ul className={s.ControlBlock}>
      <li className={s.IconsItem}>{iconSvg('bell', )}</li>
      <li className={s.IconsItem}>{iconSvg('arrow', )}</li>
      <li className={s.IconsItem}>{iconSvg('pencil', )}</li>
      <li className={s.IconsItem}>{iconSvg('trash', )}</li>
    </ul>
  );
};

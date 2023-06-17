import IconSvg from './Icons';
import s  from './Cards.module.scss'


export const IconsBlock = () => {
  return (
    <ul className={s.ControlBlock}>
      <li className={s.IconsItem}>{IconSvg('bell', )}</li>
      <li className={s.IconsItem}>{IconSvg('arrow', )}</li>
      <li className={s.IconsItem}>{IconSvg('pencil', )}</li>
      <li className={s.IconsItem}>{IconSvg('trash', )}</li>
    </ul>
  );
};

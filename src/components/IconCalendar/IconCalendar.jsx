import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import sprite from '../../assets/icons/sprite.svg';
import s from './IconCalendar.module.scss';

const IconCalendar = () => {
  const theme = useSelector(selectorTheme);
  return (
    <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
      <use href={sprite + '#icon-chevron-down'} />
    </svg>
  );
};

// Width
// 9px
// Height
// 4.5px
export default IconCalendar;

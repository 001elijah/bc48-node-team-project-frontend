import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  selectorAvatarURL,
  selectorTheme,
  selectorUserName,
} from 'redux/Auth/authSelectors';
import s from './UserInfo.module.scss';
import icons from '../../assets/icons/sprite.svg';

export const UserInfo = () => {
  const theme = useSelector(selectorTheme);
  const userName = useSelector(selectorUserName);
  const userAvatar = useSelector(selectorAvatarURL);

  return (
    <div className={s.userInfo}>
      <div className={clsx(s.name, s[theme])}>{userName || 'user'}</div>
      {userAvatar ? (
        <img className={s.avatar} src={userAvatar} alt="avatar" />
      ) : (
        <svg className={s.avatar}>
          <use href={`${icons}#icon-user-${theme || 'light'}`}></use>
        </svg>
      )}
    </div>
  );
};

import { useSelector } from 'react-redux';
import s from './UserInfo.module.scss';

import icons from '../../assets/icons/sprite.svg';

export const UserInfo = () => {
  const theme = useSelector(state => state.auth?.user?.theme);
  const userName = useSelector(state => state.auth?.user?.userName);
  const userAvatar = useSelector(state => state.auth?.user?.avatarUrl);

  return (
    <div className={s.userInfo}>
      <div className={s.name}>{userName || 'user'}</div>
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

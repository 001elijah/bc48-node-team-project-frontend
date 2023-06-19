import { useSelector } from 'react-redux';
import s from './UserInfo.module.scss';

import icons from '../../assets/icons/sprite.svg';

export const UserInfo = () => {
  const userName = useSelector(state => state.auth?.user?.userName) || 'user';
  const userAvatar =
    useSelector(state => state.auth?.user?.avatarUrl) ||
    'https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_960_720.jpg';

  return (
    <div className={s.userInfo}>
      <div className={s.name}>{userName}</div>
      <img className={s.avatar} src={userAvatar} alt="avatar" />
    </div>
  );
};

// import { useSelector } from 'react-redux';
import s from './UserInfo.module.scss';

export const UserInfo = () => {
  // const userName = useSelector(state => state.auth?.user?.name);
  // const userAvatar = useSelector(state => state.auth?.user?.avatar);

  return (
    <div className={s.userInfo}>
      <div className={s.name}>{'Name'}</div>
      <img
        className={s.avatar}
        src="https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_960_720.jpg"
        alt="avatar"
      />
    </div>
  );
};

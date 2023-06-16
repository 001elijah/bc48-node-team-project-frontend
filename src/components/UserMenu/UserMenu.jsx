import s from './UserMenu.module.scss';

export const UserMenu = () => {
  return (
    <div className={s.userMenu}>
      <div className={s.name}>{'Name'}</div>
      <img
        className={s.avatar}
        src="https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_960_720.jpg"
        alt="avatar"
        width="32px"
        height="32px"
      />
    </div>
  );
};

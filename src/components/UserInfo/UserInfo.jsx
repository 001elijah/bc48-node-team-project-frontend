import { useSelector } from 'react-redux';
import { useState } from 'react';
import clsx from 'clsx';
import {
  selectorAvatarURL,
  selectorTheme,
  selectorUserName,
} from 'redux/Auth/authSelectors';
import s from './UserInfo.module.scss';
import icons from '../../assets/icons/sprite.svg';

import { ModalEditProfile } from 'components/ModalEditProfile/ModalEditProfile';
import { Modal } from 'components/Modal/Modal';

export const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = useSelector(selectorTheme);
  const userName = useSelector(selectorUserName);
  const userAvatar = useSelector(selectorAvatarURL);

  return (
    <>
      <div className={s.userInfo} onClick={() => setIsModalOpen(true)}>
        <div className={clsx(s.name, s[theme])}>{userName || 'user'}</div>
        {userAvatar ? (
          <img className={s.avatar} src={userAvatar} alt="avatar" />
        ) : (
          <svg className={s.avatar}>
            <use href={`${icons}#icon-user-${theme || 'light'}`}></use>
          </svg>
        )}
      </div>
      {isModalOpen && (
        <Modal title="Edit profile" onClose={() => setIsModalOpen(false)}>
          <ModalEditProfile onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};

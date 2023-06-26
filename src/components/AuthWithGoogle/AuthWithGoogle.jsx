import React from 'react';
import { useDispatch } from 'react-redux';
import { authWithGoogleOperation } from '../../redux/Auth/authGoogleOperations';
import svg from '../../assets/icons/sprite.svg'
import s from './AuthWithGoogle.module.scss'

export const AuthWithGoogle = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const googleClientId = `128986061205-1q4bl09jae2cqs2qljamh3tvboatcrin.apps.googleusercontent.com`;
    dispatch(authWithGoogleOperation(googleClientId));
  };

  return (
    <div>
      <button type="button" className={s.button} onClick={handleGoogleLogin}>
        <span className={s.title}>Continue with</span>
        <svg className={s.google}>
          <use xlinkHref={`${svg}#icon-google`} />
        </svg>
      </button>
    </div>
  );
};

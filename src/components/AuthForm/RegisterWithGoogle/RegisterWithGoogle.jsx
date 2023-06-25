import React from 'react';
import { useDispatch } from 'react-redux';
import { registerWithGoogleOperation } from '../../../redux/Auth/authGoogleOperations';

export const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const googleClientId = `128986061205-1q4bl09jae2cqs2qljamh3tvboatcrin.apps.googleusercontent.com`;
    dispatch(registerWithGoogleOperation(googleClientId));
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

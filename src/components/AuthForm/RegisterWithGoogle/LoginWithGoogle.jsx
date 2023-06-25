import React from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from './authOperations';

export const LoginWithGoogleButton = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const googleClientId = `128986061205-1q4bl09jae2cqs2qljamh3tvboatcrin.apps.googleusercontent.com`; // Replace with your own Google client ID

    // Dispatch the loginWithGoogle action
    dispatch(loginWithGoogle({ googleClientId }));
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

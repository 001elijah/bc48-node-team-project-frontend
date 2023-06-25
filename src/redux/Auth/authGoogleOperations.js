import { gapi } from 'gapi-script';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerWithGoogleApi, loginWithGoogleApi } from '../../services/backendAPI';
import { logOut } from './authSlice';
import { Notify } from 'notiflix'; 

export const registerWithGoogleOperation = (googleClientId) => {
  return async (dispatch) => {
    try {
      const authResult = await authenticateWithGoogle(googleClientId);
      console.log(authResult);
      if (authResult.error) {
        throw new Error(authResult.error);
      }

      const { credential } = authResult;
      const data = await registerWithGoogleApi({ credential });
      const { token, userName, email, theme, avatarUrl } = data;

      dispatch({
        type: 'auth/register/fulfilled',
        payload: {
          token,
          userName,
          email,
          theme,
          avatarUrl,
        },
      });
      Notify.success('Welcome');

    } catch (error) {
      console.log(error);
      dispatch(logOut());

      if (error.status === 409) {
        Notify.failure('Email already exists');
      } else if (error.status === 400) {
        Notify.failure('Error');
      } else if (error.status === 500) {
        Notify.failure('Server error');
      }
    }
  };
};

const authenticateWithGoogle = (googleClientId) => {
  return new Promise((resolve, reject) => {
    // Initialize the Google Sign-In API
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: googleClientId,
      });

      // Trigger Google Sign-In flow
      gapi.auth2
        .getAuthInstance()
        .signIn({ prompt: 'select_account' })
        .then((googleUser) => {
          const idToken = googleUser.getAuthResponse().id_token;

          // Resolve with the credential containing the Google ID token
          resolve({ credential: { idToken } });
        })
        .catch((error) => {
          // Reject with the error message
          reject(
            new Error(`Failed to authenticate with Google: ${error.error}`)
          );
        });
    });
  });
};

// Login with Google operation
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async ({ credential, googleClientId }, { rejectWithValue }) => {
    try {
      // Call the backend API to login with Google
      const userData = await loginWithGoogleApi({ credential, googleClientId });

      Notify.success('Welcome');
      return userData;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure('Invalid Google ID token');
      } else if (status === 409) {
        Notify.failure('Email in use');
      } else if (status === 500) {
        Notify.failure('Internal server error');
      }

      return rejectWithValue(error.message);
    }
  }
);

import { gapi } from 'gapi-script';
import { authWithGoogleApi } from '../../services/backendAPI';
import { logOut } from './authSlice';
import { Notify } from 'notiflix';

export const authWithGoogleOperation = googleClientId => {
  return async dispatch => {
    try {
      const authResult = await authenticateWithGoogle(googleClientId);
      if (authResult.error) {
        throw new Error(authResult.error);
      }

      const { credential } = authResult;
      const data = await authWithGoogleApi({ credential });
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
      if (error.status === 400) {
        Notify.failure('Error');
      } else if (error.status === 500) {
        Notify.failure('Server error');
      }
    }
  };
};

const authenticateWithGoogle = googleClientId => {
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
        .then(googleUser => {
          const idToken = googleUser.getAuthResponse().id_token;

          // Resolve with the credential containing the Google ID token
          resolve({ credential: { idToken } });
        })
        .catch(error => {
          // Reject with the error message
          reject(
            new Error(`Failed to authenticate with Google: ${error.error}`),
          );
        });
    });
  });
};

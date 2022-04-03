import React from 'react';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import styles from './LoginButton.module.css';

/**
 * The Login button component can be used to authenticate the user using a Google OAuth.
 * The action of what happens if the user is successfully authenticated(onSuccess) and
 * if the authentication fails(onFailure), are passed as props that have the following structure:
 *
 * Example of onSuccess prop that would print the profileObj and tokenObj on the console
 * const onSuccess = (res) => {
 *      console.log(res.profileObj)
 *      console.log(res.tokenObj)
 * }
 *
 * The "react-google-login" package is used that provides simple mechanisms to add the Google login button.
 * For more information visit: "https://www.npmjs.com/package/react-google-login"
 *
 * The clientId was obtained from the Google developer console, which is used to identify the application for authentication details.
 * The isSignedIn prop is used to ensure the user stays logged in.
 * The render prop is used to set up a customized Google login button.
 *
 * The "react-icons" package is used to get the google icon "FcGoogle" on the customized sign in button.
 * The "dotenv" is used to load the client ID dynamically.
 *
 * NOTE: To get the authentication to work, you will need to make a ".env" file with a "REACT_APP_CLIENT_ID"
 * component that has the client ID from Google Developer's console.
 *
 * After clicking on the button, a window that allows the user to sign in with Google opens up.
 * After signing up, the user will be redirected to the same page they login in from (i.e. http://localhost:3000/),
 * which can be changed from Google Developer Console later.
 */

// const clientId = process.env.REACT_APP_CLIENT_ID;
const clientId = '225482705208-6jsn0f21nbrgivrjg7f3msackech73m1.apps.googleusercontent.com'
console.log(clientId)
export default function LoginButton({ onSuccess, onFailure }) {
  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <button
          className={`${styles.loginButton}`}
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}>
          <FcGoogle size={22} />
          <div className={`${styles.loginText}`}>Sign in with Google</div>
        </button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
}

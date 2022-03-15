import React from "react";
import GoogleLogin from "react-google-login";
import env from "react-dotenv";
import { FcGoogle } from 'react-icons/fc'
import styles from './LoginButton.module.css'

/**
 * The Login button component can be used to authenticate the user using a Google oAuth. 
 * The action of what happens if the user is succesfully authenticates (onSuccess) and 
 * if the authentication fails (onFailure) are passed as props which have the following structure:
 * 
 * Example of onSuucess prop that would print the profileObj and tokenObj on the console
 * const onSuccess = (res) => {
 *      console.log(res.profileObj)
 *      console.log(res.tokenObj)
 * }
 * 
 * The "react-google-login" package is used that provides simple mechanisms to add the Google login button.
 * For more impormation visit: "https://www.npmjs.com/package/react-google-login"
 * 
 * The clientId was obtained from Google developer console, that is used to identify the application for authentication details..
 * The isSignedIn prop is used to ensure the user stays logged in.
 * The render prop used is used to set up a customized Google login button.
 * 
 * The "react-icons" package was used to use the google icon "FcGoogle" on the customized sign in button.
 * 
 * After clicking on the button, a window that allows the user to sign in with Google opens up.
 * After signing up the user will be redirected to the same page they login in from (i.e. http://localhost:3000/), 
 * which can be changed from Google Developer Console later. 
 * 
 */

// const clientId = "158309441002-q8q49tjicngt1tp6p9t7ecvdrn9ar78j.apps.googleusercontent.com";
const clientId = env.CLIENT_ID;

export default function LoginButton({onSuccess, onFailure}){

    return(        
        <GoogleLogin
        clientId={clientId}
        render={renderProps => (
            <button className={`${styles.loginButton}`} 
            type="button"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
                <FcGoogle size={22} />
                <div className={`${styles.loginText}`}>SIGN IN WITH GOOGLE</div>
            </button>
            )}
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        cookiePolicy= "single_host_origin"
        isSignedIn/>
    )
}


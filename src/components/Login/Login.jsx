import React from "react";
import GoogleLogin from "react-google-login";


const clientId = "158309441002-q8q49tjicngt1tp6p9t7ecvdrn9ar78j.apps.googleusercontent.com";

export default function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! ", res.tokenObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy= "single_host_origin"
            isSignedIn/>
        </div>
    )
}


import React from "react";

import './LoginFB.css'
const LoginFB = () => {
    return (
        <div className="login__fb--main-container">
            <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
        </div>
    )
}

export {LoginFB}
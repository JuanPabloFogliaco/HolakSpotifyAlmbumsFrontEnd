import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import LoginFeature from "../../features/LoginFeature";
import { WrapperLoginView } from "./style";

const LoginView = () => {

    useEffect(() => {
        const access_token = localStorage.getItem("access_token")
        if (access_token !== undefined && access_token !== null) {
            window.location.replace("http://localhost:3000");
        }
    }, []);

    return (
        <WrapperLoginView>
            <LoginFeature />
        </WrapperLoginView>
    )
}

export default LoginView;
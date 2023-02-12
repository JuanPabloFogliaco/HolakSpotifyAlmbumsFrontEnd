import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import LoginFeature from "../../features/LoginFeature";
import { WrapperLoginView } from "./style";

const LoginView = () => {

    interface IProfile {
        email: string;
    }

    const [profile, setProfile] = useState<IProfile>();

    const Profile = async () => {
        //const profile = await axios.get('https://api.spotify.com/v1/me', {headers: {"Authorization": `Bearer ${localStorage.getItem('access_token')}`}});
        const access_token = localStorage.getItem('access_token');
        const profile = await axios.post('http://localhost:8080/api/v1/profile', { access_token });
        console.log(profile.data);
        setProfile(profile.data)
    }

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
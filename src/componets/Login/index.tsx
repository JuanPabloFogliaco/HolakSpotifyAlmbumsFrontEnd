import { ButtonLogin, ImgSportify, WrapperLogin } from "./style";

interface ILogin {
    profile: Array<IALogin>;
    login: () => void;
}

interface IALogin {
    email: string;
}

const LoginComponent = (props: ILogin) => {
    const { profile, login } = props;
   
    const validateAccessToken = () => {
        const access_token = localStorage.getItem("access_token");
        if (access_token !== null && access_token !== undefined) {
            return true;
        }
        return false;
    }

    return (
        <WrapperLogin>
            <ImgSportify src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" />
            {profile[0]?.email && <p style={{ color: "#fff", fontSize: "12px" }}>Email:  {profile[0]?.email}</p>}
            {!validateAccessToken() &&
                <ButtonLogin
                    onClick={() => login()}>
                    Iniciar Sesion
                </ButtonLogin>}
        </WrapperLogin>
    )
}

export default LoginComponent;
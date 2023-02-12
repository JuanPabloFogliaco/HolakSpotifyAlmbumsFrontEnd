import axios from "axios";
import LoginComponent from "../../componets/Login";
import { WrapperLoginFeature } from "./style";

interface ILoginFeature {
    login: () => void;
}

const LoginFeature = () => {

    const Login = async () => {
        const url = await axios.get('http://localhost:8080/api/v1/auth/login');
        window.location.replace(url.data);
    }

    return (
        <WrapperLoginFeature>
            <LoginComponent login={() => Login()} profile={[{ email: "" }]} />
        </WrapperLoginFeature>
    )
}

export default LoginFeature;
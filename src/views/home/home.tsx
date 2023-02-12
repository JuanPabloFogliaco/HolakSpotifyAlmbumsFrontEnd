import { useEffect } from "react";

const HomeView = () => {

    useEffect(() => {
        const access_token = localStorage.getItem("access_token")
        if (access_token == undefined && access_token == null) {
            window.location.replace("http://localhost:3000/login");
        }
    }, []);


    return (
        <>
            Reporductor home
        </>
    )
}

export default HomeView;
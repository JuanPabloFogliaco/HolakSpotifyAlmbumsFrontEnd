import axios from "axios";
import { useEffect, useState } from "react";
import ContainterFeature from "../../features/ContainterFeature";
import SideBarFeature from "../../features/SideBarFeature";
import { WrapperView } from "./style";

interface IProfile {
  email: string;
}

const HomeView = () => {
  const [profile, setProfile] = useState<IProfile>();

  const Profile = async () => {
    const profile = await axios.post("http://localhost:8080/api/v1/profile");
    console.log(profile.data);
    setProfile(profile.data);
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    !access_token && window.location.replace("http://localhost:3000/login");
  }, []);

  return (
    <WrapperView>
      <SideBarFeature />
      <ContainterFeature />
    </WrapperView>
  );
};

export default HomeView;

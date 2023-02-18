import axios from "axios";
import { useEffect, useState } from "react";
import AlbumsFeatrure from "../../features/AlbumsFeature";
import { ItemHome, Logo, SideBar, WrapperHomeView } from "./style";

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

  const ArtitsAlbums = () => {
    return;
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token == undefined && access_token == null) {
      window.location.replace("http://localhost:3000/login");
    } else Profile();
  }, []);

  return (
    <WrapperHomeView>
      <SideBar>
        <Logo src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"></Logo>
        <ItemHome></ItemHome>
      </SideBar>
      <AlbumsFeatrure></AlbumsFeatrure>
    </WrapperHomeView>
  );
};

export default HomeView;

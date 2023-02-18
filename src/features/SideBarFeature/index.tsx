import { ItemHome, Logo, Separator, SideBar, Title } from "./styles";
import { BiHomeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";

const SideBarFeature = () => {
  return (
    <SideBar>
      <Logo src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"></Logo>
      <Separator />
      <ItemHome>
        <BiHomeAlt size={"30px"} color={"#b2b2b2"} />
        <Title selected={false}>Inicio</Title>
      </ItemHome>
      <Separator />
      <ItemHome>
        <FiSearch size={"30px"} color={"#ffffff"} />
        <Title selected={true}>Buscar</Title>
      </ItemHome>
      <Separator />
      <ItemHome>
        <VscLibrary size={"30px"} color={"#b2b2b2"} />
        <Title selected={false}>Tu bibloteca</Title>
      </ItemHome>
    </SideBar>
  );
};

export default SideBarFeature;

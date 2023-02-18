import ChipProfile from "../../componets/ChipProfile";
import Search from "../../componets/Search";
import PlayerFeature from "../PlayerFeature";
import { Albums, ButtonBurger, ColumnHeader, Header } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

const AlbumsFeatrure = () => {
  return (
    <Albums>
      <Header>
        <ColumnHeader>
          <ButtonBurger>
            <GiHamburgerMenu size={"20px"} color={"#ffffff"} />
          </ButtonBurger>
          <Search />
        </ColumnHeader>
        <ChipProfile />
      </Header>
      <PlayerFeature />
    </Albums>
  );
};

export default AlbumsFeatrure;

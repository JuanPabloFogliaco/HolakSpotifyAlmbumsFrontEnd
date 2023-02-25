import ChipProfile from "../../componets/ChipProfile";
import Search from "../../componets/Search";
import PlayerFeature from "../PlayerFeature";
import {
  Albums,
  ButtonBurger,
  ColumnHeader,
  ContainerWrapper,
  Header,
} from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import axios from "axios";
import ArtistComponent from "../../componets/Artist";

const AlbumsFeatrure = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [albums, setAlbums] = useState();

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const onKeyDownSearch = async (e: any) => {
    if (e.key === "Enter" && search !== "") {
      await getArtist();
    }
  };

  const VerifyOcurrence = (artistSearch: any) => {
    const array: any = [];
    for (
      let index = 0;
      index < artistSearch.data?.artists?.items?.length;
      index++
    ) {
      const first = artistSearch.data?.artists?.items[0].name;
      if (
        first === artistSearch.data?.artists?.items[index].name &&
        index === 0
      ) {
        array.push(artistSearch.data?.artists?.items[index]);
      }
      if (first !== artistSearch.data?.artists?.items[index].name) {
        array.push(artistSearch.data?.artists?.items[index]);
      }
    }
    return array;
  };

  const getArtist = async () => {
    const artistSearch = await axios.get(
      `http://localhost:8080/api/v1/artits?search=${search}`
    );
    const dataArtist = VerifyOcurrence(artistSearch);
    if (!dataArtist) return;
    setData(dataArtist);
  };

  const orderPopularity = (album: any) => {
    let array: any = [];
    array = album?.data?.tracks.map((e:any) => e)
    return array;
  };

  const getAlbumes = async () => {
    const album = await axios.get("albumes");
    console.log("enter2", album?.data?.tracks);
    setAlbums(album?.data?.tracks);
  };


  console.log("ALBUMNES", albums)

  return (
    <Albums>
      <Header>
        <ColumnHeader>
          <ButtonBurger type="button">
            <GiHamburgerMenu size={"20px"} color={"#ffffff"} />
          </ButtonBurger>
          <Search
            onChangeSearch={(e: any) => onChangeSearch(e)}
            onKeyDownSearch={(e: any) => onKeyDownSearch(e)}
          />
        </ColumnHeader>
        <ChipProfile />
      </Header>
      <ContainerWrapper>
        <ArtistComponent
          onClickArtist={getAlbumes}
          data={data}
          albums={albums}
        />
      </ContainerWrapper>
      <PlayerFeature />
    </Albums>
  );
};

export default AlbumsFeatrure;

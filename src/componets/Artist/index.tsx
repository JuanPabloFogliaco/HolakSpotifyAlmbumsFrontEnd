import Box from "../Box";
import BoxAlbumes from "../BoxAlbumes";
import { ArtistWrapper, ContainerWrapper, TitleArtist } from "./style";

interface IArtist {
  data: any;
  albums: any;
  onClickArtist: () => void;
}

const ArtistComponent = (props: IArtist) => {
  const { data, onClickArtist, albums } = props;

  console.log(albums);

  return (
    <ContainerWrapper>
      {!albums && (
        <>
          <TitleArtist>Artistas</TitleArtist>
          <ArtistWrapper>
            {data?.map((artist: any) => {
              return <Box onClickAlbum={onClickArtist} data={artist}></Box>;
            })}
          </ArtistWrapper>
        </>
      )}

      {albums && (
        <>
          <TitleArtist>Albumes</TitleArtist>
          <ArtistWrapper>
            {albums.map((item: any) => {
              console.log("item -->", item.name)
              return <BoxAlbumes title={item.name} images={item?.album?.images}></BoxAlbumes>;
            })}
          </ArtistWrapper>
        </>
      )}
    </ContainerWrapper>
  );
};

export default ArtistComponent;

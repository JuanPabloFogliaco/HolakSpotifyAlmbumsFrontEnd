import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #121212;
  color: white;
  z-index: 1;
`;

const ArtistWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #121212;
  flex-wrap: wrap;
`;

const TitleArtist = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 12px;
`;


export { ContainerWrapper, ArtistWrapper, TitleArtist };

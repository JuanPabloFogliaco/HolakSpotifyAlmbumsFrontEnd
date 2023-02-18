import styled from "styled-components";

const WrapperPlayerFeature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 10vh;
  background-color: #181818;
  color: #ffffff;
  position: relative;
  border-top: 1px solid #d6d6d626;
`;

const RowControlers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: row;
  width: 20px;
  height: auto;
`;

const WrapperTimeSong = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  align-items: center;
  justify-content: center;
  height: 1px;
  background-color: white;
  padding: 2px;
  border-radius: 8px;
  margin-top: 12px;
`;

const SongImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 65px;
  align-items: center;
  justify-content: center;
  height: 65px;
  background-color: #2d2c52;
  padding: 2px;
  border-radius: 2px;
`;

const ColumnControlers = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding-right: 50px;
`;

const WrapperAlbumDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

const DetailAlbum = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding-left: 15px;
`;

const WrapperOptionsControler = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
  height: auto;
`;

export {
  WrapperPlayerFeature,
  RowControlers,
  Separator,
  WrapperTimeSong,
  SongImage,
  ColumnControlers,
  WrapperAlbumDetail,
  DetailAlbum,
  WrapperOptionsControler
};

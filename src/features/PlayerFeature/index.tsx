import {
  ColumnControlers,
  RowControlers,
  Separator,
  SongImage,
  WrapperPlayerFeature,
  WrapperTimeSong,
  WrapperAlbumDetail,
  DetailAlbum,
} from "./style";
import { BsDisplay, BsPlayCircleFill, BsArrowRepeat } from "react-icons/bs";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { FaRandom } from "react-icons/fa";
import { TbVolume, TbPlaylist, TbMicrophone2 } from "react-icons/tb";

const PlayerFeature = () => {
  return (
    <WrapperPlayerFeature>
      <WrapperAlbumDetail>
        <SongImage></SongImage>
        <DetailAlbum>
          <div>Ej: Ayer me llamo Mi Ex ...</div>
          <div>KHEA, Lenny</div>
        </DetailAlbum>
      </WrapperAlbumDetail>
      <ColumnControlers>
        <RowControlers>
          <FaRandom color="#bababa" size={"17px"} />
          <Separator />
          <IoPlaySkipBackSharp color="#bababa" size={"30px"} />
          <Separator />
          <BsPlayCircleFill color="#ffffff" size={"35px"} />
          <Separator />
          <IoPlaySkipForwardSharp color="#bababa" size={"30px"} />
          <Separator />
          <BsArrowRepeat color="#bababa" size={"22px"} />
        </RowControlers>

        <WrapperTimeSong></WrapperTimeSong>
      </ColumnControlers>
      <TbMicrophone2 color="#bababa" size={"20px"} />
      <TbPlaylist color="#bababa" size={"20px"} />
      <BsDisplay color="#bababa" size={"20px"} />
      <TbVolume
        color="#bababa"
        size={"20px"}
        style={{ paddingRight: "125px" }}
      />
    </WrapperPlayerFeature>
  );
};

export default PlayerFeature;

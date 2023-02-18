import {
  ColumnControlers,
  RowControlers,
  Separator,
  SongImage,
  WrapperPlayerFeature,
  WrapperTimeSong,
  WrapperAlbumDetail,
  DetailAlbum,
  WrapperOptionsControler,
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
          <div>Farolito </div>
          <div>Los Piojos</div>
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
     <WrapperOptionsControler>
     <TbMicrophone2 color="#bababa" size={"20px"} />
     <Separator/>
      <TbPlaylist color="#bababa" size={"20px"} />
      <Separator/>
      <BsDisplay color="#bababa" size={"20px"} />
      <Separator/>
      <TbVolume
        color="#bababa"
        size={"20px"}
        style={{ paddingRight: "125px" }}
      />
     </WrapperOptionsControler>
    </WrapperPlayerFeature>
  );
};

export default PlayerFeature;

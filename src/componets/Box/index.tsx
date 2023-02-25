/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { ImgBox, TitleBox, WrapperBox, WrapperTitle } from "./style";

interface IBox {
  data: any;
  onClickAlbum: () => void;
}

const Box = (data: IBox) => {
  console.log(data.data);
  const { onClickAlbum } = data;
  return (
    <WrapperBox onClick={onClickAlbum}>
      <ImgBox
        width={"170px"}
        height={"170px"}
        src={data?.data?.images[0]?.url}
      />
      <WrapperTitle>
        <TitleBox>{data?.data?.name}</TitleBox>
      </WrapperTitle>
    </WrapperBox>
  );
};

export default Box;

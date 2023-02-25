/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { ImgBox, TitleBox, WrapperBox, WrapperTitle } from "./style";

interface IBoxAlbumes {
  title?: string;
  images: Array<any>;
}

const BoxAlbumes = ({ title, images }: IBoxAlbumes) => {
  return (
    <WrapperBox>
      <ImgBox width={"170px"} height={"170px"} src={`${images[0].url}`} />
      <WrapperTitle>
        <TitleBox>{title}</TitleBox>
      </WrapperTitle>
    </WrapperBox>
  );
};

export default BoxAlbumes;

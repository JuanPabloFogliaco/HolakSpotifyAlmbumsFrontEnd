import styled from "styled-components";

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 170px;
  height: 250px;
  background-color: #181818;
  border-radius: 12px;
  padding: 12px;
  z-index: 1;
  :hover {
    background-color: #333333b3;
  }
`;

const ImgBox = styled.img`
  width: 170px;
  height: 170px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const WrapperTitle = styled.div`
  width: 170px;
  height: 100%;
  padding: 10px;
`;

const TitleBox = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export { WrapperBox, ImgBox, WrapperTitle, TitleBox };

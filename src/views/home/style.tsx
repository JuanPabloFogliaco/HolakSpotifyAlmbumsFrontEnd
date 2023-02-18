import styled from "styled-components";

const WrapperHomeView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #181818;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 93vh;
  background-color: #000000;
`;

const Logo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 155px;
  height: 50px;
  padding-top: 30px;
`;

const ItemHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 93vh;
  background-color: #000000;
`;

export { WrapperHomeView, SideBar, Logo, ItemHome };

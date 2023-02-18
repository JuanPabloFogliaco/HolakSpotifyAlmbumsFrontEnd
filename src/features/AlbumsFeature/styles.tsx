import styled from "styled-components";

const Albums = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #181818;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background-color: #181818;
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 20%;
  height: 100px;
  padding-left: 30px;
`;

const ButtonBurger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 43px;
  height: 43px;
  border-radius: 43px;
  background-color: #1ed760;
`;

export { Albums, Header, ColumnHeader, ButtonBurger };

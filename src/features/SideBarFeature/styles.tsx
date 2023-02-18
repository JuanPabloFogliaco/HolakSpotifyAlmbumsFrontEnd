import styled from "styled-components";

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  height: 100%;
  background-color: #000000;
  padding-right: 90px;
  padding-left: 30px;
`;

const Logo = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 40px;
  padding-top: 30px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const ItemHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 25px;
`;

interface ITitle {
  selected: boolean;
}

const Title = styled.div<ITitle>`
  width: 100%px;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#ffffff" : "#b2b2b2")};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export { SideBar, Logo, ItemHome, Separator, Title };

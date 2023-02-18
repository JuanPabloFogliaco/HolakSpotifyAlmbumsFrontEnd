import styled from "styled-components";

const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-width: 140px;
  height: 40px;
  padding: 12px;
  padding-left: 20px;
  position: absolute;
`;

const Search = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 30px;
  border-radius: 45px;
  border: none;
  margin: 12px;
  text-align: left;
  padding: 5px;
  padding-left: 40px;
  font-size: 14px;
  :focus {
    border: none !important;
    outline: none;
  }
`;

export { WrapperSearch, Search };

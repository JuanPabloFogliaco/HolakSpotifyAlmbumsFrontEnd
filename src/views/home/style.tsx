import styled from "styled-components";

const WrapperHomeView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 98vh;
  color: white;
`;

const ColumnHomeView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowHomeView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #5a5555;
  position: relative;
`;

export { ColumnHomeView, WrapperHomeView, RowHomeView };

import styled from "styled-components";

const WrapperView = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  width: 100vw;
  height: 100vh;
`;

const ColumnHomeView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const RowHomeView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: #5a5555;
`;

export { ColumnHomeView, RowHomeView, WrapperView };

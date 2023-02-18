import styled from "styled-components";

const WrapperChipProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 400px;
  height: 40px;
  padding: 9px;
`;

const Chip = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: auto;
height: 20px;
border-radius: 22px;
padding: 10px;
background-color: #050505;
margin-right: 20px;
`;

const TextChip = styled.div`
  color: white;
`;


const Separator = styled.div`
  width: 10px;

`;

export { WrapperChipProfile, Chip, TextChip, Separator };

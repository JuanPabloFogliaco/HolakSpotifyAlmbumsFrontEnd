import styled from 'styled-components';

const WrapperLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const ImgSportify = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 250px;
`

const ButtonLogin = styled.div`
     margin-top: 40px; 
     width: 220px; 
     height: 30px; 
     background: #1ab26b; 
     color: #fff; 
     font-family: Verdana, Geneva, Tahoma, sans-serif; 
     border: none; 
     border-radius: 8px; 
     padding: 4px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`

export { WrapperLogin, ImgSportify, ButtonLogin };
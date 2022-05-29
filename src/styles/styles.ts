import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        width: 1440px;
        margin: 0 auto;
        background: #150808;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
    }
`;

export const FullContent = styled.div`

`;

export const DivGeneral = styled.div`
    display: flex;
    height: 48.2rem;
    width: 100%;
    
`;


export const ContainerTrailer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 11rem;
`;

export const ConatinerEps = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
`;

export const DivEps = styled.div`

`;

export const title = styled.h2`

`;
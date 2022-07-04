import styled from "styled-components";

export const DivGeneral = styled.div`
    width: 50%;
`;

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    
    a {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        text-decoration: none;
        background-color: #000;
        color: #FFF;
        width: 21rem;
        height: 3rem;
        margin: 1rem 0;
        border-radius: 8px;
        box-shadow: 0px 5px 7px 2px rgba(0,0,0,0.63);
        cursor: pointer;
    }

    p {
        font-weight: 700;
        width: 7rem;
        margin-left: 30%;
    }

    img {
        width: 2rem;
        margin-left: 10%;
    }
`;
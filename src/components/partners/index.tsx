import React from "react";
import * as S from "./styles";
import goyabu from "../../public/goyabu.jpg";
import bleach from "../../public/bleach.jpg";
import mangas from "../../public/mangas.jpg";
import anutube from "../../public/anutube.jpg";


const Partner = () => {
    return (
        <S.DivGeneral>
            <h2>Parcerias</h2>
            <S.ContainerImg>
                <img src={goyabu.src} />
                <img src={bleach.src} />
                <img src={mangas.src} />
                <img src={anutube.src} />
            </S.ContainerImg>
        </S.DivGeneral>
    )
}

export default Partner;
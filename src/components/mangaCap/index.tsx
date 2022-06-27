import React from "react";
import * as S from "./styles";

interface Props {
    img: any;
}
const MangaCap = ({img}: Props) => {
    return (
        <S.Manga src={img} alt="Img"/>
    )
}

export default MangaCap;
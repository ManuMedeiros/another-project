import React from "react";
import * as S from "./styles"

interface Props {
    text: string;
    img: any;
}

const LastEp = ({text, img}: Props) => {
    return (
        <S.DivGeneral>
            <S.Title>
                Continue assistindo...<br/>
                {text}
            </S.Title>
            <S.Episode>
                <img src={img}/>
            </S.Episode>
        </S.DivGeneral>
    )
}

export default LastEp;
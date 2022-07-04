import React from "react";
import * as S from "./styles"

interface Props {
    text: string;
    img: any;
}

const LastEp = ({text, img}: Props) => {
    return (
        <S.DivGeneral>
            <h3>
                Continue assistindo...<br/>
                {text}
            </h3>
            <S.Episode>
                <iframe src={img}/>
            </S.Episode>
        </S.DivGeneral>
    )
}

export default LastEp;
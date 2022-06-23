import type { NextPage } from "next";
import React from "react";
import Persona from "src/components/personas";
import * as S from "./styles";

const Personagens: NextPage = () => {
    return (
        <S.DivGeneral>
            <Persona />
        </S.DivGeneral>
    )
}

export default Personagens;
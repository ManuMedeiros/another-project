import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Persona from "src/components/personas";
import * as S from "./styles";

const Personagens: NextPage = () => {
    return (
        <>
            <Head>
                <title>Personagens - Another</title>
            </Head>
            <S.DivGeneral>
                <Persona />
            </S.DivGeneral>
        </>
    )
}

export default Personagens;
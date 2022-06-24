import type { NextPage } from "next";
import React from "react";
import VolumeManga from "src/components/volumeManga";
import * as S from "./styles";

const Manga: NextPage = () => {

    const url = () => {
        window.location.href = 'manga'
    }
    return (
        <S.DivGeneral>
            <h1>Another - Mangá</h1>
            <div>
                <h2>Volume 1</h2>
                <a href="manga/capitulo?numero=1">Capitulo 1</a>
                <a href="manga/capitulo?numero=2">Capitulo 2</a>
                {/* <VolumeManga /> */}
            </div>
            <div>
                <h2>Volume 2</h2>
            </div>
            <div>
                <h2>Volume 3</h2>
            </div>
            <div>
                <h2>Volume 4</h2>
            </div>
        </S.DivGeneral>
    )
}

export default Manga;
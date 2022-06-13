import React from "react";
import * as S from "./styles";
import goyabu from "../../public/goyabu.jpg";
import bleach from "../../public/bleach.jpg";
import mangas from "../../public/mangas.jpg";
import anutube from "../../public/anutube.jpg";
import Link from "next/link";


const Partner = () => {

    const mockPartnes = [
        {
            img: goyabu,
            link: 'https://goyabu.com/',
        },
        {
            img: bleach,
            link: 'https://projectcentralanimes.wordpress.com/bleach/',
        },
        {
            img: mangas,
            link: 'https://editorajbc.com.br/mangas/colecao/x/',
        },
        {
            img: anutube,
            link: 'https://www.anitube.site/',
        },
    ]

    return (
        <S.DivGeneral>
            <h2>Parcerias</h2>
            <S.ContainerImg>
                {mockPartnes.map((items, index) => (
                    <Link href={items.link} key={index}>
                        <a target="_blank"><img src={items.img.src} /></a>
                    </Link>
                ))}
            </S.ContainerImg>
        </S.DivGeneral>
    )
}

export default Partner;
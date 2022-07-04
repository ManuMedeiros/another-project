import React from "react";
import * as S from "./styles";
import Link from "next/link";


const Partner = () => {

    const mockPartnes = [
        {
            name: 'Goyabu.com',
            link: 'https://goyabu.com/',
            img: 'https://nightwolfapk.com.br/wp-content/uploads/2019/11/Goyabu-Animes-apk-mod.png'
        },
        {
            name: 'Bleach Project',
            link: 'https://projectcentralanimes.wordpress.com/bleach/',
            img: 'https://i.pinimg.com/originals/a6/3d/e0/a63de0d414acdd1d21c25693315b4338.png'
        },
        {
            name: 'Manga X',
            link: 'https://editorajbc.com.br/mangas/colecao/x/',
            img: 'https://appmod.com.br/wp-content/uploads/2021/01/x-manga-icon.png'
        },
        {
            name: 'AniTube.com',
            link: 'https://www.anitube.site/',
            img: 'https://apksos.com/storage/images/com/anitubedelta/com.anitubedelta_1.png'
        },
    ]

    return (
        <S.DivGeneral>
            <h2>Parcerias</h2>
            <S.ContainerImg>
                {mockPartnes.map((items, index) => (
                    <Link href={items.link} key={index}>
                        <a target="_blank">
                            <p>{items.name}</p>
                            <img src={items.img}/>
                        </a>
                    </Link>
                ))}
            </S.ContainerImg>
        </S.DivGeneral>
    )
}

export default Partner;
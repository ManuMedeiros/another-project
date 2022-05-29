import React from "react";
import * as S from "./styles";

const Navegation = () => {

    const links = [
        {
            title: "Episodios",
            link: "/",
        },
        {
            title: "Locais",
            link: "/",
        },
        {
            title: "Personagens",
            link: "/",
        },
    ]

    return (
        <S.DivGeneral>
            {links.map((items) => (
                <>
                    <S.DivLinks>
                        <S.Link href={items.link}>
                            {items.title}
                        </S.Link>
                    </S.DivLinks>
                </>
            ))}

        </S.DivGeneral>
    )
}

export default Navegation;
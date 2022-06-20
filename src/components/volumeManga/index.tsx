import React, { useState } from "react";
import * as S from "./styles";
import page from "../../assets/manga/volume 1/AnotherCap.1/000a.jpg";

const VolumeManga = () => {

    const [open, setOpen] = useState(false);

    return (
        <S.DivGeneral>
            <S.Cap>
                <S.DivCap onClick={() => setOpen(!open)}>
                    <h3>Capitudo 1</h3>
                </S.DivCap>
                {open && (
                    <S.DivRenderCap>
                        <img src={page.src} />
                    </S.DivRenderCap>
                )}
            </S.Cap>
        </S.DivGeneral>
    )
}

export default VolumeManga;
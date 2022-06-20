import React, { useState } from "react";
import * as S from "./styles";
import { cap1 } from "src/assets/manga/volume 1/AnotherCap.1/cap1";

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
                        {cap1.map((page) => (
                            <img src={page.page} />
                        ))}
                        
                    </S.DivRenderCap>
                )}
            </S.Cap>
        </S.DivGeneral>
    )
}

export default VolumeManga;
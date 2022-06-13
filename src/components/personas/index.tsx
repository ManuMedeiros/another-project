import React, { useState } from "react";
import * as S from "./styles";
import { personagens } from "src/utils";

const Persona = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <S.DivGeneral>
            {personagens.map((itens, index) => (
                <S.DivDeath key={index}>
                    <S.Title>{itens.nome}</S.Title>
                    <S.Img src={itens.img}></S.Img>
                    {open && (
                        <>
                            <S.TitleDeath key={index}>
                                <strong>Status de morte: </strong>{itens.morte === true ? 'Morto' : 'Vivo'}
                            </S.TitleDeath>
                            {itens.morte && <S.DescriptionDeath>Como morreu: {itens.tipo}</S.DescriptionDeath>}
                            <S.Description><strong>Descrição:</strong> {itens.descricao}</S.Description>
                        </>
                    )}
                    <S.Button onClick={handleOpen}>{open ? 'Fechar' : 'Abrir'}</S.Button>
                </S.DivDeath>
            ))}
        </S.DivGeneral>
    );
};

export default Persona;
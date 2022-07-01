import React, { useState } from "react";
import * as S from "./styles";
import { personagens } from "src/utils";

const Persona = () => {

    const [open, setOpen] = useState<number>();
    const [text, setText] = useState(false)

    const handleOpen = (id: number) => {
        setOpen(id)
        setText(!text)
    }

    return (
        <S.DivGeneral>
            {personagens.map((itens, index) => (
                <S.DivDeath key={index}>
                    <S.Title>{itens.nome}</S.Title>
                    <S.Img src={itens.img}></S.Img>
                    {text && (
                        <>
                            {open === itens.id && (
                                <>
                                    <S.TitleDeath key={index}>
                                        <strong>Status de morte: </strong>{itens.morte === true ? 'Morto' : 'Vivo'}
                                    </S.TitleDeath>
                                    {itens.morte && <S.DescriptionDeath>Como morreu: {itens.tipo}</S.DescriptionDeath>}
                                    <S.Description><strong>Descrição:</strong> {itens.descricao}</S.Description>
                                </>
                            )}
                        </>
                    )}
                    <S.Button onClick={() => handleOpen(itens.id)}>{open == itens.id && text ? 'Fechar' : 'Abrir'}</S.Button>
                </S.DivDeath>
            ))}
        </S.DivGeneral>
    );
};

export default Persona;
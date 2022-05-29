import React from "react";
import Logo from "../logo";
import Navegation from "../nav";
import * as S from "./styles"

const Header = () => {
    return (
        <S.DivGeneral>
            <Logo/>
            <Navegation/>
        </S.DivGeneral>
    )
}

export default Header;
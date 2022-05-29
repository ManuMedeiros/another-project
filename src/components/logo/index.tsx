import React from "react";
import * as S from "./styles"
import Image from 'next/image'

import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <S.DivGenetal>
            <Image src={logo} alt='logo'/>
        </S.DivGenetal>
    )
}

export default Logo;
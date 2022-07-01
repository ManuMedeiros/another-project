import React from "react";
import * as S from "./styles"

import logo from '../../assets/logo.png';
import Link from "next/link";

const Logo = () => {
    return (
        <S.DivGenetal>
            <Link href='/' passHref>
                <S.Image src={logo.src} />
            </Link>
        </S.DivGenetal>
    )
}

export default Logo;
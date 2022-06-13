import React from "react";
import * as S from "./styles"
import Image from 'next/image'

import logo from '../../assets/logo.png';
import Link from "next/link";

const Logo = () => {
    return (
        <S.DivGenetal>
            <Link href='/' passHref>
                <Image src={logo} alt='logo' />
            </Link>
        </S.DivGenetal>
    )
}

export default Logo;
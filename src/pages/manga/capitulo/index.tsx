import { NextPage } from "next";
import React, { useState } from "react";

const Capitulo: NextPage = () => {

    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        let urlParams: any = undefined;
        params.forEach((value, key) => {
            urlParams = Object.assign({}, urlParams, {
                [key]: value.toString()
            });
        });

        console.log(urlParams, 'url')
    }

    return (
        <p>teste</p>

    )
}

export default Capitulo;
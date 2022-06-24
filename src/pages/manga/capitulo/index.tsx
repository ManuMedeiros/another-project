import { NextPage } from "next";
import React, { useState } from "react";

const Capitulo: NextPage = () => {
  const teste = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let urlParams: any = undefined;
      params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
          [key]: value.toString(),
        });
      });

      console.log(urlParams, "url");

      return (
        <>
              {urlParams.numero === '1' && <p> teste aqui</p>}
              {urlParams.numero === '2' && <p> teste aqui 2</p>}
         
        </>
      );
    }
  };

  return <p>{teste()}</p>;
};

export default Capitulo;

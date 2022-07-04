import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import * as S from "./styles";

const Manga: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mangá - Another</title>
      </Head>
      <S.DivGeneral>
        <h1>Another - Mangá</h1>
        <S.ContentManga>
          <S.DivTitle>
            <S.Image src="https://images-na.ssl-images-amazon.com/images/I/810NbCe9X8L.jpg" alt="Capa do mangá" />
            <div>
              <h3>Another</h3>
              <p>
                <strong>Genero:</strong> Terror Suspense
              </p>
              <p>
                <strong>Capítulos:</strong> 20
              </p>
              <p></p>
            </div>
          </S.DivTitle>
          <S.DivVol>
            <h2>Volume 1</h2>
            <S.DivCap>
              <S.Link href="manga/capitulo?numero=1">Capitulo 1</S.Link>
              <S.Link href="manga/capitulo?numero=2">Capitulo 2</S.Link>
              <S.Link href="manga/capitulo?numero=3">Capitulo 3</S.Link>
              <S.Link href="manga/capitulo?numero=4">Capitulo 4</S.Link>
            </S.DivCap>
          </S.DivVol>
          <S.DivVol>
            <h2>Volume 2</h2>
            <S.DivCap>
              <S.Link href="manga/capitulo?numero=5">Capitulo 5</S.Link>
              <S.Link href="manga/capitulo?numero=6">Capitulo 6</S.Link>
              <S.Link href="manga/capitulo?numero=7">Capitulo 7</S.Link>
              <S.Link href="manga/capitulo?numero=8">Capitulo 8</S.Link>
              <S.Link href="manga/capitulo?numero=9">Capitulo 9</S.Link>
              <S.Link href="manga/capitulo?numero=9_5">Capitulo 9.5</S.Link>
            </S.DivCap>
          </S.DivVol>
          <S.DivVol>
            <h2>Volume 3</h2>
            <S.DivCap>
              <S.Link href="manga/capitulo?numero=10">Capitulo 10</S.Link>
              <S.Link href="manga/capitulo?numero=11">Capitulo 11</S.Link>
              <S.Link href="manga/capitulo?numero=12">Capitulo 12</S.Link>
              <S.Link href="manga/capitulo?numero=13">Capitulo 13</S.Link>
              <S.Link href="manga/capitulo?numero=14">Capitulo 14</S.Link>
              <S.Link href="manga/capitulo?numero=15">Capitulo 15</S.Link>
            </S.DivCap>
          </S.DivVol>
          <S.DivVol>
            <h2>Volume 4</h2>
            <S.DivCap>
              <S.Link href="manga/capitulo?numero=16">Capitulo 16</S.Link>
              <S.Link href="manga/capitulo?numero=17">Capitulo 17</S.Link>
              <S.Link href="manga/capitulo?numero=18">Capitulo 18</S.Link>
              <S.Link href="manga/capitulo?numero=19">Capitulo 19</S.Link>
              <S.Link href="manga/capitulo?numero=20">Capitulo 20</S.Link>
            </S.DivCap>
          </S.DivVol>
        </S.ContentManga>
      </S.DivGeneral>
    </>
  );
};

export default Manga;

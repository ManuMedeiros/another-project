import type { NextPage } from "next";
import React from "react";
import VolumeManga from "src/components/volumeManga";
import * as S from "./styles";

const Manga: NextPage = () => {
  return (
    <S.DivGeneral>
      <h1>Another - Mangá</h1>
      <S.DivVol>
        <S.Title>Volume 1</S.Title>
        <S.DivCap>
          <S.Link href="manga/capitulo?numero=1">Capitulo 1</S.Link>
          <S.Link href="manga/capitulo?numero=2">Capitulo 2</S.Link>
          <S.Link href="manga/capitulo?numero=3">Capitulo 3</S.Link>
          <S.Link href="manga/capitulo?numero=4">Capitulo 4</S.Link>
        </S.DivCap>
      </S.DivVol>
      <S.DivVol>
        <S.Title>Volume 2</S.Title>
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
        <S.Title>Volume 3</S.Title>
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
        <S.Title>Volume 4</S.Title>
        <S.DivCap>
          <S.Link href="manga/capitulo?numero=16">Capitulo 16</S.Link>
          <S.Link href="manga/capitulo?numero=17">Capitulo 17</S.Link>
          <S.Link href="manga/capitulo?numero=18">Capitulo 18</S.Link>
          <S.Link href="manga/capitulo?numero=19">Capitulo 19</S.Link>
          <S.Link href="manga/capitulo?numero=20">Capitulo 20</S.Link>
        </S.DivCap>
      </S.DivVol>
    </S.DivGeneral>
  );
};

export default Manga;

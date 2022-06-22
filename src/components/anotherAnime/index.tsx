import React from "react";
import * as S from "./styles";

interface Props {
  title: string;
  src: string;
  description: string;
}
const AnotherAnime = ({ title, src, description }: Props) => {
  return (
    <S.DivGeneral>
      <S.ContainerName>
      </S.ContainerName>
    </S.DivGeneral>
  );
};

export default AnotherAnime;
